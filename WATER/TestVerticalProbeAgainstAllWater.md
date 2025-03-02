---
ns: WATER
apiset: client
---
## TEST_VERTICAL_PROBE_AGAINST_ALL_WATER

```c
// 0x2B3451FA1E3142E2
int TEST_VERTICAL_PROBE_AGAINST_ALL_WATER(float x,float y,float z,int flags,float* waterHeight);
```

Checks against a global variable that is set by _SET_WORLD_WATER_TYPE. If it's set to 1 (Guarma) it will fail.

See TEST_PROBE_AGAINST_ALL_WATER.

## Parameters
* **x**:
* **y**:
* **z**:
* **flags**:
* **waterHeight**:

## Return value

