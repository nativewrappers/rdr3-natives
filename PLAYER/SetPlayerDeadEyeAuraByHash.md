---
ns: PLAYER
aliases: ["0x768E81AE285A4B67","_SET_PLAYER_STAT_FLAG_HASH"]
apiset: client
---
## _SET_PLAYER_DEAD_EYE_AURA_BY_HASH

```c
// 0x768E81AE285A4B67
void _SET_PLAYER_DEAD_EYE_AURA_BY_HASH(Player player,Hash auraColorHash);
```

Sets the aura color for entities that the player can target in Deadeye mode, based on a specific hash value. This Native was previously named `SetPlayerStatFlagHash`, but it has been re-evaluated and renamed to better reflect its function in controlling the Deadeye aura color for targeted entities
some colors
0: Default aura
1014693585
1936842089
1979474018

## Parameters
* **player**:
* **auraColorHash**: