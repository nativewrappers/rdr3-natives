---
ns: ENTITY
apiset: client
---
## SET_ENTITY_AS_NO_LONGER_NEEDED

```c
// 0x4971D2F8162B9674
void SET_ENTITY_AS_NO_LONGER_NEEDED(Entity* entity);
```

Marks the specified entity (ped, vehicle or object) as no longer needed.
Entities marked as no longer needed, will be deleted as the engine sees fit.

## Parameters
* **entity**: