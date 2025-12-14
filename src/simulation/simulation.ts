import * as BABYLON from 'babylonjs'
import { Renderer } from '../core/renderer'

export class SimulationEngine {
  private renderer: Renderer
  private iterationsPerFrame = 1
  private erosionStrength = 0.5
  private terrain: any = null

  constructor(renderer: Renderer) {
    this.renderer = renderer
  }

  async initialize(): Promise<void> {
    const scene = this.renderer.getScene()

    // Create a simple terrain mesh for now
    this.terrain = BABYLON.MeshBuilder.CreateGround(
      'terrain',
      256,
      256,
      256,
      scene
    )

    const material = new BABYLON.StandardMaterial('terrainMat', scene)
    material.diffuse = new BABYLON.Color3(0.6, 0.8, 0.4)
    this.terrain.material = material
  }

  step(): void {
    // Simulation step will be implemented here
    // This will run the WebGPU compute shaders
  }

  regenerate(): void {
    console.log('Regenerating terrain...')
    // Implement regeneration logic
  }

  setIterationsPerFrame(iterations: number): void {
    this.iterationsPerFrame = iterations
  }

  setErosionStrength(strength: number): void {
    this.erosionStrength = strength
  }

  dispose(): void {
    this.terrain?.dispose()
  }
}
