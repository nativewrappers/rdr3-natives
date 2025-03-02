---
ns: PLAYER
apiset: client
---
## _CLEAR_DEADEYE_AURA_INTENSITY_WITH_FLAG

```c
// 0x0E9057A9DA78D0F8
void _CLEAR_DEADEYE_AURA_INTENSITY_WITH_FLAG(Player player,int bitflag);
```

Clears the intensity of aura effects applied to entities for a specific player in Deadeye mode based on a flag parameter. This function is used to reset any intensity modifications set by `_SET_DEADEYE_ENTITY_AURA_INTENSITY_WITH_FLAG - 0x131E294EF60160DF`, restoring affected entities' aura intensity to their default state.

## Parameters
* **player**:
* **bitflag**:



