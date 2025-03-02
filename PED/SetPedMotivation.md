---
ns: PED
aliases: ["0x06D26A96CA1BCA75"]
apiset: client
---
## _SET_PED_MOTIVATION

```c
// 0x06D26A96CA1BCA75
void _SET_PED_MOTIVATION(Ped ped, int motivationState, float threshold, Ped targetPed);
```

enum eMotivationState
{
	TOILET_STATE,
	FEAR_STATE,
	ANGRY_STATE,
	AGITATION_STATE,
	HUNGRY_STATE,
	TIRED_STATE,
	SAD_STATE,
	BRAVE_STATE,
	OFFER_ITEM_STATE,
	SUSPICION,
	DRUNK_STATE
};

If targetPed is set to 0 the ped motivationState affects everyone

## Parameters
* **ped**:
* **motivationState**:
* **threshold**:
* **targetPed**: