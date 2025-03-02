---
ns: VEHICLE
apiset: client
---
## SET_VEHICLE_STEER_BIAS

```c
// 0x84DAAE11E9EE4FC3
void SET_VEHICLE_STEER_BIAS(Vehicle vehicle, float value);
```

Locks the vehicle's steering to the desired angle, explained below.

Requires to be called onTick. Steering is unlocked the moment the function stops being called on the vehicle.

Steer bias:
-1.0 = full right
0.0 = centered steering
1.0 = full left

## Parameters
* **vehicle**:
* **value**: