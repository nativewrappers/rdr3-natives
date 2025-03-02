---
ns: WEAPON
aliases: ["_GIVE_WEAPON_TO_PED_2"]
apiset: client
---
## GIVE_WEAPON_TO_PED

```c
// 0x5E3BDDBCB83F3D84
Hash GIVE_WEAPON_TO_PED(Ped ped,Hash weaponHash,int ammoCount,BOOL bForceInHand,BOOL bForceInHolster,int attachPoint,BOOL bAllowMultipleCopies,float p7,float p8,Hash addReason,BOOL bIgnoreUnlocks,float permanentDegradation,BOOL p12);
```

Gives the ped the weapon.
List: https://github.com/femga/rdr3_discoveries/blob/master/weapons/weapons.lua

Params: p7 is 0.5f, and p8 is 1.0f. p11 and p12 are both 0 in R* Scripts
attachPoint: see SET_CURRENT_PED_WEAPON
addReason: see _ADD_AMMO_TO_PED
permanentDegradation: default 0.5, any higher than 0 it will automatically make the weapon worn, you can also adjust the value to change the weapons maximum cleanliness

## Parameters
* **ped**:
* **weaponHash**:
* **ammoCount**:
* **bForceInHand**:
* **bForceInHolster**:
* **attachPoint**:
* **bAllowMultipleCopies**:
* **p7**:
* **p8**:
* **addReason**:
* **bIgnoreUnlocks**:
* **permanentDegradation**:
* **p12**:

## Return value

