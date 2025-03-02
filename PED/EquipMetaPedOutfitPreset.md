---
ns: PED
aliases: ["_SET_PED_OUTFIT_PRESET"]
apiset: client
---
## _EQUIP_META_PED_OUTFIT_PRESET

```c
// 0x77FF8D35EEC6BBC4
void _EQUIP_META_PED_OUTFIT_PRESET(Ped ped,int presetId,BOOL p2);
```

Sets the outfit preset for the ped. The presetId is an index which determines its preset outfit. p2 is always false in the scripts.
If p2 is true as player, then certain components like facial hair and hair will not be removed.
Old name: _SET_PED_OUTFIT_PRESET

## Parameters
* **ped**:
* **presetId**:
* **p2**:



