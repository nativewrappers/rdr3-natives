---
ns: SCRIPTS
apiset: client
---
## GET_EVENT_EXISTS

```c
// 0xC9F59C0A710ECD34
BOOL GET_EVENT_EXISTS(int eventGroup,Hash eventType);
```

eventGroup: 0 = SCRIPT_EVENT_QUEUE_AI (CEventGroupScriptAI), 1 = SCRIPT_EVENT_QUEUE_NETWORK (CEventGroupScriptNetwork), 2 = unk, 3 = unk, 4 = SCRIPT_EVENT_QUEUE_SCRIPT_ERRORS (CEventGroupScriptErrors)

## Parameters
* **eventGroup**:
* **eventType**:

## Return value