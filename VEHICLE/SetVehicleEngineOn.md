---
ns: VEHICLE
apiset: client
---
## SET_VEHICLE_ENGINE_ON

```c
// 0xB64CFA14CB9A2E78
void SET_VEHICLE_ENGINE_ON(Vehicle vehicle, BOOL value, BOOL instantly);
```

Starts or stops the engine on the specified vehicle.

vehicle: The vehicle to start or stop the engine on.
value: true to turn the vehicle on; false to turn it off.
instantly: if true, the vehicle will be set to the state immediately; otherwise, the current driver will physically turn on or off the engine.

## Parameters
* **vehicle**:
* **value**:
* **instantly**: