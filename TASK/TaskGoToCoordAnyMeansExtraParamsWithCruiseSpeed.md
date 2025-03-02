---
ns: TASK
apiset: client
---
## TASK_GO_TO_COORD_ANY_MEANS_EXTRA_PARAMS_WITH_CRUISE_SPEED

```c
// 0xB8ECD61F531A7B02
void TASK_GO_TO_COORD_ANY_MEANS_EXTRA_PARAMS_WITH_CRUISE_SPEED(Ped ped,Vector3* gotoCoords,float cruiseSpeed,Entity entity,int p4,int p5,Any p6,Any p7,Any p8,Any p9,Any p10,Any p11,float cruiseSpeed,Any p13,Any p14);
```

This native allows to control the cruise speed of where you want the ped to go
3rd param might be the entity ped is in? like boat or wagon, 12th param might be the cruiseSpeed of the entity ped is in?
EXAMPLE: TaskGoToCoordAnyMeansExtraParamsWithCruiseSpeed(PlayerPedId(), vector3(x, y, z), 3.0, entity, 1, 0, -1082130432, 0, 101004800, 520, 3.0, 1082130432, 0)

## Parameters
* **ped**:
* **gotoCoords**:
* **cruiseSpeed**:
* **entity**:
* **p4**:
* **p5**:
* **p6**:
* **p7**:
* **p8**:
* **p9**:
* **p10**:
* **p11**:
* **cruiseSpeed**:
* **p13**:
* **p14**: