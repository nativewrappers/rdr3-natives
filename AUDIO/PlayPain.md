---
ns: AUDIO
apiset: client
---
## PLAY_PAIN

```c
// 0xBC9AE166038A5CEC
void PLAY_PAIN(Ped ped, int painId, float p2, BOOL p3, BOOL isNetwork);
```

Valid pain IDs: 0..12  these names are not official, but here is a list of the IDs:
 1 burning,
 2 drowning,
 3 coughing,
 4 nothing,
 5 nothing,
 6 coughing_2,
 7 nothing,
 8 nothing,
 9 hurtingSick?,
 10 hurtingFall?,
 11 nothing,
 12 choking

## Parameters
* **ped**:
* **painId**:
* **p2**:
* **p3**:
* **isNetwork**: