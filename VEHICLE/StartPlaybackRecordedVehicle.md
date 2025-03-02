---
ns: VEHICLE
apiset: client
---
## START_PLAYBACK_RECORDED_VEHICLE

```c
// 0x4932B84E3276508E
void START_PLAYBACK_RECORDED_VEHICLE(Vehicle vehicle,int recording,char* script,BOOL p3);
```

p3 is some flag related to 'trailers' (invokes CVehicle::GetTrailer).

See REQUEST_VEHICLE_RECORDING

## Parameters
* **vehicle**:
* **recording**:
* **script**:
* **p3**: