---
ns: TASK
apiset: client
---
## CLEAR_PED_TASKS_IMMEDIATELY

```c
// 0xAAA34F8A7CB32098
void CLEAR_PED_TASKS_IMMEDIATELY(Ped ped,BOOL p1,BOOL resetCrouch);
```

Immediately stops the pedestrian from whatever it's doing. They stop fighting, animations, etc. they forget what they were doing.

resetCrouch TRUE = ped will stand up if crouching, FALSE = ped will remain crouching if crouched

## Parameters
* **ped**:
* **p1**:
* **resetCrouch**:



