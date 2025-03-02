---
ns: MISC
apiset: client
---
## STRING_TO_INT

```c
// 0xF2DD2298B3AF23E2
BOOL STRING_TO_INT(const char* string,int* outInteger);
```

Returns false if it's a null or empty string or if the string is too long. outInteger will be set to -999 in that case.

## Parameters
* **string**:
* **outInteger**:

## Return value

