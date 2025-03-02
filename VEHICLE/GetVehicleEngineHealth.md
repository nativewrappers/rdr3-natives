---
ns: VEHICLE
apiset: client
---
## GET_VEHICLE_ENGINE_HEALTH

```c
// 0x90DBFFAC43B22081
float GET_VEHICLE_ENGINE_HEALTH(Vehicle vehicle);
```

Returns 1000.0 if the function is unable to get the address of the specified vehicle or if it's not a vehicle.

Minimum: -4000
Maximum: 1000

-4000: Engine is destroyed
0 and below: Engine catches fire and health rapidly declines
300: Engine is smoking and losing functionality
1000: Engine is perfect

## Parameters
* **vehicle**:

## Return value

