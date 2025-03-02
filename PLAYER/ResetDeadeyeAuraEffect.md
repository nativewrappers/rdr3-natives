---
ns: PLAYER
apiset: client
---
## _RESET_DEADEYE_AURA_EFFECT

```c
// 0xE910932F4B30BE23
void _RESET_DEADEYE_AURA_EFFECT(Player player);
```

Resets any aura effects applied to entities for a specific player in Deadeye mode, returning all aura-related visuals to their default state. This function is primarily used to remove any highlighting or aura effects set by `_SET_DEADEYE_ENTITY_AURA_WITH_FLAG - 0x2B12B6FC8B8772AB` and `_SET_DEADEYE_ENTITY_AURA_INTENSITY_WITH_FLAG - 0x131E294EF60160DF`

## Parameters
* **player**:



