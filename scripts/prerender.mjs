import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const templatePath = path.join(root, 'dist', 'src', 'entry.html')
const ssrEntryPath = path.join(root, 'dist-ssr', 'prerender-entry.js')

if (!existsSync(templatePath)) {
  fail(`Template not found: ${templatePath}\nRun "vite build" first.`)
}
if (!existsSync(ssrEntryPath)) {
  fail(
    `SSR bundle not found: ${ssrEntryPath}\n` +
      'Run "vite build --ssr src/prerender-entry.jsx --outDir dist-ssr" first.'
  )
}

const template = readFileSync(templatePath, 'utf8')
const { render } = await import(pathToFileURL(ssrEntryPath).href)

if (typeof render !== 'function') {
  fail('SSR bundle does not export a render(url) function.')
}

function fail(message) {
  console.error(`[prerender] ERROR: ${message}`)
  process.exit(1)
}

function escapeAttr(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;')
}

function escapeText(value) {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;')
}

function injectRoot(html, appHtml) {
  const rootRe = /<div id="root">\s*<\/div>/
  if (!rootRe.test(html)) {
    fail('Could not find an empty <div id="root"></div> in the template.')
  }
  return html.replace(rootRe, () => `<div id="root">${appHtml}</div>`)
}

function writePage(outPath, html) {
  mkdirSync(path.dirname(outPath), { recursive: true })
  writeFileSync(outPath, html)
  console.log(
    `[prerender] Wrote ${path.relative(root, outPath)} (${html.length} bytes)`
  )
}

// Render home page
const homeHtml = render('/')
if (!homeHtml || homeHtml.length < 100) {
  fail(`render("/") produced suspiciously little HTML (${homeHtml.length} bytes).`)
}
writePage(path.join(root, 'dist', 'index.html'), injectRoot(template, homeHtml))

console.log('[prerender] Done.')
