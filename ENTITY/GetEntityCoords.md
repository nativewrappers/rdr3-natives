---
ns: ENTITY
apiset: client
---
## GET_ENTITY_COORDS

```c
// 0xA86D5F069399F44D
Vector3 GET_ENTITY_COORDS(Entity entity,BOOL alive,BOOL realCoords);
```

Gets the current coordinates for a specified entity.
`entity` = The entity to get the coordinates from.
`alive` = Unused by the game, potentially used by debug builds in order to assert whether or not an entity was alive.

If entity is a ped and it's in a vehicle or on a mount the coords of that entity are returned. Set 'realCoords' to true when you need the true ped coords.

## Parameters
* **entity**:
* **alive**:
* **realCoords**:

## Return value