# samp-node-lib
NodeJS library for Scripting San Andreas Multiplayer:SAMP depends on [samp-node](https://github.com/AmyrAhmady/samp-node) plugin

some part of source code was auto generated with NodeJS

## Getting started
Step 0 install [samp-node](https://github.com/AmyrAhmady/samp-node)

Step 1 install samp-node-lib via [npm](https://www.npmjs.com/package/samp-node-lib)
```
npm i samp-node-lib
```
## Example usage

```ts
import {
    ManualVehicleEngineAndLights,
    OnGameModeInit,
    OnPlayerCommandText
} from "samp-node-lib";

OnGameModeInit(() => {
    ManualVehicleEngineAndLights();
});

//

OnPlayerCommandText((player, cmdtext) => {
    player.SendClientMessage('rgba(255,0,0,1)', cmdtext)
});
```

### Example using for gates
```ts
import {
    DynamicObject,
    OnGameModeInit,
    OnPlayerCommandText
} from "samp-node-lib";


let o1: DynamicObject;
let o2: DynamicObject;

OnGameModeInit(() => {
    o1 = new DynamicObject(3049, 808.012, 842.4, 10.9, 0.0, 0.0, 293.198)
        .setOpen(806.29, 846.4, 10.9, 0.0, 0.0, 293.2);
    o2 = new DynamicObject(3050, 808, 842.4, 10.9, 0.0, 0.0, 114.988)
        .setOpen(809.5, 839.2, 10.9, 0.0, 0.0, 114.99);
});

OnPlayerCommandText((player, cmdtext) => {
    if (cmdtext === '/open') {
        o1.open();
        o2.open();
        return 1;
    }
    if (cmdtext === '/close') {
        o1.close();
        o2.close();
        return 1;
    }
});
```