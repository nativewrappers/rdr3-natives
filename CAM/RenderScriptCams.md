---
ns: CAM
apiset: client
---
## RENDER_SCRIPT_CAMS

```c
// 0x33281167E4942E4F
void RENDER_SCRIPT_CAMS(BOOL render, BOOL ease, int easeTime, BOOL p3, BOOL p4, int p5);
```

ease - smooth transition between the camera's positions
easeTime - Time in milliseconds for the transition to happen

If you have created a script (rendering) camera, and want to go back to the 
character (gameplay) camera, call this native with render set to FALSE.
Setting ease to TRUE will smooth the transition.

## Parameters
* **render**:
* **ease**:
* **easeTime**:
* **p3**:
* **p4**:
* **p5**: