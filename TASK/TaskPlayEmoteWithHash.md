---
ns: TASK
aliases: ["_TASK_EMOTE"]
apiset: client
---
## TASK_PLAY_EMOTE_WITH_HASH

```c
// 0xB31A277C1AC7B7FF
void TASK_PLAY_EMOTE_WITH_HASH(Ped ped,int emoteType,int playbackMode,Hash emote,BOOL isSecondaryTask,BOOL canBreakOut,BOOL disableEarlyOutAnimTag,BOOL ignoreInvalidMainTask,BOOL destroyProps);
```

https://github.com/femga/rdr3_discoveries/blob/master/animations/kit_emotes_list.lua
emote: https://alloc8or.re/rdr3/doc/enums/eEmote.txt

enum eEmoteType
{
	EMOTE_TYPE_INVALID = -1,
	EMOTE_TYPE_REACT,
	EMOTE_TYPE_ACTION,
	EMOTE_TYPE_TAUNT,
	EMOTE_TYPE_GREET,
	EMOTE_TYPE_TWIRL_GUN,
	EMOTE_TYPE_DANCE_FLOOR
};

enum eEmotePlaybackMode
{
	EMOTE_PM_INVALID = -1,
	EMOTE_PM_UPPERBODY,
	EMOTE_PM_UPPERBODY_LOOP,
	EMOTE_PM_FULLBODY,
};

## Parameters
* **ped**:
* **emoteType**:
* **playbackMode**:
* **emote**:
* **isSecondaryTask**:
* **canBreakOut**:
* **disableEarlyOutAnimTag**:
* **ignoreInvalidMainTask**:
* **destroyProps**: