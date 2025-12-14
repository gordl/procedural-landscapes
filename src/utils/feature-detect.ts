export function checkWebGPUSupport(): boolean {
  return !!(navigator as any).gpu
}
