---
ns: PED
aliases: ["0x4F5EBE70081E5A20"]
apiset: client
---
## _CREATE_GRAVITY_WELL

```c
// 0x4F5EBE70081E5A20
int _CREATE_GRAVITY_WELL(float xPos,float yPos,float zPos,float heading,float radius,float p5,float p6,float p7,BOOL stopAtDestination);
```

Creates a handle to an instance of "CScriptResource_GravityWell", this system forces local ped to target specified position when moving, however player still can interrupt this.
Can be useful to "point" player at some specific position.
Only works while on-foot.

_CREATE_[P-Z]

## Parameters
* **xPos**:
* **yPos**:
* **zPos**:
* **heading**:
* **radius**:
* **p5**:
* **p6**:
* **p7**:
* **stopAtDestination**:

## Return value

