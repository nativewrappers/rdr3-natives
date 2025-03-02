---
ns: PED
apiset: client
---
## CLONE_PED_TO_TARGET

```c
// 0xE952D6431689AD9A
void CLONE_PED_TO_TARGET(Ped ped,Ped targetPed);
```

Copies ped's components and props to targetPed.
Can be used to clear anything from a ped by cloning it, including bullet holes.

## Parameters
* **ped**:
* **targetPed**: