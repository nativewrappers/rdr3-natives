---
ns: FIRE
apiset: client
---
## START_SCRIPT_FIRE

```c
// 0x6B83617E04503888
FireId START_SCRIPT_FIRE(float x,float y,float z,int p3,float p4,BOOL p5,const char* soundsetName,float p7,int p8);
```

Starts a fire:

xyz: Location of fire
maxChildren: The max amount of times a fire can spread to other objects. Must be 25 or less, or the function will do nothing.
isGasFire: Whether or not the fire is powered by gasoline.

## Parameters
* **x**:
* **y**:
* **z**:
* **p3**:
* **p4**:
* **p5**:
* **soundsetName**:
* **p7**:
* **p8**:

## Return value