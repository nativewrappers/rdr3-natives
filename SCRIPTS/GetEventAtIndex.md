---
ns: SCRIPTS
apiset: client
---
## GET_EVENT_AT_INDEX

```c
// 0xA85E614430EFF816
Hash GET_EVENT_AT_INDEX(int eventGroup,int eventIndex);
```

eventGroup: 0 = SCRIPT_EVENT_QUEUE_AI (CEventGroupScriptAI), 1 = SCRIPT_EVENT_QUEUE_NETWORK (CEventGroupScriptNetwork), 2 = unk, 3 = unk, 4 = SCRIPT_EVENT_QUEUE_SCRIPT_ERRORS (CEventGroupScriptErrors)

Returns event name hash: https://alloc8or.re/rdr3/doc/enums/eEventType.txt

## Parameters
* **eventGroup**:
* **eventIndex**:

## Return value

