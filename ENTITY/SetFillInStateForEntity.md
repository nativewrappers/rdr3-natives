---
ns: ENTITY
apiset: client
---
## _SET_FILL_IN_STATE_FOR_ENTITY

```c
// 0x669655FFB29EF1A9
void _SET_FILL_IN_STATE_FOR_ENTITY(Entity entity,int p1,const char* p2,float fill);
```

sets the fill in state for some objects like for the stew, coffee mug ,poker chips, jugs ? P1 is either 0 or 2 p2 seems to be a label/name p3 is the fill in state, max seems to be for some 3.0 (most is 1.0) - 0.0
heres some of the labels/names found 
tumbler_fill, Canvas, Stew_Fill, from Chip01_Ctrl to Chip10_Ctrl, from empty_jug01_Ctrl to empty_jug20_Ctrl, from full_jug01_Ctrl to full_jug20_Ctrl, CTRL_cupFill, Food_DOF_Fill, from WhiteChip_Ctrl_0 to WhiteChip_Ctrl_10, from BlueChip_Ctrl_0 to BlueChip_Ctrl_10, from BlackChip_Ctrl_0 to BlackChip_Ctrl_10, from RedChip_Ctrl_0 to RedChip_Ctrl_10,

## Parameters
* **entity**:
* **p1**:
* **p2**:
* **fill**: