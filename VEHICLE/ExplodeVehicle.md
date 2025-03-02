---
ns: VEHICLE
apiset: client
---
## EXPLODE_VEHICLE

```c
// 0x75DCED9EEC5769D7
void EXPLODE_VEHICLE(Vehicle vehicle, BOOL isAudible, BOOL isInvisible, Any p3, Any p4);
```

Explodes a selected vehicle.

Vehicle vehicle = Vehicle you want to explode.
BOOL isAudible = If explosion makes a sound.
BOOL isInvisible = If the explosion is invisible or not.

First BOOL does not give any visual explosion, the vehicle just falls apart completely but slowly and starts to burn.

## Parameters
* **vehicle**:
* **isAudible**:
* **isInvisible**:
* **p3**:
* **p4**: