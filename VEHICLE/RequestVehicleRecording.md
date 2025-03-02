---
ns: VEHICLE
apiset: client
---
## REQUEST_VEHICLE_RECORDING

```c
// 0xC474CF16EDA45DC9
void REQUEST_VEHICLE_RECORDING(int recording,char* script);
```

Request the vehicle recording defined by the lowercase format string "%s%03d.yvr". For example, REQUEST_VEHICLE_RECORDING(1, "FBIs1UBER") corresponds to fbis1uber001.yvr.
For all vehicle recording/playback natives, "script" is a common prefix that usually corresponds to the script/mission the recording is used in, "recording" is its int suffix, and "id" corresponds to a unique identifier within the recording streaming module.
(GTA) Note that only 24 recordings (hardcoded in multiple places) can ever active at a given time before clobbering begins.

## Parameters
* **recording**:
* **script**: