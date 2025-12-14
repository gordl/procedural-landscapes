// WebGPU Compute Shader for initial heightmap generation
// This will generate Perlin noise based terrain

@group(0) @binding(0) var<storage, read_write> heightmap: array<f32>;
@group(0) @binding(1) var<uniform> params: HeightmapParams;

struct HeightmapParams {
  width: u32,
  height: u32,
  seed: f32,
  scale: f32,
}

@compute @workgroup_size(16, 16)
fn main(@builtin(global_invocation_id) global_id: vec3<u32>) {
  let idx = global_id.y * params.width + global_id.x;
  if (global_id.x >= params.width || global_id.y >= params.height) {
    return;
  }

  // Placeholder: simple gradient for now
  let x = f32(global_id.x) / f32(params.width);
  let y = f32(global_id.y) / f32(params.height);
  heightmap[idx] = (x + y) * 0.5;
}
