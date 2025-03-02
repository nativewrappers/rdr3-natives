---
ns: NETWORK
aliases: ["0x0DD051B1BF4B8BD6"]
apiset: client
---
## _NETWORK_SESSION_GET_SESSION_REQUEST_RESULT

```c
// 0x0DD051B1BF4B8BD6
int _NETWORK_SESSION_GET_SESSION_REQUEST_RESULT(Any* sessionRequestId,int* p1);
```

Returns result of session request:
0 - NOT_FOUND
1 - IN_PROGRESS
2 - TIMEOUT
3 - PLAYER_OFFLINE
4 - GANG_MEMBERS_CHANGED
5 - PLAYER_CANCELLED
6 - PLAYER_SET_TOO_LARGE
7 - MATCH_ACCEPTED
8 - OTHER

## Parameters
* **sessionRequestId**:
* **p1**:

## Return value