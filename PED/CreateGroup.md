---
ns: PED
apiset: client
---
## CREATE_GROUP

```c
// 0x90370EBE0FEE1A3D
int CREATE_GROUP(int taskAllocator);
```

Creates a new ped group.
Groups can contain up to 8 peds.

The parameter is unused.

Returns a handle to the created group, or 0 if a group couldn't be created.

## Parameters
* **taskAllocator**:

## Return value

