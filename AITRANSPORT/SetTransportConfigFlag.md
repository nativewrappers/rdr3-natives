---
ns: AITRANSPORT
aliases: ["0xBA8818212633500A"]
apiset: client
---
## SET_TRANSPORT_CONFIG_FLAG

```c
// 0xBA8818212633500A
void SET_TRANSPORT_CONFIG_FLAG(Entity transportEntity,int flagId,BOOL value);
```

flagId:
enum eTransportConfigFlags
{
	TCF_NotConsideredForEntryByLocalPlayer,
	TCF_0xB78D6624,
	TCF_0xA9700425,
	TCF_0x8D7E4641,
	TCF_0xF24BAA1F,
	TCF_0x63B77935,
	TCF_NotConsideredForEntryByAllPlayers,
	TCF_0xD17A2AFD,
	TCF_0xD4E4FDD5,
	TCF_0x8227C929,
	TCF_0x812C1070,
	TCF_0x0E1AB26F,
	TCF_0xBF4EC863,
	TCF_0x75660C36,
	TCF_0xA2539E20,
	TCF_0x9162C633,
	TCF_DisableHonorModifiers,
	TCF_0xF9E71CB6,
	TCF_0x933ECD3F,
	TCF_0x18513A34
};
https://github.com/femga/rdr3_discoveries/tree/master/AI/TRANSPORT_CONFIG_FLAGS

## Parameters
* **transportEntity**:
* **flagId**:
* **value**: