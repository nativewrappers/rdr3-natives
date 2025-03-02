---
ns: ENTITY
apiset: client
---
## SET_ENTITY_ALPHA

```c
// 0x0DF7692B1D9E7BA7
void SET_ENTITY_ALPHA(Entity entity,int alphaLevel,BOOL skin);
```

skin - everything alpha except skin
Set entity alpha level. Ranging from 0 to 255 but changes occur after every 20 percent (after every 51).

## Parameters
* **entity**:
* **alphaLevel**:
* **skin**: