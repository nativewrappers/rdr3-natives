---
ns: VEHICLE
aliases: ["_CREATE_VEHICLE_2"]
apiset: client
---
## _CREATE_DRAFT_VEHICLE

```c
// 0x214651FB1DFEBA89
Vehicle _CREATE_DRAFT_VEHICLE(Hash modelHash,float x,float y,float z,float heading,BOOL isNetwork,BOOL bScriptHostVeh,BOOL bDontAutoCreateDraftAnimals,Hash draftAnimalPopGroup,BOOL p9);
```

Identical to CREATE_VEHICLE but allows to set draftAnimalPopGroup (see popgroups.#mt for DRAFT_HORSES_*)

## Parameters
* **modelHash**:
* **x**:
* **y**:
* **z**:
* **heading**:
* **isNetwork**:
* **bScriptHostVeh**:
* **bDontAutoCreateDraftAnimals**:
* **draftAnimalPopGroup**:
* **p9**:

## Return value