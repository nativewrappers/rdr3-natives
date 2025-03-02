---
ns: INVENTORY
aliases: ["0x13D234A2A3F66E63"]
apiset: client
---
## _INVENTORY_GET_INVENTORY_ID_FROM_PED

```c
// 0x13D234A2A3F66E63
int _INVENTORY_GET_INVENTORY_ID_FROM_PED(Ped ped);
```

Returns a unique inventory ID for this ped.
For the local player ped, it is an eInventories value.
For other peds, it is the inventory address casted to unsigned int.

enum eInventories
{
	INVENTORY_INVALID,
	INVENTORY_SP_PLAYER,
	INVENTORY_MP_PLAYER,
	INVENTORY_MP_MISSION,
	INVENTORY_SECOND_SCREEN,
	INVENTORY_SP_BACKUP,
	INVENTORY_SP_SNAPSHOT,
	INVENTORY_0xDE2AE452,
	INVENTORY_0x399D9B3A,
	INVENTORY_0x4BD43FA7,
	INVENTORY_0x9529D251,
	INVENTORY_0xA75776AC,
	INVENTORY_MAX_ID = 11,
	INVENTORY_IDS_COUNT
};

## Parameters
* **ped**:

## Return value