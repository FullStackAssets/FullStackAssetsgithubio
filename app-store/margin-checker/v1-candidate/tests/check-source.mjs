import test from "node:test"
import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import { fileURLToPath } from "node:url"
import { dirname, join } from "node:path"
import vm from "node:vm"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const html = readFileSync(join(root, "index.html"), "utf8")
const bundled = readFileSync(join(root, "www", "index.html"), "utf8")
const script = html.match(/<script>([\s\S]*?)<\/script>/i)?.[1] || ""

test("webDir HTML exactly matches reviewed source", () => {
  assert.equal(html, bundled)
  assert.ok(html.includes("Margin Checker"))
})

test("inline app JavaScript compiles without syntax errors", () => {
  assert.ok(script.length > 3000)
  assert.doesNotThrow(() => new vm.Script(script))
})

test("v1 has no ads, IAP claims, or account requirement", () => {
  assert.doesNotMatch(html, /Ad space|App Store version \(with ads and a remove-ads unlock\)/i)
  assert.match(html, /Free, no ads, no account, no in-app purchases/i)
  assert.match(html, /No account/i)
})

test("untrusted recipe names and FDA payload fields render as text nodes", () => {
  const add = script.split("function addIng(")[1].split("function foodCost()")[0]
  assert.match(add, /querySelector\('\.iname'\)\.value\s*=/)
  assert.doesNotMatch(add, /name\.replace/)
  const saved = script.split("function renderSaved()")[1].split("window.loadDish =")[0]
  assert.match(saved, /name\.textContent/)
  assert.match(saved, /wrap\.replaceChildren/)
  assert.doesNotMatch(saved, /wrap\.innerHTML/)
  assert.match(script, /details\.textContent/)
  assert.match(script, /b\.textContent/)
  assert.match(script, /out\.replaceChildren/)
})

test("saved dish preserves cost target and serving estimate", () => {
  assert.match(script, /target:\s*\$\('target'\)\.value/)
  assert.match(script, /servings:\s*\$\('servings'\)\.value/)
  assert.match(script, /\$\('target'\)\.value\s*=\s*String\(Math\.min/)
  assert.match(script, /numeric\(d\.target,28\)/)
  assert.match(script, /\$\('servings'\)\.value\s*=\s*String\(numeric\(d\.servings\)\)/)
})

test("legal and help URLs are present", () => {
  assert.match(html, /https:\/\/fullstackassets\.com\/margin-checker\/privacy-policy\.html/)
  assert.match(html, /https:\/\/fullstackassets\.com\/margin-checker\/support\.html/)
})
