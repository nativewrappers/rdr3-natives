---
ns: PED
aliases: ["0x86BB5FF45F193A02"]
apiset: client
---
## _ADD_TEXTURE_LAYER

```c
// 0x86BB5FF45F193A02
int _ADD_TEXTURE_LAYER(int textureId,Hash albedoHash,Hash normalHash,Hash materialHash,int blendType,float texAlpha,int sheetGridIndex);
```

Creates ped overlay in texture override data and returns it's index.
This index are used for further overlay editing.

albedoHash: a hash of overlay's albedo texture
colorType: a color type(from 0 to 2). 0 is used for overlays with RGB colors usually.

## Parameters
* **textureId**:
* **albedoHash**:
* **normalHash**:
* **materialHash**:
* **blendType**:
* **texAlpha**:
* **sheetGridIndex**:

## Return value