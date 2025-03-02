---
ns: PED
aliases: ["0xFFD54D9FE71B966A"]
apiset: client
---
## _SET_PED_ACTIVATE_WOUND_EFFECT

```c
// 0xFFD54D9FE71B966A
void _SET_PED_ACTIVATE_WOUND_EFFECT(Ped ped,int p1,int boneId,float moveWoundLeftRight,float bloodFountainPressure,float yaw,float bloodFountainDirection,float bloodFountainPulse,float p8,float p9);
```

bloodFountainPressure: visible effect from 0.0 till 20.0
yaw: visible effect from -3.0 till 3.0
bloodFountainDirection: 1.0 left side, -1.0 right side
bloodFountainPulse: from 0.1 (low) till 1.0 (fast)
make blood fountain from your stomach: _SET_PED_ACTIVATE_WOUND_EFFECT(ped, unk, 2, 14411, 0.0, 0.1, 0.0, 0.0, 3.0, -1.0, 1.0)

## Parameters
* **ped**:
* **p1**:
* **boneId**:
* **moveWoundLeftRight**:
* **bloodFountainPressure**:
* **yaw**:
* **bloodFountainDirection**:
* **bloodFountainPulse**:
* **p8**:
* **p9**: