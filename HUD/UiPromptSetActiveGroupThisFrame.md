---
ns: HUD
aliases: ["_PROMPT_SET_ACTIVE_GROUP_THIS_FRAME"]
apiset: client
---
## _UI_PROMPT_SET_ACTIVE_GROUP_THIS_FRAME

```c
// 0xC65A45D4453C2627
Any _UI_PROMPT_SET_ACTIVE_GROUP_THIS_FRAME(Hash hash,char* name,int tabAmount,int tabDefaultIndex,int p4,Prompt prompt);
```

Note: you must use VAR_STRING for p1 if string is not part of text database
tabAmount: specifies number of tabs in prompt group
tabDefaultIndex: specifies starting index
p3 if is set > 3 you can no longer press Q to change tab if there are more than one tab set in tabAmount

## Parameters
* **hash**:
* **name**:
* **tabAmount**:
* **tabDefaultIndex**:
* **p4**:
* **prompt**:

## Return value