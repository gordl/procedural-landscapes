# Physics Model

## Erosion Algorithms

### Hydraulic Erosion
Models water flow and sediment transport.

**Process:**
1. Water flows from high to low elevations
2. Water carries sediment proportional to slope
3. Sediment is deposited when water slows
4. Terrain height updated based on sediment transport

**Parameters:**
- `flow_strength`: How aggressively water flows (0-1)
- `sediment_capacity`: How much sediment water can carry

### Mass Wasting
Simulates gravity-driven slope failure.

**Process:**
1. Material slides down steep slopes
2. Material is redeposited at lower angle of repose
3. Creates natural-looking talus accumulation

**Parameters:**
- `repose_angle`: Angle at which material stops sliding (~30°)
- `strength`: How aggressively material moves

### Thermal Weathering
Smooths terrain by diffusing material from steep to gentle slopes.

**Process:**
1. High points diffuse to neighbors
2. Creates smooth rolling terrain
3. Works like erosion without water

**Parameters:**
- `strength`: Smoothing intensity (0-1)

## Implementation Notes

- All algorithms run on GPU for performance
- Each step is independent and can be parallelized
- Water and sediment buffers maintain state between frames
- Erosion effects are cumulative and reversible (with regeneration)
