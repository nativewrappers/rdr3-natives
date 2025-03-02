---
ns: PED
aliases: ["0x5653AB26C82938CF","_SET_PED_FACE_FEATURE"]
apiset: client
---
## _SET_CHAR_EXPRESSION

```c
// 0x5653AB26C82938CF
void _SET_CHAR_EXPRESSION(Ped ped, int index, float value);
```

Sets MetaPedExpression at index specified. Morphs components, such as changing body size or facial features.

Note: You have to update the ped's variation (using 0xCC8CA3E88256E58F) after calling this native

index = MetaPedExpression IDs
List of face features: https://pastebin.com/9jb88FXW
Full list of MetaPedExpressions: https://pastebin.com/Ld76cAn7
value: -1.0 to 1.0 (values beyond this likely won't sync to other clients)

This native also allows you to change a horse's gender.

Old name: _SET_PED_FACE_FEATURE

## Parameters
* **ped**:
* **index**:
* **value**: