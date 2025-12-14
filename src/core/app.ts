import * as BABYLON from 'babylonjs'
import { Renderer } from './renderer'
import { SimulationEngine } from '../simulation/simulation'

export class App {
  private renderer: Renderer | null = null
  private simulation: SimulationEngine | null = null
  private isRunning = false

  async initialize(): Promise<void> {
    // Initialize Babylon renderer
    this.renderer = new Renderer()
    await this.renderer.initialize()

    // Initialize simulation
    this.simulation = new SimulationEngine(this.renderer)
    await this.simulation.initialize()

    // Setup UI controls
    this.setupControls()

    // Start render loop
    this.startRenderLoop()
  }

  private setupControls(): void {
    const container = document.getElementById('ui-container')
    if (!container) return

    container.innerHTML = `
      <div class="controls">
        <button id="regenerate-btn">Regenerate</button>
        <button id="pause-btn">Pause</button>
        <div class="slider-group">
          <label>Iterations per Frame: <span id="iterations-value">1</span></label>
          <input type="range" id="iterations-slider" min="1" max="10" value="1" />
        </div>
        <div class="slider-group">
          <label>Erosion Strength: <span id="erosion-value">0.5</span></label>
          <input type="range" id="erosion-slider" min="0" max="1" step="0.01" value="0.5" />
        </div>
      </div>
    `

    document.getElementById('regenerate-btn')?.addEventListener('click', () => {
      this.simulation?.regenerate()
    })

    document.getElementById('pause-btn')?.addEventListener('click', (e) => {
      this.isRunning = !this.isRunning
      const btn = e.target as HTMLButtonElement
      btn.textContent = this.isRunning ? 'Pause' : 'Resume'
    })

    document.getElementById('iterations-slider')?.addEventListener('input', (e) => {
      const value = (e.target as HTMLInputElement).value
      document.getElementById('iterations-value')!.textContent = value
      this.simulation?.setIterationsPerFrame(parseInt(value))
    })

    document.getElementById('erosion-slider')?.addEventListener('input', (e) => {
      const value = (e.target as HTMLInputElement).value
      document.getElementById('erosion-value')!.textContent = parseFloat(value).toFixed(2)
      this.simulation?.setErosionStrength(parseFloat(value))
    })
  }

  private startRenderLoop(): void {
    if (!this.renderer) return
    this.isRunning = true

    this.renderer.runRenderLoop(() => {
      if (this.isRunning && this.simulation) {
        this.simulation.step()
      }
    })
  }

  dispose(): void {
    this.renderer?.dispose()
    this.simulation?.dispose()
  }
}
