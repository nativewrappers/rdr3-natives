---
ns: MISC
apiset: client
---
## DISPLAY_ONSCREEN_KEYBOARD

```c
// 0x044131118D8DB3CD
void DISPLAY_ONSCREEN_KEYBOARD(int textType,char* windowTitle,char* p2,char* defaultText,char* defaultConcat1,char* defaultConcat2,char* defaultConcat3,int maxInputLength);
```

enum eOnscreenKeyboardTextType
{
	KTEXTTYPE_INVALID = -1,
	KTEXTTYPE_DEFAULT,
	KTEXTTYPE_EMAIL,
	KTEXTTYPE_PASSWORD,
	KTEXTTYPE_NUMERIC,
	KTEXTTYPE_ALPHABET,
	KTEXTTYPE_GAMERTAG,
	KTEXTTYPE_FILENAME,
	KTEXTTYPE_COUNT
};

## Parameters
* **textType**:
* **windowTitle**:
* **p2**:
* **defaultText**:
* **defaultConcat1**:
* **defaultConcat2**:
* **defaultConcat3**:
* **maxInputLength**: