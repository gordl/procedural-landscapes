import { App } from './core/app'
import { checkWebGPUSupport } from './utils/feature-detect'
import './styles/main.css'

async function main() {
  if (!checkWebGPUSupport()) {
    document.body.innerHTML = '<h1>WebGPU is not available in your browser. Please use Chrome with WebGPU enabled.</h1>'
    return
  }

  const app = new App()
  await app.initialize()
}

main().catch(console.error)
