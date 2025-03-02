---
ns: PED
apiset: client
---
## CREATE_PED_INSIDE_VEHICLE

```c
// 0x7DD959874C1FD534
Ped CREATE_PED_INSIDE_VEHICLE(Vehicle vehicle, Hash modelHash, int seatIndex, BOOL p3, BOOL p4, BOOL p5);
```

seatIndex:
enum eVehicleSeat
{
	VS_ANY_PASSENGER = -2,
	VS_DRIVER,
	VS_FRONT_RIGHT,
	VS_BACK_LEFT,
	VS_BACK_RIGHT,
	VS_EXTRA_LEFT_1,
	VS_EXTRA_RIGHT_1,
	VS_EXTRA_LEFT_2,
	VS_EXTRA_RIGHT_2,
	VS_EXTRA_LEFT_3,
	VS_EXTRA_RIGHT_3,
	VS_NUM_SEATS
};

## Parameters
* **vehicle**:
* **modelHash**:
* **seatIndex**:
* **p3**:
* **p4**:
* **p5**:

## Return value