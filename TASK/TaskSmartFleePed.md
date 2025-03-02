---
ns: TASK
apiset: client
---
## TASK_SMART_FLEE_PED

```c
// 0x22B0D0E37CCB840D
void TASK_SMART_FLEE_PED(Ped ped,Ped fleeFromTarget,float fleeDistance,int fleeTime,int fleeType,float fleeSpeed,Ped targetPed);
```

Makes a ped run away from another ped (fleeFromTarget)

fleeDistance = ped will flee this distance
fleeTime = ped will flee for this amount of time, set to "-1" to flee forever
fleeType = see TASK_FLEE_COORD, can be 0, R* Scripts: fm_mission/race_controller: 66048; fme_escaped_convicts: 2260992, 2523136, 2359296; la_alligator/fox: 2097152; net_fetch: 17301536; net_stable_mount: 540928
fleeSpeed = mostly 3f, rarely 1f in R* Scripts

## Parameters
* **ped**:
* **fleeFromTarget**:
* **fleeDistance**:
* **fleeTime**:
* **fleeType**:
* **fleeSpeed**:
* **targetPed**: