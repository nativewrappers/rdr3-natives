---
ns: OBJECT
apiset: client
---
## GET_CLOSEST_OBJECT_OF_TYPE

```c
// 0xE143FA2249364369
Object GET_CLOSEST_OBJECT_OF_TYPE(float x,float y,float z,float radius,Hash modelHash,BOOL missionScriptObject,BOOL scriptHostObject,BOOL networkObject);
```

this native is broken it makes the local objects you check to be networked??
 the last parameters also don't matter if they are all true or false networked or not it will find the object bScriptedHosted or not it will find the object, use this only for networked objects until it's fixed

## Parameters
* **x**:
* **y**:
* **z**:
* **radius**:
* **modelHash**:
* **missionScriptObject**:
* **scriptHostObject**:
* **networkObject**:

## Return value

