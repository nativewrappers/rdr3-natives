---
ns: GRAPHICS
aliases: ["0x160921255327C591"]
apiset: client
---
## _GENERATE_SWATCH_TEXTURE

```c
// 0x160921255327C591
void _GENERATE_SWATCH_TEXTURE(int slotId, Hash componentHash, int metapedType, BOOL p3);
```

Example:
local hash = GetHashKey("CLOTHING_ITEM_M_EYES_001_TINT_001")
_GENERATE_SWATCH_TEXTURE(0, hash, 0, true)
metapedType: see 0xEC9A1261BF0CE510

## Parameters
* **slotId**:
* **componentHash**:
* **metapedType**:
* **p3**: