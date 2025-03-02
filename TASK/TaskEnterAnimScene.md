---
ns: TASK
apiset: client
---
## TASK_ENTER_ANIM_SCENE

```c
// 0xC2329B0206426644
void TASK_ENTER_ANIM_SCENE(Ped ped, AnimScene animScene, char* entityName, char* playbackListName, float enterSpeed, BOOL bAutoStart, int flag, int p7, float p8);
```

flags:
MOVE_WHILST_WAITING_FOR_PATH = (1 << 0),
DO_NOT_STAND_STILL_AT_END_OF_PATH = (1 << 1),
SKIP_NAVIGATION = (1 << 2),
TEASF_AUTO_START_ANIM_SCENE = (1 << 3),
FORCE_STAND_STILL_AT_END_OF_PATH = (1 << 6),
ENTER_ANIM_SCENE_DONT_FOLLOW_NAVMESH = (1 << 7)

## Parameters
* **ped**:
* **animScene**:
* **entityName**:
* **playbackListName**:
* **enterSpeed**:
* **bAutoStart**:
* **flag**:
* **p7**:
* **p8**: