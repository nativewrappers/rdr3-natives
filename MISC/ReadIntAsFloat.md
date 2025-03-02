---
ns: MISC
aliases: ["0xD2C9126410DFA1B2"]
apiset: client
---
## _READ_INT_AS_FLOAT

```c
// 0xD2C9126410DFA1B2
float _READ_INT_AS_FLOAT(int value);
```

Reads the passed value as floating point value and returns it.
Example: _READ_INT_AS_FLOAT(0x3F800000) returns 1.0f because 0x3F800000 is the hexadecimal representation of 1.0f.

## Parameters
* **value**:

## Return value

