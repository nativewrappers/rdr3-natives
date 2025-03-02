---
ns: GANG
aliases: ["0xD1A226F2E05E58FC"]
apiset: client
---
## _NETWORK_START_GANG

```c
// 0xD1A226F2E05E58FC
void _NETWORK_START_GANG(BOOL openStatus,int campSize);
```

openStatus = true -> sets privacyType = 2 (PUBLIC_ADVERTISED)
openStatus = false -> sets privacyType = 1 (INVITE_ONLY)

campSize: NET_CAMP_SIZE_SMALLEST = 4, NET_CAMP_SIZE_LARGEST = 7

## Parameters
* **openStatus**:
* **campSize**:



