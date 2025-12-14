// Buffer management for heightmap, water, sediment, and velocity data

export class BufferManager {
  private heightmapBuffer: GPUBuffer | null = null
  private waterBuffer: GPUBuffer | null = null
  private sedimentBuffer: GPUBuffer | null = null
  private width: number
  private height: number

  constructor(width: number, height: number) {
    this.width = width
    this.height = height
  }

  initializeBuffers(device: GPUDevice): void {
    const size = this.width * this.height * 4 // 4 bytes per float32

    this.heightmapBuffer = device.createBuffer({
      size,
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
      mappedAtCreation: false,
    })

    this.waterBuffer = device.createBuffer({
      size,
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
      mappedAtCreation: false,
    })

    this.sedimentBuffer = device.createBuffer({
      size,
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
      mappedAtCreation: false,
    })
  }

  getHeightmapBuffer(): GPUBuffer {
    if (!this.heightmapBuffer) throw new Error('Heightmap buffer not initialized')
    return this.heightmapBuffer
  }

  getWaterBuffer(): GPUBuffer {
    if (!this.waterBuffer) throw new Error('Water buffer not initialized')
    return this.waterBuffer
  }

  getSedimentBuffer(): GPUBuffer {
    if (!this.sedimentBuffer) throw new Error('Sediment buffer not initialized')
    return this.sedimentBuffer
  }

  dispose(): void {
    this.heightmapBuffer?.destroy()
    this.waterBuffer?.destroy()
    this.sedimentBuffer?.destroy()
  }
}
