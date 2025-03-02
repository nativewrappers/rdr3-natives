---
ns: PED
aliases: ["0xC5E7204F322E49EB"]
apiset: client
---
## _REQUEST_TEXTURE

```c
// 0xC5E7204F322E49EB
int _REQUEST_TEXTURE(Hash albedoHash,Hash normalHash,Hash materialHash);
```

Creates a texture override data for ped and returns it's index.
So you can replace any texture of any ped's component.
Also, you can add overlays on it, such as aging, lipstick and more.
Textures can be reused by multiple peds at once.
You can keep only 32 textures at once(including other peds).

https://github.com/femga/rdr3_discoveries/blob/master/clothes/change_overlays_script.lua
materialHash: https://github.com/femga/rdr3_discoveries/blob/master/clothes/cloth_drawable_albedo_normal_material_TEMPORARY.lua

## Parameters
* **albedoHash**:
* **normalHash**:
* **materialHash**:

## Return value

