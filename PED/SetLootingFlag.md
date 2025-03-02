---
ns: PED
aliases: ["0x6569F31A01B4C097"]
apiset: client
---
## SET_LOOTING_FLAG

```c
// 0x6569F31A01B4C097
void SET_LOOTING_FLAG(Ped ped,int lootFlag,BOOL enabled);
```

https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/CLootingFlags__Flags
https://github.com/femga/rdr3_discoveries/tree/master/AI/LOOTING_FLAGS

lootFlag:
enum eLootFlag
{
	LOOT_FLAG_IS_CRITICAL_LOOT_TARGET = 7,
	LOOT_FLAG_IGNORE_WATER_CHECKS = 8,
	LOOT_FLAG_ANIMAL_FLAGGED_FOR_TAGGING = 23,
};

## Parameters
* **ped**:
* **lootFlag**:
* **enabled**:



