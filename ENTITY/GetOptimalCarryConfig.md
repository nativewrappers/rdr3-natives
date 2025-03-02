---
ns: ENTITY
aliases: ["0x34F008A7E48C496B"]
apiset: client
---
## _GET_OPTIMAL_CARRY_CONFIG

```c
// 0x34F008A7E48C496B
Hash _GET_OPTIMAL_CARRY_CONFIG(Entity entity, int index);
```

Valid indices: 0 - 3
Index 1 always returns a `hogtied` config, doesn't matter the entity.
It's for humans only and the ped must be resurrected first if it's dead.

## Parameters
* **entity**:
* **index**:

## Return value