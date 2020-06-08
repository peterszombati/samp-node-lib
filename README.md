# samp-node-lib
NodeJS library for Scripting San Andreas Multiplayer:SAMP depends on [samp-node](https://github.com/AmyrAhmady/samp-node) plugin

some part of source code was auto generated with NodeJS

## Getting started
Step 0 install [samp-node](https://github.com/AmyrAhmady/samp-node)

Step 1 install samp-node-lib via [npm](https://www.npmjs.com/package/samp-node-lib)

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
