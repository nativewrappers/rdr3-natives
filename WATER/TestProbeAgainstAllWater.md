---
ns: WATER
apiset: client
---
## TEST_PROBE_AGAINST_ALL_WATER

```c
// 0x8974647ED222EA5F
int TEST_PROBE_AGAINST_ALL_WATER(float x1,float y1,float z1,float x2,float y2,float z2,int flags,Vector3* intersectionPos);
```

enum eScriptWaterTestResult
{
	SCRIPT_WATER_TEST_RESULT_NONE,
	SCRIPT_WATER_TEST_RESULT_WATER,
	SCRIPT_WATER_TEST_RESULT_BLOCKED,
};

## Parameters
* **x1**:
* **y1**:
* **z1**:
* **x2**:
* **y2**:
* **z2**:
* **flags**:
* **intersectionPos**:

## Return value

