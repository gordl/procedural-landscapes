# Architecture

## Overview

The procedural landscapes project is structured to separate concerns between:
- **Rendering** (Babylon.js)
- **GPU Computation** (WebGPU)
- **Physics Simulation** (Erosion, Water Flow)
- **UI Controls**

## Module Organization

### Core (`src/core/`)
- `app.ts` - Main application orchestrator
- `renderer.ts` - Babylon.js scene and rendering setup

### GPU (`src/gpu/`)
- `compute-engine.ts` - WebGPU device and queue management
- `buffer-manager.ts` - GPU buffer lifecycle
- `gpu-utils.ts` - WebGPU helper functions
- `shaders/` - WGSL compute and render shaders

### Simulation (`src/simulation/`)
- `simulation.ts` - Main simulation engine
- `physics.ts` - Erosion and water flow algorithms
- `parameters.ts` - Simulation configuration and presets
- `state.ts` - Simulation state management

### UI (`src/ui/`)
- `controls.ts` - Event handlers for UI elements
- `presets.ts` - Preset erosion models
- `dom-setup.ts` - UI HTML generation

### Utils (`src/utils/`)
- `feature-detect.ts` - Browser capability detection
- `math.ts` - Mathematical utilities

## Data Flow

1. **Initialization**: App → Renderer + ComputeEngine
2. **Render Loop**: Frame → Simulation Step → GPU Compute → Babylon Render
3. **UI Interaction**: Controls → Update Parameters → Shader Uniforms → Next Frame

## Key Components

### Heightmap Buffer
- Primary data structure on GPU
- Updated each frame by compute shaders
- Read by Babylon mesh for visualization

### Compute Shaders
- `heightmap.wgsl` - Initial terrain generation (Perlin noise)
- `erosion.wgsl` - Erosion simulation step
- `water-flow.wgsl` - Hydraulic erosion and sediment transport

### Babylon Mesh
- Tessellated plane that reads heightmap
- Updates vertex positions each frame
- Rendered with standard material
