---
ns: HUD
apiset: client
---
## _HUD_WEAPON_WHEEL_GET_SELECTED_ITEM_HASH

```c
// 0x9C409BBC492CB5B1
Any _HUD_WEAPON_WHEEL_GET_SELECTED_ITEM_HASH();
```

Returns the hash of the currently highlighted item in the weapon wheel.
Only works while the wheel is open will return false

Use in conjunction with IS_CONTROL_JUST_RELEASED(0, 'INPUT_OPEN_WHEEL_MENU') to detect item selection/usage.


## Return value

