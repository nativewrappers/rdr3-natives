---
ns: VEHICLE
apiset: client
---
## SET_VEHICLE_ENGINE_HEALTH

```c
// 0x8BDC5B998B4654EF
void SET_VEHICLE_ENGINE_HEALTH(Vehicle vehicle,float health);
```

1000 is max health
Begins leaking gas at around 650 health
-999.90002441406 appears to be minimum health, although nothing special occurs <- false statement

-------------------------
Minimum: -4000
Maximum: 1000

-4000: Engine is destroyed
0 and below: Engine catches fire and health rapidly declines
300: Engine is smoking and losing functionality
1000: Engine is perfect

## Parameters
* **vehicle**:
* **health**: