// Simulation parameters

export interface SimulationParams {
  erosionRate: number
  waterFlowStrength: number
  gravityStrength: number
  sedimentCapacity: number
  iterations: number
}

export const defaultParams: SimulationParams = {
  erosionRate: 0.5,
  waterFlowStrength: 0.5,
  gravityStrength: 0.8,
  sedimentCapacity: 1.0,
  iterations: 1,
}

export const presets = {
  gentle: {
    erosionRate: 0.1,
    waterFlowStrength: 0.3,
    gravityStrength: 0.5,
    sedimentCapacity: 1.0,
    iterations: 1,
  },
  moderate: {
    erosionRate: 0.5,
    waterFlowStrength: 0.5,
    gravityStrength: 0.8,
    sedimentCapacity: 1.0,
    iterations: 1,
  },
  aggressive: {
    erosionRate: 1.0,
    waterFlowStrength: 0.8,
    gravityStrength: 1.0,
    sedimentCapacity: 1.5,
    iterations: 2,
  },
}
