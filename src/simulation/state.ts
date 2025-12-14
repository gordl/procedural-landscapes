// Simulation state management

export interface SimulationState {
  heightmap: Float32Array
  water: Float32Array
  sediment: Float32Array
  frame: number
  paused: boolean
}

export class StateManager {
  private state: SimulationState

  constructor(width: number, height: number) {
    this.state = {
      heightmap: new Float32Array(width * height),
      water: new Float32Array(width * height),
      sediment: new Float32Array(width * height),
      frame: 0,
      paused: false,
    }
  }

  getState(): SimulationState {
    return this.state
  }

  incrementFrame(): void {
    this.state.frame++
  }

  reset(): void {
    this.state.heightmap.fill(0)
    this.state.water.fill(0)
    this.state.sediment.fill(0)
    this.state.frame = 0
  }
}
