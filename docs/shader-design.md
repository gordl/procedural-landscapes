# Shader Design

## WGSL Compute Shaders

All shaders follow a workgroup size of 16x16 for optimal GPU utilization.

### heightmap.wgsl
Generates initial terrain using noise functions.

**Inputs:**
- `width`, `height` - Texture dimensions
- `seed` - Random seed for reproducibility
- `scale` - Noise scale parameter

**Outputs:**
- `heightmap` - Generated height values (0-1 range)

### erosion.wgsl
Simulates erosion processes:
- Mass wasting (slope failure)
- Thermal weathering (slope smoothing)

**Inputs:**
- `heightmap` - Current terrain
- `strength` - Erosion strength parameter
- `iterations` - Number of erosion steps

**Outputs:**
- `heightmap` - Eroded terrain

### water-flow.wgsl
Simulates hydraulic erosion:
- Water flow downhill
- Sediment transport
- Deposition

**Inputs:**
- `heightmap` - Current terrain
- `water` - Water amount per cell
- `sediment` - Sediment amount per cell
- `flow_strength` - Water flow strength

**Outputs:**
- `heightmap` - Eroded by water
- `water` - Updated water distribution
- `sediment` - Updated sediment distribution

## Performance Considerations

- **Workgroup Size**: 16x16 provides good occupancy on most GPUs
- **Buffer Access**: Coalesced reads for better cache efficiency
- **Synchronization**: Barriers used within workgroups only
- **Texture Layout**: Row-major for cache optimization
