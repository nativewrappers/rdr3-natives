---
ns: VEHICLE
apiset: client
---
## IS_VEHICLE_STOPPED

```c
// 0x78C3311A73135241
BOOL IS_VEHICLE_STOPPED(Vehicle vehicle);
```

Returns true if the vehicle's current speed is less than, or equal to 0.0025f.

For some vehicles it returns true if the current speed is <= 0.00039999999.

## Parameters
* **vehicle**:

## Return value