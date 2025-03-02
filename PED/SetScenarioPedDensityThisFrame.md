---
ns: PED
aliases: ["0x95423627A9CA598E"]
apiset: client
---
## _SET_SCENARIO_PED_DENSITY_THIS_FRAME

```c
// 0x95423627A9CA598E
void _SET_SCENARIO_PED_DENSITY_THIS_FRAME(Hash configHash);
```

Sets the scenario ped density to the given config.

Valid configs:
- BLACKWATER
- DEFAULT
- NEWBORDEAUX
- RHODES
- STRAWBERRY
- TUMBLEWEED
- VALENTINE
- VANHORN

See common/data/ai/densityscoringconfigs.meta for more information.

## Parameters
* **configHash**: