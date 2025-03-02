---
ns: GRAPHICS
apiset: client
---
## DRAW_SPRITE

```c
// 0xC9884ECADE94CB34
void DRAW_SPRITE(const char* textureDict,const char* textureName,float screenX,float screenY,float width,float height,float heading,int red,int green,int blue,int alpha,BOOL p11);
```

Draws a 2D sprite on the screen.

Parameters:
textureDict - Name of texture dictionary to load texture from

textureName - Name of texture to load from texture dictionary

screenX/Y - Screen offset (0.5 = center)
scaleX/Y - Texture scaling. Negative values can be used to flip the texture on that axis. (0.5 = half)

heading - Texture rotation in degrees (default = 0.0) positive is clockwise, measured in degrees

red,green,blue - Sprite color (default = 255/255/255)

alpha - opacity level

https://github.com/femga/rdr3_discoveries/tree/master/useful_info_from_rpfs/textures

## Parameters
* **textureDict**:
* **textureName**:
* **screenX**:
* **screenY**:
* **width**:
* **height**:
* **heading**:
* **red**:
* **green**:
* **blue**:
* **alpha**:
* **p11**: