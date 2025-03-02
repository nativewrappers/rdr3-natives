---
ns: VEHICLE
apiset: client
---
## IS_VEHICLE_SEAT_FREE

```c
// 0xE052C1B1CAA4ECE4
BOOL IS_VEHICLE_SEAT_FREE(Vehicle vehicle, int seatIndex);
```

seatIndex: see CREATE_PED_INSIDE_VEHICLE
Use GET_VEHICLE_MAX_NUMBER_OF_PASSENGERS(vehicle) - 1 for last seat index.

## Parameters
* **vehicle**:
* **seatIndex**:

## Return value