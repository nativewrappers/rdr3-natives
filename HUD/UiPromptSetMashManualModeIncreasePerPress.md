---
ns: HUD
aliases: ["_PROMPT_SET_MASH_MANUAL_MODE_INCREASE_PER_PRESS"]
apiset: client
---
## _UI_PROMPT_SET_MASH_MANUAL_MODE_INCREASE_PER_PRESS

```c
// 0xA0D1D79C6036A855
void _UI_PROMPT_SET_MASH_MANUAL_MODE_INCREASE_PER_PRESS(Prompt prompt,float rate);
```

standard (prompt not held) rate: (1f / 128f)
fast (prompt held) rate: (1f / 64f)
punitive (been hit) rate: (1f / 128f)

## Parameters
* **prompt**:
* **rate**: