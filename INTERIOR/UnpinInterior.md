---
ns: INTERIOR
apiset: client
---
## UNPIN_INTERIOR

```c
// 0x07FD1A0B814F6055
void UNPIN_INTERIOR(Interior interior);
```

Does something similar to INTERIOR::DISABLE_INTERIOR.

You don't fall through the floor but everything is invisible inside and looks the same as when INTERIOR::DISABLE_INTERIOR is used. Peds behaves normally inside. 

## Parameters
* **interior**: