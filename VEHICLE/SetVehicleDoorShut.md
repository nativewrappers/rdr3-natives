---
ns: VEHICLE
apiset: client
---
## SET_VEHICLE_DOOR_SHUT

```c
// 0x6A3C24B91FD0EA09
void SET_VEHICLE_DOOR_SHUT(Vehicle vehicle,int doorId,BOOL closeInstantly);
```

doorId: enum eDoorId
{
	VEH_EXT_DOOR_INVALID_ID = -1,
	VEH_EXT_DOOR_DSIDE_F,
	VEH_EXT_DOOR_DSIDE_M,
	VEH_EXT_DOOR_DSIDE_M1,
	VEH_EXT_DOOR_DSIDE_M2,
	VEH_EXT_DOOR_DSIDE_R,
	VEH_EXT_DOOR_PSIDE_F,
	VEH_EXT_DOOR_PSIDE_M,
	VEH_EXT_DOOR_PSIDE_M1,
	VEH_EXT_DOOR_PSIDE_M2,
	VEH_EXT_DOOR_PSIDE_R,
	VEH_EXT_BONNET,
	VEH_EXT_BOOT
};

## Parameters
* **vehicle**:
* **doorId**:
* **closeInstantly**:



