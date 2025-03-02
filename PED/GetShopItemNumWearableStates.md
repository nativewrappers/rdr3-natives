---
ns: PED
aliases: ["0xFFCC2DB2D9953401"]
apiset: client
---
## _GET_SHOP_ITEM_NUM_WEARABLE_STATES

```c
// 0xFFCC2DB2D9953401
int _GET_SHOP_ITEM_NUM_WEARABLE_STATES(Hash componentHash, BOOL isMpFemale, BOOL p2);
```

Returns the number of wearable states available for a shop item / component. p2 seems to be true in scripts.

For use with 0x6243635AF2F1B826 (_GET_SHOP_ITEM_AVAILABLE_WEARABLE_STATE_BY_INDEX)

## Parameters
* **componentHash**:
* **isMpFemale**:
* **p2**:

## Return value