---
ns: PAD
aliases: ["0x2804658EB7D8A50B"]
apiset: client
---
## _SET_CONTROL_CONTEXT

```c
// 0x2804658EB7D8A50B
void _SET_CONTROL_CONTEXT(int control, Hash context);
```

Sets the current control context. Must be called every frame.

context: https://alloc8or.re/rdr3/doc/misc/input_contexts.txt
For more information, see common:/data/control/settings.meta
https://github.com/femga/rdr3_discoveries/tree/master/Controls

## Parameters
* **control**:
* **context**: