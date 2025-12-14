// GPU compute engine for managing WebGPU resources

export class ComputeEngine {
  private device: GPUDevice | null = null
  private queue: GPUQueue | null = null

  async initialize(): Promise<void> {
    const adapter = await navigator.gpu?.requestAdapter()
    if (!adapter) {
      throw new Error('Failed to get GPU adapter')
    }

    this.device = await adapter.requestDevice()
    this.queue = this.device.queue
  }

  getDevice(): GPUDevice {
    if (!this.device) throw new Error('GPU device not initialized')
    return this.device
  }

  getQueue(): GPUQueue {
    if (!this.queue) throw new Error('GPU queue not initialized')
    return this.queue
  }

  dispose(): void {
    // WebGPU resources are automatically cleaned up
  }
}
