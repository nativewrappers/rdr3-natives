---
ns: PLAYER
apiset: client
---
## _SET_PLAYER_HAT_ACCESS

```c
// 0xA0C683284DF027C7
void _SET_PLAYER_HAT_ACCESS(Player player,int flag,BOOL allow);
```

Sets the player's ability to wear hats based on the specified flag. The flag value determines whether the player can wear all hats or only the ones they own.
If the flag is set to 15 and `allow` is true, the player can wear all available hats. However, if you want to restrict the player to wearing only their owned hats (flag 1), you **must first** disable flag 15 by setting it to false, and then set flag 1 to true.

## Parameters
* **player**:
* **flag**:
* **allow**:



