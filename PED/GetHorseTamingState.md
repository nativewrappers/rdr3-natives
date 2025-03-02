---
ns: PED
aliases: ["0x454AD4DA6C41B5BD"]
apiset: client
---
## _GET_HORSE_TAMING_STATE

```c
// 0x454AD4DA6C41B5BD
int _GET_HORSE_TAMING_STATE(Ped horse);
```

Returns an int based on enum eTamingState

enum eTamingState
{
	ATS_INVALID = 0,
	ATS_INACTIVE,
	ATS_TARGET_DETECTED,
	ATS_CALLED_OUT,
	ATS_MOUNTABLE,
	ATS_BEING_PATTED,
	ATS_BREAKING_ACTIVE,
	ATS_SPOOKED,
	ATS_RETREATING,
	ATS_FLEEING
};

## Parameters
* **horse**:

## Return value

