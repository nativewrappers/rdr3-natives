---
ns: PED
aliases: ["0xBCC76708E5677E1D"]
apiset: client
---
## _CLEAR_ACTIVE_ANIMAL_OWNER

```c
// 0xBCC76708E5677E1D
void _CLEAR_ACTIVE_ANIMAL_OWNER(Ped horse,BOOL clear);
```

Used in Script Functions PLAYER_HORSE_RELEASE_HORSE_TO_AMBIENT_WORLD (p1 = true), HORSE_SETUP_PLAYER_HORSE_ATTRIBUTES (p1 = false)
Set to false for player horse in scripts and seems it's only true when releasing/changing a player horse? Cannot determine what effect it has, but it doesn't seem to affect _GET_HORSE_TAMING_STATE

## Parameters
* **horse**:
* **clear**:



