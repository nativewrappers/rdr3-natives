---
ns: CAM
apiset: client
---
## _SET_GAMEPLAY_CAM_PARAMS_THIS_UPDATE

```c
// 0x066167C63111D8CF
void _SET_GAMEPLAY_CAM_PARAMS_THIS_UPDATE(float camSpeed,BOOL enableSlide,float slideOffset,BOOL enableZoom,float zoomOffset);
```

Not official name
This native allows to move the gameplay cam with the given speed, enableSlide will allow to move the cam to the slideOffset, enableZoom will allow to move the cam to the zoomOffset. 

EXAMPLE:
Citizen.InvokeNative(0x066167c63111d8cf,1.0, true, -1.0, true, 2.0)

## Parameters
* **camSpeed**:
* **enableSlide**:
* **slideOffset**:
* **enableZoom**:
* **zoomOffset**: