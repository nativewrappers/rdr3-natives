---
ns: VEHICLE
apiset: client
---
## GET_POSITION_OF_VEHICLE_RECORDING_AT_TIME

```c
// 0x1A00961A1BE94E5E
Vector3 GET_POSITION_OF_VEHICLE_RECORDING_AT_TIME(int recording,float time,const char* script);
```

This native does no interpolation between pathpoints. The same position will be returned for all times up to the next pathpoint in the recording.

See REQUEST_VEHICLE_RECORDING

## Parameters
* **recording**:
* **time**:
* **script**:

## Return value