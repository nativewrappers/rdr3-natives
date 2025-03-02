---
ns: PED
aliases: ["0x4D0D2E3D8BC000EB"]
apiset: client
---
## _GET_PED_REGISTER_PROP

```c
// 0x4D0D2E3D8BC000EB
Entity _GET_PED_REGISTER_PROP(Ped ped,char* propName,BOOL detachProp);
```

Gets a registered/attached prop entity for a particular ped. Second parameter will detach the prop entity from the ped if true. Props primarily appear to come from scenarios, such as a broom or hay bale.

Known props: https://pastebin.com/ap2NEJqB

## Parameters
* **ped**:
* **propName**:
* **detachProp**:

## Return value