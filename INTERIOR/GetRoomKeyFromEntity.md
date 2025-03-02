---
ns: INTERIOR
apiset: client
---
## GET_ROOM_KEY_FROM_ENTITY

```c
// 0x076E46E0EB52AFC6
Hash GET_ROOM_KEY_FROM_ENTITY(Entity entity);
```

Gets the room hash key from the room that the specified entity is in. Each room in every interior has a unique key. Returns 0 if the entity is outside.

## Parameters
* **entity**:

## Return value

