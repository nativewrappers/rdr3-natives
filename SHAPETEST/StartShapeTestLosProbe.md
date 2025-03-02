---
ns: SHAPETEST
apiset: client
---
## START_SHAPE_TEST_LOS_PROBE

```c
// 0x7EE9F5D83DD4F90E
ScrHandle START_SHAPE_TEST_LOS_PROBE(float x1,float y1,float z1,float x2,float y2,float z2,int flags,Entity entity,int p8);
```

Asynchronously starts a line-of-sight (raycast) world probe shape test.

Use the handle with 0x3D87450E15D98694 or 0x65287525D951F6BE until it returns 0 or 2.

p8 is a bit mask with bits 1, 2 and/or 4, relating to collider types; 4 should usually be used.

## Parameters
* **x1**:
* **y1**:
* **z1**:
* **x2**:
* **y2**:
* **z2**:
* **flags**:
* **entity**:
* **p8**:

## Return value