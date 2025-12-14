import * as BABYLON from 'babylonjs'

export class Renderer {
  private engine: BABYLON.Engine | null = null
  private scene: BABYLON.Scene | null = null
  private canvas: HTMLCanvasElement | null = null

  async initialize(): Promise<void> {
    this.canvas = document.getElementById('renderCanvas') as HTMLCanvasElement
    if (!this.canvas) {
      throw new Error('Canvas element not found')
    }

    // Create engine with WebGPU support if available
    this.engine = new BABYLON.Engine(this.canvas, true, {
      preserveDrawingBuffer: true,
      stencil: true,
    })

    // Create scene
    this.scene = new BABYLON.Scene(this.engine)
    this.scene.clearColor = new BABYLON.Color4(0.1, 0.1, 0.1, 1)

    // Setup camera
    const camera = new BABYLON.ArcRotateCamera(
      'camera',
      Math.PI / 2,
      Math.PI / 2.5,
      100,
      new BABYLON.Vector3(50, 50, 50),
      this.scene
    )
    camera.attachControl(this.canvas, true)

    // Setup lighting
    const light1 = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(1, 1, 1), this.scene)
    light1.intensity = 0.8

    const light2 = new BABYLON.PointLight('light2', new BABYLON.Vector3(50, 100, 50), this.scene)
    light2.intensity = 0.5

    // Handle window resize
    window.addEventListener('resize', () => {
      this.engine?.resize()
    })
  }

  getScene(): BABYLON.Scene {
    if (!this.scene) throw new Error('Scene not initialized')
    return this.scene
  }

  getEngine(): BABYLON.Engine {
    if (!this.engine) throw new Error('Engine not initialized')
    return this.engine
  }

  getCanvas(): HTMLCanvasElement {
    if (!this.canvas) throw new Error('Canvas not initialized')
    return this.canvas
  }

  runRenderLoop(callback: () => void): void {
    if (!this.engine) throw new Error('Engine not initialized')
    this.engine.runRenderLoop(() => {
      callback()
      this.scene?.render()
    })
  }

  dispose(): void {
    this.scene?.dispose()
    this.engine?.dispose()
  }
}
