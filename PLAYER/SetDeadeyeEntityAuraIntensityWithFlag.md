---
ns: PLAYER
apiset: client
---
## _SET_DEADEYE_ENTITY_AURA_INTENSITY_WITH_FLAG

```c
// 0x131E294EF60160DF
void _SET_DEADEYE_ENTITY_AURA_INTENSITY_WITH_FLAG(Player player,float p1,float p2,float p3,float intensity,int flag);
```

Applies a customizable aura effect to nearby entities when Deadeye is active, with control over aura intensity and additional behavior based on a flag parameter.
- flag (int): A flag that determines the behavior of the aura effect and which entities are affected. 2: Applies aura to humans. 4: Applies aura to animals.

## Parameters
* **player**:
* **p1**:
* **p2**:
* **p3**:
* **intensity**:
* **flag**: