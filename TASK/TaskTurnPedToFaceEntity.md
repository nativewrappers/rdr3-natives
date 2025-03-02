---
ns: TASK
apiset: client
---
## TASK_TURN_PED_TO_FACE_ENTITY

```c
// 0x5AD23D40115353AC
void TASK_TURN_PED_TO_FACE_ENTITY(Ped ped,Entity targetEntity,int duration,float p3,float p4,float p5);
```

duration: the amount of time in milliseconds to do the task. -1 will keep the task going until either another task is applied, or CLEAR_ALL_TASKS() is called with the ped

## Parameters
* **ped**:
* **targetEntity**:
* **duration**:
* **p3**:
* **p4**:
* **p5**: