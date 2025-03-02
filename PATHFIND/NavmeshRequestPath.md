---
ns: PATHFIND
aliases: ["0x348F211CA2404039"]
apiset: client
---
## NAVMESH_REQUEST_PATH

```c
// 0x348F211CA2404039
int NAVMESH_REQUEST_PATH(Ped ped,float x1,float y1,float z1,float x2,float y2,float z2,int bitFlag);
```

Starts a nav mesh query for a path between coordinates with a given ped and returns a handle to be validated by _NAVMESH_REQUESTED_QUERY_STATUS and then _NAVMESH_REQUESTED_PATH_WAYPOINTS_FOUND

Only bit flag values used in scripts are 0, 23, and 29. 23 is used with dogs and horses. 29 with legendary animals.

## Parameters
* **ped**:
* **x1**:
* **y1**:
* **z1**:
* **x2**:
* **y2**:
* **z2**:
* **bitFlag**:

## Return value