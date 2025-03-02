---
ns: NETWORK
aliases: ["0x2989E131FDE37E97"]
apiset: client
---
## NETWORK_SESSION_REQUEST_SESSION_SEAMLESS

```c
// 0x2989E131FDE37E97
Any NETWORK_SESSION_REQUEST_SESSION_SEAMLESS(int flags, int seamlessType, int userHash, Any* sessionRequestId);
```

Equivalent to NETWORK_REQUEST_SESSION_SEAMLESS if userHash == 0.
Otherwise it is equivalent to NETWORK_SESSION_REQUEST_SESSION_COMPETITIVE(flags, MATCHTYPE_SEAMLESS, userHash, 0, sessionRequestId);

p1 is unused

## Parameters
* **flags**:
* **seamlessType**:
* **userHash**:
* **sessionRequestId**:

## Return value