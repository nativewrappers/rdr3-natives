---
ns: PED
aliases: ["0x5463C962BC7777C3"]
apiset: client
---
## _REFRESH_LOOT_STATE_FOR_PED

```c
// 0x5463C962BC7777C3
int _REFRESH_LOOT_STATE_FOR_PED(Ped ped,int p1,Ped* lootTarget,int p3,int p4);
```

Returns loot state
enum eLootState
{
	LAP_NONE,
	LAP_RESUMING,
	LAP_GETTING_ON_FOOT,
	LAP_DISTANT_NAV,
	LAP_CHOOSING_ACTION,
	LAP_APPROACHING,
	LAP_ENTERING,
	LAP_LOOTING,
	LAP_EXITING
};

_POSSE_* - _REGISTER_HATED*

## Parameters
* **ped**:
* **p1**:
* **lootTarget**:
* **p3**:
* **p4**:

## Return value