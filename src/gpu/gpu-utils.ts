// GPU utility functions

export function createComputeShaderModule(device: GPUDevice, code: string): GPUShaderModule {
  return device.createShaderModule({
    code,
  })
}

export function createBindGroup(
  device: GPUDevice,
  layout: GPUBindGroupLayout,
  buffers: GPUBuffer[]
): GPUBindGroup {
  const entries: GPUBindGroupEntry[] = buffers.map((buffer, index) => ({
    binding: index,
    resource: { buffer },
  }))

  return device.createBindGroup({
    layout,
    entries,
  })
}
