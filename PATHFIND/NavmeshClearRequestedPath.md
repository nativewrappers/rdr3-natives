---
ns: PATHFIND
aliases: ["0x661BB1E1FF77742D"]
apiset: client
---
## _NAVMESH_CLEAR_REQUESTED_PATH

```c
// 0x661BB1E1FF77742D
BOOL _NAVMESH_CLEAR_REQUESTED_PATH(int path);
```

Called in scripts after finished with requested pathes. Immediately resets all values connected to the path handle except query status, which changes from 1 to 2 before eventually becoming fully invalidated to 0.

## Parameters
* **path**:

## Return value

