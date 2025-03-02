---
ns: ENTITY
apiset: client
---
## IS_ENTITY_AT_ENTITY

```c
// 0xC057F02B837A27F6
BOOL IS_ENTITY_AT_ENTITY(Entity entity1,Entity entity2,float xSize,float ySize,float zSize,BOOL p5,BOOL p6,int p7);
```

Checks if entity1 is within the box defined by x/y/zSize of entity2.

Last three parameters are almost always p5 = 0, p6 = 1, p7 = 0

## Parameters
* **entity1**:
* **entity2**:
* **xSize**:
* **ySize**:
* **zSize**:
* **p5**:
* **p6**:
* **p7**:

## Return value

