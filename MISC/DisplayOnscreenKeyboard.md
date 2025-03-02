---
ns: MISC
apiset: client
---
## DISPLAY_ONSCREEN_KEYBOARD

```c
// 0x044131118D8DB3CD
void DISPLAY_ONSCREEN_KEYBOARD(int textType,const char* windowTitle,const char* p2,const char* defaultText,const char* defaultConcat1,const char* defaultConcat2,const char* defaultConcat3,int maxInputLength);
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



