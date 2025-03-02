---
ns: PED
apiset: client
---
## SET_PED_FLEE_ATTRIBUTES

```c
// 0x70A2D1137C8ED7C9
void SET_PED_FLEE_ATTRIBUTES(Ped ped,int attributeFlags,BOOL enable);
```

https://github.com/femga/rdr3_discoveries/tree/master/AI/FLEE_ATTRIBUTES

attributeFlags:
enum eFleeAttribute
{
	FA_FORCE_EXIT_VEHICLE = (1 << 16),
	FA_DISABLE_MOUNT_USAGE = (1 << 20),
	FA_DISABLE_ENTER_VEHICLES = (1 << 22),
};

## Parameters
* **ped**:
* **attributeFlags**:
* **enable**: