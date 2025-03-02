---
ns: PED
aliases: ["0x7BCC6087D130312A"]
apiset: client
---
## _GET_PED_QUALITY

```c
// 0x7BCC6087D130312A
int _GET_PED_QUALITY(Ped ped);
```

Returns Ped Quality to be used to calculate Skinning Quality

enum ePedQuality
{
	PQ_INVALID = -1,
	PQ_LOW,
	PQ_MEDIUM,
	PQ_HIGH,
	PQ_MAX
};

## Parameters
* **ped**:

## Return value

