---
ns: STATS
aliases: ["_STAT_ID_IS_VALID"]
apiset: client
---
## STAT_ID_IS_VALID

```c
// 0xC48FE1971C9743FF
BOOL STAT_ID_IS_VALID(Any* statId);
```

struct StatId
{
	alignas(8) Hash BaseId;
	alignas(8) Hash PermutationId;
}

## Parameters
* **statId**:

## Return value

