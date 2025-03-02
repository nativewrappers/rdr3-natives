---
ns: HUD
aliases: ["0x93171DDDAB274EB8"]
apiset: client
---
## _SET_MP_GAMER_TAG_VISIBILITY

```c
// 0x93171DDDAB274EB8
void _SET_MP_GAMER_TAG_VISIBILITY(int gamerTagId,int visibility);
```

visibility:
enum eUIGamertagVisibility
{
	UIGAMERTAGVISIBILITY_NONE,
	UIGAMERTAGVISIBILITY_ICON,
	UIGAMERTAGVISIBILITY_SIMPLE,
	UIGAMERTAGVISIBILITY_COMPLEX
};

## Parameters
* **gamerTagId**:
* **visibility**: