---
ns: PLAYER
apiset: client
---
## _SET_PLAYER_SIT_PROMPT_TEXT

```c
// 0x988C9045531B9FCE
void _SET_PLAYER_SIT_PROMPT_TEXT(Player playerID,char* label);
```

Sets the sit prompt for a specific player using a predefined text entry. use game strings like PLAYER_SIT or use custom with
AddTextEntry("sit_custom", "Take a seat")
this native must be invoked
https://imgur.com/gallery/0x988c9045531b9fce-9bTHgkv

## Parameters
* **playerID**:
* **label**: