---
ns: TASK
apiset: client
---
## GET_SEQUENCE_PROGRESS

```c
// 0x00A9010CFE1E3533
int GET_SEQUENCE_PROGRESS(Ped ped);
```

returned values:
0 to 7 = task that's currently in progress, 0 meaning the first one.
-1 no task sequence in progress.

## Parameters
* **ped**:

## Return value