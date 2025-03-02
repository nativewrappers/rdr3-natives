---
ns: MISC
aliases: ["0xE84AAC1B22A73E99"]
apiset: client
---
## _SET_BIT_FLAG

```c
// 0xE84AAC1B22A73E99
void _SET_BIT_FLAG(Any* bitFlags, int flag);
```

Similar to SET_BIT but specifically designed for large (>32 flags) bit flag sets.
The flags are stored in an int array where each int has the ability to hold 32 flags.
Flags 0-31 would be stored in the first int, flags 32-63 in the second int, etc.

## Parameters
* **bitFlags**:
* **flag**: