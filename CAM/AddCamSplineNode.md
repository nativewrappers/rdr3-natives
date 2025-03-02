---
ns: CAM
apiset: client
---
## ADD_CAM_SPLINE_NODE

```c
// 0xF1F57F9D230F9CD1
void ADD_CAM_SPLINE_NODE(Cam camera,float x,float y,float z,float xRot,float yRot,float zRot,int length,int p8,int p9);
```

p7 (length) determines the length of the spline, affects camera path and duration of transition between previous node and this one

p8 big values ~100 will slow down the camera movement before reaching this node

p9 != 0 seems to override the rotation/pitch (bool?)

## Parameters
* **camera**:
* **x**:
* **y**:
* **z**:
* **xRot**:
* **yRot**:
* **zRot**:
* **length**:
* **p8**:
* **p9**:



