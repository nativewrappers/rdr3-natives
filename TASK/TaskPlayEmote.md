---
ns: TASK
aliases: ["_TASK_EMOTE_2"]
apiset: client
---
## _TASK_PLAY_EMOTE

```c
// 0x884E3436CC1F41DD
void _TASK_PLAY_EMOTE(Ped ped,int emoteType,int playbackMode,Hash emote,BOOL isSecondaryTask,BOOL canBreakOut,BOOL disableEarlyOutAnimTag,BOOL ignoreInvalidMainTask,BOOL destroyProps);
```

Similar to 0xB31A277C1AC7B7FF but checks if the ped's inventory contains the specified emote kit.

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