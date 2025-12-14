# Procedural Landscapes

A GPU-accelerated browser-based landscape generator that simulates physical erosion processes in real-time.

## Features

- **GPU Rendering** - WebGPU compute shaders for terrain generation and erosion
- **Real-time Simulation** - Watch terrain evolve as erosion processes run
- **Physical Accuracy** - Hydraulic erosion, mass wasting, and thermal weathering
- **Interactive Controls** - Adjust erosion parameters in real-time
- **Babylon.js Rendering** - Smooth 3D visualization with WebGL/WebGPU

## Getting Started

### Prerequisites

- Chrome or Edge with WebGPU enabled
- Node.js 20.4+ and npm

### Installation

```bash
git clone https://github.com/gordl/procedural-landscapes.git
cd procedural-landscapes
npm install
```

### Development

```bash
npm run dev
```

Opens http://localhost:5173 with live reload.

### Build

```bash
npm run build
```

Creates optimized production build in `dist/`.

## Usage

1. **Regenerate** - Generate a new random terrain
2. **Pause/Resume** - Control simulation playback
3. **Iterations per Frame** - Adjust simulation speed
4. **Erosion Strength** - Control how aggressively terrain erodes

## Architecture

See `docs/architecture.md` for detailed system overview.

## Physics Model

See `docs/physics-model.md` for erosion algorithm documentation.

## License

MIT
