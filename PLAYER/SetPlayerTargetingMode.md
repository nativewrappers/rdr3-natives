---
ns: PLAYER
apiset: client
---
## SET_PLAYER_TARGETING_MODE

```c
// 0xD66A941F401E7302
void SET_PLAYER_TARGETING_MODE(int targetMode);
```

Sets your targeting mode for when you're on foot.
enum eTargetingMode
{
	TARGETING_MODE_INVALID = -1,
	TARGETING_MODE_CAUSAL, (Wide)
	TARGETING_MODE_NORMAL,
	TARGETING_MODE_HARD, (Narrow)
	TARGETING_MODE_EXPERT (Free Aim)
};

## Parameters
* **targetMode**:



