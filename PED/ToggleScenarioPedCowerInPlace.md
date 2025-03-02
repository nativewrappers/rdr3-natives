---
ns: PED
aliases: ["0x9A77DFD295E29B09"]
apiset: client
---
## TOGGLE_SCENARIO_PED_COWER_IN_PLACE

```c
// 0x9A77DFD295E29B09
void TOGGLE_SCENARIO_PED_COWER_IN_PLACE(Ped ped,BOOL toggle);
```

If toggle is true, when the ped is using a scenario he will stop it and become scared
If toggle is false, the ped will not be scared anymore and continue his scenario

Old name: _SET_PED_SCARED_WHEN_USING_SCENARIO

## Parameters
* **ped**:
* **toggle**: