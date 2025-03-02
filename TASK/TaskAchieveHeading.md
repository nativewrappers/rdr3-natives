---
ns: TASK
apiset: client
---
## TASK_ACHIEVE_HEADING

```c
// 0x93B93A37987F1F3D
void TASK_ACHIEVE_HEADING(Ped ped,float heading,int timeout);
```

Makes the specified ped achieve the specified heading.

pedHandle: The handle of the ped to assign the task to.
heading: The desired heading.
timeout: The time, in milliseconds, to allow the task to complete. If the task times out, it is canceled, and the ped will stay at the heading it managed to reach in the time.

## Parameters
* **ped**:
* **heading**:
* **timeout**:



