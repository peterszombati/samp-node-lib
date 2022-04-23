// Type definitions for samp-node
// Project: @sa-mp/node
// Definitions by: pkfln <https://github.com/pkfln>

/*
 * @class samp
 */
declare class samp {
  /**
   * Adds a new listener to OnGameModeInit
   *
   * @name samp.on
   * @param {string} [eventName=OnGameModeInit] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is triggered when the gamemode starts.
   * @see OnGameModeExit
   * @see OnFilterScriptInit
   * @see OnFilterScriptExit
   * @remarks This function can also be used in a filterscript to detect if the gamemode changes with RCON commands like changemode or gmx, as changing the gamemode does not reload a filterscript.
   * @returns {void}
   */
  static on(eventName: 'OnGameModeInit', func: () => void): void;
  /**
   * Adds a new listener to OnGameModeExit
   *
   * @name samp.on
   * @param {string} [eventName=OnGameModeExit] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a gamemode ends, either through &#x27;gmx&#x27;, the server being shut down, or GameModeExit.
   * @see OnGameModeInit
   * @see OnFilterScriptExit
   * @see OnFilterScriptInit
   * @see GameModeExit
   * @remarks This function can also be used in a filterscript to detect if the gamemode changes with RCON commands like changemode or gmx, as changing the gamemode does not reload a filterscript.
   * @remarks When using OnGameModeExit in conjunction with the &#x27;rcon gmx&#x27; console command keep in mind there is a potential for client bugs to occur an example of this is excessive RemoveBuildingForPlayer calls during OnGameModeInit which could result in a client crash. 
   * @remarks This callback will NOT be called if the server crashes or the process is killed by other means, such as using the Linux kill command or pressing the close-button on the Windows console. 
   * @returns {void}
   */
  static on(eventName: 'OnGameModeExit', func: () => void): void;
  /**
   * Adds a new listener to OnFilterScriptInit
   *
   * @name samp.on
   * @param {string} [eventName=OnFilterScriptInit] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a filterscript is initialized (loaded). It is only called inside the filterscript which is starting.
   * @see OnFilterScriptExit
   * @see OnGameModeInit
   * @see OnGameModeExit
   * @returns {void}
   */
  static on(eventName: 'OnFilterScriptInit', func: () => void): void;
  /**
   * Adds a new listener to OnFilterScriptExit
   *
   * @name samp.on
   * @param {string} [eventName=OnFilterScriptExit] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a filterscript is unloaded. It is only called inside the filterscript which is unloaded.
   * @see OnFilterScriptInit
   * @see OnGameModeInit
   * @see OnGameModeExit
   * @returns {void}
   */
  static on(eventName: 'OnFilterScriptExit', func: () => void): void;
  /**
   * Adds a new listener to OnPlayerConnect
   *
   * @name samp.on
   * @param {string} [eventName=OnPlayerConnect] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player connects to the server.
   * @see OnPlayerDisconnect
   * @see OnIncomingConnection
   * @see OnPlayerFinishedDownloading
   * @remarks This callback can also be called by NPC.
   * @returns {void}
   */
  static on(eventName: 'OnPlayerConnect', func: (playerid: number) => void): void;
  /**
   * Adds a new listener to OnPlayerDisconnect
   *
   * @name samp.on
   * @param {string} [eventName=OnPlayerDisconnect] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player disconnects from the server.
   * @see OnPlayerConnect
   * @see OnIncomingConnection
   * @see OnPlayerFinishedDownloading
   * @remarks This callback can also be called by NPC.
   * @remarks Some functions might not work correctly when used in this callback because the player is already disconnected when the callback is called. This means that you can&#x27;t get unambiguous information from functions like GetPlayerIp and GetPlayerPos.
   * @remarks 
  Reasons:
  
    0 - timeout/Crash - the player&#x27;s connection was lost. Either their game crashed or their network had a fault.
    1 - quit - the player purposefully quit, either using the /quit (/q) command or via the pause menu.
    2 - kick/ban - the player was kicked or banned by the server.
  

   * @returns {void}
   */
  static on(eventName: 'OnPlayerDisconnect', func: (playerid: number, reason: number) => void): void;
  /**
   * Adds a new listener to OnPlayerSpawn
   *
   * @name samp.on
   * @param {string} [eventName=OnPlayerSpawn] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player spawns.(i.e. after caling SpawnPlayer function).
   * @see OnPlayerDeath
   * @see OnVehicleSpawn
   * @see SpawnPlayer
   * @see AddPlayerClass
   * @see SetSpawnInfo
   * @remarks This callback can also be called by NPC.
   * @remarks The game sometimes deducts $100 from players after spawn.
   * @returns {void}
   */
  static on(eventName: 'OnPlayerSpawn', func: (playerid: number) => void): void;
  /**
   * Adds a new listener to OnPlayerDeath
   *
   * @name samp.on
   * @param {string} [eventName=OnPlayerDeath] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player dies, either by suicide or by being killed by another player.
   * @see OnPlayerSpawn
   * @see SendDeathMessage
   * @see SetPlayerHealth
   * @remarks 
  The reason will return 37 (flame thrower) from any fire sources (e.g. molotov, 18)
  The reason will return 51 from any weapon that creates an explosion (e.g. RPG, grenade)
  You do not need to check whether killerid is valid before using it in SendDeathMessage. INVALID_PLAYER_ID is a valid killerid ID parameter in that function.
  playerid is the only one who can call the callback. (good to know for anti fake death)

   * @returns {void}
   */
  static on(eventName: 'OnPlayerDeath', func: (playerid: number, killerid: number, reason: number) => void): void;
  /**
   * Adds a new listener to OnVehicleSpawn
   *
   * @name samp.on
   * @param {string} [eventName=OnVehicleSpawn] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a vehicle respawns.
   * @see OnVehicleDeath
   * @see OnPlayerSpawn
   * @see SetVehicleToRespawn
   * @see CreateVehicle
   * @returns {void}
   */
  static on(eventName: 'OnVehicleSpawn', func: (vehicleid: number) => void): void;
  /**
   * Adds a new listener to OnVehicleDeath
   *
   * @name samp.on
   * @param {string} [eventName=OnVehicleDeath] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a vehicle is destroyed - either by exploding or becoming submerged in water.
   * @see OnVehicleSpawn
   * @see SetVehicleHealth
   * @remarks This callback can also be called by NPC.
   * @remarks This callback will also be called when a vehicle enters water, but the vehicle can be saved from destruction by teleportation or driving out (if only partially submerged). The callback won&#x27;t be called a second time, and the vehicle may disappear when the driver exits, or after a short time.
   * @returns {void}
   */
  static on(eventName: 'OnVehicleDeath', func: (vehicleid: number, killerid: number) => void): void;
  /**
   * Adds a new listener to OnPlayerText
   *
   * @name samp.on
   * @param {string} [eventName=OnPlayerText] - Name of the event
   * @param {function} func - Event callback
   * @summary Called when a player sends a chat message.
   * @see OnPlayerCommandText
   * @see SendPlayerMessageToPlayer
   * @see SendPlayerMessageToAll
   * @remarks This callback can also be called by NPC.
   * @returns {void}
   */
  static on(eventName: 'OnPlayerText', func: (playerid: number, text: string) => void): void;
  /**
   * Adds a new listener to OnPlayerCommandText
   *
   * @name samp.on
   * @param {string} [eventName=OnPlayerCommandText] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player enters a command into the client chat window. Commands are anything that start with a forward slash, e.g. /help.
   * @see OnPlayerText
   * @see OnRconCommand
   * @see SendRconCommand
   * @remarks This callback can also be called by NPC.
   * @returns {void}
   */
  static on(eventName: 'OnPlayerCommandText', func: (playerid: number, cmdtext: string) => void): void;
  /**
   * Adds a new listener to OnPlayerRequestClass
   *
   * @name samp.on
   * @param {string} [eventName=OnPlayerRequestClass] - Name of the event
   * @param {function} func - Event callback
   * @summary Called when a player changes class at class selection (and when class selection first appears).
   * @see OnPlayerRequestSpawn
   * @see AddPlayerClass
   * @remarks This callback can also be called by NPC.
   * @remarks This callback is also called when a player presses F4.
   * @returns {void}
   */
  static on(eventName: 'OnPlayerRequestClass', func: (playerid: number, classid: number) => void): void;
  /**
   * Adds a new listener to OnPlayerEnterVehicle
   *
   * @name samp.on
   * @param {string} [eventName=OnPlayerEnterVehicle] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player starts to enter a vehicle, meaning the player is not in vehicle yet at the time this callback is called.
   * @see OnPlayerExitVehicle
   * @see OnPlayerStateChange
   * @see PutPlayerInVehicle
   * @see GetPlayerVehicleSeat
   * @remarks This callback is called when a player BEGINS to enter a vehicle, not when they HAVE entered it. See OnPlayerStateChange. 
   * @remarks This callback is still called if the player is denied entry to the vehicle (e.g. it is locked or full). 
   * @returns {void}
   */
  static on(eventName: 'OnPlayerEnterVehicle', func: (playerid: number, vehicleid: number, ispassenger: number) => void): void;
  /**
   * Adds a new listener to OnPlayerExitVehicle
   *
   * @name samp.on
   * @param {string} [eventName=OnPlayerExitVehicle] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player starts to exit a vehicle.
   * @see OnPlayerEnterVehicle
   * @see OnPlayerStateChange
   * @see RemovePlayerFromVehicle
   * @see GetPlayerVehicleSeat
   * @remarks Not called if the player falls off a bike or is removed from a vehicle by other means such as using SetPlayerPos.
   * @remarks You must use OnPlayerStateChange and check if their old state is PLAYER_STATE_DRIVER or PLAYER_STATE_PASSENGER and their new state is PLAYER_STATE_ONFOOT.
   * @returns {void}
   */
  static on(eventName: 'OnPlayerExitVehicle', func: (playerid: number, vehicleid: number) => void): void;
  /**
   * Adds a new listener to OnPlayerStateChange
   *
   * @name samp.on
   * @param {string} [eventName=OnPlayerStateChange] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player changes state. For example, when a player changes from being the driver of a vehicle to being on-foot.
   * @see OnPlayerInteriorChange
   * @see GetPlayerState
   * @see GetPlayerSpecialAction
   * @see SetPlayerSpecialAction
   * @remarks This callback can also be called by NPC.
   * @remarks 
  States:
  
    PLAYER_STATE_NONE - empty (while initializing)
    PLAYER_STATE_ONFOOT - player is on foot
    PLAYER_STATE_DRIVER - player is the driver of a vehicle
    PLAYER_STATE_PASSENGER - player is passenger of a vehicle
    PLAYER_STATE_WASTED - player is dead or on class selection
    PLAYER_STATE_SPAWNED - player is spawned
    PLAYER_STATE_SPECTATING - player is spectating
    PLAYER_STATE_EXIT_VEHICLE - player exits a vehicle
    PLAYER_STATE_ENTER_VEHICLE_DRIVER - player enters a vehicle as driver
    PLAYER_STATE_ENTER_VEHICLE_PASSENGER - player enters a vehicle as passenger 
  

   * @returns {void}
   */
  static on(eventName: 'OnPlayerStateChange', func: (playerid: number, newstate: number, oldstate: number) => void): void;
  /**
   * Adds a new listener to OnPlayerEnterCheckpoint
   *
   * @name samp.on
   * @param {string} [eventName=OnPlayerEnterCheckpoint] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player enters the checkpoint set for that player.
   * @see OnPlayerLeaveCheckpoint
   * @see OnPlayerEnterRaceCheckpoint
   * @see OnPlayerLeaveRaceCheckpoint
   * @see SetPlayerCheckpoint
   * @see DisablePlayerCheckpoint
   * @see IsPlayerInCheckpoint
   * @see SetPlayerRaceCheckpoint
   * @see DisablePlayerRaceCheckpoint
   * @see IsPlayerInRaceCheckpoint
   * @remarks This callback can also be called by NPC.
   * @returns {void}
   */
  static on(eventName: 'OnPlayerEnterCheckpoint', func: (playerid: number) => void): void;
  /**
   * Adds a new listener to OnPlayerLeaveCheckpoint
   *
   * @name samp.on
   * @param {string} [eventName=OnPlayerLeaveCheckpoint] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player leaves the checkpoint set for them by SetPlayerCheckpoint. Only one checkpoint can be set at a time.
   * @see OnPlayerEnterCheckpoint
   * @see OnPlayerEnterRaceCheckpoint
   * @see OnPlayerLeaveRaceCheckpoint
   * @see SetPlayerCheckpoint
   * @see DisablePlayerCheckpoint
   * @see IsPlayerInCheckpoint
   * @see SetPlayerRaceCheckpoint
   * @see DisablePlayerRaceCheckpoint
   * @see IsPlayerInRaceCheckpoint
   * @remarks This callback can also be called by NPC.
   * @returns {void}
   */
  static on(eventName: 'OnPlayerLeaveCheckpoint', func: (playerid: number) => void): void;
  /**
   * Adds a new listener to OnPlayerEnterRaceCheckpoint
   *
   * @name samp.on
   * @param {string} [eventName=OnPlayerEnterRaceCheckpoint] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player enters a race checkpoint.
   * @see OnPlayerEnterCheckpoint
   * @see OnPlayerLeaveCheckpoint
   * @see OnPlayerLeaveRaceCheckpoint
   * @see SetPlayerCheckpoint
   * @see DisablePlayerCheckpoint
   * @see IsPlayerInCheckpoint
   * @see SetPlayerRaceCheckpoint
   * @see DisablePlayerRaceCheckpoint
   * @see IsPlayerInRaceCheckpoint
   * @remarks This callback can also be called by NPC.
   * @returns {void}
   */
  static on(eventName: 'OnPlayerEnterRaceCheckpoint', func: (playerid: number) => void): void;
  /**
   * Adds a new listener to OnPlayerLeaveRaceCheckpoint
   *
   * @name samp.on
   * @param {string} [eventName=OnPlayerLeaveRaceCheckpoint] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player leaves the race checkpoint.
   * @see OnPlayerEnterCheckpoint
   * @see OnPlayerLeaveCheckpoint
   * @see OnPlayerEnterRaceCheckpoint
   * @see SetPlayerCheckpoint
   * @see DisablePlayerCheckpoint
   * @see IsPlayerInCheckpoint
   * @see SetPlayerRaceCheckpoint
   * @see DisablePlayerRaceCheckpoint
   * @see IsPlayerInRaceCheckpoint
   * @remarks This callback can also be called by NPC.
   * @returns {void}
   */
  static on(eventName: 'OnPlayerLeaveRaceCheckpoint', func: (playerid: number) => void): void;
  /**
   * Adds a new listener to OnRconCommand
   *
   * @name samp.on
   * @param {string} [eventName=OnRconCommand] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a command is sent through the server console, remote RCON, or via the in-game &quot;/rcon command&quot;.
   * @see IsPlayerAdmin
   * @see OnRconLoginAttempt
   * @remarks You will need to include this callback in a loaded filterscript for it to work in the gamemode!
   * @remarks &quot;/rcon&quot; is not included in &quot;cmd&quot; when a player types a command. 
   * @remarks If you use the print function here, it will send a message to the player who typed the command in-game as well as the log.
   * @remarks This callback is not called when the player is not logged in as RCON admin. 
   * @remarks When the player is not logged in as RCON admin and uses /rcon login, this callback will not be called and OnRconLoginAttempt is called instead. However, when the player is logged in as RCON admin, the use of this command will call this callback. 
   * @returns {void}
   */
  static on(eventName: 'OnRconCommand', func: (cmd: string) => void): void;
  /**
   * Adds a new listener to OnPlayerRequestSpawn
   *
   * @name samp.on
   * @param {string} [eventName=OnPlayerRequestSpawn] - Name of the event
   * @param {function} func - Event callback
   * @summary Called when a player attempts to spawn via class selection either by pressing SHIFT or clicking the &#x27;Spawn&#x27; button.
   * @see OnPlayerSpawn
   * @see OnPlayerRequestClass
   * @remarks This callback can also be called by NPC.
   * @remarks To prevent players from spawning with certain classes, the last viewed class must be saved in a variable in OnPlayerRequestClass.
   * @returns {void}
   */
  static on(eventName: 'OnPlayerRequestSpawn', func: (playerid: number) => void): void;
  /**
   * Adds a new listener to OnObjectMoved
   *
   * @name samp.on
   * @param {string} [eventName=OnObjectMoved] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when an object is moved after MoveObject (when it stops moving).
   * @see MoveObject
   * @see IsObjectMoving
   * @see StopObject
   * @see OnPlayerObjectMoved
   * @remarks SetObjectPos does not work when used in this callback. To fix it, recreate the object.
   * @returns {void}
   */
  static on(eventName: 'OnObjectMoved', func: (objectid: number) => void): void;
  /**
   * Adds a new listener to OnPlayerObjectMoved
   *
   * @name samp.on
   * @param {string} [eventName=OnPlayerObjectMoved] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player object is moved after MovePlayerObject (when it stops moving).
   * @see OnObjectMoved
   * @see MovePlayerObject
   * @see IsPlayerObjectMoving
   * @see StopPlayerObject
   * @remarks This callback can also be called for NPC.
   * @returns {void}
   */
  static on(eventName: 'OnPlayerObjectMoved', func: (playerid: number, objectid: number) => void): void;
  /**
   * Adds a new listener to OnPlayerPickUpPickup
   *
   * @name samp.on
   * @param {string} [eventName=OnPlayerPickUpPickup] - Name of the event
   * @param {function} func - Event callback
   * @summary Called when a player picks up a pickup created with CreatePickup.
   * @see CreatePickup
   * @see DestroyPickup
   * @returns {void}
   */
  static on(eventName: 'OnPlayerPickUpPickup', func: (playerid: number, pickupid: number) => void): void;
  /**
   * Adds a new listener to OnVehicleMod
   *
   * @name samp.on
   * @param {string} [eventName=OnVehicleMod] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a vehicle is modded.
   * @see AddVehicleComponent
   * @see OnEnterExitModShop
   * @see OnVehiclePaintjob
   * @see OnVehicleRespray
   * @remarks This callback is NOT called by AddVehicleComponent.
   * @returns {void}
   */
  static on(eventName: 'OnVehicleMod', func: (playerid: number, vehicleid: number, componentid: number) => void): void;
  /**
   * Adds a new listener to OnEnterExitModShop
   *
   * @name samp.on
   * @param {string} [eventName=OnEnterExitModShop] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player enters or exits a mod shop.
   * @see OnVehicleMod
   * @see OnVehicleRespray
   * @see OnVehiclePaintjob
   * @see AddVehicleComponent
   * @remarks This callback was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks Players collide when they get into the same mod shop.
   * @returns {void}
   */
  static on(eventName: 'OnEnterExitModShop', func: (playerid: number, enterexit: number, interiorid: number) => void): void;
  /**
   * Adds a new listener to OnVehiclePaintjob
   *
   * @name samp.on
   * @param {string} [eventName=OnVehiclePaintjob] - Name of the event
   * @param {function} func - Event callback
   * @summary Called when a player previews a vehicle paintjob inside a mod shop. Watch out, this callback is not called when the player buys the paintjob.
   * @see ChangeVehiclePaintjob
   * @see ChangeVehicleColor
   * @see OnVehicleRespray
   * @see OnVehicleMod
   * @remarks This callback is not called by ChangeVehiclePaintjob.
   * @returns {void}
   */
  static on(eventName: 'OnVehiclePaintjob', func: (playerid: number, vehicleid: number, paintjobid: number) => void): void;
  /**
   * Adds a new listener to OnVehicleRespray
   *
   * @name samp.on
   * @param {string} [eventName=OnVehicleRespray] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player exits a mod shop, even if the colors weren&#x27;t changed. Watch out, the name is ambiguous, Pay &#x27;n&#x27; Spray shops don&#x27;t call this callback.
   * @see ChangeVehicleColor
   * @see ChangeVehiclePaintjob
   * @see OnVehiclePaintjob
   * @see OnVehicleMod
   * @see OnEnterExitModShop
   * @remarks Previewing a component inside a mod shop might call this callback.
   * @remarks This callback is not called by ChangeVehicleColor.
   * @returns {void}
   */
  static on(eventName: 'OnVehicleRespray', func: (playerid: number, vehicleid: number, color1: number, color2: number) => void): void;
  /**
   * Adds a new listener to OnVehicleDamageStatusUpdate
   *
   * @name samp.on
   * @param {string} [eventName=OnVehicleDamageStatusUpdate] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a vehicle element such as doors, tires, panels, or lights change their damage status.
   * @see GetVehicleDamageStatus
   * @see UpdateVehicleDamageStatus
   * @remarks This callback was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks This does not include vehicle health changes
   * @returns {void}
   */
  static on(eventName: 'OnVehicleDamageStatusUpdate', func: (vehicleid: number, playerid: number) => void): void;
  /**
   * Adds a new listener to OnUnoccupiedVehicleUpdate
   *
   * @name samp.on
   * @param {string} [eventName=OnUnoccupiedVehicleUpdate] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player&#x27;s client updates/syncs the position of a vehicle they&#x27;re not driving. This can happen outside of the vehicle or when the player is a passenger of a vehicle that has no driver.
   * @see OnTrailerUpdate
   * @remarks This callback was added in SA-MP 0.3c R3 and will not work in earlier versions!
   * @remarks This callback is called very frequently per second per unoccupied vehicle. You should refrain from implementing intensive calculations or intensive file writing/reading operations in this callback.
   * @remarks GetVehiclePos will return the old coordinates of the vehicle before this update.
   * @returns {void}
   */
  static on(eventName: 'OnUnoccupiedVehicleUpdate', func: (vehicleid: number, playerid: number, passenger_seat: number, new_x: number, new_y: number, new_z: number, vel_x: number, vel_y: number, vel_z: number) => void): void;
  /**
   * Adds a new listener to OnPlayerSelectedMenuRow
   *
   * @name samp.on
   * @param {string} [eventName=OnPlayerSelectedMenuRow] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player selects an item from a menu (ShowMenuForPlayer).
   * @see OnPlayerExitedMenu
   * @see OnDialogResponse
   * @see CreateMenu
   * @see DestroyMenu
   * @see AddMenuItem
   * @see ShowMenuForPlayer
   * @see HideMenuForPlayer
   * @remarks The menu ID is not passed to this callback. GetPlayerMenu must be used to determine which menu the player selected an item on.
   * @returns {void}
   */
  static on(eventName: 'OnPlayerSelectedMenuRow', func: (playerid: number, row: number) => void): void;
  /**
   * Adds a new listener to OnPlayerExitedMenu
   *
   * @name samp.on
   * @param {string} [eventName=OnPlayerExitedMenu] - Name of the event
   * @param {function} func - Event callback
   * @summary Called when a player exits a menu.
   * @see OnPlayerSelectedMenuRow
   * @see CreateMenu
   * @see DestroyMenu
   * @returns {void}
   */
  static on(eventName: 'OnPlayerExitedMenu', func: (playerid: number) => void): void;
  /**
   * Adds a new listener to OnPlayerInteriorChange
   *
   * @name samp.on
   * @param {string} [eventName=OnPlayerInteriorChange] - Name of the event
   * @param {function} func - Event callback
   * @summary Called when a player changes interior. Can be triggered by SetPlayerInterior or when a player enter/exits a building.
   * @see SetPlayerInterior
   * @see GetPlayerInterior
   * @see LinkVehicleToInterior
   * @see OnPlayerStateChange
   * @returns {void}
   */
  static on(eventName: 'OnPlayerInteriorChange', func: (playerid: number, newinteriorid: number, oldinteriorid: number) => void): void;
  /**
   * Adds a new listener to OnPlayerKeyStateChange
   *
   * @name samp.on
   * @param {string} [eventName=OnPlayerKeyStateChange] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when the state of any supported key is changed (pressed/released). Directional keys do not trigger OnPlayerKeyStateChange (up/down/left/right).
   * @see GetPlayerKeys
   * @remarks This callback can also be called by NPC.
   * @remarks 
  Useful macros:
  
    // HOLDING(keys)
    #define HOLDING(%0) ((newkeys &amp; (%0)) &#x3D;&#x3D; (%0))
    
    // PRESSED(keys)
    #define PRESSED(%0) (((newkeys &amp; (%0)) &#x3D;&#x3D; (%0)) &amp;&amp; ((oldkeys &amp; (%0)) !&#x3D; (%0)))
    
    // PRESSING(keyVariable, keys)
    #define PRESSING(%0,%1) (%0 &amp; (%1))
    
    // RELEASED(keys)
    #define RELEASED(%0) (((newkeys &amp; (%0)) !&#x3D; (%0)) &amp;&amp; ((oldkeys &amp; (%0)) &#x3D;&#x3D; (%0)))
  

   * @returns {void}
   */
  static on(eventName: 'OnPlayerKeyStateChange', func: (playerid: number, newkeys: number, oldkeys: number) => void): void;
  /**
   * Adds a new listener to OnRconLoginAttempt
   *
   * @name samp.on
   * @param {string} [eventName=OnRconLoginAttempt] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when someone attempts to log in to RCON in-game; successful or not.
   * @see OnRconCommand
   * @see IsPlayerAdmin
   * @see SendRconCommand
   * @remarks This callback was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks This callback is only called when /rcon login is used in-game. 
   * @remarks This callback is only called when the player is not yet logged in. When the player is logged in, OnRconCommand is called instead.
   * @returns {void}
   */
  static on(eventName: 'OnRconLoginAttempt', func: (ip: string, password: string, success: number) => void): void;
  /**
   * Adds a new listener to OnPlayerUpdate
   *
   * @name samp.on
   * @param {string} [eventName=OnPlayerUpdate] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static on(eventName: 'OnPlayerUpdate', func: (playerid: number) => void): void;
  /**
   * Adds a new listener to OnPlayerStreamIn
   *
   * @name samp.on
   * @param {string} [eventName=OnPlayerStreamIn] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player is streamed by some other player&#x27;s client.
   * @see OnPlayerStreamOut
   * @see OnActorStreamIn
   * @see OnVehicleStreamIn
   * @remarks This callback was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks This callback can also be called by NPC.
   * @returns {void}
   */
  static on(eventName: 'OnPlayerStreamIn', func: (playerid: number, forplayerid: number) => void): void;
  /**
   * Adds a new listener to OnPlayerStreamOut
   *
   * @name samp.on
   * @param {string} [eventName=OnPlayerStreamOut] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player is streamed out from some other player&#x27;s client.
   * @see OnPlayerStreamIn
   * @see OnActorStreamOut
   * @see OnVehicleStreamOut
   * @remarks This callback was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks This callback can also be called by NPC.
   * @returns {void}
   */
  static on(eventName: 'OnPlayerStreamOut', func: (playerid: number, forplayerid: number) => void): void;
  /**
   * Adds a new listener to OnVehicleStreamIn
   *
   * @name samp.on
   * @param {string} [eventName=OnVehicleStreamIn] - Name of the event
   * @param {function} func - Event callback
   * @summary Called when a vehicle is streamed to a player&#x27;s client.
   * @see OnVehicleStreamOut
   * @see OnPlayerStreamIn
   * @see OnPlayerStreamOut
   * @remarks This callback was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks This callback can also be called by NPC.
   * @returns {void}
   */
  static on(eventName: 'OnVehicleStreamIn', func: (vehicleid: number, forplayerid: number) => void): void;
  /**
   * Adds a new listener to OnVehicleStreamOut
   *
   * @name samp.on
   * @param {string} [eventName=OnVehicleStreamOut] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a vehicle is streamed out for a player&#x27;s client (it&#x27;s so far away that they can&#x27;t see it).
   * @see OnVehicleStreamIn
   * @see OnPlayerStreamIn
   * @see OnPlayerStreamOut
   * @remarks This callback was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks This callback can also be called by NPC.
   * @returns {void}
   */
  static on(eventName: 'OnVehicleStreamOut', func: (vehicleid: number, forplayerid: number) => void): void;
  /**
   * Adds a new listener to OnActorStreamIn
   *
   * @name samp.on
   * @param {string} [eventName=OnActorStreamIn] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when an actor is streamed in by a player&#x27;s client.
   * @see OnActorStreamOut
   * @see OnPlayerStreamIn
   * @remarks This function was added in SA-MP 0.3.7 and will not work in earlier versions!
   * @remarks This callback can also be called by NPC.
   * @remarks It is always called first in filterscripts.
   * @returns {void}
   */
  static on(eventName: 'OnActorStreamIn', func: (actorid: number, forplayerid: number) => void): void;
  /**
   * Adds a new listener to OnActorStreamOut
   *
   * @name samp.on
   * @param {string} [eventName=OnActorStreamOut] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when an actor is streamed out by a player&#x27;s client.
   * @see OnActorStreamIn
   * @see OnPlayerStreamOut
   * @remarks This function was added in SA-MP 0.3.7 and will not work in earlier versions!
   * @remarks This callback can also be called by NPC.
   * @remarks It is always called first in filterscripts.
   * @returns {void}
   */
  static on(eventName: 'OnActorStreamOut', func: (actorid: number, forplayerid: number) => void): void;
  /**
   * Adds a new listener to OnDialogResponse
   *
   * @name samp.on
   * @param {string} [eventName=OnDialogResponse] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player responds to a dialog shown using ShowPlayerDialog by either clicking a button, pressing ENTER/ESC or double-clicking a list item (if using a list style dialog).
   * @see ShowPlayerDialog
   * @remarks This callback was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks A player&#x27;s dialog doesn&#x27;t hide when the gamemode restarts, causing the server to print &quot;Warning: PlayerDialogResponse PlayerId: 0 dialog ID doesn&#x27;t match last sent dialog ID&quot; if a player responded to this dialog after restart.
   * @remarks Parameters can contain different values, based on dialog&#x27;s style.
   * @returns {void}
   */
  static on(eventName: 'OnDialogResponse', func: (playerid: number, dialogid: number, response: number, listitem: number, inputtext: string) => void): void;
  /**
   * Adds a new listener to OnPlayerTakeDamage
   *
   * @name samp.on
   * @param {string} [eventName=OnPlayerTakeDamage] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player takes damage.
   * @see OnPlayerGiveDamage
   * @see OnPlayerWeaponShot
   * @remarks This callback was added in SA-MP 0.3d and will not work in earlier versions!
   * @remarks GetPlayerHealth and GetPlayerArmour will return the old amounts of the player before this callback. 
   * @remarks 
  The weaponid will return 37 (flame thrower) from any fire sources (e.g. molotov, 18).
  The weaponid will return 51 from any weapon that creates an explosion (e.g. RPG, grenade)
  playerid is the only one who can call the callback.
  The amount is always the maximum damage the weaponid can do, even when the health left is less than that maximum damage. So when a player has 100.0 health and gets shot with a Desert Eagle which has a damage value of 46.2, it takes 3 shots to kill that player. All 3 shots will show an amount of 46.2, even though when the last shot hits, the player only has 7.6 health left.

   * @returns {void}
   */
  static on(eventName: 'OnPlayerTakeDamage', func: (playerid: number, issuerid: number, amount: number, weaponid: number, bodypart: number) => void): void;
  /**
   * Adds a new listener to OnPlayerGiveDamage
   *
   * @name samp.on
   * @param {string} [eventName=OnPlayerGiveDamage] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player gives damage to another player.
   * @see OnPlayerTakeDamage
   * @remarks This callback was added in SA-MP 0.3d and will not work in earlier versions!
   * @remarks 
  Keep in mind this function can be inaccurate in some cases.
  If you want to prevent certain players from damaging eachother, use SetPlayerTeam.
  The weaponid will return 37 (flame thrower) from any fire sources (e.g. molotov, 18)
  The weaponid will return 51 from any weapon that creates an explosion (e.g. RPG, grenade)
  playerid is the only one who can call the callback.
  The amount is always the maximum damage the weaponid can do, even when the health left is less than that maximum damage. So when a player has 100.0 health and gets shot with a Desert Eagle which has a damage value of 46.2, it takes 3 shots to kill that player. All 3 shots will show an amount of 46.2, even though when the last shot hits, the player only has 7.6 health left.

   * @returns {void}
   */
  static on(eventName: 'OnPlayerGiveDamage', func: (playerid: number, damagedid: number, amount: number, weaponid: number, bodypart: number) => void): void;
  /**
   * Adds a new listener to OnPlayerGiveDamageActor
   *
   * @name samp.on
   * @param {string} [eventName=OnPlayerGiveDamageActor] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player gives damage to an actor.
   * @see CreateActor
   * @see SetActorInvulnerable
   * @see SetActorHealth
   * @see GetActorHealth
   * @see IsActorInvulnerable
   * @see IsValidActor
   * @see OnActorStreamOut
   * @see OnPlayerStreamIn
   * @remarks This callback was added in SA-MP 0.3.7 and will not work in earlier versions!
   * @remarks This function does not get called if the actor is set invulnerable (WHICH IS BY DEFAULT). See SetActorInvulnerable.
   * @returns {void}
   */
  static on(eventName: 'OnPlayerGiveDamageActor', func: (playerid: number, damaged_actorid: number, amount: number, weaponid: number, bodypart: number) => void): void;
  /**
   * Adds a new listener to OnPlayerClickMap
   *
   * @name samp.on
   * @param {string} [eventName=OnPlayerClickMap] - Name of the event
   * @param {function} func - Event callback
   * @summary OnPlayerClickMap is called when a player places a target/waypoint on the pause menu map (by right-clicking).
   * @see SetPlayerPos
   * @see SetPlayerPosFindZ
   * @see GetPlayerPos
   * @remarks This callback was added in SA-MP 0.3d and will not work in earlier versions!
   * @remarks The Z value returned will be 0 (invalid) if it is far away from the player; use the MapAndreas plugin to get a more accurate Z coordinate.
   * @returns {void}
   */
  static on(eventName: 'OnPlayerClickMap', func: (playerid: number, fX: number, fY: number, fZ: number) => void): void;
  /**
   * Adds a new listener to OnPlayerClickTextDraw
   *
   * @name samp.on
   * @param {string} [eventName=OnPlayerClickTextDraw] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player clicks on a textdraw or cancels the select mode with the Escape key.
   * @see OnPlayerClickPlayerTextDraw
   * @see OnPlayerClickPlayer
   * @remarks This callback was added in SA-MP 0.3e and will not work in earlier versions!
   * @remarks The clickable area is defined by TextDrawTextSize. The x and y parameters passed to that function must not be zero or negative. 
   * @remarks Do not use CancelSelectTextDraw unconditionally within this callback. This results in an infinite loop. 
   * @returns {void}
   */
  static on(eventName: 'OnPlayerClickTextDraw', func: (playerid: number, clickedid: number) => void): void;
  /**
   * Adds a new listener to OnPlayerClickPlayerTextDraw
   *
   * @name samp.on
   * @param {string} [eventName=OnPlayerClickPlayerTextDraw] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player clicks on a player-textdraw. It is not called when player cancels the select mode (ESC) - however, OnPlayerClickTextDraw is.
   * @see PlayerTextDrawSetSelectable
   * @see OnPlayerClickTextDraw
   * @see OnPlayerClickPlayer
   * @remarks This callback was added in SA-MP 0.3e and will not work in earlier versions!
   * @remarks When a player presses ESC to cancel selecting a textdraw, OnPlayerClickTextDraw is called with a textdraw ID of INVALID_TEXT_DRAW. OnPlayerClickPlayerTextDraw won&#x27;t be called also.
   * @returns {void}
   */
  static on(eventName: 'OnPlayerClickPlayerTextDraw', func: (playerid: number, playertextid: number) => void): void;
  /**
   * Adds a new listener to OnIncomingConnection
   *
   * @name samp.on
   * @param {string} [eventName=OnIncomingConnection] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when an IP address attempts a connection to the server. To block incoming connections, use BlockIpAddress.
   * @see OnPlayerConnect
   * @see OnPlayerDisconnect
   * @see OnPlayerFinishedDownloading
   * @see BlockIpAddress
   * @see UnBlockIpAddress
   * @remarks  	This callback was added in SA-MP 0.3z R2-2 and will not work in earlier versions!
   * @returns {void}
   */
  static on(eventName: 'OnIncomingConnection', func: (playerid: number, ip_address: string, port: number) => void): void;
  /**
   * Adds a new listener to OnTrailerUpdate
   *
   * @name samp.on
   * @param {string} [eventName=OnTrailerUpdate] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player sent a trailer update.
   * @see OnUnoccupiedVehicleUpdate
   * @see GetVehicleTrailer
   * @see IsTrailerAttachedToVehicle
   * @see AttachTrailerToVehicle
   * @see DetachTrailerFromVehicle
   * @remarks This callback was added in SA-MP 0.3z R4 and will not work in earlier versions!
   * @remarks This callback is called very frequently per second per trailer. You should refrain from implementing intensive calculations or intensive file writing/reading operations in this callback. 
   * @returns {void}
   */
  static on(eventName: 'OnTrailerUpdate', func: (playerid: number, vehicleid: number) => void): void;
  /**
   * Adds a new listener to OnVehicleSirenStateChange
   *
   * @name samp.on
   * @param {string} [eventName=OnVehicleSirenStateChange] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a vehicle&#x27;s siren is toggled.
   * @see GetVehicleParamsSirenState
   * @remarks This callback was added in SA-MP 0.3.7 and will not work in earlier versions!
   * @remarks This callback can also be called by NPC.
   * @remarks This callback is only called when a vehicle&#x27;s siren is toggled on or off, NOT when the alternate siren is in use (holding horn).
   * @returns {void}
   */
  static on(eventName: 'OnVehicleSirenStateChange', func: (playerid: number, vehicleid: number, newstate: number) => void): void;
  /**
   * Adds a new listener to OnPlayerFinishedDownloading
   *
   * @name samp.on
   * @param {string} [eventName=OnPlayerFinishedDownloading] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player finishes downloading custom models. For more information on how to add custom models to your server, see the release thread and this tutorial.
   * @see OnPlayerConnect
   * @see OnPlayerDisconnect
   * @see OnIncomingConnection
   * @remarks This callback was added in SA-MP 0.3DL and will not work in earlier versions!
   * @remarks This callback is called every time a player changes virtual worlds, even if there are no custom models present in that world.
   * @returns {void}
   */
  static on(eventName: 'OnPlayerFinishedDownloading', func: (playerid: number, virtualworld: number) => void): void;
  /**
   * Adds a new listener to OnPlayerClickPlayer
   *
   * @name samp.on
   * @param {string} [eventName=OnPlayerClickPlayer] - Name of the event
   * @param {function} func - Event callback
   * @summary Called when a player double-clicks on a player on the scoreboard.
   * @see OnPlayerClickTextDraw
   * @remarks This callback was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks There is currently only one  (0 - CLICK_SOURCE_SCOREBOARD). The existence of this argument suggests that more sources may be supported in the future.
   * @returns {void}
   */
  static on(eventName: 'OnPlayerClickPlayer', func: (playerid: number, clickedplayerid: number, source: number) => void): void;
  /**
   * Adds a new listener to OnPlayerSelectObject
   *
   * @name samp.on
   * @param {string} [eventName=OnPlayerSelectObject] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player finishes editing an object (EditObject/EditPlayerObject).
   * @summary This callback is called when a player ends attached object edition mode.
   * @summary This callback is called when a player selects an object after SelectObject has been used.
   * @see EditObject
   * @see CreateObject
   * @see DestroyObject
   * @see MoveObject
   * @see EditAttachedObject
   * @see SetPlayerAttachedObject
   * @see SelectObject
   * @remarks This callback was added in SA-MP 0.3e and will not work in earlier versions!
   * @remarks When using EDIT_RESPONSE_UPDATE be aware that this callback will not be called when releasing an edit in progress resulting in the last update of EDIT_RESPONSE_UPDATE being out of sync of the objects current position.
   * @remarks This callback was added in SA-MP 0.3e and will not work in earlier versions!
   * @remarks Editions should be discarded if response was 0 (cancelled). This must be done by storing the offsets etc. in an array BEFORE using EditAttachedObject.
   * @remarks This function was added in SA-MP 0.3e and will not work in earlier versions!
   * @returns {void}
   */
  static on(eventName: 'OnPlayerSelectObject', func: (playerid: number, type: number, objectid: number, modelid: number, fX: number, fY: number, fZ: number) => void): void;
  /**
   * Adds a new listener to OnPlayerWeaponShot
   *
   * @name samp.on
   * @param {string} [eventName=OnPlayerWeaponShot] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player fires a shot from a weapon. Only bullet weapons are supported. Only passenger drive-by is supported (not driver drive-by, and not sea sparrow / hunter shots).
   * @see OnPlayerGiveDamage
   * @see GetPlayerLastShotVectors
   * @remarks This callback was added in SA-MP 0.3z and will not work in earlier versions!
   * @remarks 
    BULLET_HIT_TYPE_NONE(0)
    BULLET_HIT_TYPE_PLAYER(1)
    BULLET_HIT_TYPE_VEHICLE(2)
    BULLET_HIT_TYPE_OBJECT(3)
    BULLET_HIT_TYPE_PLAYER_OBJECT(4)

   * @remarks BULLET_HIT_TYPE_PLAYER is also called for NPCs. Actors are ignored by this callback and detects as BULLET_HIT_TYPE_NONE.
   * @remarks This callback is only called when lag compensation is enabled. 
   * @remarks 
  If hittype is:
  
    - BULLET_HIT_TYPE_NONE: the fX, fY and fZ parameters are normal coordinates, will give 0.0 for coordinates if nothing was hit (e.g. far object that the bullet can&#x27;t reach);
    - Others: the fX, fY and fZ are offsets relative to the hitid.
  

   * @remarks 
  Isn&#x27;t called if you fired in vehicle as driver or if you are looking behind with the aim enabled (shooting in air).
  It is called as BULLET_HIT_TYPE_VEHICLE with the correct hitid (the hit player&#x27;s vehicleid) if you are shooting a player which is in a vehicle. It won&#x27;t be called as BULLET_HIT_TYPE_PLAYER at all.
  Partially fixed in SA-MP 0.3.7: If fake weapon data is sent by a malicious user, other player clients may freeze or crash. To combat this, check if the reported weaponid can actually fire bullets.

   * @remarks 

   * @remarks GetPlayerLastShotVectors can be used in this callback for more detailed bullet vector information.
   * @returns {void}
   */
  static on(eventName: 'OnPlayerWeaponShot', func: (playerid: number, weaponid: number, hittype: number, hitid: number, fX: number, fY: number, fZ: number) => void): void;
  /**
   * Adds a new listener to OnClientCheckResponse
   *
   * @name samp.on
   * @param {string} [eventName=OnClientCheckResponse] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a SendClientCheck request comletes
   * @see SendClientCheck
   * @returns {void}
   */
  static on(eventName: 'OnClientCheckResponse', func: (playerid: number, actionid: number, memaddr: number, retndata: number) => void): void;
  /**
   * Adds a new listener to OnScriptCash
   *
   * @name samp.on
   * @param {string} [eventName=OnScriptCash] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static on(eventName: 'OnScriptCash', func: (playerid: number, amount: number, source: number) => void): void;
  /**
   * Adds a new listener to OnGameModeInit
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnGameModeInit] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is triggered when the gamemode starts.
   * @see OnGameModeExit
   * @see OnFilterScriptInit
   * @see OnFilterScriptExit
   * @remarks This function can also be used in a filterscript to detect if the gamemode changes with RCON commands like changemode or gmx, as changing the gamemode does not reload a filterscript.
   * @returns {void}
   */
  static addListener(eventName: 'OnGameModeInit', func: () => void): void;
  /**
   * Adds a new listener to OnGameModeExit
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnGameModeExit] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a gamemode ends, either through &#x27;gmx&#x27;, the server being shut down, or GameModeExit.
   * @see OnGameModeInit
   * @see OnFilterScriptExit
   * @see OnFilterScriptInit
   * @see GameModeExit
   * @remarks This function can also be used in a filterscript to detect if the gamemode changes with RCON commands like changemode or gmx, as changing the gamemode does not reload a filterscript.
   * @remarks When using OnGameModeExit in conjunction with the &#x27;rcon gmx&#x27; console command keep in mind there is a potential for client bugs to occur an example of this is excessive RemoveBuildingForPlayer calls during OnGameModeInit which could result in a client crash. 
   * @remarks This callback will NOT be called if the server crashes or the process is killed by other means, such as using the Linux kill command or pressing the close-button on the Windows console. 
   * @returns {void}
   */
  static addListener(eventName: 'OnGameModeExit', func: () => void): void;
  /**
   * Adds a new listener to OnFilterScriptInit
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnFilterScriptInit] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a filterscript is initialized (loaded). It is only called inside the filterscript which is starting.
   * @see OnFilterScriptExit
   * @see OnGameModeInit
   * @see OnGameModeExit
   * @returns {void}
   */
  static addListener(eventName: 'OnFilterScriptInit', func: () => void): void;
  /**
   * Adds a new listener to OnFilterScriptExit
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnFilterScriptExit] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a filterscript is unloaded. It is only called inside the filterscript which is unloaded.
   * @see OnFilterScriptInit
   * @see OnGameModeInit
   * @see OnGameModeExit
   * @returns {void}
   */
  static addListener(eventName: 'OnFilterScriptExit', func: () => void): void;
  /**
   * Adds a new listener to OnPlayerConnect
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerConnect] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player connects to the server.
   * @see OnPlayerDisconnect
   * @see OnIncomingConnection
   * @see OnPlayerFinishedDownloading
   * @remarks This callback can also be called by NPC.
   * @returns {void}
   */
  static addListener(eventName: 'OnPlayerConnect', func: (playerid: number) => void): void;
  /**
   * Adds a new listener to OnPlayerDisconnect
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerDisconnect] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player disconnects from the server.
   * @see OnPlayerConnect
   * @see OnIncomingConnection
   * @see OnPlayerFinishedDownloading
   * @remarks This callback can also be called by NPC.
   * @remarks Some functions might not work correctly when used in this callback because the player is already disconnected when the callback is called. This means that you can&#x27;t get unambiguous information from functions like GetPlayerIp and GetPlayerPos.
   * @remarks 
  Reasons:
  
    0 - timeout/Crash - the player&#x27;s connection was lost. Either their game crashed or their network had a fault.
    1 - quit - the player purposefully quit, either using the /quit (/q) command or via the pause menu.
    2 - kick/ban - the player was kicked or banned by the server.
  

   * @returns {void}
   */
  static addListener(eventName: 'OnPlayerDisconnect', func: (playerid: number, reason: number) => void): void;
  /**
   * Adds a new listener to OnPlayerSpawn
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerSpawn] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player spawns.(i.e. after caling SpawnPlayer function).
   * @see OnPlayerDeath
   * @see OnVehicleSpawn
   * @see SpawnPlayer
   * @see AddPlayerClass
   * @see SetSpawnInfo
   * @remarks This callback can also be called by NPC.
   * @remarks The game sometimes deducts $100 from players after spawn.
   * @returns {void}
   */
  static addListener(eventName: 'OnPlayerSpawn', func: (playerid: number) => void): void;
  /**
   * Adds a new listener to OnPlayerDeath
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerDeath] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player dies, either by suicide or by being killed by another player.
   * @see OnPlayerSpawn
   * @see SendDeathMessage
   * @see SetPlayerHealth
   * @remarks 
  The reason will return 37 (flame thrower) from any fire sources (e.g. molotov, 18)
  The reason will return 51 from any weapon that creates an explosion (e.g. RPG, grenade)
  You do not need to check whether killerid is valid before using it in SendDeathMessage. INVALID_PLAYER_ID is a valid killerid ID parameter in that function.
  playerid is the only one who can call the callback. (good to know for anti fake death)

   * @returns {void}
   */
  static addListener(eventName: 'OnPlayerDeath', func: (playerid: number, killerid: number, reason: number) => void): void;
  /**
   * Adds a new listener to OnVehicleSpawn
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnVehicleSpawn] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a vehicle respawns.
   * @see OnVehicleDeath
   * @see OnPlayerSpawn
   * @see SetVehicleToRespawn
   * @see CreateVehicle
   * @returns {void}
   */
  static addListener(eventName: 'OnVehicleSpawn', func: (vehicleid: number) => void): void;
  /**
   * Adds a new listener to OnVehicleDeath
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnVehicleDeath] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a vehicle is destroyed - either by exploding or becoming submerged in water.
   * @see OnVehicleSpawn
   * @see SetVehicleHealth
   * @remarks This callback can also be called by NPC.
   * @remarks This callback will also be called when a vehicle enters water, but the vehicle can be saved from destruction by teleportation or driving out (if only partially submerged). The callback won&#x27;t be called a second time, and the vehicle may disappear when the driver exits, or after a short time.
   * @returns {void}
   */
  static addListener(eventName: 'OnVehicleDeath', func: (vehicleid: number, killerid: number) => void): void;
  /**
   * Adds a new listener to OnPlayerText
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerText] - Name of the event
   * @param {function} func - Event callback
   * @summary Called when a player sends a chat message.
   * @see OnPlayerCommandText
   * @see SendPlayerMessageToPlayer
   * @see SendPlayerMessageToAll
   * @remarks This callback can also be called by NPC.
   * @returns {void}
   */
  static addListener(eventName: 'OnPlayerText', func: (playerid: number, text: string) => void): void;
  /**
   * Adds a new listener to OnPlayerCommandText
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerCommandText] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player enters a command into the client chat window. Commands are anything that start with a forward slash, e.g. /help.
   * @see OnPlayerText
   * @see OnRconCommand
   * @see SendRconCommand
   * @remarks This callback can also be called by NPC.
   * @returns {void}
   */
  static addListener(eventName: 'OnPlayerCommandText', func: (playerid: number, cmdtext: string) => void): void;
  /**
   * Adds a new listener to OnPlayerRequestClass
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerRequestClass] - Name of the event
   * @param {function} func - Event callback
   * @summary Called when a player changes class at class selection (and when class selection first appears).
   * @see OnPlayerRequestSpawn
   * @see AddPlayerClass
   * @remarks This callback can also be called by NPC.
   * @remarks This callback is also called when a player presses F4.
   * @returns {void}
   */
  static addListener(eventName: 'OnPlayerRequestClass', func: (playerid: number, classid: number) => void): void;
  /**
   * Adds a new listener to OnPlayerEnterVehicle
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerEnterVehicle] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player starts to enter a vehicle, meaning the player is not in vehicle yet at the time this callback is called.
   * @see OnPlayerExitVehicle
   * @see OnPlayerStateChange
   * @see PutPlayerInVehicle
   * @see GetPlayerVehicleSeat
   * @remarks This callback is called when a player BEGINS to enter a vehicle, not when they HAVE entered it. See OnPlayerStateChange. 
   * @remarks This callback is still called if the player is denied entry to the vehicle (e.g. it is locked or full). 
   * @returns {void}
   */
  static addListener(eventName: 'OnPlayerEnterVehicle', func: (playerid: number, vehicleid: number, ispassenger: number) => void): void;
  /**
   * Adds a new listener to OnPlayerExitVehicle
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerExitVehicle] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player starts to exit a vehicle.
   * @see OnPlayerEnterVehicle
   * @see OnPlayerStateChange
   * @see RemovePlayerFromVehicle
   * @see GetPlayerVehicleSeat
   * @remarks Not called if the player falls off a bike or is removed from a vehicle by other means such as using SetPlayerPos.
   * @remarks You must use OnPlayerStateChange and check if their old state is PLAYER_STATE_DRIVER or PLAYER_STATE_PASSENGER and their new state is PLAYER_STATE_ONFOOT.
   * @returns {void}
   */
  static addListener(eventName: 'OnPlayerExitVehicle', func: (playerid: number, vehicleid: number) => void): void;
  /**
   * Adds a new listener to OnPlayerStateChange
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerStateChange] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player changes state. For example, when a player changes from being the driver of a vehicle to being on-foot.
   * @see OnPlayerInteriorChange
   * @see GetPlayerState
   * @see GetPlayerSpecialAction
   * @see SetPlayerSpecialAction
   * @remarks This callback can also be called by NPC.
   * @remarks 
  States:
  
    PLAYER_STATE_NONE - empty (while initializing)
    PLAYER_STATE_ONFOOT - player is on foot
    PLAYER_STATE_DRIVER - player is the driver of a vehicle
    PLAYER_STATE_PASSENGER - player is passenger of a vehicle
    PLAYER_STATE_WASTED - player is dead or on class selection
    PLAYER_STATE_SPAWNED - player is spawned
    PLAYER_STATE_SPECTATING - player is spectating
    PLAYER_STATE_EXIT_VEHICLE - player exits a vehicle
    PLAYER_STATE_ENTER_VEHICLE_DRIVER - player enters a vehicle as driver
    PLAYER_STATE_ENTER_VEHICLE_PASSENGER - player enters a vehicle as passenger 
  

   * @returns {void}
   */
  static addListener(eventName: 'OnPlayerStateChange', func: (playerid: number, newstate: number, oldstate: number) => void): void;
  /**
   * Adds a new listener to OnPlayerEnterCheckpoint
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerEnterCheckpoint] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player enters the checkpoint set for that player.
   * @see OnPlayerLeaveCheckpoint
   * @see OnPlayerEnterRaceCheckpoint
   * @see OnPlayerLeaveRaceCheckpoint
   * @see SetPlayerCheckpoint
   * @see DisablePlayerCheckpoint
   * @see IsPlayerInCheckpoint
   * @see SetPlayerRaceCheckpoint
   * @see DisablePlayerRaceCheckpoint
   * @see IsPlayerInRaceCheckpoint
   * @remarks This callback can also be called by NPC.
   * @returns {void}
   */
  static addListener(eventName: 'OnPlayerEnterCheckpoint', func: (playerid: number) => void): void;
  /**
   * Adds a new listener to OnPlayerLeaveCheckpoint
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerLeaveCheckpoint] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player leaves the checkpoint set for them by SetPlayerCheckpoint. Only one checkpoint can be set at a time.
   * @see OnPlayerEnterCheckpoint
   * @see OnPlayerEnterRaceCheckpoint
   * @see OnPlayerLeaveRaceCheckpoint
   * @see SetPlayerCheckpoint
   * @see DisablePlayerCheckpoint
   * @see IsPlayerInCheckpoint
   * @see SetPlayerRaceCheckpoint
   * @see DisablePlayerRaceCheckpoint
   * @see IsPlayerInRaceCheckpoint
   * @remarks This callback can also be called by NPC.
   * @returns {void}
   */
  static addListener(eventName: 'OnPlayerLeaveCheckpoint', func: (playerid: number) => void): void;
  /**
   * Adds a new listener to OnPlayerEnterRaceCheckpoint
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerEnterRaceCheckpoint] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player enters a race checkpoint.
   * @see OnPlayerEnterCheckpoint
   * @see OnPlayerLeaveCheckpoint
   * @see OnPlayerLeaveRaceCheckpoint
   * @see SetPlayerCheckpoint
   * @see DisablePlayerCheckpoint
   * @see IsPlayerInCheckpoint
   * @see SetPlayerRaceCheckpoint
   * @see DisablePlayerRaceCheckpoint
   * @see IsPlayerInRaceCheckpoint
   * @remarks This callback can also be called by NPC.
   * @returns {void}
   */
  static addListener(eventName: 'OnPlayerEnterRaceCheckpoint', func: (playerid: number) => void): void;
  /**
   * Adds a new listener to OnPlayerLeaveRaceCheckpoint
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerLeaveRaceCheckpoint] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player leaves the race checkpoint.
   * @see OnPlayerEnterCheckpoint
   * @see OnPlayerLeaveCheckpoint
   * @see OnPlayerEnterRaceCheckpoint
   * @see SetPlayerCheckpoint
   * @see DisablePlayerCheckpoint
   * @see IsPlayerInCheckpoint
   * @see SetPlayerRaceCheckpoint
   * @see DisablePlayerRaceCheckpoint
   * @see IsPlayerInRaceCheckpoint
   * @remarks This callback can also be called by NPC.
   * @returns {void}
   */
  static addListener(eventName: 'OnPlayerLeaveRaceCheckpoint', func: (playerid: number) => void): void;
  /**
   * Adds a new listener to OnRconCommand
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnRconCommand] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a command is sent through the server console, remote RCON, or via the in-game &quot;/rcon command&quot;.
   * @see IsPlayerAdmin
   * @see OnRconLoginAttempt
   * @remarks You will need to include this callback in a loaded filterscript for it to work in the gamemode!
   * @remarks &quot;/rcon&quot; is not included in &quot;cmd&quot; when a player types a command. 
   * @remarks If you use the print function here, it will send a message to the player who typed the command in-game as well as the log.
   * @remarks This callback is not called when the player is not logged in as RCON admin. 
   * @remarks When the player is not logged in as RCON admin and uses /rcon login, this callback will not be called and OnRconLoginAttempt is called instead. However, when the player is logged in as RCON admin, the use of this command will call this callback. 
   * @returns {void}
   */
  static addListener(eventName: 'OnRconCommand', func: (cmd: string) => void): void;
  /**
   * Adds a new listener to OnPlayerRequestSpawn
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerRequestSpawn] - Name of the event
   * @param {function} func - Event callback
   * @summary Called when a player attempts to spawn via class selection either by pressing SHIFT or clicking the &#x27;Spawn&#x27; button.
   * @see OnPlayerSpawn
   * @see OnPlayerRequestClass
   * @remarks This callback can also be called by NPC.
   * @remarks To prevent players from spawning with certain classes, the last viewed class must be saved in a variable in OnPlayerRequestClass.
   * @returns {void}
   */
  static addListener(eventName: 'OnPlayerRequestSpawn', func: (playerid: number) => void): void;
  /**
   * Adds a new listener to OnObjectMoved
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnObjectMoved] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when an object is moved after MoveObject (when it stops moving).
   * @see MoveObject
   * @see IsObjectMoving
   * @see StopObject
   * @see OnPlayerObjectMoved
   * @remarks SetObjectPos does not work when used in this callback. To fix it, recreate the object.
   * @returns {void}
   */
  static addListener(eventName: 'OnObjectMoved', func: (objectid: number) => void): void;
  /**
   * Adds a new listener to OnPlayerObjectMoved
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerObjectMoved] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player object is moved after MovePlayerObject (when it stops moving).
   * @see OnObjectMoved
   * @see MovePlayerObject
   * @see IsPlayerObjectMoving
   * @see StopPlayerObject
   * @remarks This callback can also be called for NPC.
   * @returns {void}
   */
  static addListener(eventName: 'OnPlayerObjectMoved', func: (playerid: number, objectid: number) => void): void;
  /**
   * Adds a new listener to OnPlayerPickUpPickup
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerPickUpPickup] - Name of the event
   * @param {function} func - Event callback
   * @summary Called when a player picks up a pickup created with CreatePickup.
   * @see CreatePickup
   * @see DestroyPickup
   * @returns {void}
   */
  static addListener(eventName: 'OnPlayerPickUpPickup', func: (playerid: number, pickupid: number) => void): void;
  /**
   * Adds a new listener to OnVehicleMod
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnVehicleMod] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a vehicle is modded.
   * @see AddVehicleComponent
   * @see OnEnterExitModShop
   * @see OnVehiclePaintjob
   * @see OnVehicleRespray
   * @remarks This callback is NOT called by AddVehicleComponent.
   * @returns {void}
   */
  static addListener(eventName: 'OnVehicleMod', func: (playerid: number, vehicleid: number, componentid: number) => void): void;
  /**
   * Adds a new listener to OnEnterExitModShop
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnEnterExitModShop] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player enters or exits a mod shop.
   * @see OnVehicleMod
   * @see OnVehicleRespray
   * @see OnVehiclePaintjob
   * @see AddVehicleComponent
   * @remarks This callback was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks Players collide when they get into the same mod shop.
   * @returns {void}
   */
  static addListener(eventName: 'OnEnterExitModShop', func: (playerid: number, enterexit: number, interiorid: number) => void): void;
  /**
   * Adds a new listener to OnVehiclePaintjob
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnVehiclePaintjob] - Name of the event
   * @param {function} func - Event callback
   * @summary Called when a player previews a vehicle paintjob inside a mod shop. Watch out, this callback is not called when the player buys the paintjob.
   * @see ChangeVehiclePaintjob
   * @see ChangeVehicleColor
   * @see OnVehicleRespray
   * @see OnVehicleMod
   * @remarks This callback is not called by ChangeVehiclePaintjob.
   * @returns {void}
   */
  static addListener(eventName: 'OnVehiclePaintjob', func: (playerid: number, vehicleid: number, paintjobid: number) => void): void;
  /**
   * Adds a new listener to OnVehicleRespray
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnVehicleRespray] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player exits a mod shop, even if the colors weren&#x27;t changed. Watch out, the name is ambiguous, Pay &#x27;n&#x27; Spray shops don&#x27;t call this callback.
   * @see ChangeVehicleColor
   * @see ChangeVehiclePaintjob
   * @see OnVehiclePaintjob
   * @see OnVehicleMod
   * @see OnEnterExitModShop
   * @remarks Previewing a component inside a mod shop might call this callback.
   * @remarks This callback is not called by ChangeVehicleColor.
   * @returns {void}
   */
  static addListener(eventName: 'OnVehicleRespray', func: (playerid: number, vehicleid: number, color1: number, color2: number) => void): void;
  /**
   * Adds a new listener to OnVehicleDamageStatusUpdate
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnVehicleDamageStatusUpdate] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a vehicle element such as doors, tires, panels, or lights change their damage status.
   * @see GetVehicleDamageStatus
   * @see UpdateVehicleDamageStatus
   * @remarks This callback was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks This does not include vehicle health changes
   * @returns {void}
   */
  static addListener(eventName: 'OnVehicleDamageStatusUpdate', func: (vehicleid: number, playerid: number) => void): void;
  /**
   * Adds a new listener to OnUnoccupiedVehicleUpdate
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnUnoccupiedVehicleUpdate] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player&#x27;s client updates/syncs the position of a vehicle they&#x27;re not driving. This can happen outside of the vehicle or when the player is a passenger of a vehicle that has no driver.
   * @see OnTrailerUpdate
   * @remarks This callback was added in SA-MP 0.3c R3 and will not work in earlier versions!
   * @remarks This callback is called very frequently per second per unoccupied vehicle. You should refrain from implementing intensive calculations or intensive file writing/reading operations in this callback.
   * @remarks GetVehiclePos will return the old coordinates of the vehicle before this update.
   * @returns {void}
   */
  static addListener(eventName: 'OnUnoccupiedVehicleUpdate', func: (vehicleid: number, playerid: number, passenger_seat: number, new_x: number, new_y: number, new_z: number, vel_x: number, vel_y: number, vel_z: number) => void): void;
  /**
   * Adds a new listener to OnPlayerSelectedMenuRow
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerSelectedMenuRow] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player selects an item from a menu (ShowMenuForPlayer).
   * @see OnPlayerExitedMenu
   * @see OnDialogResponse
   * @see CreateMenu
   * @see DestroyMenu
   * @see AddMenuItem
   * @see ShowMenuForPlayer
   * @see HideMenuForPlayer
   * @remarks The menu ID is not passed to this callback. GetPlayerMenu must be used to determine which menu the player selected an item on.
   * @returns {void}
   */
  static addListener(eventName: 'OnPlayerSelectedMenuRow', func: (playerid: number, row: number) => void): void;
  /**
   * Adds a new listener to OnPlayerExitedMenu
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerExitedMenu] - Name of the event
   * @param {function} func - Event callback
   * @summary Called when a player exits a menu.
   * @see OnPlayerSelectedMenuRow
   * @see CreateMenu
   * @see DestroyMenu
   * @returns {void}
   */
  static addListener(eventName: 'OnPlayerExitedMenu', func: (playerid: number) => void): void;
  /**
   * Adds a new listener to OnPlayerInteriorChange
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerInteriorChange] - Name of the event
   * @param {function} func - Event callback
   * @summary Called when a player changes interior. Can be triggered by SetPlayerInterior or when a player enter/exits a building.
   * @see SetPlayerInterior
   * @see GetPlayerInterior
   * @see LinkVehicleToInterior
   * @see OnPlayerStateChange
   * @returns {void}
   */
  static addListener(eventName: 'OnPlayerInteriorChange', func: (playerid: number, newinteriorid: number, oldinteriorid: number) => void): void;
  /**
   * Adds a new listener to OnPlayerKeyStateChange
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerKeyStateChange] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when the state of any supported key is changed (pressed/released). Directional keys do not trigger OnPlayerKeyStateChange (up/down/left/right).
   * @see GetPlayerKeys
   * @remarks This callback can also be called by NPC.
   * @remarks 
  Useful macros:
  
    // HOLDING(keys)
    #define HOLDING(%0) ((newkeys &amp; (%0)) &#x3D;&#x3D; (%0))
    
    // PRESSED(keys)
    #define PRESSED(%0) (((newkeys &amp; (%0)) &#x3D;&#x3D; (%0)) &amp;&amp; ((oldkeys &amp; (%0)) !&#x3D; (%0)))
    
    // PRESSING(keyVariable, keys)
    #define PRESSING(%0,%1) (%0 &amp; (%1))
    
    // RELEASED(keys)
    #define RELEASED(%0) (((newkeys &amp; (%0)) !&#x3D; (%0)) &amp;&amp; ((oldkeys &amp; (%0)) &#x3D;&#x3D; (%0)))
  

   * @returns {void}
   */
  static addListener(eventName: 'OnPlayerKeyStateChange', func: (playerid: number, newkeys: number, oldkeys: number) => void): void;
  /**
   * Adds a new listener to OnRconLoginAttempt
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnRconLoginAttempt] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when someone attempts to log in to RCON in-game; successful or not.
   * @see OnRconCommand
   * @see IsPlayerAdmin
   * @see SendRconCommand
   * @remarks This callback was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks This callback is only called when /rcon login is used in-game. 
   * @remarks This callback is only called when the player is not yet logged in. When the player is logged in, OnRconCommand is called instead.
   * @returns {void}
   */
  static addListener(eventName: 'OnRconLoginAttempt', func: (ip: string, password: string, success: number) => void): void;
  /**
   * Adds a new listener to OnPlayerUpdate
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerUpdate] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static addListener(eventName: 'OnPlayerUpdate', func: (playerid: number) => void): void;
  /**
   * Adds a new listener to OnPlayerStreamIn
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerStreamIn] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player is streamed by some other player&#x27;s client.
   * @see OnPlayerStreamOut
   * @see OnActorStreamIn
   * @see OnVehicleStreamIn
   * @remarks This callback was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks This callback can also be called by NPC.
   * @returns {void}
   */
  static addListener(eventName: 'OnPlayerStreamIn', func: (playerid: number, forplayerid: number) => void): void;
  /**
   * Adds a new listener to OnPlayerStreamOut
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerStreamOut] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player is streamed out from some other player&#x27;s client.
   * @see OnPlayerStreamIn
   * @see OnActorStreamOut
   * @see OnVehicleStreamOut
   * @remarks This callback was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks This callback can also be called by NPC.
   * @returns {void}
   */
  static addListener(eventName: 'OnPlayerStreamOut', func: (playerid: number, forplayerid: number) => void): void;
  /**
   * Adds a new listener to OnVehicleStreamIn
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnVehicleStreamIn] - Name of the event
   * @param {function} func - Event callback
   * @summary Called when a vehicle is streamed to a player&#x27;s client.
   * @see OnVehicleStreamOut
   * @see OnPlayerStreamIn
   * @see OnPlayerStreamOut
   * @remarks This callback was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks This callback can also be called by NPC.
   * @returns {void}
   */
  static addListener(eventName: 'OnVehicleStreamIn', func: (vehicleid: number, forplayerid: number) => void): void;
  /**
   * Adds a new listener to OnVehicleStreamOut
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnVehicleStreamOut] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a vehicle is streamed out for a player&#x27;s client (it&#x27;s so far away that they can&#x27;t see it).
   * @see OnVehicleStreamIn
   * @see OnPlayerStreamIn
   * @see OnPlayerStreamOut
   * @remarks This callback was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks This callback can also be called by NPC.
   * @returns {void}
   */
  static addListener(eventName: 'OnVehicleStreamOut', func: (vehicleid: number, forplayerid: number) => void): void;
  /**
   * Adds a new listener to OnActorStreamIn
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnActorStreamIn] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when an actor is streamed in by a player&#x27;s client.
   * @see OnActorStreamOut
   * @see OnPlayerStreamIn
   * @remarks This function was added in SA-MP 0.3.7 and will not work in earlier versions!
   * @remarks This callback can also be called by NPC.
   * @remarks It is always called first in filterscripts.
   * @returns {void}
   */
  static addListener(eventName: 'OnActorStreamIn', func: (actorid: number, forplayerid: number) => void): void;
  /**
   * Adds a new listener to OnActorStreamOut
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnActorStreamOut] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when an actor is streamed out by a player&#x27;s client.
   * @see OnActorStreamIn
   * @see OnPlayerStreamOut
   * @remarks This function was added in SA-MP 0.3.7 and will not work in earlier versions!
   * @remarks This callback can also be called by NPC.
   * @remarks It is always called first in filterscripts.
   * @returns {void}
   */
  static addListener(eventName: 'OnActorStreamOut', func: (actorid: number, forplayerid: number) => void): void;
  /**
   * Adds a new listener to OnDialogResponse
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnDialogResponse] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player responds to a dialog shown using ShowPlayerDialog by either clicking a button, pressing ENTER/ESC or double-clicking a list item (if using a list style dialog).
   * @see ShowPlayerDialog
   * @remarks This callback was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks A player&#x27;s dialog doesn&#x27;t hide when the gamemode restarts, causing the server to print &quot;Warning: PlayerDialogResponse PlayerId: 0 dialog ID doesn&#x27;t match last sent dialog ID&quot; if a player responded to this dialog after restart.
   * @remarks Parameters can contain different values, based on dialog&#x27;s style.
   * @returns {void}
   */
  static addListener(eventName: 'OnDialogResponse', func: (playerid: number, dialogid: number, response: number, listitem: number, inputtext: string) => void): void;
  /**
   * Adds a new listener to OnPlayerTakeDamage
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerTakeDamage] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player takes damage.
   * @see OnPlayerGiveDamage
   * @see OnPlayerWeaponShot
   * @remarks This callback was added in SA-MP 0.3d and will not work in earlier versions!
   * @remarks GetPlayerHealth and GetPlayerArmour will return the old amounts of the player before this callback. 
   * @remarks 
  The weaponid will return 37 (flame thrower) from any fire sources (e.g. molotov, 18).
  The weaponid will return 51 from any weapon that creates an explosion (e.g. RPG, grenade)
  playerid is the only one who can call the callback.
  The amount is always the maximum damage the weaponid can do, even when the health left is less than that maximum damage. So when a player has 100.0 health and gets shot with a Desert Eagle which has a damage value of 46.2, it takes 3 shots to kill that player. All 3 shots will show an amount of 46.2, even though when the last shot hits, the player only has 7.6 health left.

   * @returns {void}
   */
  static addListener(eventName: 'OnPlayerTakeDamage', func: (playerid: number, issuerid: number, amount: number, weaponid: number, bodypart: number) => void): void;
  /**
   * Adds a new listener to OnPlayerGiveDamage
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerGiveDamage] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player gives damage to another player.
   * @see OnPlayerTakeDamage
   * @remarks This callback was added in SA-MP 0.3d and will not work in earlier versions!
   * @remarks 
  Keep in mind this function can be inaccurate in some cases.
  If you want to prevent certain players from damaging eachother, use SetPlayerTeam.
  The weaponid will return 37 (flame thrower) from any fire sources (e.g. molotov, 18)
  The weaponid will return 51 from any weapon that creates an explosion (e.g. RPG, grenade)
  playerid is the only one who can call the callback.
  The amount is always the maximum damage the weaponid can do, even when the health left is less than that maximum damage. So when a player has 100.0 health and gets shot with a Desert Eagle which has a damage value of 46.2, it takes 3 shots to kill that player. All 3 shots will show an amount of 46.2, even though when the last shot hits, the player only has 7.6 health left.

   * @returns {void}
   */
  static addListener(eventName: 'OnPlayerGiveDamage', func: (playerid: number, damagedid: number, amount: number, weaponid: number, bodypart: number) => void): void;
  /**
   * Adds a new listener to OnPlayerGiveDamageActor
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerGiveDamageActor] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player gives damage to an actor.
   * @see CreateActor
   * @see SetActorInvulnerable
   * @see SetActorHealth
   * @see GetActorHealth
   * @see IsActorInvulnerable
   * @see IsValidActor
   * @see OnActorStreamOut
   * @see OnPlayerStreamIn
   * @remarks This callback was added in SA-MP 0.3.7 and will not work in earlier versions!
   * @remarks This function does not get called if the actor is set invulnerable (WHICH IS BY DEFAULT). See SetActorInvulnerable.
   * @returns {void}
   */
  static addListener(eventName: 'OnPlayerGiveDamageActor', func: (playerid: number, damaged_actorid: number, amount: number, weaponid: number, bodypart: number) => void): void;
  /**
   * Adds a new listener to OnPlayerClickMap
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerClickMap] - Name of the event
   * @param {function} func - Event callback
   * @summary OnPlayerClickMap is called when a player places a target/waypoint on the pause menu map (by right-clicking).
   * @see SetPlayerPos
   * @see SetPlayerPosFindZ
   * @see GetPlayerPos
   * @remarks This callback was added in SA-MP 0.3d and will not work in earlier versions!
   * @remarks The Z value returned will be 0 (invalid) if it is far away from the player; use the MapAndreas plugin to get a more accurate Z coordinate.
   * @returns {void}
   */
  static addListener(eventName: 'OnPlayerClickMap', func: (playerid: number, fX: number, fY: number, fZ: number) => void): void;
  /**
   * Adds a new listener to OnPlayerClickTextDraw
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerClickTextDraw] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player clicks on a textdraw or cancels the select mode with the Escape key.
   * @see OnPlayerClickPlayerTextDraw
   * @see OnPlayerClickPlayer
   * @remarks This callback was added in SA-MP 0.3e and will not work in earlier versions!
   * @remarks The clickable area is defined by TextDrawTextSize. The x and y parameters passed to that function must not be zero or negative. 
   * @remarks Do not use CancelSelectTextDraw unconditionally within this callback. This results in an infinite loop. 
   * @returns {void}
   */
  static addListener(eventName: 'OnPlayerClickTextDraw', func: (playerid: number, clickedid: number) => void): void;
  /**
   * Adds a new listener to OnPlayerClickPlayerTextDraw
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerClickPlayerTextDraw] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player clicks on a player-textdraw. It is not called when player cancels the select mode (ESC) - however, OnPlayerClickTextDraw is.
   * @see PlayerTextDrawSetSelectable
   * @see OnPlayerClickTextDraw
   * @see OnPlayerClickPlayer
   * @remarks This callback was added in SA-MP 0.3e and will not work in earlier versions!
   * @remarks When a player presses ESC to cancel selecting a textdraw, OnPlayerClickTextDraw is called with a textdraw ID of INVALID_TEXT_DRAW. OnPlayerClickPlayerTextDraw won&#x27;t be called also.
   * @returns {void}
   */
  static addListener(eventName: 'OnPlayerClickPlayerTextDraw', func: (playerid: number, playertextid: number) => void): void;
  /**
   * Adds a new listener to OnIncomingConnection
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnIncomingConnection] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when an IP address attempts a connection to the server. To block incoming connections, use BlockIpAddress.
   * @see OnPlayerConnect
   * @see OnPlayerDisconnect
   * @see OnPlayerFinishedDownloading
   * @see BlockIpAddress
   * @see UnBlockIpAddress
   * @remarks  	This callback was added in SA-MP 0.3z R2-2 and will not work in earlier versions!
   * @returns {void}
   */
  static addListener(eventName: 'OnIncomingConnection', func: (playerid: number, ip_address: string, port: number) => void): void;
  /**
   * Adds a new listener to OnTrailerUpdate
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnTrailerUpdate] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player sent a trailer update.
   * @see OnUnoccupiedVehicleUpdate
   * @see GetVehicleTrailer
   * @see IsTrailerAttachedToVehicle
   * @see AttachTrailerToVehicle
   * @see DetachTrailerFromVehicle
   * @remarks This callback was added in SA-MP 0.3z R4 and will not work in earlier versions!
   * @remarks This callback is called very frequently per second per trailer. You should refrain from implementing intensive calculations or intensive file writing/reading operations in this callback. 
   * @returns {void}
   */
  static addListener(eventName: 'OnTrailerUpdate', func: (playerid: number, vehicleid: number) => void): void;
  /**
   * Adds a new listener to OnVehicleSirenStateChange
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnVehicleSirenStateChange] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a vehicle&#x27;s siren is toggled.
   * @see GetVehicleParamsSirenState
   * @remarks This callback was added in SA-MP 0.3.7 and will not work in earlier versions!
   * @remarks This callback can also be called by NPC.
   * @remarks This callback is only called when a vehicle&#x27;s siren is toggled on or off, NOT when the alternate siren is in use (holding horn).
   * @returns {void}
   */
  static addListener(eventName: 'OnVehicleSirenStateChange', func: (playerid: number, vehicleid: number, newstate: number) => void): void;
  /**
   * Adds a new listener to OnPlayerFinishedDownloading
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerFinishedDownloading] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player finishes downloading custom models. For more information on how to add custom models to your server, see the release thread and this tutorial.
   * @see OnPlayerConnect
   * @see OnPlayerDisconnect
   * @see OnIncomingConnection
   * @remarks This callback was added in SA-MP 0.3DL and will not work in earlier versions!
   * @remarks This callback is called every time a player changes virtual worlds, even if there are no custom models present in that world.
   * @returns {void}
   */
  static addListener(eventName: 'OnPlayerFinishedDownloading', func: (playerid: number, virtualworld: number) => void): void;
  /**
   * Adds a new listener to OnPlayerClickPlayer
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerClickPlayer] - Name of the event
   * @param {function} func - Event callback
   * @summary Called when a player double-clicks on a player on the scoreboard.
   * @see OnPlayerClickTextDraw
   * @remarks This callback was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks There is currently only one  (0 - CLICK_SOURCE_SCOREBOARD). The existence of this argument suggests that more sources may be supported in the future.
   * @returns {void}
   */
  static addListener(eventName: 'OnPlayerClickPlayer', func: (playerid: number, clickedplayerid: number, source: number) => void): void;
  /**
   * Adds a new listener to OnPlayerSelectObject
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerSelectObject] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player finishes editing an object (EditObject/EditPlayerObject).
   * @summary This callback is called when a player ends attached object edition mode.
   * @summary This callback is called when a player selects an object after SelectObject has been used.
   * @see EditObject
   * @see CreateObject
   * @see DestroyObject
   * @see MoveObject
   * @see EditAttachedObject
   * @see SetPlayerAttachedObject
   * @see SelectObject
   * @remarks This callback was added in SA-MP 0.3e and will not work in earlier versions!
   * @remarks When using EDIT_RESPONSE_UPDATE be aware that this callback will not be called when releasing an edit in progress resulting in the last update of EDIT_RESPONSE_UPDATE being out of sync of the objects current position.
   * @remarks This callback was added in SA-MP 0.3e and will not work in earlier versions!
   * @remarks Editions should be discarded if response was 0 (cancelled). This must be done by storing the offsets etc. in an array BEFORE using EditAttachedObject.
   * @remarks This function was added in SA-MP 0.3e and will not work in earlier versions!
   * @returns {void}
   */
  static addListener(eventName: 'OnPlayerSelectObject', func: (playerid: number, type: number, objectid: number, modelid: number, fX: number, fY: number, fZ: number) => void): void;
  /**
   * Adds a new listener to OnPlayerWeaponShot
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerWeaponShot] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player fires a shot from a weapon. Only bullet weapons are supported. Only passenger drive-by is supported (not driver drive-by, and not sea sparrow / hunter shots).
   * @see OnPlayerGiveDamage
   * @see GetPlayerLastShotVectors
   * @remarks This callback was added in SA-MP 0.3z and will not work in earlier versions!
   * @remarks 
    BULLET_HIT_TYPE_NONE(0)
    BULLET_HIT_TYPE_PLAYER(1)
    BULLET_HIT_TYPE_VEHICLE(2)
    BULLET_HIT_TYPE_OBJECT(3)
    BULLET_HIT_TYPE_PLAYER_OBJECT(4)

   * @remarks BULLET_HIT_TYPE_PLAYER is also called for NPCs. Actors are ignored by this callback and detects as BULLET_HIT_TYPE_NONE.
   * @remarks This callback is only called when lag compensation is enabled. 
   * @remarks 
  If hittype is:
  
    - BULLET_HIT_TYPE_NONE: the fX, fY and fZ parameters are normal coordinates, will give 0.0 for coordinates if nothing was hit (e.g. far object that the bullet can&#x27;t reach);
    - Others: the fX, fY and fZ are offsets relative to the hitid.
  

   * @remarks 
  Isn&#x27;t called if you fired in vehicle as driver or if you are looking behind with the aim enabled (shooting in air).
  It is called as BULLET_HIT_TYPE_VEHICLE with the correct hitid (the hit player&#x27;s vehicleid) if you are shooting a player which is in a vehicle. It won&#x27;t be called as BULLET_HIT_TYPE_PLAYER at all.
  Partially fixed in SA-MP 0.3.7: If fake weapon data is sent by a malicious user, other player clients may freeze or crash. To combat this, check if the reported weaponid can actually fire bullets.

   * @remarks 

   * @remarks GetPlayerLastShotVectors can be used in this callback for more detailed bullet vector information.
   * @returns {void}
   */
  static addListener(eventName: 'OnPlayerWeaponShot', func: (playerid: number, weaponid: number, hittype: number, hitid: number, fX: number, fY: number, fZ: number) => void): void;
  /**
   * Adds a new listener to OnClientCheckResponse
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnClientCheckResponse] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a SendClientCheck request comletes
   * @see SendClientCheck
   * @returns {void}
   */
  static addListener(eventName: 'OnClientCheckResponse', func: (playerid: number, actionid: number, memaddr: number, retndata: number) => void): void;
  /**
   * Adds a new listener to OnScriptCash
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} [eventName=OnScriptCash] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static addListener(eventName: 'OnScriptCash', func: (playerid: number, amount: number, source: number) => void): void;
  /**
   * Adds a new listener to OnGameModeInit
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnGameModeInit] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is triggered when the gamemode starts.
   * @see OnGameModeExit
   * @see OnFilterScriptInit
   * @see OnFilterScriptExit
   * @remarks This function can also be used in a filterscript to detect if the gamemode changes with RCON commands like changemode or gmx, as changing the gamemode does not reload a filterscript.
   * @returns {void}
   */
  static addEventListener(eventName: 'OnGameModeInit', func: () => void): void;
  /**
   * Adds a new listener to OnGameModeExit
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnGameModeExit] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a gamemode ends, either through &#x27;gmx&#x27;, the server being shut down, or GameModeExit.
   * @see OnGameModeInit
   * @see OnFilterScriptExit
   * @see OnFilterScriptInit
   * @see GameModeExit
   * @remarks This function can also be used in a filterscript to detect if the gamemode changes with RCON commands like changemode or gmx, as changing the gamemode does not reload a filterscript.
   * @remarks When using OnGameModeExit in conjunction with the &#x27;rcon gmx&#x27; console command keep in mind there is a potential for client bugs to occur an example of this is excessive RemoveBuildingForPlayer calls during OnGameModeInit which could result in a client crash. 
   * @remarks This callback will NOT be called if the server crashes or the process is killed by other means, such as using the Linux kill command or pressing the close-button on the Windows console. 
   * @returns {void}
   */
  static addEventListener(eventName: 'OnGameModeExit', func: () => void): void;
  /**
   * Adds a new listener to OnFilterScriptInit
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnFilterScriptInit] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a filterscript is initialized (loaded). It is only called inside the filterscript which is starting.
   * @see OnFilterScriptExit
   * @see OnGameModeInit
   * @see OnGameModeExit
   * @returns {void}
   */
  static addEventListener(eventName: 'OnFilterScriptInit', func: () => void): void;
  /**
   * Adds a new listener to OnFilterScriptExit
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnFilterScriptExit] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a filterscript is unloaded. It is only called inside the filterscript which is unloaded.
   * @see OnFilterScriptInit
   * @see OnGameModeInit
   * @see OnGameModeExit
   * @returns {void}
   */
  static addEventListener(eventName: 'OnFilterScriptExit', func: () => void): void;
  /**
   * Adds a new listener to OnPlayerConnect
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerConnect] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player connects to the server.
   * @see OnPlayerDisconnect
   * @see OnIncomingConnection
   * @see OnPlayerFinishedDownloading
   * @remarks This callback can also be called by NPC.
   * @returns {void}
   */
  static addEventListener(eventName: 'OnPlayerConnect', func: (playerid: number) => void): void;
  /**
   * Adds a new listener to OnPlayerDisconnect
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerDisconnect] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player disconnects from the server.
   * @see OnPlayerConnect
   * @see OnIncomingConnection
   * @see OnPlayerFinishedDownloading
   * @remarks This callback can also be called by NPC.
   * @remarks Some functions might not work correctly when used in this callback because the player is already disconnected when the callback is called. This means that you can&#x27;t get unambiguous information from functions like GetPlayerIp and GetPlayerPos.
   * @remarks 
  Reasons:
  
    0 - timeout/Crash - the player&#x27;s connection was lost. Either their game crashed or their network had a fault.
    1 - quit - the player purposefully quit, either using the /quit (/q) command or via the pause menu.
    2 - kick/ban - the player was kicked or banned by the server.
  

   * @returns {void}
   */
  static addEventListener(eventName: 'OnPlayerDisconnect', func: (playerid: number, reason: number) => void): void;
  /**
   * Adds a new listener to OnPlayerSpawn
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerSpawn] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player spawns.(i.e. after caling SpawnPlayer function).
   * @see OnPlayerDeath
   * @see OnVehicleSpawn
   * @see SpawnPlayer
   * @see AddPlayerClass
   * @see SetSpawnInfo
   * @remarks This callback can also be called by NPC.
   * @remarks The game sometimes deducts $100 from players after spawn.
   * @returns {void}
   */
  static addEventListener(eventName: 'OnPlayerSpawn', func: (playerid: number) => void): void;
  /**
   * Adds a new listener to OnPlayerDeath
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerDeath] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player dies, either by suicide or by being killed by another player.
   * @see OnPlayerSpawn
   * @see SendDeathMessage
   * @see SetPlayerHealth
   * @remarks 
  The reason will return 37 (flame thrower) from any fire sources (e.g. molotov, 18)
  The reason will return 51 from any weapon that creates an explosion (e.g. RPG, grenade)
  You do not need to check whether killerid is valid before using it in SendDeathMessage. INVALID_PLAYER_ID is a valid killerid ID parameter in that function.
  playerid is the only one who can call the callback. (good to know for anti fake death)

   * @returns {void}
   */
  static addEventListener(eventName: 'OnPlayerDeath', func: (playerid: number, killerid: number, reason: number) => void): void;
  /**
   * Adds a new listener to OnVehicleSpawn
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnVehicleSpawn] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a vehicle respawns.
   * @see OnVehicleDeath
   * @see OnPlayerSpawn
   * @see SetVehicleToRespawn
   * @see CreateVehicle
   * @returns {void}
   */
  static addEventListener(eventName: 'OnVehicleSpawn', func: (vehicleid: number) => void): void;
  /**
   * Adds a new listener to OnVehicleDeath
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnVehicleDeath] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a vehicle is destroyed - either by exploding or becoming submerged in water.
   * @see OnVehicleSpawn
   * @see SetVehicleHealth
   * @remarks This callback can also be called by NPC.
   * @remarks This callback will also be called when a vehicle enters water, but the vehicle can be saved from destruction by teleportation or driving out (if only partially submerged). The callback won&#x27;t be called a second time, and the vehicle may disappear when the driver exits, or after a short time.
   * @returns {void}
   */
  static addEventListener(eventName: 'OnVehicleDeath', func: (vehicleid: number, killerid: number) => void): void;
  /**
   * Adds a new listener to OnPlayerText
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerText] - Name of the event
   * @param {function} func - Event callback
   * @summary Called when a player sends a chat message.
   * @see OnPlayerCommandText
   * @see SendPlayerMessageToPlayer
   * @see SendPlayerMessageToAll
   * @remarks This callback can also be called by NPC.
   * @returns {void}
   */
  static addEventListener(eventName: 'OnPlayerText', func: (playerid: number, text: string) => void): void;
  /**
   * Adds a new listener to OnPlayerCommandText
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerCommandText] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player enters a command into the client chat window. Commands are anything that start with a forward slash, e.g. /help.
   * @see OnPlayerText
   * @see OnRconCommand
   * @see SendRconCommand
   * @remarks This callback can also be called by NPC.
   * @returns {void}
   */
  static addEventListener(eventName: 'OnPlayerCommandText', func: (playerid: number, cmdtext: string) => void): void;
  /**
   * Adds a new listener to OnPlayerRequestClass
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerRequestClass] - Name of the event
   * @param {function} func - Event callback
   * @summary Called when a player changes class at class selection (and when class selection first appears).
   * @see OnPlayerRequestSpawn
   * @see AddPlayerClass
   * @remarks This callback can also be called by NPC.
   * @remarks This callback is also called when a player presses F4.
   * @returns {void}
   */
  static addEventListener(eventName: 'OnPlayerRequestClass', func: (playerid: number, classid: number) => void): void;
  /**
   * Adds a new listener to OnPlayerEnterVehicle
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerEnterVehicle] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player starts to enter a vehicle, meaning the player is not in vehicle yet at the time this callback is called.
   * @see OnPlayerExitVehicle
   * @see OnPlayerStateChange
   * @see PutPlayerInVehicle
   * @see GetPlayerVehicleSeat
   * @remarks This callback is called when a player BEGINS to enter a vehicle, not when they HAVE entered it. See OnPlayerStateChange. 
   * @remarks This callback is still called if the player is denied entry to the vehicle (e.g. it is locked or full). 
   * @returns {void}
   */
  static addEventListener(eventName: 'OnPlayerEnterVehicle', func: (playerid: number, vehicleid: number, ispassenger: number) => void): void;
  /**
   * Adds a new listener to OnPlayerExitVehicle
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerExitVehicle] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player starts to exit a vehicle.
   * @see OnPlayerEnterVehicle
   * @see OnPlayerStateChange
   * @see RemovePlayerFromVehicle
   * @see GetPlayerVehicleSeat
   * @remarks Not called if the player falls off a bike or is removed from a vehicle by other means such as using SetPlayerPos.
   * @remarks You must use OnPlayerStateChange and check if their old state is PLAYER_STATE_DRIVER or PLAYER_STATE_PASSENGER and their new state is PLAYER_STATE_ONFOOT.
   * @returns {void}
   */
  static addEventListener(eventName: 'OnPlayerExitVehicle', func: (playerid: number, vehicleid: number) => void): void;
  /**
   * Adds a new listener to OnPlayerStateChange
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerStateChange] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player changes state. For example, when a player changes from being the driver of a vehicle to being on-foot.
   * @see OnPlayerInteriorChange
   * @see GetPlayerState
   * @see GetPlayerSpecialAction
   * @see SetPlayerSpecialAction
   * @remarks This callback can also be called by NPC.
   * @remarks 
  States:
  
    PLAYER_STATE_NONE - empty (while initializing)
    PLAYER_STATE_ONFOOT - player is on foot
    PLAYER_STATE_DRIVER - player is the driver of a vehicle
    PLAYER_STATE_PASSENGER - player is passenger of a vehicle
    PLAYER_STATE_WASTED - player is dead or on class selection
    PLAYER_STATE_SPAWNED - player is spawned
    PLAYER_STATE_SPECTATING - player is spectating
    PLAYER_STATE_EXIT_VEHICLE - player exits a vehicle
    PLAYER_STATE_ENTER_VEHICLE_DRIVER - player enters a vehicle as driver
    PLAYER_STATE_ENTER_VEHICLE_PASSENGER - player enters a vehicle as passenger 
  

   * @returns {void}
   */
  static addEventListener(eventName: 'OnPlayerStateChange', func: (playerid: number, newstate: number, oldstate: number) => void): void;
  /**
   * Adds a new listener to OnPlayerEnterCheckpoint
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerEnterCheckpoint] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player enters the checkpoint set for that player.
   * @see OnPlayerLeaveCheckpoint
   * @see OnPlayerEnterRaceCheckpoint
   * @see OnPlayerLeaveRaceCheckpoint
   * @see SetPlayerCheckpoint
   * @see DisablePlayerCheckpoint
   * @see IsPlayerInCheckpoint
   * @see SetPlayerRaceCheckpoint
   * @see DisablePlayerRaceCheckpoint
   * @see IsPlayerInRaceCheckpoint
   * @remarks This callback can also be called by NPC.
   * @returns {void}
   */
  static addEventListener(eventName: 'OnPlayerEnterCheckpoint', func: (playerid: number) => void): void;
  /**
   * Adds a new listener to OnPlayerLeaveCheckpoint
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerLeaveCheckpoint] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player leaves the checkpoint set for them by SetPlayerCheckpoint. Only one checkpoint can be set at a time.
   * @see OnPlayerEnterCheckpoint
   * @see OnPlayerEnterRaceCheckpoint
   * @see OnPlayerLeaveRaceCheckpoint
   * @see SetPlayerCheckpoint
   * @see DisablePlayerCheckpoint
   * @see IsPlayerInCheckpoint
   * @see SetPlayerRaceCheckpoint
   * @see DisablePlayerRaceCheckpoint
   * @see IsPlayerInRaceCheckpoint
   * @remarks This callback can also be called by NPC.
   * @returns {void}
   */
  static addEventListener(eventName: 'OnPlayerLeaveCheckpoint', func: (playerid: number) => void): void;
  /**
   * Adds a new listener to OnPlayerEnterRaceCheckpoint
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerEnterRaceCheckpoint] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player enters a race checkpoint.
   * @see OnPlayerEnterCheckpoint
   * @see OnPlayerLeaveCheckpoint
   * @see OnPlayerLeaveRaceCheckpoint
   * @see SetPlayerCheckpoint
   * @see DisablePlayerCheckpoint
   * @see IsPlayerInCheckpoint
   * @see SetPlayerRaceCheckpoint
   * @see DisablePlayerRaceCheckpoint
   * @see IsPlayerInRaceCheckpoint
   * @remarks This callback can also be called by NPC.
   * @returns {void}
   */
  static addEventListener(eventName: 'OnPlayerEnterRaceCheckpoint', func: (playerid: number) => void): void;
  /**
   * Adds a new listener to OnPlayerLeaveRaceCheckpoint
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerLeaveRaceCheckpoint] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player leaves the race checkpoint.
   * @see OnPlayerEnterCheckpoint
   * @see OnPlayerLeaveCheckpoint
   * @see OnPlayerEnterRaceCheckpoint
   * @see SetPlayerCheckpoint
   * @see DisablePlayerCheckpoint
   * @see IsPlayerInCheckpoint
   * @see SetPlayerRaceCheckpoint
   * @see DisablePlayerRaceCheckpoint
   * @see IsPlayerInRaceCheckpoint
   * @remarks This callback can also be called by NPC.
   * @returns {void}
   */
  static addEventListener(eventName: 'OnPlayerLeaveRaceCheckpoint', func: (playerid: number) => void): void;
  /**
   * Adds a new listener to OnRconCommand
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnRconCommand] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a command is sent through the server console, remote RCON, or via the in-game &quot;/rcon command&quot;.
   * @see IsPlayerAdmin
   * @see OnRconLoginAttempt
   * @remarks You will need to include this callback in a loaded filterscript for it to work in the gamemode!
   * @remarks &quot;/rcon&quot; is not included in &quot;cmd&quot; when a player types a command. 
   * @remarks If you use the print function here, it will send a message to the player who typed the command in-game as well as the log.
   * @remarks This callback is not called when the player is not logged in as RCON admin. 
   * @remarks When the player is not logged in as RCON admin and uses /rcon login, this callback will not be called and OnRconLoginAttempt is called instead. However, when the player is logged in as RCON admin, the use of this command will call this callback. 
   * @returns {void}
   */
  static addEventListener(eventName: 'OnRconCommand', func: (cmd: string) => void): void;
  /**
   * Adds a new listener to OnPlayerRequestSpawn
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerRequestSpawn] - Name of the event
   * @param {function} func - Event callback
   * @summary Called when a player attempts to spawn via class selection either by pressing SHIFT or clicking the &#x27;Spawn&#x27; button.
   * @see OnPlayerSpawn
   * @see OnPlayerRequestClass
   * @remarks This callback can also be called by NPC.
   * @remarks To prevent players from spawning with certain classes, the last viewed class must be saved in a variable in OnPlayerRequestClass.
   * @returns {void}
   */
  static addEventListener(eventName: 'OnPlayerRequestSpawn', func: (playerid: number) => void): void;
  /**
   * Adds a new listener to OnObjectMoved
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnObjectMoved] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when an object is moved after MoveObject (when it stops moving).
   * @see MoveObject
   * @see IsObjectMoving
   * @see StopObject
   * @see OnPlayerObjectMoved
   * @remarks SetObjectPos does not work when used in this callback. To fix it, recreate the object.
   * @returns {void}
   */
  static addEventListener(eventName: 'OnObjectMoved', func: (objectid: number) => void): void;
  /**
   * Adds a new listener to OnPlayerObjectMoved
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerObjectMoved] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player object is moved after MovePlayerObject (when it stops moving).
   * @see OnObjectMoved
   * @see MovePlayerObject
   * @see IsPlayerObjectMoving
   * @see StopPlayerObject
   * @remarks This callback can also be called for NPC.
   * @returns {void}
   */
  static addEventListener(eventName: 'OnPlayerObjectMoved', func: (playerid: number, objectid: number) => void): void;
  /**
   * Adds a new listener to OnPlayerPickUpPickup
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerPickUpPickup] - Name of the event
   * @param {function} func - Event callback
   * @summary Called when a player picks up a pickup created with CreatePickup.
   * @see CreatePickup
   * @see DestroyPickup
   * @returns {void}
   */
  static addEventListener(eventName: 'OnPlayerPickUpPickup', func: (playerid: number, pickupid: number) => void): void;
  /**
   * Adds a new listener to OnVehicleMod
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnVehicleMod] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a vehicle is modded.
   * @see AddVehicleComponent
   * @see OnEnterExitModShop
   * @see OnVehiclePaintjob
   * @see OnVehicleRespray
   * @remarks This callback is NOT called by AddVehicleComponent.
   * @returns {void}
   */
  static addEventListener(eventName: 'OnVehicleMod', func: (playerid: number, vehicleid: number, componentid: number) => void): void;
  /**
   * Adds a new listener to OnEnterExitModShop
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnEnterExitModShop] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player enters or exits a mod shop.
   * @see OnVehicleMod
   * @see OnVehicleRespray
   * @see OnVehiclePaintjob
   * @see AddVehicleComponent
   * @remarks This callback was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks Players collide when they get into the same mod shop.
   * @returns {void}
   */
  static addEventListener(eventName: 'OnEnterExitModShop', func: (playerid: number, enterexit: number, interiorid: number) => void): void;
  /**
   * Adds a new listener to OnVehiclePaintjob
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnVehiclePaintjob] - Name of the event
   * @param {function} func - Event callback
   * @summary Called when a player previews a vehicle paintjob inside a mod shop. Watch out, this callback is not called when the player buys the paintjob.
   * @see ChangeVehiclePaintjob
   * @see ChangeVehicleColor
   * @see OnVehicleRespray
   * @see OnVehicleMod
   * @remarks This callback is not called by ChangeVehiclePaintjob.
   * @returns {void}
   */
  static addEventListener(eventName: 'OnVehiclePaintjob', func: (playerid: number, vehicleid: number, paintjobid: number) => void): void;
  /**
   * Adds a new listener to OnVehicleRespray
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnVehicleRespray] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player exits a mod shop, even if the colors weren&#x27;t changed. Watch out, the name is ambiguous, Pay &#x27;n&#x27; Spray shops don&#x27;t call this callback.
   * @see ChangeVehicleColor
   * @see ChangeVehiclePaintjob
   * @see OnVehiclePaintjob
   * @see OnVehicleMod
   * @see OnEnterExitModShop
   * @remarks Previewing a component inside a mod shop might call this callback.
   * @remarks This callback is not called by ChangeVehicleColor.
   * @returns {void}
   */
  static addEventListener(eventName: 'OnVehicleRespray', func: (playerid: number, vehicleid: number, color1: number, color2: number) => void): void;
  /**
   * Adds a new listener to OnVehicleDamageStatusUpdate
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnVehicleDamageStatusUpdate] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a vehicle element such as doors, tires, panels, or lights change their damage status.
   * @see GetVehicleDamageStatus
   * @see UpdateVehicleDamageStatus
   * @remarks This callback was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks This does not include vehicle health changes
   * @returns {void}
   */
  static addEventListener(eventName: 'OnVehicleDamageStatusUpdate', func: (vehicleid: number, playerid: number) => void): void;
  /**
   * Adds a new listener to OnUnoccupiedVehicleUpdate
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnUnoccupiedVehicleUpdate] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player&#x27;s client updates/syncs the position of a vehicle they&#x27;re not driving. This can happen outside of the vehicle or when the player is a passenger of a vehicle that has no driver.
   * @see OnTrailerUpdate
   * @remarks This callback was added in SA-MP 0.3c R3 and will not work in earlier versions!
   * @remarks This callback is called very frequently per second per unoccupied vehicle. You should refrain from implementing intensive calculations or intensive file writing/reading operations in this callback.
   * @remarks GetVehiclePos will return the old coordinates of the vehicle before this update.
   * @returns {void}
   */
  static addEventListener(eventName: 'OnUnoccupiedVehicleUpdate', func: (vehicleid: number, playerid: number, passenger_seat: number, new_x: number, new_y: number, new_z: number, vel_x: number, vel_y: number, vel_z: number) => void): void;
  /**
   * Adds a new listener to OnPlayerSelectedMenuRow
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerSelectedMenuRow] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player selects an item from a menu (ShowMenuForPlayer).
   * @see OnPlayerExitedMenu
   * @see OnDialogResponse
   * @see CreateMenu
   * @see DestroyMenu
   * @see AddMenuItem
   * @see ShowMenuForPlayer
   * @see HideMenuForPlayer
   * @remarks The menu ID is not passed to this callback. GetPlayerMenu must be used to determine which menu the player selected an item on.
   * @returns {void}
   */
  static addEventListener(eventName: 'OnPlayerSelectedMenuRow', func: (playerid: number, row: number) => void): void;
  /**
   * Adds a new listener to OnPlayerExitedMenu
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerExitedMenu] - Name of the event
   * @param {function} func - Event callback
   * @summary Called when a player exits a menu.
   * @see OnPlayerSelectedMenuRow
   * @see CreateMenu
   * @see DestroyMenu
   * @returns {void}
   */
  static addEventListener(eventName: 'OnPlayerExitedMenu', func: (playerid: number) => void): void;
  /**
   * Adds a new listener to OnPlayerInteriorChange
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerInteriorChange] - Name of the event
   * @param {function} func - Event callback
   * @summary Called when a player changes interior. Can be triggered by SetPlayerInterior or when a player enter/exits a building.
   * @see SetPlayerInterior
   * @see GetPlayerInterior
   * @see LinkVehicleToInterior
   * @see OnPlayerStateChange
   * @returns {void}
   */
  static addEventListener(eventName: 'OnPlayerInteriorChange', func: (playerid: number, newinteriorid: number, oldinteriorid: number) => void): void;
  /**
   * Adds a new listener to OnPlayerKeyStateChange
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerKeyStateChange] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when the state of any supported key is changed (pressed/released). Directional keys do not trigger OnPlayerKeyStateChange (up/down/left/right).
   * @see GetPlayerKeys
   * @remarks This callback can also be called by NPC.
   * @remarks 
  Useful macros:
  
    // HOLDING(keys)
    #define HOLDING(%0) ((newkeys &amp; (%0)) &#x3D;&#x3D; (%0))
    
    // PRESSED(keys)
    #define PRESSED(%0) (((newkeys &amp; (%0)) &#x3D;&#x3D; (%0)) &amp;&amp; ((oldkeys &amp; (%0)) !&#x3D; (%0)))
    
    // PRESSING(keyVariable, keys)
    #define PRESSING(%0,%1) (%0 &amp; (%1))
    
    // RELEASED(keys)
    #define RELEASED(%0) (((newkeys &amp; (%0)) !&#x3D; (%0)) &amp;&amp; ((oldkeys &amp; (%0)) &#x3D;&#x3D; (%0)))
  

   * @returns {void}
   */
  static addEventListener(eventName: 'OnPlayerKeyStateChange', func: (playerid: number, newkeys: number, oldkeys: number) => void): void;
  /**
   * Adds a new listener to OnRconLoginAttempt
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnRconLoginAttempt] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when someone attempts to log in to RCON in-game; successful or not.
   * @see OnRconCommand
   * @see IsPlayerAdmin
   * @see SendRconCommand
   * @remarks This callback was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks This callback is only called when /rcon login is used in-game. 
   * @remarks This callback is only called when the player is not yet logged in. When the player is logged in, OnRconCommand is called instead.
   * @returns {void}
   */
  static addEventListener(eventName: 'OnRconLoginAttempt', func: (ip: string, password: string, success: number) => void): void;
  /**
   * Adds a new listener to OnPlayerUpdate
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerUpdate] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static addEventListener(eventName: 'OnPlayerUpdate', func: (playerid: number) => void): void;
  /**
   * Adds a new listener to OnPlayerStreamIn
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerStreamIn] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player is streamed by some other player&#x27;s client.
   * @see OnPlayerStreamOut
   * @see OnActorStreamIn
   * @see OnVehicleStreamIn
   * @remarks This callback was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks This callback can also be called by NPC.
   * @returns {void}
   */
  static addEventListener(eventName: 'OnPlayerStreamIn', func: (playerid: number, forplayerid: number) => void): void;
  /**
   * Adds a new listener to OnPlayerStreamOut
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerStreamOut] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player is streamed out from some other player&#x27;s client.
   * @see OnPlayerStreamIn
   * @see OnActorStreamOut
   * @see OnVehicleStreamOut
   * @remarks This callback was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks This callback can also be called by NPC.
   * @returns {void}
   */
  static addEventListener(eventName: 'OnPlayerStreamOut', func: (playerid: number, forplayerid: number) => void): void;
  /**
   * Adds a new listener to OnVehicleStreamIn
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnVehicleStreamIn] - Name of the event
   * @param {function} func - Event callback
   * @summary Called when a vehicle is streamed to a player&#x27;s client.
   * @see OnVehicleStreamOut
   * @see OnPlayerStreamIn
   * @see OnPlayerStreamOut
   * @remarks This callback was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks This callback can also be called by NPC.
   * @returns {void}
   */
  static addEventListener(eventName: 'OnVehicleStreamIn', func: (vehicleid: number, forplayerid: number) => void): void;
  /**
   * Adds a new listener to OnVehicleStreamOut
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnVehicleStreamOut] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a vehicle is streamed out for a player&#x27;s client (it&#x27;s so far away that they can&#x27;t see it).
   * @see OnVehicleStreamIn
   * @see OnPlayerStreamIn
   * @see OnPlayerStreamOut
   * @remarks This callback was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks This callback can also be called by NPC.
   * @returns {void}
   */
  static addEventListener(eventName: 'OnVehicleStreamOut', func: (vehicleid: number, forplayerid: number) => void): void;
  /**
   * Adds a new listener to OnActorStreamIn
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnActorStreamIn] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when an actor is streamed in by a player&#x27;s client.
   * @see OnActorStreamOut
   * @see OnPlayerStreamIn
   * @remarks This function was added in SA-MP 0.3.7 and will not work in earlier versions!
   * @remarks This callback can also be called by NPC.
   * @remarks It is always called first in filterscripts.
   * @returns {void}
   */
  static addEventListener(eventName: 'OnActorStreamIn', func: (actorid: number, forplayerid: number) => void): void;
  /**
   * Adds a new listener to OnActorStreamOut
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnActorStreamOut] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when an actor is streamed out by a player&#x27;s client.
   * @see OnActorStreamIn
   * @see OnPlayerStreamOut
   * @remarks This function was added in SA-MP 0.3.7 and will not work in earlier versions!
   * @remarks This callback can also be called by NPC.
   * @remarks It is always called first in filterscripts.
   * @returns {void}
   */
  static addEventListener(eventName: 'OnActorStreamOut', func: (actorid: number, forplayerid: number) => void): void;
  /**
   * Adds a new listener to OnDialogResponse
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnDialogResponse] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player responds to a dialog shown using ShowPlayerDialog by either clicking a button, pressing ENTER/ESC or double-clicking a list item (if using a list style dialog).
   * @see ShowPlayerDialog
   * @remarks This callback was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks A player&#x27;s dialog doesn&#x27;t hide when the gamemode restarts, causing the server to print &quot;Warning: PlayerDialogResponse PlayerId: 0 dialog ID doesn&#x27;t match last sent dialog ID&quot; if a player responded to this dialog after restart.
   * @remarks Parameters can contain different values, based on dialog&#x27;s style.
   * @returns {void}
   */
  static addEventListener(eventName: 'OnDialogResponse', func: (playerid: number, dialogid: number, response: number, listitem: number, inputtext: string) => void): void;
  /**
   * Adds a new listener to OnPlayerTakeDamage
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerTakeDamage] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player takes damage.
   * @see OnPlayerGiveDamage
   * @see OnPlayerWeaponShot
   * @remarks This callback was added in SA-MP 0.3d and will not work in earlier versions!
   * @remarks GetPlayerHealth and GetPlayerArmour will return the old amounts of the player before this callback. 
   * @remarks 
  The weaponid will return 37 (flame thrower) from any fire sources (e.g. molotov, 18).
  The weaponid will return 51 from any weapon that creates an explosion (e.g. RPG, grenade)
  playerid is the only one who can call the callback.
  The amount is always the maximum damage the weaponid can do, even when the health left is less than that maximum damage. So when a player has 100.0 health and gets shot with a Desert Eagle which has a damage value of 46.2, it takes 3 shots to kill that player. All 3 shots will show an amount of 46.2, even though when the last shot hits, the player only has 7.6 health left.

   * @returns {void}
   */
  static addEventListener(eventName: 'OnPlayerTakeDamage', func: (playerid: number, issuerid: number, amount: number, weaponid: number, bodypart: number) => void): void;
  /**
   * Adds a new listener to OnPlayerGiveDamage
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerGiveDamage] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player gives damage to another player.
   * @see OnPlayerTakeDamage
   * @remarks This callback was added in SA-MP 0.3d and will not work in earlier versions!
   * @remarks 
  Keep in mind this function can be inaccurate in some cases.
  If you want to prevent certain players from damaging eachother, use SetPlayerTeam.
  The weaponid will return 37 (flame thrower) from any fire sources (e.g. molotov, 18)
  The weaponid will return 51 from any weapon that creates an explosion (e.g. RPG, grenade)
  playerid is the only one who can call the callback.
  The amount is always the maximum damage the weaponid can do, even when the health left is less than that maximum damage. So when a player has 100.0 health and gets shot with a Desert Eagle which has a damage value of 46.2, it takes 3 shots to kill that player. All 3 shots will show an amount of 46.2, even though when the last shot hits, the player only has 7.6 health left.

   * @returns {void}
   */
  static addEventListener(eventName: 'OnPlayerGiveDamage', func: (playerid: number, damagedid: number, amount: number, weaponid: number, bodypart: number) => void): void;
  /**
   * Adds a new listener to OnPlayerGiveDamageActor
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerGiveDamageActor] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player gives damage to an actor.
   * @see CreateActor
   * @see SetActorInvulnerable
   * @see SetActorHealth
   * @see GetActorHealth
   * @see IsActorInvulnerable
   * @see IsValidActor
   * @see OnActorStreamOut
   * @see OnPlayerStreamIn
   * @remarks This callback was added in SA-MP 0.3.7 and will not work in earlier versions!
   * @remarks This function does not get called if the actor is set invulnerable (WHICH IS BY DEFAULT). See SetActorInvulnerable.
   * @returns {void}
   */
  static addEventListener(eventName: 'OnPlayerGiveDamageActor', func: (playerid: number, damaged_actorid: number, amount: number, weaponid: number, bodypart: number) => void): void;
  /**
   * Adds a new listener to OnPlayerClickMap
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerClickMap] - Name of the event
   * @param {function} func - Event callback
   * @summary OnPlayerClickMap is called when a player places a target/waypoint on the pause menu map (by right-clicking).
   * @see SetPlayerPos
   * @see SetPlayerPosFindZ
   * @see GetPlayerPos
   * @remarks This callback was added in SA-MP 0.3d and will not work in earlier versions!
   * @remarks The Z value returned will be 0 (invalid) if it is far away from the player; use the MapAndreas plugin to get a more accurate Z coordinate.
   * @returns {void}
   */
  static addEventListener(eventName: 'OnPlayerClickMap', func: (playerid: number, fX: number, fY: number, fZ: number) => void): void;
  /**
   * Adds a new listener to OnPlayerClickTextDraw
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerClickTextDraw] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player clicks on a textdraw or cancels the select mode with the Escape key.
   * @see OnPlayerClickPlayerTextDraw
   * @see OnPlayerClickPlayer
   * @remarks This callback was added in SA-MP 0.3e and will not work in earlier versions!
   * @remarks The clickable area is defined by TextDrawTextSize. The x and y parameters passed to that function must not be zero or negative. 
   * @remarks Do not use CancelSelectTextDraw unconditionally within this callback. This results in an infinite loop. 
   * @returns {void}
   */
  static addEventListener(eventName: 'OnPlayerClickTextDraw', func: (playerid: number, clickedid: number) => void): void;
  /**
   * Adds a new listener to OnPlayerClickPlayerTextDraw
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerClickPlayerTextDraw] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player clicks on a player-textdraw. It is not called when player cancels the select mode (ESC) - however, OnPlayerClickTextDraw is.
   * @see PlayerTextDrawSetSelectable
   * @see OnPlayerClickTextDraw
   * @see OnPlayerClickPlayer
   * @remarks This callback was added in SA-MP 0.3e and will not work in earlier versions!
   * @remarks When a player presses ESC to cancel selecting a textdraw, OnPlayerClickTextDraw is called with a textdraw ID of INVALID_TEXT_DRAW. OnPlayerClickPlayerTextDraw won&#x27;t be called also.
   * @returns {void}
   */
  static addEventListener(eventName: 'OnPlayerClickPlayerTextDraw', func: (playerid: number, playertextid: number) => void): void;
  /**
   * Adds a new listener to OnIncomingConnection
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnIncomingConnection] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when an IP address attempts a connection to the server. To block incoming connections, use BlockIpAddress.
   * @see OnPlayerConnect
   * @see OnPlayerDisconnect
   * @see OnPlayerFinishedDownloading
   * @see BlockIpAddress
   * @see UnBlockIpAddress
   * @remarks  	This callback was added in SA-MP 0.3z R2-2 and will not work in earlier versions!
   * @returns {void}
   */
  static addEventListener(eventName: 'OnIncomingConnection', func: (playerid: number, ip_address: string, port: number) => void): void;
  /**
   * Adds a new listener to OnTrailerUpdate
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnTrailerUpdate] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player sent a trailer update.
   * @see OnUnoccupiedVehicleUpdate
   * @see GetVehicleTrailer
   * @see IsTrailerAttachedToVehicle
   * @see AttachTrailerToVehicle
   * @see DetachTrailerFromVehicle
   * @remarks This callback was added in SA-MP 0.3z R4 and will not work in earlier versions!
   * @remarks This callback is called very frequently per second per trailer. You should refrain from implementing intensive calculations or intensive file writing/reading operations in this callback. 
   * @returns {void}
   */
  static addEventListener(eventName: 'OnTrailerUpdate', func: (playerid: number, vehicleid: number) => void): void;
  /**
   * Adds a new listener to OnVehicleSirenStateChange
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnVehicleSirenStateChange] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a vehicle&#x27;s siren is toggled.
   * @see GetVehicleParamsSirenState
   * @remarks This callback was added in SA-MP 0.3.7 and will not work in earlier versions!
   * @remarks This callback can also be called by NPC.
   * @remarks This callback is only called when a vehicle&#x27;s siren is toggled on or off, NOT when the alternate siren is in use (holding horn).
   * @returns {void}
   */
  static addEventListener(eventName: 'OnVehicleSirenStateChange', func: (playerid: number, vehicleid: number, newstate: number) => void): void;
  /**
   * Adds a new listener to OnPlayerFinishedDownloading
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerFinishedDownloading] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player finishes downloading custom models. For more information on how to add custom models to your server, see the release thread and this tutorial.
   * @see OnPlayerConnect
   * @see OnPlayerDisconnect
   * @see OnIncomingConnection
   * @remarks This callback was added in SA-MP 0.3DL and will not work in earlier versions!
   * @remarks This callback is called every time a player changes virtual worlds, even if there are no custom models present in that world.
   * @returns {void}
   */
  static addEventListener(eventName: 'OnPlayerFinishedDownloading', func: (playerid: number, virtualworld: number) => void): void;
  /**
   * Adds a new listener to OnPlayerClickPlayer
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerClickPlayer] - Name of the event
   * @param {function} func - Event callback
   * @summary Called when a player double-clicks on a player on the scoreboard.
   * @see OnPlayerClickTextDraw
   * @remarks This callback was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks There is currently only one  (0 - CLICK_SOURCE_SCOREBOARD). The existence of this argument suggests that more sources may be supported in the future.
   * @returns {void}
   */
  static addEventListener(eventName: 'OnPlayerClickPlayer', func: (playerid: number, clickedplayerid: number, source: number) => void): void;
  /**
   * Adds a new listener to OnPlayerSelectObject
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerSelectObject] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player finishes editing an object (EditObject/EditPlayerObject).
   * @summary This callback is called when a player ends attached object edition mode.
   * @summary This callback is called when a player selects an object after SelectObject has been used.
   * @see EditObject
   * @see CreateObject
   * @see DestroyObject
   * @see MoveObject
   * @see EditAttachedObject
   * @see SetPlayerAttachedObject
   * @see SelectObject
   * @remarks This callback was added in SA-MP 0.3e and will not work in earlier versions!
   * @remarks When using EDIT_RESPONSE_UPDATE be aware that this callback will not be called when releasing an edit in progress resulting in the last update of EDIT_RESPONSE_UPDATE being out of sync of the objects current position.
   * @remarks This callback was added in SA-MP 0.3e and will not work in earlier versions!
   * @remarks Editions should be discarded if response was 0 (cancelled). This must be done by storing the offsets etc. in an array BEFORE using EditAttachedObject.
   * @remarks This function was added in SA-MP 0.3e and will not work in earlier versions!
   * @returns {void}
   */
  static addEventListener(eventName: 'OnPlayerSelectObject', func: (playerid: number, type: number, objectid: number, modelid: number, fX: number, fY: number, fZ: number) => void): void;
  /**
   * Adds a new listener to OnPlayerWeaponShot
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnPlayerWeaponShot] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a player fires a shot from a weapon. Only bullet weapons are supported. Only passenger drive-by is supported (not driver drive-by, and not sea sparrow / hunter shots).
   * @see OnPlayerGiveDamage
   * @see GetPlayerLastShotVectors
   * @remarks This callback was added in SA-MP 0.3z and will not work in earlier versions!
   * @remarks 
    BULLET_HIT_TYPE_NONE(0)
    BULLET_HIT_TYPE_PLAYER(1)
    BULLET_HIT_TYPE_VEHICLE(2)
    BULLET_HIT_TYPE_OBJECT(3)
    BULLET_HIT_TYPE_PLAYER_OBJECT(4)

   * @remarks BULLET_HIT_TYPE_PLAYER is also called for NPCs. Actors are ignored by this callback and detects as BULLET_HIT_TYPE_NONE.
   * @remarks This callback is only called when lag compensation is enabled. 
   * @remarks 
  If hittype is:
  
    - BULLET_HIT_TYPE_NONE: the fX, fY and fZ parameters are normal coordinates, will give 0.0 for coordinates if nothing was hit (e.g. far object that the bullet can&#x27;t reach);
    - Others: the fX, fY and fZ are offsets relative to the hitid.
  

   * @remarks 
  Isn&#x27;t called if you fired in vehicle as driver or if you are looking behind with the aim enabled (shooting in air).
  It is called as BULLET_HIT_TYPE_VEHICLE with the correct hitid (the hit player&#x27;s vehicleid) if you are shooting a player which is in a vehicle. It won&#x27;t be called as BULLET_HIT_TYPE_PLAYER at all.
  Partially fixed in SA-MP 0.3.7: If fake weapon data is sent by a malicious user, other player clients may freeze or crash. To combat this, check if the reported weaponid can actually fire bullets.

   * @remarks 

   * @remarks GetPlayerLastShotVectors can be used in this callback for more detailed bullet vector information.
   * @returns {void}
   */
  static addEventListener(eventName: 'OnPlayerWeaponShot', func: (playerid: number, weaponid: number, hittype: number, hitid: number, fX: number, fY: number, fZ: number) => void): void;
  /**
   * Adds a new listener to OnClientCheckResponse
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnClientCheckResponse] - Name of the event
   * @param {function} func - Event callback
   * @summary This callback is called when a SendClientCheck request comletes
   * @see SendClientCheck
   * @returns {void}
   */
  static addEventListener(eventName: 'OnClientCheckResponse', func: (playerid: number, actionid: number, memaddr: number, retndata: number) => void): void;
  /**
   * Adds a new listener to OnScriptCash
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} [eventName=OnScriptCash] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static addEventListener(eventName: 'OnScriptCash', func: (playerid: number, amount: number, source: number) => void): void;
  /**
   * Adds a new listener to the given event
   *
   * @name samp.on
   * @param {string} eventName - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static on(eventName: string, func: (...args: Array<any>) => void): void;
  /**
   * Adds a new listener to the given event
   *
   * @name samp.addListener
   * @alias samp.on
   * @param {string} eventName - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static addListener(eventName: string, func: (...args: Array<any>) => void): void;
  /**
   * Adds a new listener to the given event
   *
   * @name samp.addEventListener
   * @alias samp.on
   * @param {string} eventName - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static addEventListener(eventName: string, func: (...args: Array<any>) => void): void;

  /**
   * Removes all listeners
   *
   * @name samp.removeListener
   * @param {string} eventName - Name of the event
   * @returns {void}
   */
  static removeListener(eventName: string): void;
  /**
   * Removes a specific listener for OnGameModeInit
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnGameModeInit] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnGameModeInit', func: () => void): void;
  /**
   * Removes a specific listener for OnGameModeExit
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnGameModeExit] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnGameModeExit', func: () => void): void;
  /**
   * Removes a specific listener for OnFilterScriptInit
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnFilterScriptInit] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnFilterScriptInit', func: () => void): void;
  /**
   * Removes a specific listener for OnFilterScriptExit
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnFilterScriptExit] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnFilterScriptExit', func: () => void): void;
  /**
   * Removes a specific listener for OnPlayerConnect
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnPlayerConnect] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnPlayerConnect', func: (playerid: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerDisconnect
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnPlayerDisconnect] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnPlayerDisconnect', func: (playerid: number, reason: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerSpawn
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnPlayerSpawn] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnPlayerSpawn', func: (playerid: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerDeath
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnPlayerDeath] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnPlayerDeath', func: (playerid: number, killerid: number, reason: number) => void): void;
  /**
   * Removes a specific listener for OnVehicleSpawn
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnVehicleSpawn] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnVehicleSpawn', func: (vehicleid: number) => void): void;
  /**
   * Removes a specific listener for OnVehicleDeath
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnVehicleDeath] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnVehicleDeath', func: (vehicleid: number, killerid: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerText
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnPlayerText] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnPlayerText', func: (playerid: number, text: string) => void): void;
  /**
   * Removes a specific listener for OnPlayerCommandText
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnPlayerCommandText] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnPlayerCommandText', func: (playerid: number, cmdtext: string) => void): void;
  /**
   * Removes a specific listener for OnPlayerRequestClass
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnPlayerRequestClass] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnPlayerRequestClass', func: (playerid: number, classid: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerEnterVehicle
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnPlayerEnterVehicle] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnPlayerEnterVehicle', func: (playerid: number, vehicleid: number, ispassenger: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerExitVehicle
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnPlayerExitVehicle] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnPlayerExitVehicle', func: (playerid: number, vehicleid: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerStateChange
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnPlayerStateChange] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnPlayerStateChange', func: (playerid: number, newstate: number, oldstate: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerEnterCheckpoint
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnPlayerEnterCheckpoint] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnPlayerEnterCheckpoint', func: (playerid: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerLeaveCheckpoint
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnPlayerLeaveCheckpoint] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnPlayerLeaveCheckpoint', func: (playerid: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerEnterRaceCheckpoint
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnPlayerEnterRaceCheckpoint] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnPlayerEnterRaceCheckpoint', func: (playerid: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerLeaveRaceCheckpoint
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnPlayerLeaveRaceCheckpoint] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnPlayerLeaveRaceCheckpoint', func: (playerid: number) => void): void;
  /**
   * Removes a specific listener for OnRconCommand
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnRconCommand] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnRconCommand', func: (cmd: string) => void): void;
  /**
   * Removes a specific listener for OnPlayerRequestSpawn
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnPlayerRequestSpawn] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnPlayerRequestSpawn', func: (playerid: number) => void): void;
  /**
   * Removes a specific listener for OnObjectMoved
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnObjectMoved] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnObjectMoved', func: (objectid: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerObjectMoved
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnPlayerObjectMoved] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnPlayerObjectMoved', func: (playerid: number, objectid: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerPickUpPickup
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnPlayerPickUpPickup] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnPlayerPickUpPickup', func: (playerid: number, pickupid: number) => void): void;
  /**
   * Removes a specific listener for OnVehicleMod
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnVehicleMod] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnVehicleMod', func: (playerid: number, vehicleid: number, componentid: number) => void): void;
  /**
   * Removes a specific listener for OnEnterExitModShop
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnEnterExitModShop] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnEnterExitModShop', func: (playerid: number, enterexit: number, interiorid: number) => void): void;
  /**
   * Removes a specific listener for OnVehiclePaintjob
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnVehiclePaintjob] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnVehiclePaintjob', func: (playerid: number, vehicleid: number, paintjobid: number) => void): void;
  /**
   * Removes a specific listener for OnVehicleRespray
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnVehicleRespray] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnVehicleRespray', func: (playerid: number, vehicleid: number, color1: number, color2: number) => void): void;
  /**
   * Removes a specific listener for OnVehicleDamageStatusUpdate
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnVehicleDamageStatusUpdate] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnVehicleDamageStatusUpdate', func: (vehicleid: number, playerid: number) => void): void;
  /**
   * Removes a specific listener for OnUnoccupiedVehicleUpdate
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnUnoccupiedVehicleUpdate] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnUnoccupiedVehicleUpdate', func: (vehicleid: number, playerid: number, passenger_seat: number, new_x: number, new_y: number, new_z: number, vel_x: number, vel_y: number, vel_z: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerSelectedMenuRow
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnPlayerSelectedMenuRow] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnPlayerSelectedMenuRow', func: (playerid: number, row: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerExitedMenu
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnPlayerExitedMenu] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnPlayerExitedMenu', func: (playerid: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerInteriorChange
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnPlayerInteriorChange] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnPlayerInteriorChange', func: (playerid: number, newinteriorid: number, oldinteriorid: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerKeyStateChange
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnPlayerKeyStateChange] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnPlayerKeyStateChange', func: (playerid: number, newkeys: number, oldkeys: number) => void): void;
  /**
   * Removes a specific listener for OnRconLoginAttempt
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnRconLoginAttempt] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnRconLoginAttempt', func: (ip: string, password: string, success: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerUpdate
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnPlayerUpdate] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnPlayerUpdate', func: (playerid: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerStreamIn
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnPlayerStreamIn] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnPlayerStreamIn', func: (playerid: number, forplayerid: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerStreamOut
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnPlayerStreamOut] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnPlayerStreamOut', func: (playerid: number, forplayerid: number) => void): void;
  /**
   * Removes a specific listener for OnVehicleStreamIn
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnVehicleStreamIn] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnVehicleStreamIn', func: (vehicleid: number, forplayerid: number) => void): void;
  /**
   * Removes a specific listener for OnVehicleStreamOut
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnVehicleStreamOut] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnVehicleStreamOut', func: (vehicleid: number, forplayerid: number) => void): void;
  /**
   * Removes a specific listener for OnActorStreamIn
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnActorStreamIn] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnActorStreamIn', func: (actorid: number, forplayerid: number) => void): void;
  /**
   * Removes a specific listener for OnActorStreamOut
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnActorStreamOut] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnActorStreamOut', func: (actorid: number, forplayerid: number) => void): void;
  /**
   * Removes a specific listener for OnDialogResponse
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnDialogResponse] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnDialogResponse', func: (playerid: number, dialogid: number, response: number, listitem: number, inputtext: string) => void): void;
  /**
   * Removes a specific listener for OnPlayerTakeDamage
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnPlayerTakeDamage] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnPlayerTakeDamage', func: (playerid: number, issuerid: number, amount: number, weaponid: number, bodypart: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerGiveDamage
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnPlayerGiveDamage] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnPlayerGiveDamage', func: (playerid: number, damagedid: number, amount: number, weaponid: number, bodypart: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerGiveDamageActor
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnPlayerGiveDamageActor] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnPlayerGiveDamageActor', func: (playerid: number, damaged_actorid: number, amount: number, weaponid: number, bodypart: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerClickMap
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnPlayerClickMap] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnPlayerClickMap', func: (playerid: number, fX: number, fY: number, fZ: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerClickTextDraw
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnPlayerClickTextDraw] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnPlayerClickTextDraw', func: (playerid: number, clickedid: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerClickPlayerTextDraw
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnPlayerClickPlayerTextDraw] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnPlayerClickPlayerTextDraw', func: (playerid: number, playertextid: number) => void): void;
  /**
   * Removes a specific listener for OnIncomingConnection
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnIncomingConnection] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnIncomingConnection', func: (playerid: number, ip_address: string, port: number) => void): void;
  /**
   * Removes a specific listener for OnTrailerUpdate
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnTrailerUpdate] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnTrailerUpdate', func: (playerid: number, vehicleid: number) => void): void;
  /**
   * Removes a specific listener for OnVehicleSirenStateChange
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnVehicleSirenStateChange] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnVehicleSirenStateChange', func: (playerid: number, vehicleid: number, newstate: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerFinishedDownloading
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnPlayerFinishedDownloading] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnPlayerFinishedDownloading', func: (playerid: number, virtualworld: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerClickPlayer
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnPlayerClickPlayer] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnPlayerClickPlayer', func: (playerid: number, clickedplayerid: number, source: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerSelectObject
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnPlayerSelectObject] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnPlayerSelectObject', func: (playerid: number, type: number, objectid: number, modelid: number, fX: number, fY: number, fZ: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerWeaponShot
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnPlayerWeaponShot] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnPlayerWeaponShot', func: (playerid: number, weaponid: number, hittype: number, hitid: number, fX: number, fY: number, fZ: number) => void): void;
  /**
   * Removes a specific listener for OnClientCheckResponse
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnClientCheckResponse] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnClientCheckResponse', func: (playerid: number, actionid: number, memaddr: number, retndata: number) => void): void;
  /**
   * Removes a specific listener for OnScriptCash
   *
   * @name samp.removeListener
   * @param {string} [eventName=OnScriptCash] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: 'OnScriptCash', func: (playerid: number, amount: number, source: number) => void): void;
  /**
   * Removes a specific listener
   *
   * @name samp.removeListener
   * @param {string} eventName - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeListener(eventName: string, func: (...args: Array<any>) => void): void;
  /**
   * Removes specific listeners given in the Array
   *
   * @name samp.removeListener
   * @param {string} eventName - Name of the event
   * @param {function[]} funcs - Array of event callbacks
   * @returns {void}
   */
  static removeListener(eventName: string, funcs: Array<(...args: Array<any>) => void>): void;
  /**
   * Removes all listeners
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} eventName - Name of the event
   * @returns {void}
   */
  static removeEventListener(eventName: string): void;
  /**
   * Removes a specific listener for OnGameModeInit
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnGameModeInit] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnGameModeInit', func: () => void): void;
  /**
   * Removes a specific listener for OnGameModeExit
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnGameModeExit] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnGameModeExit', func: () => void): void;
  /**
   * Removes a specific listener for OnFilterScriptInit
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnFilterScriptInit] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnFilterScriptInit', func: () => void): void;
  /**
   * Removes a specific listener for OnFilterScriptExit
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnFilterScriptExit] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnFilterScriptExit', func: () => void): void;
  /**
   * Removes a specific listener for OnPlayerConnect
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnPlayerConnect] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnPlayerConnect', func: (playerid: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerDisconnect
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnPlayerDisconnect] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnPlayerDisconnect', func: (playerid: number, reason: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerSpawn
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnPlayerSpawn] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnPlayerSpawn', func: (playerid: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerDeath
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnPlayerDeath] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnPlayerDeath', func: (playerid: number, killerid: number, reason: number) => void): void;
  /**
   * Removes a specific listener for OnVehicleSpawn
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnVehicleSpawn] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnVehicleSpawn', func: (vehicleid: number) => void): void;
  /**
   * Removes a specific listener for OnVehicleDeath
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnVehicleDeath] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnVehicleDeath', func: (vehicleid: number, killerid: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerText
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnPlayerText] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnPlayerText', func: (playerid: number, text: string) => void): void;
  /**
   * Removes a specific listener for OnPlayerCommandText
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnPlayerCommandText] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnPlayerCommandText', func: (playerid: number, cmdtext: string) => void): void;
  /**
   * Removes a specific listener for OnPlayerRequestClass
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnPlayerRequestClass] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnPlayerRequestClass', func: (playerid: number, classid: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerEnterVehicle
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnPlayerEnterVehicle] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnPlayerEnterVehicle', func: (playerid: number, vehicleid: number, ispassenger: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerExitVehicle
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnPlayerExitVehicle] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnPlayerExitVehicle', func: (playerid: number, vehicleid: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerStateChange
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnPlayerStateChange] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnPlayerStateChange', func: (playerid: number, newstate: number, oldstate: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerEnterCheckpoint
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnPlayerEnterCheckpoint] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnPlayerEnterCheckpoint', func: (playerid: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerLeaveCheckpoint
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnPlayerLeaveCheckpoint] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnPlayerLeaveCheckpoint', func: (playerid: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerEnterRaceCheckpoint
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnPlayerEnterRaceCheckpoint] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnPlayerEnterRaceCheckpoint', func: (playerid: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerLeaveRaceCheckpoint
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnPlayerLeaveRaceCheckpoint] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnPlayerLeaveRaceCheckpoint', func: (playerid: number) => void): void;
  /**
   * Removes a specific listener for OnRconCommand
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnRconCommand] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnRconCommand', func: (cmd: string) => void): void;
  /**
   * Removes a specific listener for OnPlayerRequestSpawn
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnPlayerRequestSpawn] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnPlayerRequestSpawn', func: (playerid: number) => void): void;
  /**
   * Removes a specific listener for OnObjectMoved
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnObjectMoved] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnObjectMoved', func: (objectid: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerObjectMoved
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnPlayerObjectMoved] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnPlayerObjectMoved', func: (playerid: number, objectid: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerPickUpPickup
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnPlayerPickUpPickup] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnPlayerPickUpPickup', func: (playerid: number, pickupid: number) => void): void;
  /**
   * Removes a specific listener for OnVehicleMod
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnVehicleMod] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnVehicleMod', func: (playerid: number, vehicleid: number, componentid: number) => void): void;
  /**
   * Removes a specific listener for OnEnterExitModShop
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnEnterExitModShop] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnEnterExitModShop', func: (playerid: number, enterexit: number, interiorid: number) => void): void;
  /**
   * Removes a specific listener for OnVehiclePaintjob
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnVehiclePaintjob] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnVehiclePaintjob', func: (playerid: number, vehicleid: number, paintjobid: number) => void): void;
  /**
   * Removes a specific listener for OnVehicleRespray
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnVehicleRespray] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnVehicleRespray', func: (playerid: number, vehicleid: number, color1: number, color2: number) => void): void;
  /**
   * Removes a specific listener for OnVehicleDamageStatusUpdate
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnVehicleDamageStatusUpdate] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnVehicleDamageStatusUpdate', func: (vehicleid: number, playerid: number) => void): void;
  /**
   * Removes a specific listener for OnUnoccupiedVehicleUpdate
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnUnoccupiedVehicleUpdate] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnUnoccupiedVehicleUpdate', func: (vehicleid: number, playerid: number, passenger_seat: number, new_x: number, new_y: number, new_z: number, vel_x: number, vel_y: number, vel_z: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerSelectedMenuRow
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnPlayerSelectedMenuRow] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnPlayerSelectedMenuRow', func: (playerid: number, row: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerExitedMenu
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnPlayerExitedMenu] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnPlayerExitedMenu', func: (playerid: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerInteriorChange
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnPlayerInteriorChange] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnPlayerInteriorChange', func: (playerid: number, newinteriorid: number, oldinteriorid: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerKeyStateChange
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnPlayerKeyStateChange] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnPlayerKeyStateChange', func: (playerid: number, newkeys: number, oldkeys: number) => void): void;
  /**
   * Removes a specific listener for OnRconLoginAttempt
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnRconLoginAttempt] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnRconLoginAttempt', func: (ip: string, password: string, success: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerUpdate
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnPlayerUpdate] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnPlayerUpdate', func: (playerid: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerStreamIn
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnPlayerStreamIn] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnPlayerStreamIn', func: (playerid: number, forplayerid: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerStreamOut
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnPlayerStreamOut] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnPlayerStreamOut', func: (playerid: number, forplayerid: number) => void): void;
  /**
   * Removes a specific listener for OnVehicleStreamIn
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnVehicleStreamIn] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnVehicleStreamIn', func: (vehicleid: number, forplayerid: number) => void): void;
  /**
   * Removes a specific listener for OnVehicleStreamOut
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnVehicleStreamOut] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnVehicleStreamOut', func: (vehicleid: number, forplayerid: number) => void): void;
  /**
   * Removes a specific listener for OnActorStreamIn
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnActorStreamIn] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnActorStreamIn', func: (actorid: number, forplayerid: number) => void): void;
  /**
   * Removes a specific listener for OnActorStreamOut
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnActorStreamOut] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnActorStreamOut', func: (actorid: number, forplayerid: number) => void): void;
  /**
   * Removes a specific listener for OnDialogResponse
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnDialogResponse] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnDialogResponse', func: (playerid: number, dialogid: number, response: number, listitem: number, inputtext: string) => void): void;
  /**
   * Removes a specific listener for OnPlayerTakeDamage
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnPlayerTakeDamage] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnPlayerTakeDamage', func: (playerid: number, issuerid: number, amount: number, weaponid: number, bodypart: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerGiveDamage
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnPlayerGiveDamage] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnPlayerGiveDamage', func: (playerid: number, damagedid: number, amount: number, weaponid: number, bodypart: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerGiveDamageActor
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnPlayerGiveDamageActor] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnPlayerGiveDamageActor', func: (playerid: number, damaged_actorid: number, amount: number, weaponid: number, bodypart: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerClickMap
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnPlayerClickMap] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnPlayerClickMap', func: (playerid: number, fX: number, fY: number, fZ: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerClickTextDraw
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnPlayerClickTextDraw] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnPlayerClickTextDraw', func: (playerid: number, clickedid: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerClickPlayerTextDraw
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnPlayerClickPlayerTextDraw] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnPlayerClickPlayerTextDraw', func: (playerid: number, playertextid: number) => void): void;
  /**
   * Removes a specific listener for OnIncomingConnection
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnIncomingConnection] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnIncomingConnection', func: (playerid: number, ip_address: string, port: number) => void): void;
  /**
   * Removes a specific listener for OnTrailerUpdate
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnTrailerUpdate] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnTrailerUpdate', func: (playerid: number, vehicleid: number) => void): void;
  /**
   * Removes a specific listener for OnVehicleSirenStateChange
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnVehicleSirenStateChange] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnVehicleSirenStateChange', func: (playerid: number, vehicleid: number, newstate: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerFinishedDownloading
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnPlayerFinishedDownloading] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnPlayerFinishedDownloading', func: (playerid: number, virtualworld: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerClickPlayer
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnPlayerClickPlayer] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnPlayerClickPlayer', func: (playerid: number, clickedplayerid: number, source: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerSelectObject
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnPlayerSelectObject] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnPlayerSelectObject', func: (playerid: number, type: number, objectid: number, modelid: number, fX: number, fY: number, fZ: number) => void): void;
  /**
   * Removes a specific listener for OnPlayerWeaponShot
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnPlayerWeaponShot] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnPlayerWeaponShot', func: (playerid: number, weaponid: number, hittype: number, hitid: number, fX: number, fY: number, fZ: number) => void): void;
  /**
   * Removes a specific listener for OnClientCheckResponse
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnClientCheckResponse] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnClientCheckResponse', func: (playerid: number, actionid: number, memaddr: number, retndata: number) => void): void;
  /**
   * Removes a specific listener for OnScriptCash
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} [eventName=OnScriptCash] - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: 'OnScriptCash', func: (playerid: number, amount: number, source: number) => void): void;
  /**
   * Removes a specific listener
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} eventName - Name of the event
   * @param {function} func - Event callback
   * @returns {void}
   */
  static removeEventListener(eventName: string, func: (...args: Array<any>) => void): void;
  /**
   * Removes specific listeners given in the Array
   *
   * @name samp.removeEventListener
   * @alias samp.removeListener
   * @param {string} eventName - Name of the event
   * @param {function[]} funcs - Array of event callbacks
   * @returns {void}
   */
  static removeEventListener(eventName: string, funcs: Array<(...args: Array<any>) => void>): void;

  /**
   * Register a new event
   * 
   * @name samp.registerEvent
   * @param {string} eventName - Name of the event
   * @param {string} paramTypes - String of argument specifiers
   * @returns {boolean}
   */
  static registerEvent(eventName: string, paramTypes: string): boolean;

  /**
   * Triggers the OnGameModeInit event
   *
   * @name samp.fire
   * @param {string} [eventName=OnGameModeInit] - Name of the event
   * @summary This callback is triggered when the gamemode starts.
   * @see OnGameModeExit
   * @see OnFilterScriptInit
   * @see OnFilterScriptExit
   * @remarks This function can also be used in a filterscript to detect if the gamemode changes with RCON commands like changemode or gmx, as changing the gamemode does not reload a filterscript.
   * @returns {void}
   */
  static fire(eventName: 'OnGameModeInit'): void;
  /**
   * Triggers the OnGameModeExit event
   *
   * @name samp.fire
   * @param {string} [eventName=OnGameModeExit] - Name of the event
   * @summary This callback is called when a gamemode ends, either through &#x27;gmx&#x27;, the server being shut down, or GameModeExit.
   * @see OnGameModeInit
   * @see OnFilterScriptExit
   * @see OnFilterScriptInit
   * @see GameModeExit
   * @remarks This function can also be used in a filterscript to detect if the gamemode changes with RCON commands like changemode or gmx, as changing the gamemode does not reload a filterscript.
   * @remarks When using OnGameModeExit in conjunction with the &#x27;rcon gmx&#x27; console command keep in mind there is a potential for client bugs to occur an example of this is excessive RemoveBuildingForPlayer calls during OnGameModeInit which could result in a client crash. 
   * @remarks This callback will NOT be called if the server crashes or the process is killed by other means, such as using the Linux kill command or pressing the close-button on the Windows console. 
   * @returns {void}
   */
  static fire(eventName: 'OnGameModeExit'): void;
  /**
   * Triggers the OnFilterScriptInit event
   *
   * @name samp.fire
   * @param {string} [eventName=OnFilterScriptInit] - Name of the event
   * @summary This callback is called when a filterscript is initialized (loaded). It is only called inside the filterscript which is starting.
   * @see OnFilterScriptExit
   * @see OnGameModeInit
   * @see OnGameModeExit
   * @returns {void}
   */
  static fire(eventName: 'OnFilterScriptInit'): void;
  /**
   * Triggers the OnFilterScriptExit event
   *
   * @name samp.fire
   * @param {string} [eventName=OnFilterScriptExit] - Name of the event
   * @summary This callback is called when a filterscript is unloaded. It is only called inside the filterscript which is unloaded.
   * @see OnFilterScriptInit
   * @see OnGameModeInit
   * @see OnGameModeExit
   * @returns {void}
   */
  static fire(eventName: 'OnFilterScriptExit'): void;
  /**
   * Triggers the OnPlayerConnect event
   *
   * @name samp.fire
   * @param {string} [eventName=OnPlayerConnect] - Name of the event
   * @param {number} playerid - The ID of the player that connected
   * @summary This callback is called when a player connects to the server.
   * @see OnPlayerDisconnect
   * @see OnIncomingConnection
   * @see OnPlayerFinishedDownloading
   * @remarks This callback can also be called by NPC.
   * @returns {void}
   */
  static fire(eventName: 'OnPlayerConnect', playerid: number): void;
  /**
   * Triggers the OnPlayerDisconnect event
   *
   * @name samp.fire
   * @param {string} [eventName=OnPlayerDisconnect] - Name of the event
   * @param {number} playerid - The ID of the player that disconnected
   * @param {number} reason - The reason for the disconnection. See table below
   * @summary This callback is called when a player disconnects from the server.
   * @see OnPlayerConnect
   * @see OnIncomingConnection
   * @see OnPlayerFinishedDownloading
   * @remarks This callback can also be called by NPC.
   * @remarks Some functions might not work correctly when used in this callback because the player is already disconnected when the callback is called. This means that you can&#x27;t get unambiguous information from functions like GetPlayerIp and GetPlayerPos.
   * @remarks 
  Reasons:
  
    0 - timeout/Crash - the player&#x27;s connection was lost. Either their game crashed or their network had a fault.
    1 - quit - the player purposefully quit, either using the /quit (/q) command or via the pause menu.
    2 - kick/ban - the player was kicked or banned by the server.
  

   * @returns {void}
   */
  static fire(eventName: 'OnPlayerDisconnect', playerid: number, reason: number): void;
  /**
   * Triggers the OnPlayerSpawn event
   *
   * @name samp.fire
   * @param {string} [eventName=OnPlayerSpawn] - Name of the event
   * @param {number} playerid - The ID of the player that spawned
   * @summary This callback is called when a player spawns.(i.e. after caling SpawnPlayer function).
   * @see OnPlayerDeath
   * @see OnVehicleSpawn
   * @see SpawnPlayer
   * @see AddPlayerClass
   * @see SetSpawnInfo
   * @remarks This callback can also be called by NPC.
   * @remarks The game sometimes deducts $100 from players after spawn.
   * @returns {void}
   */
  static fire(eventName: 'OnPlayerSpawn', playerid: number): void;
  /**
   * Triggers the OnPlayerDeath event
   *
   * @name samp.fire
   * @param {string} [eventName=OnPlayerDeath] - Name of the event
   * @param {number} playerid - The ID of the player that died
   * @param {number} killerid - The ID of the player that killed the player who died, or INVALID_PLAYER_ID if there was none
   * @param {number} reason - The ID of the reason for the player&#x27;s death
   * @summary This callback is called when a player dies, either by suicide or by being killed by another player.
   * @see OnPlayerSpawn
   * @see SendDeathMessage
   * @see SetPlayerHealth
   * @remarks 
  The reason will return 37 (flame thrower) from any fire sources (e.g. molotov, 18)
  The reason will return 51 from any weapon that creates an explosion (e.g. RPG, grenade)
  You do not need to check whether killerid is valid before using it in SendDeathMessage. INVALID_PLAYER_ID is a valid killerid ID parameter in that function.
  playerid is the only one who can call the callback. (good to know for anti fake death)

   * @returns {void}
   */
  static fire(eventName: 'OnPlayerDeath', playerid: number, killerid: number, reason: number): void;
  /**
   * Triggers the OnVehicleSpawn event
   *
   * @name samp.fire
   * @param {string} [eventName=OnVehicleSpawn] - Name of the event
   * @param {number} vehicleid - The ID of the vehicle that spawned
   * @summary This callback is called when a vehicle respawns.
   * @see OnVehicleDeath
   * @see OnPlayerSpawn
   * @see SetVehicleToRespawn
   * @see CreateVehicle
   * @returns {void}
   */
  static fire(eventName: 'OnVehicleSpawn', vehicleid: number): void;
  /**
   * Triggers the OnVehicleDeath event
   *
   * @name samp.fire
   * @param {string} [eventName=OnVehicleDeath] - Name of the event
   * @param {number} vehicleid - The ID of the vehicle that was destroyed
   * @param {number} killerid - The ID of the player that reported (synced) the vehicle&#x27;s destruction (name is misleading). Generally the driver or a passenger (if any) or the closest player
   * @summary This callback is called when a vehicle is destroyed - either by exploding or becoming submerged in water.
   * @see OnVehicleSpawn
   * @see SetVehicleHealth
   * @remarks This callback can also be called by NPC.
   * @remarks This callback will also be called when a vehicle enters water, but the vehicle can be saved from destruction by teleportation or driving out (if only partially submerged). The callback won&#x27;t be called a second time, and the vehicle may disappear when the driver exits, or after a short time.
   * @returns {void}
   */
  static fire(eventName: 'OnVehicleDeath', vehicleid: number, killerid: number): void;
  /**
   * Triggers the OnPlayerText event
   *
   * @name samp.fire
   * @param {string} [eventName=OnPlayerText] - Name of the event
   * @param {number} playerid - The ID of the player who typed the text
   * @param {string} text - The text the player typed
   * @summary Called when a player sends a chat message.
   * @see OnPlayerCommandText
   * @see SendPlayerMessageToPlayer
   * @see SendPlayerMessageToAll
   * @remarks This callback can also be called by NPC.
   * @returns {void}
   */
  static fire(eventName: 'OnPlayerText', playerid: number, text: string): void;
  /**
   * Triggers the OnPlayerCommandText event
   *
   * @name samp.fire
   * @param {string} [eventName=OnPlayerCommandText] - Name of the event
   * @param {number} playerid - The ID of the player that entered a command
   * @param {string} cmdtext - The command that was entered (including the forward slash)
   * @summary This callback is called when a player enters a command into the client chat window. Commands are anything that start with a forward slash, e.g. /help.
   * @see OnPlayerText
   * @see OnRconCommand
   * @see SendRconCommand
   * @remarks This callback can also be called by NPC.
   * @returns {void}
   */
  static fire(eventName: 'OnPlayerCommandText', playerid: number, cmdtext: string): void;
  /**
   * Triggers the OnPlayerRequestClass event
   *
   * @name samp.fire
   * @param {string} [eventName=OnPlayerRequestClass] - Name of the event
   * @param {number} playerid - The ID of the player that changed class
   * @param {number} classid - The ID of the current class being viewed (returned by AddPlayerClass)
   * @summary Called when a player changes class at class selection (and when class selection first appears).
   * @see OnPlayerRequestSpawn
   * @see AddPlayerClass
   * @remarks This callback can also be called by NPC.
   * @remarks This callback is also called when a player presses F4.
   * @returns {void}
   */
  static fire(eventName: 'OnPlayerRequestClass', playerid: number, classid: number): void;
  /**
   * Triggers the OnPlayerEnterVehicle event
   *
   * @name samp.fire
   * @param {string} [eventName=OnPlayerEnterVehicle] - Name of the event
   * @param {number} playerid - ID of the player who attempts to enter a vehicle
   * @param {number} vehicleid - ID of the vehicle the player is attempting to enter
   * @param {number} ispassenger - 0 if entering as driver. 1 if entering as passenger
   * @summary This callback is called when a player starts to enter a vehicle, meaning the player is not in vehicle yet at the time this callback is called.
   * @see OnPlayerExitVehicle
   * @see OnPlayerStateChange
   * @see PutPlayerInVehicle
   * @see GetPlayerVehicleSeat
   * @remarks This callback is called when a player BEGINS to enter a vehicle, not when they HAVE entered it. See OnPlayerStateChange. 
   * @remarks This callback is still called if the player is denied entry to the vehicle (e.g. it is locked or full). 
   * @returns {void}
   */
  static fire(eventName: 'OnPlayerEnterVehicle', playerid: number, vehicleid: number, ispassenger: number): void;
  /**
   * Triggers the OnPlayerExitVehicle event
   *
   * @name samp.fire
   * @param {string} [eventName=OnPlayerExitVehicle] - Name of the event
   * @param {number} playerid - The ID of the player that is exiting a vehicle
   * @param {number} vehicleid - The ID of the vehicle the player is exiting
   * @summary This callback is called when a player starts to exit a vehicle.
   * @see OnPlayerEnterVehicle
   * @see OnPlayerStateChange
   * @see RemovePlayerFromVehicle
   * @see GetPlayerVehicleSeat
   * @remarks Not called if the player falls off a bike or is removed from a vehicle by other means such as using SetPlayerPos.
   * @remarks You must use OnPlayerStateChange and check if their old state is PLAYER_STATE_DRIVER or PLAYER_STATE_PASSENGER and their new state is PLAYER_STATE_ONFOOT.
   * @returns {void}
   */
  static fire(eventName: 'OnPlayerExitVehicle', playerid: number, vehicleid: number): void;
  /**
   * Triggers the OnPlayerStateChange event
   *
   * @name samp.fire
   * @param {string} [eventName=OnPlayerStateChange] - Name of the event
   * @param {number} playerid - The ID of the player that changed state
   * @param {number} newstate - The player&#x27;s new state
   * @param {number} oldstate - The player&#x27;s previous state
   * @summary This callback is called when a player changes state. For example, when a player changes from being the driver of a vehicle to being on-foot.
   * @see OnPlayerInteriorChange
   * @see GetPlayerState
   * @see GetPlayerSpecialAction
   * @see SetPlayerSpecialAction
   * @remarks This callback can also be called by NPC.
   * @remarks 
  States:
  
    PLAYER_STATE_NONE - empty (while initializing)
    PLAYER_STATE_ONFOOT - player is on foot
    PLAYER_STATE_DRIVER - player is the driver of a vehicle
    PLAYER_STATE_PASSENGER - player is passenger of a vehicle
    PLAYER_STATE_WASTED - player is dead or on class selection
    PLAYER_STATE_SPAWNED - player is spawned
    PLAYER_STATE_SPECTATING - player is spectating
    PLAYER_STATE_EXIT_VEHICLE - player exits a vehicle
    PLAYER_STATE_ENTER_VEHICLE_DRIVER - player enters a vehicle as driver
    PLAYER_STATE_ENTER_VEHICLE_PASSENGER - player enters a vehicle as passenger 
  

   * @returns {void}
   */
  static fire(eventName: 'OnPlayerStateChange', playerid: number, newstate: number, oldstate: number): void;
  /**
   * Triggers the OnPlayerEnterCheckpoint event
   *
   * @name samp.fire
   * @param {string} [eventName=OnPlayerEnterCheckpoint] - Name of the event
   * @param {number} playerid - The player who entered the checkpoint
   * @summary This callback is called when a player enters the checkpoint set for that player.
   * @see OnPlayerLeaveCheckpoint
   * @see OnPlayerEnterRaceCheckpoint
   * @see OnPlayerLeaveRaceCheckpoint
   * @see SetPlayerCheckpoint
   * @see DisablePlayerCheckpoint
   * @see IsPlayerInCheckpoint
   * @see SetPlayerRaceCheckpoint
   * @see DisablePlayerRaceCheckpoint
   * @see IsPlayerInRaceCheckpoint
   * @remarks This callback can also be called by NPC.
   * @returns {void}
   */
  static fire(eventName: 'OnPlayerEnterCheckpoint', playerid: number): void;
  /**
   * Triggers the OnPlayerLeaveCheckpoint event
   *
   * @name samp.fire
   * @param {string} [eventName=OnPlayerLeaveCheckpoint] - Name of the event
   * @param {number} playerid - The ID of the player that left their checkpoint
   * @summary This callback is called when a player leaves the checkpoint set for them by SetPlayerCheckpoint. Only one checkpoint can be set at a time.
   * @see OnPlayerEnterCheckpoint
   * @see OnPlayerEnterRaceCheckpoint
   * @see OnPlayerLeaveRaceCheckpoint
   * @see SetPlayerCheckpoint
   * @see DisablePlayerCheckpoint
   * @see IsPlayerInCheckpoint
   * @see SetPlayerRaceCheckpoint
   * @see DisablePlayerRaceCheckpoint
   * @see IsPlayerInRaceCheckpoint
   * @remarks This callback can also be called by NPC.
   * @returns {void}
   */
  static fire(eventName: 'OnPlayerLeaveCheckpoint', playerid: number): void;
  /**
   * Triggers the OnPlayerEnterRaceCheckpoint event
   *
   * @name samp.fire
   * @param {string} [eventName=OnPlayerEnterRaceCheckpoint] - Name of the event
   * @param {number} playerid - The ID of the player who entered the race checkpoint
   * @summary This callback is called when a player enters a race checkpoint.
   * @see OnPlayerEnterCheckpoint
   * @see OnPlayerLeaveCheckpoint
   * @see OnPlayerLeaveRaceCheckpoint
   * @see SetPlayerCheckpoint
   * @see DisablePlayerCheckpoint
   * @see IsPlayerInCheckpoint
   * @see SetPlayerRaceCheckpoint
   * @see DisablePlayerRaceCheckpoint
   * @see IsPlayerInRaceCheckpoint
   * @remarks This callback can also be called by NPC.
   * @returns {void}
   */
  static fire(eventName: 'OnPlayerEnterRaceCheckpoint', playerid: number): void;
  /**
   * Triggers the OnPlayerLeaveRaceCheckpoint event
   *
   * @name samp.fire
   * @param {string} [eventName=OnPlayerLeaveRaceCheckpoint] - Name of the event
   * @param {number} playerid - The ID of the player that left the race checkpoint
   * @summary This callback is called when a player leaves the race checkpoint.
   * @see OnPlayerEnterCheckpoint
   * @see OnPlayerLeaveCheckpoint
   * @see OnPlayerEnterRaceCheckpoint
   * @see SetPlayerCheckpoint
   * @see DisablePlayerCheckpoint
   * @see IsPlayerInCheckpoint
   * @see SetPlayerRaceCheckpoint
   * @see DisablePlayerRaceCheckpoint
   * @see IsPlayerInRaceCheckpoint
   * @remarks This callback can also be called by NPC.
   * @returns {void}
   */
  static fire(eventName: 'OnPlayerLeaveRaceCheckpoint', playerid: number): void;
  /**
   * Triggers the OnRconCommand event
   *
   * @name samp.fire
   * @param {string} [eventName=OnRconCommand] - Name of the event
   * @param {string} cmd - A string containing the command that was typed, as well as any passed parameters
   * @summary This callback is called when a command is sent through the server console, remote RCON, or via the in-game &quot;/rcon command&quot;.
   * @see IsPlayerAdmin
   * @see OnRconLoginAttempt
   * @remarks You will need to include this callback in a loaded filterscript for it to work in the gamemode!
   * @remarks &quot;/rcon&quot; is not included in &quot;cmd&quot; when a player types a command. 
   * @remarks If you use the print function here, it will send a message to the player who typed the command in-game as well as the log.
   * @remarks This callback is not called when the player is not logged in as RCON admin. 
   * @remarks When the player is not logged in as RCON admin and uses /rcon login, this callback will not be called and OnRconLoginAttempt is called instead. However, when the player is logged in as RCON admin, the use of this command will call this callback. 
   * @returns {void}
   */
  static fire(eventName: 'OnRconCommand', cmd: string): void;
  /**
   * Triggers the OnPlayerRequestSpawn event
   *
   * @name samp.fire
   * @param {string} [eventName=OnPlayerRequestSpawn] - Name of the event
   * @param {number} playerid - The ID of the player that requested to spawn
   * @summary Called when a player attempts to spawn via class selection either by pressing SHIFT or clicking the &#x27;Spawn&#x27; button.
   * @see OnPlayerSpawn
   * @see OnPlayerRequestClass
   * @remarks This callback can also be called by NPC.
   * @remarks To prevent players from spawning with certain classes, the last viewed class must be saved in a variable in OnPlayerRequestClass.
   * @returns {void}
   */
  static fire(eventName: 'OnPlayerRequestSpawn', playerid: number): void;
  /**
   * Triggers the OnObjectMoved event
   *
   * @name samp.fire
   * @param {string} [eventName=OnObjectMoved] - Name of the event
   * @param {number} objectid - The ID of the object that was moved
   * @summary This callback is called when an object is moved after MoveObject (when it stops moving).
   * @see MoveObject
   * @see IsObjectMoving
   * @see StopObject
   * @see OnPlayerObjectMoved
   * @remarks SetObjectPos does not work when used in this callback. To fix it, recreate the object.
   * @returns {void}
   */
  static fire(eventName: 'OnObjectMoved', objectid: number): void;
  /**
   * Triggers the OnPlayerObjectMoved event
   *
   * @name samp.fire
   * @param {string} [eventName=OnPlayerObjectMoved] - Name of the event
   * @param {number} playerid - The playerid the object is assigned to
   * @param {number} objectid - The ID of the player object that was moved
   * @summary This callback is called when a player object is moved after MovePlayerObject (when it stops moving).
   * @see OnObjectMoved
   * @see MovePlayerObject
   * @see IsPlayerObjectMoving
   * @see StopPlayerObject
   * @remarks This callback can also be called for NPC.
   * @returns {void}
   */
  static fire(eventName: 'OnPlayerObjectMoved', playerid: number, objectid: number): void;
  /**
   * Triggers the OnPlayerPickUpPickup event
   *
   * @name samp.fire
   * @param {string} [eventName=OnPlayerPickUpPickup] - Name of the event
   * @param {number} playerid - The ID of the player that picked up the pickup
   * @param {number} pickupid - The ID of the pickup, returned by CreatePickup
   * @summary Called when a player picks up a pickup created with CreatePickup.
   * @see CreatePickup
   * @see DestroyPickup
   * @returns {void}
   */
  static fire(eventName: 'OnPlayerPickUpPickup', playerid: number, pickupid: number): void;
  /**
   * Triggers the OnVehicleMod event
   *
   * @name samp.fire
   * @param {string} [eventName=OnVehicleMod] - Name of the event
   * @param {number} playerid - The ID of the driver of the vehicle
   * @param {number} vehicleid - The ID of the vehicle which is modded
   * @param {number} componentid - The ID of the component which was added to the vehicle
   * @summary This callback is called when a vehicle is modded.
   * @see AddVehicleComponent
   * @see OnEnterExitModShop
   * @see OnVehiclePaintjob
   * @see OnVehicleRespray
   * @remarks This callback is NOT called by AddVehicleComponent.
   * @returns {void}
   */
  static fire(eventName: 'OnVehicleMod', playerid: number, vehicleid: number, componentid: number): void;
  /**
   * Triggers the OnEnterExitModShop event
   *
   * @name samp.fire
   * @param {string} [eventName=OnEnterExitModShop] - Name of the event
   * @param {number} playerid - The ID of the player that entered or exited the modshop
   * @param {number} enterexit - 1 if the player entered or 0 if they exited
   * @param {number} interiorid - The interior ID of the modshop that the player is entering (or 0 if exiting)
   * @summary This callback is called when a player enters or exits a mod shop.
   * @see OnVehicleMod
   * @see OnVehicleRespray
   * @see OnVehiclePaintjob
   * @see AddVehicleComponent
   * @remarks This callback was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks Players collide when they get into the same mod shop.
   * @returns {void}
   */
  static fire(eventName: 'OnEnterExitModShop', playerid: number, enterexit: number, interiorid: number): void;
  /**
   * Triggers the OnVehiclePaintjob event
   *
   * @name samp.fire
   * @param {string} [eventName=OnVehiclePaintjob] - Name of the event
   * @param {number} playerid - The ID of the player that changed the paintjob of their vehicle
   * @param {number} vehicleid - The ID of the vehicle that had its paintjob changed
   * @param {number} paintjobid - The ID of the new paintjob
   * @summary Called when a player previews a vehicle paintjob inside a mod shop. Watch out, this callback is not called when the player buys the paintjob.
   * @see ChangeVehiclePaintjob
   * @see ChangeVehicleColor
   * @see OnVehicleRespray
   * @see OnVehicleMod
   * @remarks This callback is not called by ChangeVehiclePaintjob.
   * @returns {void}
   */
  static fire(eventName: 'OnVehiclePaintjob', playerid: number, vehicleid: number, paintjobid: number): void;
  /**
   * Triggers the OnVehicleRespray event
   *
   * @name samp.fire
   * @param {string} [eventName=OnVehicleRespray] - Name of the event
   * @param {number} playerid - The ID of the player that is driving the vehicle
   * @param {number} vehicleid - The ID of the vehicle that was resprayed
   * @param {number} color1 - The color that the vehicle&#x27;s primary color was changed to
   * @param {number} color2 - The color that the vehicle&#x27;s secondary color was changed to
   * @summary This callback is called when a player exits a mod shop, even if the colors weren&#x27;t changed. Watch out, the name is ambiguous, Pay &#x27;n&#x27; Spray shops don&#x27;t call this callback.
   * @see ChangeVehicleColor
   * @see ChangeVehiclePaintjob
   * @see OnVehiclePaintjob
   * @see OnVehicleMod
   * @see OnEnterExitModShop
   * @remarks Previewing a component inside a mod shop might call this callback.
   * @remarks This callback is not called by ChangeVehicleColor.
   * @returns {void}
   */
  static fire(eventName: 'OnVehicleRespray', playerid: number, vehicleid: number, color1: number, color2: number): void;
  /**
   * Triggers the OnVehicleDamageStatusUpdate event
   *
   * @name samp.fire
   * @param {string} [eventName=OnVehicleDamageStatusUpdate] - Name of the event
   * @param {number} vehicleid - The ID of the vehicle that was changed its damage status
   * @param {number} playerid - The ID of the player who synced the change in the damage status (who had the car damaged or repaired)
   * @summary This callback is called when a vehicle element such as doors, tires, panels, or lights change their damage status.
   * @see GetVehicleDamageStatus
   * @see UpdateVehicleDamageStatus
   * @remarks This callback was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks This does not include vehicle health changes
   * @returns {void}
   */
  static fire(eventName: 'OnVehicleDamageStatusUpdate', vehicleid: number, playerid: number): void;
  /**
   * Triggers the OnUnoccupiedVehicleUpdate event
   *
   * @name samp.fire
   * @param {string} [eventName=OnUnoccupiedVehicleUpdate] - Name of the event
   * @param {number} vehicleid - The ID of the vehicle that&#x27;s position was updated
   * @param {number} playerid - The ID of the player that sent a vehicle position sync update
   * @param {number} passenger_seat - The ID of the seat if the player is a passenger. 0&#x3D;not in vehicle, 1&#x3D;front passenger, 2&#x3D;backleft 3&#x3D;backright 4+ is for coach/bus etc. with many passenger seats
   * @param {number} new_x - The new X coordinate of the vehicle. This parameter was added in 0.3z. Leave it out if using an earlier version
   * @param {number} new_y - The new Y coordinate of the vehicle. This parameter was added in 0.3z. Leave it out if using an earlier version
   * @param {number} new_z - The new Z coordinate of the vehicle. This parameter was added in 0.3z. Leave it out if using an earlier version
   * @param {number} vel_x - The new X velocity of the vehicle. This parameter was added in 0.3z R4. Leave it out if using an earlier version
   * @param {number} vel_y - The new Y velocity of the vehicle. This parameter was added in 0.3z R4. Leave it out if using an earlier version
   * @param {number} vel_z - The new Z velocity of the vehicle. This parameter was added in 0.3z R4. Leave it out if using an earlier version
   * @summary This callback is called when a player&#x27;s client updates/syncs the position of a vehicle they&#x27;re not driving. This can happen outside of the vehicle or when the player is a passenger of a vehicle that has no driver.
   * @see OnTrailerUpdate
   * @remarks This callback was added in SA-MP 0.3c R3 and will not work in earlier versions!
   * @remarks This callback is called very frequently per second per unoccupied vehicle. You should refrain from implementing intensive calculations or intensive file writing/reading operations in this callback.
   * @remarks GetVehiclePos will return the old coordinates of the vehicle before this update.
   * @returns {void}
   */
  static fire(eventName: 'OnUnoccupiedVehicleUpdate', vehicleid: number, playerid: number, passenger_seat: number, new_x: number, new_y: number, new_z: number, vel_x: number, vel_y: number, vel_z: number): void;
  /**
   * Triggers the OnPlayerSelectedMenuRow event
   *
   * @name samp.fire
   * @param {string} [eventName=OnPlayerSelectedMenuRow] - Name of the event
   * @param {number} playerid - The ID of the player that selected a menu item
   * @param {number} row - The ID of the row that was selected. The first row is ID 0
   * @summary This callback is called when a player selects an item from a menu (ShowMenuForPlayer).
   * @see OnPlayerExitedMenu
   * @see OnDialogResponse
   * @see CreateMenu
   * @see DestroyMenu
   * @see AddMenuItem
   * @see ShowMenuForPlayer
   * @see HideMenuForPlayer
   * @remarks The menu ID is not passed to this callback. GetPlayerMenu must be used to determine which menu the player selected an item on.
   * @returns {void}
   */
  static fire(eventName: 'OnPlayerSelectedMenuRow', playerid: number, row: number): void;
  /**
   * Triggers the OnPlayerExitedMenu event
   *
   * @name samp.fire
   * @param {string} [eventName=OnPlayerExitedMenu] - Name of the event
   * @param {number} playerid - The ID of the player that exited the menu
   * @summary Called when a player exits a menu.
   * @see OnPlayerSelectedMenuRow
   * @see CreateMenu
   * @see DestroyMenu
   * @returns {void}
   */
  static fire(eventName: 'OnPlayerExitedMenu', playerid: number): void;
  /**
   * Triggers the OnPlayerInteriorChange event
   *
   * @name samp.fire
   * @param {string} [eventName=OnPlayerInteriorChange] - Name of the event
   * @param {number} playerid - The playerid who changed interior
   * @param {number} newinteriorid - The interior the player is now in
   * @param {number} oldinteriorid - The interior the player was in before
   * @summary Called when a player changes interior. Can be triggered by SetPlayerInterior or when a player enter/exits a building.
   * @see SetPlayerInterior
   * @see GetPlayerInterior
   * @see LinkVehicleToInterior
   * @see OnPlayerStateChange
   * @returns {void}
   */
  static fire(eventName: 'OnPlayerInteriorChange', playerid: number, newinteriorid: number, oldinteriorid: number): void;
  /**
   * Triggers the OnPlayerKeyStateChange event
   *
   * @name samp.fire
   * @param {string} [eventName=OnPlayerKeyStateChange] - Name of the event
   * @param {number} playerid - The ID of the player that pressed or released a key
   * @param {number} newkeys - A map (bitmask) of the keys currently held - see here
   * @param {number} oldkeys - A map (bitmask) of the keys held prior to the current change - see here
   * @summary This callback is called when the state of any supported key is changed (pressed/released). Directional keys do not trigger OnPlayerKeyStateChange (up/down/left/right).
   * @see GetPlayerKeys
   * @remarks This callback can also be called by NPC.
   * @remarks 
  Useful macros:
  
    // HOLDING(keys)
    #define HOLDING(%0) ((newkeys &amp; (%0)) &#x3D;&#x3D; (%0))
    
    // PRESSED(keys)
    #define PRESSED(%0) (((newkeys &amp; (%0)) &#x3D;&#x3D; (%0)) &amp;&amp; ((oldkeys &amp; (%0)) !&#x3D; (%0)))
    
    // PRESSING(keyVariable, keys)
    #define PRESSING(%0,%1) (%0 &amp; (%1))
    
    // RELEASED(keys)
    #define RELEASED(%0) (((newkeys &amp; (%0)) !&#x3D; (%0)) &amp;&amp; ((oldkeys &amp; (%0)) &#x3D;&#x3D; (%0)))
  

   * @returns {void}
   */
  static fire(eventName: 'OnPlayerKeyStateChange', playerid: number, newkeys: number, oldkeys: number): void;
  /**
   * Triggers the OnRconLoginAttempt event
   *
   * @name samp.fire
   * @param {string} [eventName=OnRconLoginAttempt] - Name of the event
   * @param {string} ip - The IP of the player that tried to log in to RCON
   * @param {string} password - The password used to login with
   * @param {number} success - 0 if the password was incorrect or 1 if it was correct
   * @summary This callback is called when someone attempts to log in to RCON in-game; successful or not.
   * @see OnRconCommand
   * @see IsPlayerAdmin
   * @see SendRconCommand
   * @remarks This callback was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks This callback is only called when /rcon login is used in-game. 
   * @remarks This callback is only called when the player is not yet logged in. When the player is logged in, OnRconCommand is called instead.
   * @returns {void}
   */
  static fire(eventName: 'OnRconLoginAttempt', ip: string, password: string, success: number): void;
  /**
   * Triggers the OnPlayerUpdate event
   *
   * @name samp.fire
   * @param {string} [eventName=OnPlayerUpdate] - Name of the event
   * @param {number} playerid - 
   * @returns {void}
   */
  static fire(eventName: 'OnPlayerUpdate', playerid: number): void;
  /**
   * Triggers the OnPlayerStreamIn event
   *
   * @name samp.fire
   * @param {string} [eventName=OnPlayerStreamIn] - Name of the event
   * @param {number} playerid - The ID of the player who has been streamed
   * @param {number} forplayerid - The ID of the player that streamed the other player in
   * @summary This callback is called when a player is streamed by some other player&#x27;s client.
   * @see OnPlayerStreamOut
   * @see OnActorStreamIn
   * @see OnVehicleStreamIn
   * @remarks This callback was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks This callback can also be called by NPC.
   * @returns {void}
   */
  static fire(eventName: 'OnPlayerStreamIn', playerid: number, forplayerid: number): void;
  /**
   * Triggers the OnPlayerStreamOut event
   *
   * @name samp.fire
   * @param {string} [eventName=OnPlayerStreamOut] - Name of the event
   * @param {number} playerid - The player who has been destreamed
   * @param {number} forplayerid - The player who has destreamed the other player
   * @summary This callback is called when a player is streamed out from some other player&#x27;s client.
   * @see OnPlayerStreamIn
   * @see OnActorStreamOut
   * @see OnVehicleStreamOut
   * @remarks This callback was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks This callback can also be called by NPC.
   * @returns {void}
   */
  static fire(eventName: 'OnPlayerStreamOut', playerid: number, forplayerid: number): void;
  /**
   * Triggers the OnVehicleStreamIn event
   *
   * @name samp.fire
   * @param {string} [eventName=OnVehicleStreamIn] - Name of the event
   * @param {number} vehicleid - The ID of the vehicle that streamed in for the player
   * @param {number} forplayerid - The ID of the player who the vehicle streamed in for
   * @summary Called when a vehicle is streamed to a player&#x27;s client.
   * @see OnVehicleStreamOut
   * @see OnPlayerStreamIn
   * @see OnPlayerStreamOut
   * @remarks This callback was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks This callback can also be called by NPC.
   * @returns {void}
   */
  static fire(eventName: 'OnVehicleStreamIn', vehicleid: number, forplayerid: number): void;
  /**
   * Triggers the OnVehicleStreamOut event
   *
   * @name samp.fire
   * @param {string} [eventName=OnVehicleStreamOut] - Name of the event
   * @param {number} vehicleid - The ID of the vehicle that streamed out
   * @param {number} forplayerid - The ID of the player who is no longer streaming the vehicle
   * @summary This callback is called when a vehicle is streamed out for a player&#x27;s client (it&#x27;s so far away that they can&#x27;t see it).
   * @see OnVehicleStreamIn
   * @see OnPlayerStreamIn
   * @see OnPlayerStreamOut
   * @remarks This callback was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks This callback can also be called by NPC.
   * @returns {void}
   */
  static fire(eventName: 'OnVehicleStreamOut', vehicleid: number, forplayerid: number): void;
  /**
   * Triggers the OnActorStreamIn event
   *
   * @name samp.fire
   * @param {string} [eventName=OnActorStreamIn] - Name of the event
   * @param {number} actorid - The ID of the actor that has been streamed in for the player
   * @param {number} forplayerid - The ID of the player that streamed the actor in
   * @summary This callback is called when an actor is streamed in by a player&#x27;s client.
   * @see OnActorStreamOut
   * @see OnPlayerStreamIn
   * @remarks This function was added in SA-MP 0.3.7 and will not work in earlier versions!
   * @remarks This callback can also be called by NPC.
   * @remarks It is always called first in filterscripts.
   * @returns {void}
   */
  static fire(eventName: 'OnActorStreamIn', actorid: number, forplayerid: number): void;
  /**
   * Triggers the OnActorStreamOut event
   *
   * @name samp.fire
   * @param {string} [eventName=OnActorStreamOut] - Name of the event
   * @param {number} actorid - The ID of the actor that has been streamed out for the player
   * @param {number} forplayerid - The ID of the player that streamed the actor out
   * @summary This callback is called when an actor is streamed out by a player&#x27;s client.
   * @see OnActorStreamIn
   * @see OnPlayerStreamOut
   * @remarks This function was added in SA-MP 0.3.7 and will not work in earlier versions!
   * @remarks This callback can also be called by NPC.
   * @remarks It is always called first in filterscripts.
   * @returns {void}
   */
  static fire(eventName: 'OnActorStreamOut', actorid: number, forplayerid: number): void;
  /**
   * Triggers the OnDialogResponse event
   *
   * @name samp.fire
   * @param {string} [eventName=OnDialogResponse] - Name of the event
   * @param {number} playerid - The ID of the player that responded to the dialog
   * @param {number} dialogid - The ID of the dialog the player responded to, assigned in ShowPlayerDialog
   * @param {number} response - 1 for left button and 0 for right button (if only one button shown, always 1)
   * @param {number} listitem - The ID of the list item selected by the player (starts at 0) (only if using a list style dialog)
   * @param {string} inputtext - The text entered into the input box by the player or the selected list item text
   * @summary This callback is called when a player responds to a dialog shown using ShowPlayerDialog by either clicking a button, pressing ENTER/ESC or double-clicking a list item (if using a list style dialog).
   * @see ShowPlayerDialog
   * @remarks This callback was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks A player&#x27;s dialog doesn&#x27;t hide when the gamemode restarts, causing the server to print &quot;Warning: PlayerDialogResponse PlayerId: 0 dialog ID doesn&#x27;t match last sent dialog ID&quot; if a player responded to this dialog after restart.
   * @remarks Parameters can contain different values, based on dialog&#x27;s style.
   * @returns {void}
   */
  static fire(eventName: 'OnDialogResponse', playerid: number, dialogid: number, response: number, listitem: number, inputtext: string): void;
  /**
   * Triggers the OnPlayerTakeDamage event
   *
   * @name samp.fire
   * @param {string} [eventName=OnPlayerTakeDamage] - Name of the event
   * @param {number} playerid - The ID of the player that took damage
   * @param {number} issuerid - The ID of the player that caused the damage. INVALID_PLAYER_ID if self-inflicted
   * @param {number} amount - The amount of damage the player took (health and armour combined)
   * @param {number} weaponid - The ID of the weapon/reason for the damage
   * @param {number} bodypart - The body part that was hit. (NOTE: This parameter was added in 0.3z. Leave it out if using an older version!)
   * @summary This callback is called when a player takes damage.
   * @see OnPlayerGiveDamage
   * @see OnPlayerWeaponShot
   * @remarks This callback was added in SA-MP 0.3d and will not work in earlier versions!
   * @remarks GetPlayerHealth and GetPlayerArmour will return the old amounts of the player before this callback. 
   * @remarks 
  The weaponid will return 37 (flame thrower) from any fire sources (e.g. molotov, 18).
  The weaponid will return 51 from any weapon that creates an explosion (e.g. RPG, grenade)
  playerid is the only one who can call the callback.
  The amount is always the maximum damage the weaponid can do, even when the health left is less than that maximum damage. So when a player has 100.0 health and gets shot with a Desert Eagle which has a damage value of 46.2, it takes 3 shots to kill that player. All 3 shots will show an amount of 46.2, even though when the last shot hits, the player only has 7.6 health left.

   * @returns {void}
   */
  static fire(eventName: 'OnPlayerTakeDamage', playerid: number, issuerid: number, amount: number, weaponid: number, bodypart: number): void;
  /**
   * Triggers the OnPlayerGiveDamage event
   *
   * @name samp.fire
   * @param {string} [eventName=OnPlayerGiveDamage] - Name of the event
   * @param {number} playerid - The ID of the player that gave damage
   * @param {number} damagedid - The ID of the player that received damage
   * @param {number} amount - The amount of health/armour damagedid has lost (combined)
   * @param {number} weaponid - The reason that caused the damage
   * @param {number} bodypart - The body part that was hit. (NOTE: This parameter was added in 0.3z. Leave it out if using an older version!)
   * @summary This callback is called when a player gives damage to another player.
   * @see OnPlayerTakeDamage
   * @remarks This callback was added in SA-MP 0.3d and will not work in earlier versions!
   * @remarks 
  Keep in mind this function can be inaccurate in some cases.
  If you want to prevent certain players from damaging eachother, use SetPlayerTeam.
  The weaponid will return 37 (flame thrower) from any fire sources (e.g. molotov, 18)
  The weaponid will return 51 from any weapon that creates an explosion (e.g. RPG, grenade)
  playerid is the only one who can call the callback.
  The amount is always the maximum damage the weaponid can do, even when the health left is less than that maximum damage. So when a player has 100.0 health and gets shot with a Desert Eagle which has a damage value of 46.2, it takes 3 shots to kill that player. All 3 shots will show an amount of 46.2, even though when the last shot hits, the player only has 7.6 health left.

   * @returns {void}
   */
  static fire(eventName: 'OnPlayerGiveDamage', playerid: number, damagedid: number, amount: number, weaponid: number, bodypart: number): void;
  /**
   * Triggers the OnPlayerGiveDamageActor event
   *
   * @name samp.fire
   * @param {string} [eventName=OnPlayerGiveDamageActor] - Name of the event
   * @param {number} playerid - The ID of the player that gave damage
   * @param {number} damaged_actorid - The ID of the actor that received damage
   * @param {number} amount - The amount of health/armour damaged_actorid has lost
   * @param {number} weaponid - The reason that caused the damage
   * @param {number} bodypart - The body part that was hit
   * @summary This callback is called when a player gives damage to an actor.
   * @see CreateActor
   * @see SetActorInvulnerable
   * @see SetActorHealth
   * @see GetActorHealth
   * @see IsActorInvulnerable
   * @see IsValidActor
   * @see OnActorStreamOut
   * @see OnPlayerStreamIn
   * @remarks This callback was added in SA-MP 0.3.7 and will not work in earlier versions!
   * @remarks This function does not get called if the actor is set invulnerable (WHICH IS BY DEFAULT). See SetActorInvulnerable.
   * @returns {void}
   */
  static fire(eventName: 'OnPlayerGiveDamageActor', playerid: number, damaged_actorid: number, amount: number, weaponid: number, bodypart: number): void;
  /**
   * Triggers the OnPlayerClickMap event
   *
   * @name samp.fire
   * @param {string} [eventName=OnPlayerClickMap] - Name of the event
   * @param {number} playerid - The ID of the player that placed a target/waypoint
   * @param {number} fX - The X float coordinate where the player clicked
   * @param {number} fY - The Y float coordinate where the player clicked
   * @param {number} fZ - The Z float coordinate where the player clicked (inaccurate - see note below)
   * @summary OnPlayerClickMap is called when a player places a target/waypoint on the pause menu map (by right-clicking).
   * @see SetPlayerPos
   * @see SetPlayerPosFindZ
   * @see GetPlayerPos
   * @remarks This callback was added in SA-MP 0.3d and will not work in earlier versions!
   * @remarks The Z value returned will be 0 (invalid) if it is far away from the player; use the MapAndreas plugin to get a more accurate Z coordinate.
   * @returns {void}
   */
  static fire(eventName: 'OnPlayerClickMap', playerid: number, fX: number, fY: number, fZ: number): void;
  /**
   * Triggers the OnPlayerClickTextDraw event
   *
   * @name samp.fire
   * @param {string} [eventName=OnPlayerClickTextDraw] - Name of the event
   * @param {number} playerid - The ID of the player that clicked on the textdraw
   * @param {number} clickedid - The ID of the clicked textdraw. INVALID_TEXT_DRAW if selection was cancelled
   * @summary This callback is called when a player clicks on a textdraw or cancels the select mode with the Escape key.
   * @see OnPlayerClickPlayerTextDraw
   * @see OnPlayerClickPlayer
   * @remarks This callback was added in SA-MP 0.3e and will not work in earlier versions!
   * @remarks The clickable area is defined by TextDrawTextSize. The x and y parameters passed to that function must not be zero or negative. 
   * @remarks Do not use CancelSelectTextDraw unconditionally within this callback. This results in an infinite loop. 
   * @returns {void}
   */
  static fire(eventName: 'OnPlayerClickTextDraw', playerid: number, clickedid: number): void;
  /**
   * Triggers the OnPlayerClickPlayerTextDraw event
   *
   * @name samp.fire
   * @param {string} [eventName=OnPlayerClickPlayerTextDraw] - Name of the event
   * @param {number} playerid - The ID of the player that selected a textdraw
   * @param {number} playertextid - The ID of the player-textdraw that the player selected
   * @summary This callback is called when a player clicks on a player-textdraw. It is not called when player cancels the select mode (ESC) - however, OnPlayerClickTextDraw is.
   * @see PlayerTextDrawSetSelectable
   * @see OnPlayerClickTextDraw
   * @see OnPlayerClickPlayer
   * @remarks This callback was added in SA-MP 0.3e and will not work in earlier versions!
   * @remarks When a player presses ESC to cancel selecting a textdraw, OnPlayerClickTextDraw is called with a textdraw ID of INVALID_TEXT_DRAW. OnPlayerClickPlayerTextDraw won&#x27;t be called also.
   * @returns {void}
   */
  static fire(eventName: 'OnPlayerClickPlayerTextDraw', playerid: number, playertextid: number): void;
  /**
   * Triggers the OnIncomingConnection event
   *
   * @name samp.fire
   * @param {string} [eventName=OnIncomingConnection] - Name of the event
   * @param {number} playerid - The ID of the player attempting to connect
   * @param {string} ip_address - The IP address of the player attempting to connect
   * @param {number} port - The port of the attempted connection
   * @summary This callback is called when an IP address attempts a connection to the server. To block incoming connections, use BlockIpAddress.
   * @see OnPlayerConnect
   * @see OnPlayerDisconnect
   * @see OnPlayerFinishedDownloading
   * @see BlockIpAddress
   * @see UnBlockIpAddress
   * @remarks  	This callback was added in SA-MP 0.3z R2-2 and will not work in earlier versions!
   * @returns {void}
   */
  static fire(eventName: 'OnIncomingConnection', playerid: number, ip_address: string, port: number): void;
  /**
   * Triggers the OnTrailerUpdate event
   *
   * @name samp.fire
   * @param {string} [eventName=OnTrailerUpdate] - Name of the event
   * @param {number} playerid - The ID of the player who sent a trailer update
   * @param {number} vehicleid - The Trailer being updated
   * @summary This callback is called when a player sent a trailer update.
   * @see OnUnoccupiedVehicleUpdate
   * @see GetVehicleTrailer
   * @see IsTrailerAttachedToVehicle
   * @see AttachTrailerToVehicle
   * @see DetachTrailerFromVehicle
   * @remarks This callback was added in SA-MP 0.3z R4 and will not work in earlier versions!
   * @remarks This callback is called very frequently per second per trailer. You should refrain from implementing intensive calculations or intensive file writing/reading operations in this callback. 
   * @returns {void}
   */
  static fire(eventName: 'OnTrailerUpdate', playerid: number, vehicleid: number): void;
  /**
   * Triggers the OnVehicleSirenStateChange event
   *
   * @name samp.fire
   * @param {string} [eventName=OnVehicleSirenStateChange] - Name of the event
   * @param {number} playerid - The ID of the player that toggled the siren (driver)
   * @param {number} vehicleid - The ID of the vehicle of which the siren was toggled for
   * @param {number} newstate - 0 if siren was turned off, 1 if siren was turned on
   * @summary This callback is called when a vehicle&#x27;s siren is toggled.
   * @see GetVehicleParamsSirenState
   * @remarks This callback was added in SA-MP 0.3.7 and will not work in earlier versions!
   * @remarks This callback can also be called by NPC.
   * @remarks This callback is only called when a vehicle&#x27;s siren is toggled on or off, NOT when the alternate siren is in use (holding horn).
   * @returns {void}
   */
  static fire(eventName: 'OnVehicleSirenStateChange', playerid: number, vehicleid: number, newstate: number): void;
  /**
   * Triggers the OnPlayerFinishedDownloading event
   *
   * @name samp.fire
   * @param {string} [eventName=OnPlayerFinishedDownloading] - Name of the event
   * @param {number} playerid - The ID of the player that finished downloading custom models
   * @param {number} virtualworld - The ID of the virtual world the player finished downloading custom models for
   * @summary This callback is called when a player finishes downloading custom models. For more information on how to add custom models to your server, see the release thread and this tutorial.
   * @see OnPlayerConnect
   * @see OnPlayerDisconnect
   * @see OnIncomingConnection
   * @remarks This callback was added in SA-MP 0.3DL and will not work in earlier versions!
   * @remarks This callback is called every time a player changes virtual worlds, even if there are no custom models present in that world.
   * @returns {void}
   */
  static fire(eventName: 'OnPlayerFinishedDownloading', playerid: number, virtualworld: number): void;
  /**
   * Triggers the OnPlayerClickPlayer event
   *
   * @name samp.fire
   * @param {string} [eventName=OnPlayerClickPlayer] - Name of the event
   * @param {number} playerid - The ID of the player that clicked on a player on the scoreboard
   * @param {number} clickedplayerid - The ID of the player that was clicked on
   * @param {number} source - The source of the player&#x27;s click
   * @summary Called when a player double-clicks on a player on the scoreboard.
   * @see OnPlayerClickTextDraw
   * @remarks This callback was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks There is currently only one  (0 - CLICK_SOURCE_SCOREBOARD). The existence of this argument suggests that more sources may be supported in the future.
   * @returns {void}
   */
  static fire(eventName: 'OnPlayerClickPlayer', playerid: number, clickedplayerid: number, source: number): void;
  /**
   * Triggers the OnPlayerSelectObject event
   *
   * @name samp.fire
   * @param {string} [eventName=OnPlayerSelectObject] - Name of the event
   * @param {number} playerid - The ID of the player that edited an object
   * @param {number} type - The type of selection
   * @param {number} objectid - The ID of the edited object
   * @param {number} modelid - The model of the attached object that was edited
   * @param {number} fX - The X offset for the object that was edited
   * @param {number} fY - The Y offset for the object that was edited
   * @param {number} fZ - The Z offset for the object that was edited
   * @summary This callback is called when a player finishes editing an object (EditObject/EditPlayerObject).
   * @summary This callback is called when a player ends attached object edition mode.
   * @summary This callback is called when a player selects an object after SelectObject has been used.
   * @see EditObject
   * @see CreateObject
   * @see DestroyObject
   * @see MoveObject
   * @see EditAttachedObject
   * @see SetPlayerAttachedObject
   * @see SelectObject
   * @remarks This callback was added in SA-MP 0.3e and will not work in earlier versions!
   * @remarks When using EDIT_RESPONSE_UPDATE be aware that this callback will not be called when releasing an edit in progress resulting in the last update of EDIT_RESPONSE_UPDATE being out of sync of the objects current position.
   * @remarks This callback was added in SA-MP 0.3e and will not work in earlier versions!
   * @remarks Editions should be discarded if response was 0 (cancelled). This must be done by storing the offsets etc. in an array BEFORE using EditAttachedObject.
   * @remarks This function was added in SA-MP 0.3e and will not work in earlier versions!
   * @returns {void}
   */
  static fire(eventName: 'OnPlayerSelectObject', playerid: number, type: number, objectid: number, modelid: number, fX: number, fY: number, fZ: number): void;
  /**
   * Triggers the OnPlayerWeaponShot event
   *
   * @name samp.fire
   * @param {string} [eventName=OnPlayerWeaponShot] - Name of the event
   * @param {number} playerid - The ID of the player that shot a weapon
   * @param {number} weaponid - The ID of the weapon shot by the player
   * @param {number} hittype - The type of thing the shot hit (none, player, vehicle, or (player)object)
   * @param {number} hitid - The ID of the player, vehicle or object that was hit
   * @param {number} fX - The X coordinate that the shot hit
   * @param {number} fY - The Y coordinate that the shot hit
   * @param {number} fZ - The Z coordinate that the shot hit
   * @summary This callback is called when a player fires a shot from a weapon. Only bullet weapons are supported. Only passenger drive-by is supported (not driver drive-by, and not sea sparrow / hunter shots).
   * @see OnPlayerGiveDamage
   * @see GetPlayerLastShotVectors
   * @remarks This callback was added in SA-MP 0.3z and will not work in earlier versions!
   * @remarks 
    BULLET_HIT_TYPE_NONE(0)
    BULLET_HIT_TYPE_PLAYER(1)
    BULLET_HIT_TYPE_VEHICLE(2)
    BULLET_HIT_TYPE_OBJECT(3)
    BULLET_HIT_TYPE_PLAYER_OBJECT(4)

   * @remarks BULLET_HIT_TYPE_PLAYER is also called for NPCs. Actors are ignored by this callback and detects as BULLET_HIT_TYPE_NONE.
   * @remarks This callback is only called when lag compensation is enabled. 
   * @remarks 
  If hittype is:
  
    - BULLET_HIT_TYPE_NONE: the fX, fY and fZ parameters are normal coordinates, will give 0.0 for coordinates if nothing was hit (e.g. far object that the bullet can&#x27;t reach);
    - Others: the fX, fY and fZ are offsets relative to the hitid.
  

   * @remarks 
  Isn&#x27;t called if you fired in vehicle as driver or if you are looking behind with the aim enabled (shooting in air).
  It is called as BULLET_HIT_TYPE_VEHICLE with the correct hitid (the hit player&#x27;s vehicleid) if you are shooting a player which is in a vehicle. It won&#x27;t be called as BULLET_HIT_TYPE_PLAYER at all.
  Partially fixed in SA-MP 0.3.7: If fake weapon data is sent by a malicious user, other player clients may freeze or crash. To combat this, check if the reported weaponid can actually fire bullets.

   * @remarks 

   * @remarks GetPlayerLastShotVectors can be used in this callback for more detailed bullet vector information.
   * @returns {void}
   */
  static fire(eventName: 'OnPlayerWeaponShot', playerid: number, weaponid: number, hittype: number, hitid: number, fX: number, fY: number, fZ: number): void;
  /**
   * Triggers the OnClientCheckResponse event
   *
   * @name samp.fire
   * @param {string} [eventName=OnClientCheckResponse] - Name of the event
   * @param {number} playerid - The ID of the player checked
   * @param {number} actionid - The type of check performed
   * @param {number} memaddr - The address requested
   * @param {number} retndata - The result of the check
   * @summary This callback is called when a SendClientCheck request comletes
   * @see SendClientCheck
   * @returns {void}
   */
  static fire(eventName: 'OnClientCheckResponse', playerid: number, actionid: number, memaddr: number, retndata: number): void;
  /**
   * Triggers the OnScriptCash event
   *
   * @name samp.fire
   * @param {string} [eventName=OnScriptCash] - Name of the event
   * @param {number} playerid - 
   * @param {number} amount - 
   * @param {number} source - 
   * @returns {void}
   */
  static fire(eventName: 'OnScriptCash', playerid: number, amount: number, source: number): void;
  /**
   * Triggers a registered event
   *
   * @name samp.fire
   * @param {string} eventName - Name of the event
   * @param {...*} args - Event arguments
   * @returns {void}
   */
  static fire(eventName: string, ...args: Array<any>): void;

  /**
   * Calls the AMX native SendClientMessage 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SendClientMessage] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to display the message to
   * @param {number} color - The color of the message (RGBA)
   * @param {string} message - The text that will be displayed (max 144 characters)
   * @summary This function sends a message to a specific player with a chosen color in the chat. The whole line in the chatbox will be in the set color unless color embedding is used (since 0.3c).
   * @see SendClientMessageToAll
   * @see SendPlayerMessageToPlayer
   * @see SendPlayerMessageToAll
   * @remarks If a message is longer than 144 characters, it will not be sent. Truncation can be used to prevent this. Displaying a message on multiple lines will also solve this issue. 
   * @remarks Avoid using the percent sign (or format specifiers) in the actual message text without properly escaping it (like %%). It will result in crashes otherwise. 
   * @remarks You can use color embedding for multiple colors in the message. 
   * @returns 
  1: The function executed successfully. Success is reported when the string is over 144 characters, but the message won&#x27;t be sent.
  0: The function failed to execute. The player is not connected.

   */
  static callNative(nativeName: 'SendClientMessage', paramTypes: 'iis', playerid: number, color: number, message: string): number;
  /**
   * Calls the AMX native SendClientMessageToAll 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SendClientMessageToAll] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} color - The color of the message (RGBA)
   * @param {string} message - The message to show (max 144 characters)
   * @summary Displays a message in chat to all players. This is a multi-player equivalent of SendClientMessage.
   * @see SendClientMessage
   * @see SendPlayerMessageToAll
   * @remarks Avoid using format specifiers in your messages without formatting the string that is sent. It will result in crashes otherwise.
   * @returns This function always returns 1.
   */
  static callNative(nativeName: 'SendClientMessageToAll', paramTypes: 'is', color: number, message: string): number;
  /**
   * Calls the AMX native SendPlayerMessageToPlayer 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SendPlayerMessageToPlayer] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player who will receive the message
   * @param {number} senderid - The sender&#x27;s ID. If invalid, the message will not be sent
   * @param {string} message - The message that will be sent
   * @summary Sends a message in the name of a player to another player on the server. The message will appear in the chat box but can only be seen by the user specified with . The line will start with the sender&#x27;s name in their color, followed by the message in white.
   * @see SendPlayerMessageToAll
   * @see SendClientMessage
   * @see SendClientMessageToAll
   * @see OnPlayerText
   * @remarks Avoid using format specifiers in your messages without formatting the string that is sent. It will result in crashes otherwise.
   */
  static callNative(nativeName: 'SendPlayerMessageToPlayer', paramTypes: 'iis', playerid: number, senderid: number, message: string): number;
  /**
   * Calls the AMX native SendPlayerMessageToAll 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SendPlayerMessageToAll] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} senderid - The ID of the sender. If invalid, the message will not be sent
   * @param {string} message - The message that will be sent
   * @summary Sends a message in the name of a player to all other players on the server. The line will start with the sender&#x27;s name in their color, followed by the message in white.
   * @see SendPlayerMessageToPlayer
   * @see SendClientMessageToAll
   * @see OnPlayerText
   * @remarks Avoid using format specifiers in your messages without formatting the string that is sent. It will result in crashes otherwise.
   */
  static callNative(nativeName: 'SendPlayerMessageToAll', paramTypes: 'is', senderid: number, message: string): number;
  /**
   * Calls the AMX native SendDeathMessage 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SendDeathMessage] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} killer - The ID of the killer (can be INVALID_PLAYER_ID)
   * @param {number} killee - The ID of the player that died
   * @param {number} weapon - The reason (not always a weapon) for the victim&#x27;s death. Special icons can also be used (ICON_CONNECT and ICON_DISCONNECT)
   * @summary Adds a death to the &#x27;killfeed&#x27; on the right-hand side of the screen for all players.
   * @see SendDeathMessageToPlayer
   * @see OnPlayerDeath
   * @remarks Death messages can be cleared by using a valid player ID for  that is not connected.
   * @remarks To show a death message for just a single player, use SendDeathMessageToPlayer. 
   * @remarks You can use NPCs to create your own custom death reasons. 
   * @returns This function always returns 1, even if the function fails to execute. The function fails to execute (no death message shown) if  is invalid. If  is invalid, a generic skull-and-crossbones icon is shown.  being invalid (INVALID_PLAYER_ID) is valid.
   */
  static callNative(nativeName: 'SendDeathMessage', paramTypes: 'iii', killer: number, killee: number, weapon: number): number;
  /**
   * Calls the AMX native SendDeathMessageToPlayer 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SendDeathMessageToPlayer] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to send the death message to
   * @param {number} killer - The ID of the killer (can be INVALID_PLAYER_ID)
   * @param {number} killee - The ID of the player that died
   * @param {number} weapon - The reason (not always a weapon) for the victim&#x27;s death. Special icons can also be used (ICON_CONNECT and ICON_DISCONNECT)
   * @summary Adds a death to the &#x27;killfeed&#x27; on the right-hand side of the screen for a single player.
   * @see SendDeathMessage
   * @see OnPlayerDeath
   * @remarks This Function was added in SA-MP 0.3z R2-2 and will not work in earlier versions!
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute.

   */
  static callNative(nativeName: 'SendDeathMessageToPlayer', paramTypes: 'iiii', playerid: number, killer: number, killee: number, weapon: number): number;
  /**
   * Calls the AMX native GameTextForAll 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GameTextForAll] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {string} string - The text to be displayed
   * @param {number} time - The duration of the text being shown in milliseconds
   * @param {number} style - The style of text to be displayed
   * @summary Shows &#x27;game text&#x27; (on-screen text) for a certain length of time for all players.
   * @see GameTextForPlayer
   * @see TextDrawShowForAll
   * @returns This function always returns 1.
   */
  static callNative(nativeName: 'GameTextForAll', paramTypes: 'sii', string: string, time: number, style: number): number;
  /**
   * Calls the AMX native GameTextForPlayer 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GameTextForPlayer] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to show the gametext for
   * @param {string} string - The text to be displayed
   * @param {number} time - The duration of the text being shown in milliseconds
   * @param {number} style - The style of text to be displayed
   * @summary Shows &#x27;game text&#x27; (on-screen text) for a certain length of time for a specific player.
   * @see GameTextForAll
   * @see TextDrawShowForPlayer
   * @returns 
  1: The function executed successfully. Success is reported when the style and/or time is invalid. Nothing will happen though (no text displayed). May also cause game crashes.
  0: The function failed to execute. This means either the string is null or the player is not connected.

   */
  static callNative(nativeName: 'GameTextForPlayer', paramTypes: 'isii', playerid: number, string: string, time: number, style: number): number;
  /**
   * Calls the AMX native SetTimer 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetTimer] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {string} funcname - Name of the function to call as a string. This must be a public function (forwarded). A null string here will crash the server
   * @param {number} interval - Interval in milliseconds
   * @param {number} repeating - Whether the timer should repeat or not
   * @summary Sets a &#x27;timer&#x27; to call a function after some time. Can be set to repeat.
   * @see SetTimerEx
   * @see KillTimer
   * @remarks Timer intervals are not accurate (roughly 25% off). There&#x27;s a fix available here. 
   * @remarks Timer IDs are never used twice. You can use KillTimer on a timer ID and it won&#x27;t matter if it&#x27;s running or not. 
   * @remarks The function that should be called must be public. 
   * @remarks The use of many timers will result in increased memory/cpu usage. 
   * @returns The ID of the timer that was started. Timer IDs start at 1.
   */
  static callNative(nativeName: 'SetTimer', paramTypes: 'sii', funcname: string, interval: number, repeating: number): number;
  /**
   * Calls the AMX native KillTimer 
   *
   * @name samp.callNative
   * @param {string} [nativeName=KillTimer] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} timerid - The ID of the timer to kill (returned by SetTimer or SetTimerEx)
   * @summary Kills (stops) a running timer.
   * @see SetTimer
   * @see SetTimerEx
   * @returns This function always returns 0.
   */
  static callNative(nativeName: 'KillTimer', paramTypes: 'i', timerid: number): number;
  /**
   * Calls the AMX native GetTickCount 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetTickCount] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @summary Returns the uptime of the actual server (not the SA-MP server) in milliseconds.
   * @see tickcount
   * @remarks GetTickCount will cause problems on servers with uptime of over 24 days as GetTickCount will eventually warp past the integer size constraints. However using this function fixes the problem.
   * @remarks One common use for GetTickCount is for benchmarking. It can be used to calculate how much time some code takes to execute.
   * @returns Uptime of the actual server (not the SA-MP server).
   */
  static callNative(nativeName: 'GetTickCount', paramTypes: ''): number;
  /**
   * Calls the AMX native GetMaxPlayers 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetMaxPlayers] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @summary Returns the maximum number of players that can join the server, as set by the server variable &#x27;maxplayers&#x27; in server.cfg.
   * @see GetPlayerPoolSize
   * @see IsPlayerConnected
   * @remarks This function can not be used in place of MAX_PLAYERS. It can not be used at compile time (e.g. for array sizes). MAX_PLAYERS should always be re-defined to what the &#x27;maxplayers&#x27; var will be, or higher.
   * @returns The maximum number of players that can join the server.
   */
  static callNative(nativeName: 'GetMaxPlayers', paramTypes: ''): number;
  /**
   * Calls the AMX native VectorSize that returns a value with a Float tag
   *
   * @name samp.callNativeFloat
   * @param {string} [nativeName=VectorSize] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} x - The vector&#x27;s magnitude on the X axis
   * @param {number} y - The vector&#x27;s magnitude on the Y axis
   * @param {number} z - The vector&#x27;s magnitude on the Z axis
   * @summary Returns the norm (length) of the provided vector.
   * @see GetPlayerDistanceFromPoint
   * @see GetVehicleDistanceFromPoint
   * @see floatsqroot
   * @remarks This function was added in SA-MP 0.3z and will not work in earlier versions!
   * @returns The norm (length) of the provided vector as a float.
   */
  static callNativeFloat(nativeName: 'VectorSize', paramTypes: 'fff', x: number, y: number, z: number): number;
  /**
   * Calls the AMX native asin that returns a value with a Float tag
   *
   * @name samp.callNativeFloat
   * @param {string} [nativeName=asin] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} value - The sine for which to find the angle for
   * @summary Get the inversed value of a sine in degrees.
   * @see floatsin
   * @returns The angle in degrees.
   */
  static callNativeFloat(nativeName: 'asin', paramTypes: 'f', value: number): number;
  /**
   * Calls the AMX native acos that returns a value with a Float tag
   *
   * @name samp.callNativeFloat
   * @param {string} [nativeName=acos] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} value - The cosine for which to find the angle for
   * @summary Get the inversed value of a cosine in degrees.
   * @see floatcos
   * @returns The angle in degrees.
   */
  static callNativeFloat(nativeName: 'acos', paramTypes: 'f', value: number): number;
  /**
   * Calls the AMX native atan that returns a value with a Float tag
   *
   * @name samp.callNativeFloat
   * @param {string} [nativeName=atan] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} value - The tangent for which to find the angle for
   * @summary Get the inversed value of a tangent in degrees.
   * @see atan2
   * @see floattan
   * @returns The angle in degrees.
   */
  static callNativeFloat(nativeName: 'atan', paramTypes: 'f', value: number): number;
  /**
   * Calls the AMX native atan2 that returns a value with a Float tag
   *
   * @name samp.callNativeFloat
   * @param {string} [nativeName=atan2] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} y - y size
   * @param {number} x - x size
   * @summary Get the multi-valued inversed value of a tangent in degrees.
   * @see atan
   * @see floattan
   * @returns The angle in degrees.
   */
  static callNativeFloat(nativeName: 'atan2', paramTypes: 'ff', y: number, x: number): number;
  /**
   * Calls the AMX native GetPlayerPoolSize 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPlayerPoolSize] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @summary Gets the highest playerid currently in use on the server.
   * @see GetVehiclePoolSize
   * @see GetMaxPlayers
   * @remarks This function was added in SA-MP 0.3.7 and will not work in earlier versions!
   * @returns The highest playerid currently in use on the server or 0 if there are no connected players.
   */
  static callNative(nativeName: 'GetPlayerPoolSize', paramTypes: ''): number;
  /**
   * Calls the AMX native GetVehiclePoolSize 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetVehiclePoolSize] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @summary Gets the highest vehicleid currently in use on the server.
   * @see GetPlayerPoolSize
   * @remarks This function was added in SA-MP 0.3.7 and will not work in earlier versions!
   * @returns The highest vehicleid currently in use on the server or 0 if there are no created vehicles.
   */
  static callNative(nativeName: 'GetVehiclePoolSize', paramTypes: ''): number;
  /**
   * Calls the AMX native GetActorPoolSize 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetActorPoolSize] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @summary Gets the highest actorid created on the server.
   * @see CreateActor
   * @see IsValidActor
   * @see SetActorHealth
   * @remarks This function was added in SA-MP 0.3.7 and will not work in earlier versions!
   * @returns The highest actorid created on the server or 0 if there are no created actors.
   */
  static callNative(nativeName: 'GetActorPoolSize', paramTypes: ''): number;
  /**
   * Calls the AMX native SHA256_PassHash 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SHA256_PassHash] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {string} password - 
   * @param {string} salt - 
   * @param {number} ret_hash_len - 
   */
  static callNative(nativeName: 'SHA256_PassHash', paramTypes: 'ssSi', password: string, salt: string, ret_hash_len: number): string;
  /**
   * Calls the AMX native SetSVarInt 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetSVarInt] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {string} varname - The name of the server variable
   * @param {number} int_value - The integer to be set
   * @summary Set an integer server variable.
   * @see GetSVarInt
   * @see SetSVarString
   * @see GetSVarString
   * @see SetSVarFloat
   * @see GetSVarFloat
   * @see DeleteSVar
   * @remarks This function was added in SA-MP 0.3.7 R2 and will not work in earlier versions!
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. The variable name is null or over 40 characters.

   */
  static callNative(nativeName: 'SetSVarInt', paramTypes: 'si', varname: string, int_value: number): number;
  /**
   * Calls the AMX native GetSVarInt 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetSVarInt] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {string} varname - The name of the server variable (case-insensitive). Assigned in SetSVarInt
   * @summary Gets an integer server variable&#x27;s value.
   * @see SetSVarInt
   * @see SetSVarString
   * @see GetSVarString
   * @see SetSVarFloat
   * @see GetSVarFloat
   * @see DeleteSVar
   * @remarks This function was added in SA-MP 0.3.7 R2 and will not work in earlier versions!
   * @returns The integer value of the specified server variable. It will still return 0 if the variable is not set.
   */
  static callNative(nativeName: 'GetSVarInt', paramTypes: 's', varname: string): number;
  /**
   * Calls the AMX native SetSVarString 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetSVarString] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {string} varname - The name of the server variable
   * @param {string} string_value - The string to be set
   * @summary Set a string server variable.
   * @see SetSVarInt
   * @see GetSVarInt
   * @see GetSVarString
   * @see SetSVarFloat
   * @see GetSVarFloat
   * @see DeleteSVar
   * @remarks This function was added in SA-MP 0.3.7 R2 and will not work in earlier versions!
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. The variable name is null or over 40 characters.

   */
  static callNative(nativeName: 'SetSVarString', paramTypes: 'ss', varname: string, string_value: string): number;
  /**
   * Calls the AMX native GetSVarString 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetSVarString] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {string} varname - The name of the server variable (case-insensitive). Assigned in SetSVarString
   * @param {number} len - The maximum length of the returned string
   * @summary Gets a string server variable&#x27;s value.
   * @see SetSVarInt
   * @see GetSVarInt
   * @see SetSVarString
   * @see SetSVarFloat
   * @see GetSVarFloat
   * @see DeleteSVar
   * @remarks This function was added in SA-MP 0.3.7 R2 and will not work in earlier versions!
   * @returns The length of the string.
   */
  static callNative(nativeName: 'GetSVarString', paramTypes: 'sSi', varname: string, len: number): string;
  /**
   * Calls the AMX native SetSVarFloat 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetSVarFloat] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {string} varname - The name of the server variable
   * @param {number} float_value - The float to be set
   * @summary Set a float server variable.
   * @see SetSVarInt
   * @see GetSVarInt
   * @see SetSVarString
   * @see GetSVarString
   * @see GetSVarFloat
   * @see DeleteSVar
   * @remarks This function was added in SA-MP 0.3.7 R2 and will not work in earlier versions!
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. The variable name is null or over 40 characters.

   */
  static callNative(nativeName: 'SetSVarFloat', paramTypes: 'sf', varname: string, float_value: number): number;
  /**
   * Calls the AMX native GetSVarFloat that returns a value with a Float tag
   *
   * @name samp.callNativeFloat
   * @param {string} [nativeName=GetSVarFloat] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {string} varname - The name of the server variable (case-insensitive). Assigned in SetSVarFloat
   * @summary Gets a float server variable&#x27;s value.
   * @see SetSVarInt
   * @see GetSVarInt
   * @see SetSVarString
   * @see GetSVarString
   * @see SetSVarFloat
   * @see DeleteSVar
   * @remarks This function was added in SA-MP 0.3.7 R2 and will not work in earlier versions!
   * @returns The float value of the specified server variable. It will still return 0 if the variable is not set.
   */
  static callNativeFloat(nativeName: 'GetSVarFloat', paramTypes: 's', varname: string): number;
  /**
   * Calls the AMX native DeleteSVar 
   *
   * @name samp.callNative
   * @param {string} [nativeName=DeleteSVar] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {string} varname - The name of the server variable to delete
   * @summary Deletes a previously set server variable.
   * @see SetSVarInt
   * @see GetSVarInt
   * @see SetSVarString
   * @see GetSVarString
   * @see SetSVarFloat
   * @see GetSVarFloat
   * @remarks Once a variable is deleted, attempts to retrieve the value will return 0 (for integers and floats and NULL for strings.
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. There is no variable set with the given name.

   */
  static callNative(nativeName: 'DeleteSVar', paramTypes: 's', varname: string): number;
  /**
   * Calls the AMX native GetSVarsUpperIndex 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetSVarsUpperIndex] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @summary Each SVar (server-variable) has its own unique identification number for lookup, this function returns the highest ID.
   * @see GetSVarNameAtIndex
   * @see GetSVarType
   * @returns The highest set SVar ID.
   */
  static callNative(nativeName: 'GetSVarsUpperIndex', paramTypes: ''): number;
  /**
   * Calls the AMX native GetSVarNameAtIndex 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetSVarNameAtIndex] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} index - The index of the sVar
   * @param {number} ret_len - The max length of the returned string
   * @summary Retrieve the name of a sVar via the index.
   * @see GetSVarType
   * @see GetSVarInt
   * @see GetSVarFloat
   * @see GetSVarString
   */
  static callNative(nativeName: 'GetSVarNameAtIndex', paramTypes: 'iSi', index: number, ret_len: number): string;
  /**
   * Calls the AMX native GetSVarType 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetSVarType] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {string} varname - The name of the server variable to get the type of
   * @summary Gets the type (integer, float or string) of a server variable.
   * @see SetSVarInt
   * @see GetSVarInt
   * @see SetSVarString
   * @see GetSVarString
   * @see SetSVarFloat
   * @see GetSVarFloat
   * @see DeleteSVar
   * @remarks 
  Variable types:
  
    SERVER_VARTYPE_NONE (sVar with name given does not exist)
    SERVER_VARTYPE_INT
    SERVER_VARTYPE_STRING
    SERVER_VARTYPE_FLOAT
  

   * @returns Returns the type of the SVar. See table below.
   */
  static callNative(nativeName: 'GetSVarType', paramTypes: 's', varname: string): number;
  /**
   * Calls the AMX native SetGameModeText 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetGameModeText] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {string} string - 
   */
  static callNative(nativeName: 'SetGameModeText', paramTypes: 's', string: string): number;
  /**
   * Calls the AMX native SetTeamCount 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetTeamCount] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} count - Number of teams the gamemode knows
   * @summary This function is used to change the amount of teams used in the gamemode. It has no obvious way of being used, but can help to indicate the number of teams used for better (more effective) internal handling. This function should only be used in the OnGameModeInit callback. Important: You can pass 2 billion here if you like, this function has no effect at all.
   * @see GetPlayerTeam
   * @see SetPlayerTeam
   */
  static callNative(nativeName: 'SetTeamCount', paramTypes: 'i', count: number): number;
  /**
   * Calls the AMX native AddPlayerClass 
   *
   * @name samp.callNative
   * @param {string} [nativeName=AddPlayerClass] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} modelid - The skin which the player will spawn with
   * @param {number} spawn_x - The X coordinate of the spawnpoint of this class
   * @param {number} spawn_y - The Y coordinate of the spawnpoint of this class
   * @param {number} spawn_z - The Z coordinate of the spawnpoint of this class
   * @param {number} z_angle - The direction in which the player should face after spawning
   * @param {number} weapon1 - The first spawn-weapon for the player
   * @param {number} weapon1_ammo - The amount of ammunition for the primary spawn weapon
   * @param {number} weapon2 - The second spawn-weapon for the player
   * @param {number} weapon2_ammo - The amount of ammunition for the second spawn weapon
   * @param {number} weapon3 - The third spawn-weapon for the player
   * @param {number} weapon3_ammo - The amount of ammunition for the third spawn weapon
   * @summary Adds a class to class selection. Classes are used so players may spawn with a skin of their choice.
   * @see AddPlayerClassEx
   * @see SetSpawnInfo
   * @see SetPlayerSkin
   * @remarks 
   The maximum class ID is 319 (starting from 0, so a total of 320 classes).
   When this limit is reached, any more classes that are added will replace ID 319.

   * @returns 
  
    The ID of the class which was just added.
    319 if the class limit (320) was reached. The highest possible class ID is 319.
  

   */
  static callNative(nativeName: 'AddPlayerClass', paramTypes: 'iffffiiiiii', modelid: number, spawn_x: number, spawn_y: number, spawn_z: number, z_angle: number, weapon1: number, weapon1_ammo: number, weapon2: number, weapon2_ammo: number, weapon3: number, weapon3_ammo: number): number;
  /**
   * Calls the AMX native AddPlayerClassEx 
   *
   * @name samp.callNative
   * @param {string} [nativeName=AddPlayerClassEx] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} teamid - The team you want the player to spawn in
   * @param {number} modelid - The skin which the player will spawn with
   * @param {number} spawn_x - The X coordinate of the class&#x27; spawn position
   * @param {number} spawn_y - The Y coordinate of the class&#x27; spawn position
   * @param {number} spawn_z - The Z coordinate of the class&#x27; spawn position
   * @param {number} z_angle - The direction in which the player will face after spawning
   * @param {number} weapon1 - The first spawn-weapon for the player
   * @param {number} weapon1_ammo - The amount of ammunition for the first spawn weapon
   * @param {number} weapon2 - The second spawn-weapon for the player
   * @param {number} weapon2_ammo - The amount of ammunition for the second spawn weapon
   * @param {number} weapon3 - The third spawn-weapon for the player
   * @param {number} weapon3_ammo - The amount of ammunition for the third spawn weapon
   * @summary This function is exactly the same as the AddPlayerClass function, with the addition of a team parameter.
   * @see AddPlayerClass
   * @see SetSpawnInfo
   * @see SetPlayerTeam
   * @see SetPlayerSkin
   * @remarks The maximum class ID is 319 (starting from 0, so a total of 320 classes). When this limit is reached, any more classes that are added will replace ID 319.
   * @returns 
  
    The ID of the class which was just added.
    319 if the class limit (320) was reached. The highest possible class ID is 319.
  

   */
  static callNative(nativeName: 'AddPlayerClassEx', paramTypes: 'iiffffiiiiii', teamid: number, modelid: number, spawn_x: number, spawn_y: number, spawn_z: number, z_angle: number, weapon1: number, weapon1_ammo: number, weapon2: number, weapon2_ammo: number, weapon3: number, weapon3_ammo: number): number;
  /**
   * Calls the AMX native AddStaticVehicle 
   *
   * @name samp.callNative
   * @param {string} [nativeName=AddStaticVehicle] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} modelid - The Model ID for the vehicle
   * @param {number} spawn_x - The X-coordinate for the vehicle
   * @param {number} spawn_y - The Y-coordinate for the vehicle
   * @param {number} spawn_z - The Z-coordinate for the vehicle
   * @param {number} z_angle - Direction of vehicle - angle
   * @param {number} color1 - The primary color ID. -1 for random (random color chosen by client)
   * @param {number} color2 - The secondary color ID. -1 for random (random color chosen by client)
   * @summary Adds a &#x27;static&#x27; vehicle (models are pre-loaded for players) to the gamemode.
   * @see AddStaticVehicleEx
   * @see CreateVehicle
   * @see DestroyVehicle
   * @remarks Can only be used when the server first starts (under OnGameModeInit).
   * @returns 
  
    The vehicle ID of the vehicle created (between 1 and MAX_VEHICLES).
    INVALID_VEHICLE_ID (65535) if vehicle was not created (vehicle limit reached or invalid vehicle model ID passed).
  

   */
  static callNative(nativeName: 'AddStaticVehicle', paramTypes: 'iffffii', modelid: number, spawn_x: number, spawn_y: number, spawn_z: number, z_angle: number, color1: number, color2: number): number;
  /**
   * Calls the AMX native AddStaticVehicleEx 
   *
   * @name samp.callNative
   * @param {string} [nativeName=AddStaticVehicleEx] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} modelid - The Model ID for the vehicle
   * @param {number} spawn_x - The X-coordinate for the vehicle
   * @param {number} spawn_y - The Y-coordinate for the vehicle
   * @param {number} spawn_z - The Z-coordinate for the vehicle
   * @param {number} z_angle - The facing - angle for the vehicle
   * @param {number} color1 - The primary color ID. -1 for random (random color chosen by client)
   * @param {number} color2 - The secondary color ID. -1 for random (random color chosen by client)
   * @param {number} respawn_delay - The delay until the car is respawned without a driver, in seconds
   * @param {number} addsiren - Added in 0.3.7; will not work in earlier versions. Enables the vehicle to have a siren, providing the vehicle has a horn (optional&#x3D;0)
   * @summary Adds a &#x27;static&#x27; vehicle (models are pre-loaded for players)to the gamemode. Differs from AddStaticVehicle in only one way: allows a respawn time to be set for when the vehicle is left unoccupied by the driver.
   * @see AddStaticVehicle
   * @see CreateVehicle
   * @see DestroyVehicle
   * @remarks Can only be used when the server first starts (under OnGameModeInit).
   * @returns 
  
    The vehicle ID of the vehicle created (between 1 and MAX_VEHICLES).
    INVALID_VEHICLE_ID (65535) if vehicle was not created (vehicle limit reached or invalid vehicle model ID passed).
  

   */
  static callNative(nativeName: 'AddStaticVehicleEx', paramTypes: 'iffffiiii', modelid: number, spawn_x: number, spawn_y: number, spawn_z: number, z_angle: number, color1: number, color2: number, respawn_delay: number, addsiren: number): number;
  /**
   * Calls the AMX native AddStaticPickup 
   *
   * @name samp.callNative
   * @param {string} [nativeName=AddStaticPickup] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} model - The model of the pickup
   * @param {number} type - The pickup type. Determines how the pickup responds when picked up
   * @param {number} X - The X coordinate to create the pickup at
   * @param {number} Y - The Y coordinate to create the pickup at
   * @param {number} Z - The Z coordinate to create the pickup at
   * @param {number} virtualworld - The virtual world ID to put the pickup in. Use -1 to show the pickup in all worlds
   * @summary This function adds a &#x27;static&#x27; pickup to the game. These pickups support weapons, health, armor etc., with the ability to function without scripting them (weapons/health/armor will be given automatically).
   * @see CreatePickup
   * @see DestroyPickup
   * @see OnPlayerPickUpPickup
   * @remarks This function doesn&#x27;t return a pickup ID that you can use in, for example, OnPlayerPickUpPickup. Use CreatePickup if you&#x27;d like to assign IDs.
   * @returns 
  1 if the pickup is successfully created.
  
  0 if failed to create.

   */
  static callNative(nativeName: 'AddStaticPickup', paramTypes: 'iifffi', model: number, type: number, X: number, Y: number, Z: number, virtualworld: number): number;
  /**
   * Calls the AMX native CreatePickup 
   *
   * @name samp.callNative
   * @param {string} [nativeName=CreatePickup] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} model - The model of the pickup
   * @param {number} type - The pickup spawn type (see table under remarks)
   * @param {number} X - The X coordinate to create the pickup at
   * @param {number} Y - The Y coordinate to create the pickup at
   * @param {number} Z - The Z coordinate to create the pickup at
   * @param {number} virtualworld - The virtual world ID of the pickup. Use -1 to make the pickup show in all worlds (optional&#x3D;0)
   * @summary This function does exactly the same as AddStaticPickup, except it returns a pickup ID which can be used to destroy it afterwards and be tracked using OnPlayerPickUpPickup.
   * @see AddStaticPickup
   * @see DestroyPickup
   * @see OnPlayerPickUpPickup
   * @remarks 
  Known Bugs:
  Pickups that have a X or Y lower than -4096.0 or bigger than 4096.0 won&#x27;t show up and won&#x27;t trigger OnPlayerPickUpPickup either.

   * @remarks 
  The only type of pickup that can be picked up from inside a vehicle is 14 (except for special pickups such as bribes).
  Pickups are shown to, and can be picked up by all players.
  It is possible that if DestroyPickup is used when a pickup is picked up, more than one player can pick up the pickup, due to lag. This can be circumvented through the use of variables.
  Certain pickup types come with &#x27;automatic responses&#x27;, for example using an M4 model in the pickup will automatically give the player the weapon and some ammo. For fully scripted pickups, type 1 should be used. 

   * @remarks 
  Available Pickup Types
  Most other IDs are either undocumented or are similar to type 1 (but do not use them just because they seem similar to ID 1, they might have side-effects like ID 18 and 20).
  
    0 - The pickup does not always display. If displayed, it can&#x27;t be picked up and does not trigger OnPlayerPickUpPickup and it will stay after server shutdown.
    1 - Exists always. Disables pickup scripts such as horseshoes and oysters to allow for scripted actions ONLY. Will trigger OnPlayerPickUpPickup every few seconds.
    2 - Disappears after pickup, respawns after 30 seconds if the player is at a distance of at least 15 meters.
    3 - Disappears after pickup, respawns after death.
    4 - Disappears after 15 to 20 seconds. Respawns after death.
    8 - Disappears after pickup, but has no effect.
    11 - Blows up a few seconds after being created (bombs?)
    12 - Blows up a few seconds after being created.
    13 - Invisible. Triggers checkpoint sound when picked up with a vehicle, but doesn&#x27;t trigger OnPlayerPickUpPickup.
    14 - Disappears after pickup, can only be picked up with a vehicle. Triggers checkpoint sound.
    15 - Same as type 2.
    18 - Similar to type 1. Pressing Tab (KEY_ACTION) makes it disappear but the key press doesn&#x27;t trigger OnPlayerPickUpPickup.
    19 - Disappears after pickup, but doesn&#x27;t respawn. Makes &quot;cash pickup&quot; sound if picked up.
    20 - Similar to type 1. Disappears when you take a picture of it with the Camera weapon, which triggers &quot;Snapshot # out of 0&quot; message. Taking a picture doesn&#x27;t trigger OnPlayerPickUpPickup.
    22 - Same as type 3.
  

   * @returns The ID of the created pickup, -1 on failure (pickup max limit).
   */
  static callNative(nativeName: 'CreatePickup', paramTypes: 'iifffi', model: number, type: number, X: number, Y: number, Z: number, virtualworld: number): number;
  /**
   * Calls the AMX native DestroyPickup 
   *
   * @name samp.callNative
   * @param {string} [nativeName=DestroyPickup] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} pickup - The ID of the pickup to destroy (returned by CreatePickup)
   * @summary Destroys a pickup created with CreatePickup.
   * @see CreatePickup
   * @see OnPlayerPickUpPickup
   */
  static callNative(nativeName: 'DestroyPickup', paramTypes: 'i', pickup: number): number;
  /**
   * Calls the AMX native ShowNameTags 
   *
   * @name samp.callNative
   * @param {string} [nativeName=ShowNameTags] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} show - 0 to disable, 1 to enable (enabled by default)
   * @summary Toggle the drawing of nametags, health bars and armor bars above players.
   * @see DisableNameTagLOS
   * @see ShowPlayerNameTagForPlayer
   * @see ShowPlayerMarkers
   * @remarks This function can only be used in OnGameModeInit. For other times, see ShowPlayerNameTagForPlayer.
   */
  static callNative(nativeName: 'ShowNameTags', paramTypes: 'i', show: number): number;
  /**
   * Calls the AMX native ShowPlayerMarkers 
   *
   * @name samp.callNative
   * @param {string} [nativeName=ShowPlayerMarkers] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} mode - The mode to use for markers. They can be streamed, meaning they are only visible to nearby players. See table below
   * @summary Toggles player markers (blips on the radar). Must be used when the server starts (OnGameModeInit). For other times, see SetPlayerMarkerForPlayer.
   * @see SetPlayerMarkerForPlayer
   * @see LimitPlayerMarkerRadius
   * @see ShowNameTags
   * @see SetPlayerColor
   * @remarks 
  Marker modes:
  
    PLAYER_MARKERS_MODE_OFF 0
    PLAYER_MARKERS_MODE_GLOBAL 1
    PLAYER_MARKERS_MODE_STREAMED 2
  

   * @remarks It is also possible to set a player&#x27;s color to a color that has full transparency (no alpha value). This makes it possible to show markers on a per-player basis.
   */
  static callNative(nativeName: 'ShowPlayerMarkers', paramTypes: 'i', mode: number): number;
  /**
   * Calls the AMX native GameModeExit 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GameModeExit] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @summary Ends the current gamemode.
   * @see OnGameModeExit
   */
  static callNative(nativeName: 'GameModeExit', paramTypes: ''): number;
  /**
   * Calls the AMX native SetWorldTime 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetWorldTime] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} hour - The hour to set (0-23)
   * @summary Sets the world time (for all players) to a specific hour.
   * @see SetPlayerTime
   * @see SetWeather
   * @see SetGravity
   * @remarks To set the minutes and/or to set the time for individual players, see SetPlayerTime.
   * @remarks This function is only relevant for players that do not use a passing clock - see TogglePlayerClock.
   */
  static callNative(nativeName: 'SetWorldTime', paramTypes: 'i', hour: number): number;
  /**
   * Calls the AMX native GetWeaponName 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetWeaponName] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} weaponid - The ID of the weapon to get the name of
   * @param {number} len - The maximum length of the weapon name to store.
   * @summary Get the name of a weapon.
   * @see GetPlayerWeapon
   * @see AllowInteriorWeapons
   * @see GivePlayerWeapon
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. The weapon specified does not exist.

   */
  static callNative(nativeName: 'GetWeaponName', paramTypes: 'iSi', weaponid: number, len: number): string;
  /**
   * Calls the AMX native EnableTirePopping 
   *
   * @name samp.callNative
   * @param {string} [nativeName=EnableTirePopping] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} enable - 
   */
  static callNative(nativeName: 'EnableTirePopping', paramTypes: 'i', enable: number): number;
  /**
   * Calls the AMX native EnableVehicleFriendlyFire 
   *
   * @name samp.callNative
   * @param {string} [nativeName=EnableVehicleFriendlyFire] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @summary Enable friendly fire for team vehicles. Players will be unable to damage teammates&#x27; vehicles (SetPlayerTeam must be used!).
   * @see SetPlayerTeam
   * @remarks This function was added in SA-MP 0.3x and will not work in earlier versions!
   */
  static callNative(nativeName: 'EnableVehicleFriendlyFire', paramTypes: ''): number;
  /**
   * Calls the AMX native AllowInteriorWeapons 
   *
   * @name samp.callNative
   * @param {string} [nativeName=AllowInteriorWeapons] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} allow - 1 to enable weapons in interiors (enabled by default), 0 to disable weapons in interiors
   * @summary Toggle whether the usage of weapons in interiors is allowed or not.
   * @see SetPlayerInterior
   * @see GetPlayerInterior
   * @see OnPlayerInteriorChange
   * @remarks This function does not work in the current SA:MP version!
   */
  static callNative(nativeName: 'AllowInteriorWeapons', paramTypes: 'i', allow: number): number;
  /**
   * Calls the AMX native SetWeather 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetWeather] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} weatherid - The weather to set
   * @summary Set the world weather for all players.
   * @see SetPlayerWeather
   * @see SetGravity
   * @remarks If TogglePlayerClock is enabled, weather will slowly change over time, instead of changing instantly.
   */
  static callNative(nativeName: 'SetWeather', paramTypes: 'i', weatherid: number): number;
  /**
   * Calls the AMX native GetGravity that returns a value with a Float tag
   *
   * @name samp.callNativeFloat
   * @param {string} [nativeName=GetGravity] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @summary Get the currently set gravity.
   * @see SetGravity
   * @returns The current set gravity (as a float).
   */
  static callNativeFloat(nativeName: 'GetGravity', paramTypes: ''): number;
  /**
   * Calls the AMX native SetGravity 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetGravity] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} gravity - The value that the gravity should be set to (between -50 and 50)
   * @summary Set the gravity for all players.
   * @see GetGravity
   * @see SetWeather
   * @see SetWorldTime
   * @remarks Default gravity is 0.008.
   * @returns This function always returns 1, even when it fails to execute if the gravity is out of the limits (lower than -50.0 or higher than +50.0).
   */
  static callNative(nativeName: 'SetGravity', paramTypes: 'f', gravity: number): number;
  /**
   * Calls the AMX native AllowAdminTeleport 
   *
   * @name samp.callNative
   * @param {string} [nativeName=AllowAdminTeleport] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} allow - 0 to disable and 1 to enable
   * @summary This function will determine whether RCON admins will be teleported to their waypoint when they set one.
   * @see IsPlayerAdmin
   * @see AllowPlayerTeleport
   * @remarks This function, as of 0.3d, is deprecated. Please see OnPlayerClickMap.
   */
  static callNative(nativeName: 'AllowAdminTeleport', paramTypes: 'i', allow: number): number;
  /**
   * Calls the AMX native SetDeathDropAmount 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetDeathDropAmount] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} amount - 
   * @summary This function does not work in the current SA:MP version! 
   * @see CreatePickup
   * @see GivePlayerMoney
   * @see OnPlayerDeath
   */
  static callNative(nativeName: 'SetDeathDropAmount', paramTypes: 'i', amount: number): number;
  /**
   * Calls the AMX native CreateExplosion 
   *
   * @name samp.callNative
   * @param {string} [nativeName=CreateExplosion] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} X - The X coordinate of the explosion
   * @param {number} Y - The Y coordinate of the explosion
   * @param {number} Z - The Z coordinate of the explosion
   * @param {number} type - The type of explosion
   * @param {number} Radius - The explosion radius
   * @summary Create an explosion at the specified coordinates.
   * @see CreateExplosionForPlayer
   * @remarks There is a limit as to how many explosions can be seen at once by a player. This is roughly 10.
   * @returns This function always returns 1, even when the explosion type and/or radius values are invalid.
   */
  static callNative(nativeName: 'CreateExplosion', paramTypes: 'fffif', X: number, Y: number, Z: number, type: number, Radius: number): number;
  /**
   * Calls the AMX native EnableZoneNames 
   *
   * @name samp.callNative
   * @param {string} [nativeName=EnableZoneNames] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} enable - 
   */
  static callNative(nativeName: 'EnableZoneNames', paramTypes: 'i', enable: number): number;
  /**
   * Calls the AMX native UsePlayerPedAnims 
   *
   * @name samp.callNative
   * @param {string} [nativeName=UsePlayerPedAnims] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @summary Uses standard player walking animation (animation of the CJ skin) instead of custom animations for every skin (e.g. skating for skater skins).
   * @see ApplyAnimation
   * @see ClearAnimations
   * @remarks Only works when placed under OnGameModeInit.
   * @remarks Not using this function causes two-handed weapons (not dual-handed - a single weapon that is held by both hands) to be held in only one hand.
   */
  static callNative(nativeName: 'UsePlayerPedAnims', paramTypes: ''): number;
  /**
   * Calls the AMX native DisableInteriorEnterExits 
   *
   * @name samp.callNative
   * @param {string} [nativeName=DisableInteriorEnterExits] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @summary Disable all the interior entrances and exits in the game (the yellow arrows at doors).
   * @see AllowInteriorWeapons
   * @remarks If the gamemode is changed after this function has been used, and the new gamemode doesn&#x27;t disable markers, the markers will NOT reappear for already-connected players (but will for newly connected players).
   * @remarks This function will only work if it has been used BEFORE a player connects (it is recommended to use it in OnGameModeInit). It will not remove a connected player&#x27;s markers.
   * @returns This function always returns 1.
   */
  static callNative(nativeName: 'DisableInteriorEnterExits', paramTypes: ''): number;
  /**
   * Calls the AMX native SetNameTagDrawDistance 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetNameTagDrawDistance] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} distance - The distance to set
   * @summary Set the maximum distance to display the names of players.
   * @see LimitGlobalChatRadius
   * @see ShowNameTags
   * @see ShowPlayerNameTagForPlayer
   * @remarks Default distance is 70 SA units
   */
  static callNative(nativeName: 'SetNameTagDrawDistance', paramTypes: 'f', distance: number): number;
  /**
   * Calls the AMX native DisableNameTagLOS 
   *
   * @name samp.callNative
   * @param {string} [nativeName=DisableNameTagLOS] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @summary Disables the nametag Line-Of-Sight checking so that players can see nametags through objects.
   * @see ShowNameTags
   * @see ShowPlayerNameTagForPlayer
   * @remarks This function was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks This can not be reversed until the server restarts.
   */
  static callNative(nativeName: 'DisableNameTagLOS', paramTypes: ''): number;
  /**
   * Calls the AMX native LimitGlobalChatRadius 
   *
   * @name samp.callNative
   * @param {string} [nativeName=LimitGlobalChatRadius] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} chat_radius - The range in which players will be able to see chat
   * @summary Set a radius limitation for the chat. Only players at a certain distance from the player will see their message in the chat. Also changes the distance at which a player can see other players on the map at the same distance.
   * @see SetNameTagDrawDistance
   * @see SendPlayerMessageToPlayer
   * @see SendPlayerMessageToAll
   * @see OnPlayerText
   */
  static callNative(nativeName: 'LimitGlobalChatRadius', paramTypes: 'f', chat_radius: number): number;
  /**
   * Calls the AMX native LimitPlayerMarkerRadius 
   *
   * @name samp.callNative
   * @param {string} [nativeName=LimitPlayerMarkerRadius] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} marker_radius - The radius that markers will show at
   * @summary Set the player marker radius.
   * @see ShowPlayerMarkers
   * @see SetPlayerMarkerForPlayer
   * @see LimitGlobalChatRadius
   * @remarks This Function was added in SA-MP 0.3a and will not work in earlier versions!
   */
  static callNative(nativeName: 'LimitPlayerMarkerRadius', paramTypes: 'f', marker_radius: number): number;
  /**
   * Calls the AMX native ConnectNPC 
   *
   * @name samp.callNative
   * @param {string} [nativeName=ConnectNPC] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {string} name - The name the NPC should connect as. Must follow the same rules as normal player names
   * @param {string} script - The NPC script name that is located in the npcmodes folder (without the .amx extension)
   * @summary Connect an NPC to the server.
   * @see IsPlayerNPC
   * @see OnPlayerConnect
   * @remarks This function was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks NPCs do not have nametags. These can be scripted with Attach3DTextLabelToPlayer.
   * @returns This function always return 1.
   */
  static callNative(nativeName: 'ConnectNPC', paramTypes: 'ss', name: string, script: string): number;
  /**
   * Calls the AMX native IsPlayerNPC 
   *
   * @name samp.callNative
   * @param {string} [nativeName=IsPlayerNPC] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to check
   * @summary Check if a player is an actual player or an NPC.
   * @see ConnectNPC
   * @see IsPlayerAdmin
   * @remarks This function was added in SA-MP 0.3a and will not work in earlier versions!
   * @returns 1 if the player is an NPC, 0 if not.
   */
  static callNative(nativeName: 'IsPlayerNPC', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native IsPlayerAdmin 
   *
   * @name samp.callNative
   * @param {string} [nativeName=IsPlayerAdmin] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to check
   * @summary Check if a player is logged in as an RCON admin.
   * @see SendRconCommand
   * @see OnRconLoginAttempt
   * @returns 1 if the player is an RCON admin, 0 if not.
   */
  static callNative(nativeName: 'IsPlayerAdmin', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native Kick 
   *
   * @name samp.callNative
   * @param {string} [nativeName=Kick] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to kick
   * @summary Kicks a player from the server. They will have to quit the game and re-connect if they wish to continue playing.
   * @see Ban
   * @see BanEx
   * @remarks As of SA-MP 0.3x, any action taken directly before Kick() (such as sending a message with SendClientMessage) will not reach the player. A timer must be used to delay the kick.
   * @returns This function always returns 1, even if the function failed to execute (player specified doesn&#x27;t exist).
   */
  static callNative(nativeName: 'Kick', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native Ban 
   *
   * @name samp.callNative
   * @param {string} [nativeName=Ban] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to ban
   * @summary Ban a player who is currently in the server. They will be unable to join the server ever again. The ban will be IP-based, and be saved in the samp.ban file in the server&#x27;s root directory. BanEx can be used to give a reason for the ban. IP bans can be added/removed using the RCON banip and unbanip commands (SendRconCommand).
   * @see BanEx
   * @see Kick
   * @remarks As of SA-MP 0.3x, any action taken directly before Ban() (such as sending a message with SendClientMessage) will not reach the player. A timer must be used to delay the ban.
   * @remarks 
   */
  static callNative(nativeName: 'Ban', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native BanEx 
   *
   * @name samp.callNative
   * @param {string} [nativeName=BanEx] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to ban
   * @param {string} reason - The reason for the ban
   * @summary Ban a player with a reason.
   * @see Ban
   * @see Kick
   * @remarks As of SA-MP 0.3x, any action taken directly before Ban() (such as sending a message with SendClientMessage) will not reach the player. A timer must be used to delay the ban.
   */
  static callNative(nativeName: 'BanEx', paramTypes: 'is', playerid: number, reason: string): number;
  /**
   * Calls the AMX native SendRconCommand 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SendRconCommand] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {string} command - The RCON command to be executed
   * @summary Sends an RCON (Remote Console) command.
   * @see IsPlayerAdmin
   * @see OnRconCommand
   * @see OnRconLoginAttempt
   * @remarks Does not support login, due to the lack of a &#x27;playerid&#x27; parameter.
   * @remarks &#x27;password 0&#x27; will remove the server&#x27;s password if one is set.
   * @remarks This function will result in OnRconCommand being called.
   * @returns This function always returns 1.
   */
  static callNative(nativeName: 'SendRconCommand', paramTypes: 's', command: string): number;
  /**
   * Calls the AMX native GetPlayerNetworkStats 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPlayerNetworkStats] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player you want to get the networkstats of
   * @param {number} retstr_size - The length of the string that should be stored
   * @summary Gets a player&#x27;s network stats and saves them into a string.
   * @see GetNetworkStats
   * @see NetStats_GetConnectedTime
   * @see NetStats_MessagesReceived
   * @see NetStats_BytesReceived
   * @see NetStats_MessagesSent
   * @see NetStats_BytesSent
   * @see NetStats_MessagesRecvPerSecond
   * @see NetStats_PacketLossPercent
   * @see NetStats_ConnectionStatus
   * @see NetStats_GetIpPort
   * @remarks This function was added in SA-MP 0.3c R4 and will not work in earlier versions!
   * @remarks This function may not return accurate data when used under OnPlayerDisconnect if the player has quit normally. It usually returns accurate data if the player has been kicked or has timed out.
   */
  static callNative(nativeName: 'GetPlayerNetworkStats', paramTypes: 'iSi', playerid: number, retstr_size: number): string;
  /**
   * Calls the AMX native GetNetworkStats 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetNetworkStats] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} retstr_size - The length of the string to be stored
   * @summary Gets the server&#x27;s network stats and stores them in a string.
   * @see GetPlayerNetworkStats
   * @see NetStats_GetConnectedTime
   * @see NetStats_MessagesReceived
   * @see NetStats_BytesReceived
   * @see NetStats_MessagesSent
   * @see NetStats_BytesSent
   * @see NetStats_MessagesRecvPerSecond
   * @see NetStats_PacketLossPercent
   * @see NetStats_ConnectionStatus
   * @see NetStats_GetIpPort
   * @remarks This function was added in SA-MP 0.3c R4 and will not work in earlier versions!
   * @remarks 
  Example output:
  
    Server Ticks: 200
    Messages in Send buffer: 0
    Messages sent: 142
    Bytes sent: 8203
    Acks sent: 11
    Acks in send buffer: 0
    Messages waiting for ack: 0
    Messages resent: 0
    Bytes resent: 0
    Packetloss: 0.0%
    Messages received: 54
    Bytes received: 2204
    Acks received: 0
    Duplicate acks received: 0
    Inst. KBits per second: 28.8
    KBits per second sent: 10.0
    KBits per second received: 2.7
  

   * @returns This function always returns 1.
   */
  static callNative(nativeName: 'GetNetworkStats', paramTypes: 'Si', retstr_size: number): string;
  /**
   * Calls the AMX native GetPlayerVersion 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPlayerVersion] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to get the client version of
   * @param {number} len - The maximum length of the version
   * @summary Returns the SA-MP client version, as reported by the player.
   * @see GetPlayerName
   * @see GetPlayerPing
   * @see GetPlayerIp
   * @remarks This function was added in SA-MP 0.3e and will not work in earlier versions!
   * @remarks The string the version gets stored in will be empty if playerid is an NPC.
   * @returns 1 on success and 0 on failure (if player specified doesn&#x27;t exist).
   */
  static callNative(nativeName: 'GetPlayerVersion', paramTypes: 'iSi', playerid: number, len: number): string;
  /**
   * Calls the AMX native BlockIpAddress 
   *
   * @name samp.callNative
   * @param {string} [nativeName=BlockIpAddress] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {string} ip_address - The IP to block
   * @param {number} timems - The time (in milliseconds) that the connection will be blocked for. 0 can be used for an indefinite block
   * @summary Blocks an IP address from further communication with the server for a set amount of time (with wildcards allowed). Players trying to connect to the server with a blocked IP address will receive the generic &quot;You are banned from this server.&quot; message. Players that are online on the specified IP before the block will timeout after a few seconds and, upon reconnect, will receive the same message.
   * @see UnBlockIpAddress
   * @see OnIncomingConnection
   * @remarks This function was added in SA-MP 0.3z R2-2 and will not work in earlier versions!
   * @remarks Wildcards can be used with this function, for example blocking the IP 6.9.*.* will block all IPs where the first two octets are 6 and 9 respectively. Any number can be in place of an asterisk.
   */
  static callNative(nativeName: 'BlockIpAddress', paramTypes: 'si', ip_address: string, timems: number): number;
  /**
   * Calls the AMX native UnBlockIpAddress 
   *
   * @name samp.callNative
   * @param {string} [nativeName=UnBlockIpAddress] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {string} ip_address - The IP address to unblock
   * @summary Unblock an IP address that was previously blocked using BlockIpAddress.
   * @see BlockIpAddress
   * @see OnIncomingConnection
   * @remarks This function was added in SA-MP 0.3z R2-2 and will not work in earlier versions!
   */
  static callNative(nativeName: 'UnBlockIpAddress', paramTypes: 's', ip_address: string): number;
  /**
   * Calls the AMX native GetServerVarAsString 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetServerVarAsString] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {string} varname - The name of the string variable to get the value of
   * @param {number} len - The length of the string that should be stored
   * @summary Get the string value of a server variable.
   * @see GetServerVarAsInt
   * @see GetServerVarAsBool
   * @remarks This function, as of 0.3.7 R2, is deprecated. Please see GetConsoleVarAsString
   * @remarks Using this function on anything other than a string (int, bool or float) or a nonexistent server variable, will crash your server! This is a bug.
   * @remarks Type &#x27;varlist&#x27; in the server console to display a list of available server variables and their types.
   * @remarks When filterscripts or plugins is specified as the varname, this function only returns the name of the first specified filterscript or plugin. This is a bug.
   * @returns The length of the returned string. 0 if the specified server variable is not a string or doesn&#x27;t exist.
   */
  static callNative(nativeName: 'GetServerVarAsString', paramTypes: 'sSi', varname: string, len: number): string;
  /**
   * Calls the AMX native GetServerVarAsInt 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetServerVarAsInt] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {string} varname - The name of the integer variable to get the value of
   * @summary Get the integer value of a server variable.
   * @see GetServerVarAsString
   * @see GetServerVarAsBool
   * @remarks This function, as of 0.3.7 R2, is deprecated. Please see GetConsoleVarAsInt
   * @remarks Type &#x27;varlist&#x27; in the server console to display a list of available server variables and their types.
   * @returns The value of the specified server variable. 0 if the specified server variable is not an integer or doesn&#x27;t exist.
   */
  static callNative(nativeName: 'GetServerVarAsInt', paramTypes: 's', varname: string): number;
  /**
   * Calls the AMX native GetServerVarAsBool 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetServerVarAsBool] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {string} varname - The name of the boolean variable to get the value of
   * @summary Get the boolean value of a server variable.
   * @see GetServerVarAsString
   * @see GetServerVarAsInt
   * @remarks This function, as of 0.3.7 R2, is deprecated. Please see GetConsoleVarAsBool
   * @remarks Type &#x27;varlist&#x27; in the server console to display a list of available server variables and their types.
   * @returns The value of the specified server variable. 0 if the specified server variable is not a boolean or doesn&#x27;t exist.
   */
  static callNative(nativeName: 'GetServerVarAsBool', paramTypes: 's', varname: string): number;
  /**
   * Calls the AMX native GetConsoleVarAsString 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetConsoleVarAsString] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {string} varname - The name of the string variable to get the value of
   * @param {number} len - The length of the string that should be stored
   * @summary Get the string value of a console variable.
   * @see GetConsoleVarAsInt
   * @see GetConsoleVarAsBool
   * @remarks Type varlist in the server console to display a list of available console variables and their types.
   * @remarks When filterscripts or plugins are specified as the varname, this function only returns the name of the first specified filterscript or plugin.
   * @remarks Using this function with anything other than a string (integer, boolean or float) will cause your server to crash. Using it with a nonexistent console variable will also cause your server to crash.
   * @returns The length of the returned string. 0 if the specified console variable is not a string or doesn&#x27;t exist.
   */
  static callNative(nativeName: 'GetConsoleVarAsString', paramTypes: 'sSi', varname: string, len: number): string;
  /**
   * Calls the AMX native GetConsoleVarAsInt 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetConsoleVarAsInt] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {string} varname - The name of the integer variable to get the value of
   * @summary Get the integer value of a console variable.
   * @see GetConsoleVarAsString
   * @see GetConsoleVarAsBool
   * @remarks Type varlist in the server console to display a list of available console variables and their types.
   * @returns The value of the specified console variable. 0 if the specified console variable is not an integer or doesn&#x27;t exist.
   */
  static callNative(nativeName: 'GetConsoleVarAsInt', paramTypes: 's', varname: string): number;
  /**
   * Calls the AMX native GetConsoleVarAsBool 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetConsoleVarAsBool] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {string} varname - The name of the boolean variable to get the value of
   * @summary Get the boolean value of a console variable.
   * @see GetConsoleVarAsString
   * @see GetConsoleVarAsInt
   * @remarks Type varlist in the server console to display a list of available console variables and their types.
   * @returns The value of the specified console variable. 0 if the specified console variable is not a boolean or doesn&#x27;t exist.
   */
  static callNative(nativeName: 'GetConsoleVarAsBool', paramTypes: 's', varname: string): number;
  /**
   * Calls the AMX native GetServerTickRate 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetServerTickRate] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @summary Gets the tick rate (like FPS) of the server.
   * @see GetNetworkStats
   * @remarks This function was added in SA-MP 0.3z and will not work in earlier versions!
   * @returns The server tick rate (per second). Returns 0 when the server is just started.
   */
  static callNative(nativeName: 'GetServerTickRate', paramTypes: ''): number;
  /**
   * Calls the AMX native NetStats_GetConnectedTime 
   *
   * @name samp.callNative
   * @param {string} [nativeName=NetStats_GetConnectedTime] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to get the connected time of
   * @summary Gets the amount of time (in milliseconds) that a player has been connected to the server for.
   * @see GetPlayerNetworkStats
   * @see GetNetworkStats
   * @see NetStats_MessagesReceived
   * @see NetStats_BytesReceived
   * @see NetStats_MessagesSent
   * @see NetStats_BytesSent
   * @see NetStats_MessagesRecvPerSecond
   * @see NetStats_PacketLossPercent
   * @see NetStats_ConnectionStatus
   * @see NetStats_GetIpPort
   * @remarks This function was added in SA-MP 0.3z and will not work in earlier versions!
   * @remarks The return value is not reset to zero after changing the game mode (using the RCON command &quot;gmx&quot;).
   * @returns This function returns the amount of time (in milliseconds) that a player has been connected to the server for. 0 is returned if the player is not connected.
   */
  static callNative(nativeName: 'NetStats_GetConnectedTime', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native NetStats_MessagesReceived 
   *
   * @name samp.callNative
   * @param {string} [nativeName=NetStats_MessagesReceived] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to get the data from
   * @summary Gets the number of messages the server has received from the player.
   * @see GetPlayerNetworkStats
   * @see GetNetworkStats
   * @see NetStats_GetConnectedTime
   * @see NetStats_BytesReceived
   * @see NetStats_MessagesSent
   * @see NetStats_BytesSent
   * @see NetStats_MessagesRecvPerSecond
   * @see NetStats_PacketLossPercent
   * @see NetStats_ConnectionStatus
   * @see NetStats_GetIpPort
   * @remarks This function was added in SA-MP 0.3z and will not work in earlier versions!
   * @returns This function returns the number of messages the server has received from the player. 0 is returned if the player is not connected.
   */
  static callNative(nativeName: 'NetStats_MessagesReceived', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native NetStats_BytesReceived 
   *
   * @name samp.callNative
   * @param {string} [nativeName=NetStats_BytesReceived] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to get the data from
   * @summary Gets the amount of data (in bytes) that the server has received from the player.
   * @see GetPlayerNetworkStats
   * @see GetNetworkStats
   * @see NetStats_GetConnectedTime
   * @see NetStats_MessagesReceived
   * @see NetStats_MessagesSent
   * @see NetStats_BytesSent
   * @see NetStats_MessagesRecvPerSecond
   * @see NetStats_PacketLossPercent
   * @see NetStats_ConnectionStatus
   * @see NetStats_GetIpPort
   * @remarks This function was added in SA-MP 0.3z and will not work in earlier versions!
   * @returns This function returns the number of bytes the server has received from the player. 0 is returned if the player is not connected.
   */
  static callNative(nativeName: 'NetStats_BytesReceived', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native NetStats_MessagesSent 
   *
   * @name samp.callNative
   * @param {string} [nativeName=NetStats_MessagesSent] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to get the data from
   * @summary Gets the number of messages the server has sent to the player.
   * @see GetPlayerNetworkStats
   * @see GetNetworkStats
   * @see NetStats_GetConnectedTime
   * @see NetStats_MessagesReceived
   * @see NetStats_BytesReceived
   * @see NetStats_BytesSent
   * @see NetStats_MessagesRecvPerSecond
   * @see NetStats_PacketLossPercent
   * @see NetStats_ConnectionStatus
   * @see NetStats_GetIpPort
   * @remarks This function was added in SA-MP 0.3z and will not work in earlier versions!
   * @returns The number of messages the server has sent to the player.
   */
  static callNative(nativeName: 'NetStats_MessagesSent', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native NetStats_BytesSent 
   *
   * @name samp.callNative
   * @param {string} [nativeName=NetStats_BytesSent] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to get the data from
   * @summary Gets the amount of data (in bytes) that the server has sent to the player.
   * @see GetPlayerNetworkStats
   * @see GetNetworkStats
   * @see NetStats_GetConnectedTime
   * @see NetStats_MessagesReceived
   * @see NetStats_MessagesSent
   * @see NetStats_BytesReceived
   * @see NetStats_MessagesRecvPerSecond
   * @see NetStats_PacketLossPercent
   * @see NetStats_ConnectionStatus
   * @see NetStats_GetIpPort
   * @remarks This function was added in SA-MP 0.3z and will not work in earlier versions!
   * @returns This function returns the number of bytes the server has sent to the player. 0 is returned if the player is not connected.
   */
  static callNative(nativeName: 'NetStats_BytesSent', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native NetStats_MessagesRecvPerSecond 
   *
   * @name samp.callNative
   * @param {string} [nativeName=NetStats_MessagesRecvPerSecond] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to get the data from
   * @summary Gets the number of messages the player has received in the last second.
   * @see GetPlayerNetworkStats
   * @see GetNetworkStats
   * @see NetStats_GetConnectedTime
   * @see NetStats_MessagesReceived
   * @see NetStats_BytesReceived
   * @see NetStats_MessagesSent
   * @see NetStats_BytesSent
   * @see NetStats_PacketLossPercent
   * @see NetStats_ConnectionStatus
   * @see NetStats_GetIpPort
   * @remarks This function was added in SA-MP 0.3z and will not work in earlier versions!
   * @returns the number of messages the player has received in the last second.
   */
  static callNative(nativeName: 'NetStats_MessagesRecvPerSecond', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native NetStats_PacketLossPercent that returns a value with a Float tag
   *
   * @name samp.callNativeFloat
   * @param {string} [nativeName=NetStats_PacketLossPercent] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to get the data from
   * @summary Gets the packet loss percentage of a player. Packet loss means data the player is sending to the server is being lost (or vice-versa).
   * @see GetPlayerNetworkStats
   * @see GetNetworkStats
   * @see NetStats_GetConnectedTime
   * @see NetStats_MessagesReceived
   * @see NetStats_BytesReceived
   * @see NetStats_MessagesSent
   * @see NetStats_BytesSent
   * @see NetStats_MessagesRecvPerSecond
   * @see NetStats_ConnectionStatus
   * @see NetStats_GetIpPort
   * @remarks This function was added in SA-MP 0.3z and will not work in earlier versions!
   * @remarks Anything greater than 0.0% should already be a cause of concern. Anything greater than 1.0% is outright bad.
   * @remarks This function has been found to be currently unreliable the output is not as expected when compared to the client. Therefore this function should not be used as a packet loss kicker. 
   * @remarks A more accurate packetloss function can be found here: http://forum.sa-mp.com/showpost.php?p&#x3D;2488911&amp;postcount&#x3D;984
   * @returns The percentage packet loss as a float. 0.0 if player not connected.
   */
  static callNativeFloat(nativeName: 'NetStats_PacketLossPercent', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native NetStats_ConnectionStatus 
   *
   * @name samp.callNative
   * @param {string} [nativeName=NetStats_ConnectionStatus] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to get the connection status of
   * @summary Gets the player&#x27;s current connection status.
   * @see GetPlayerNetworkStats
   * @see GetNetworkStats
   * @see NetStats_GetConnectedTime
   * @see NetStats_MessagesReceived
   * @see NetStats_BytesReceived
   * @see NetStats_MessagesSent
   * @see NetStats_BytesSent
   * @see NetStats_MessagesRecvPerSecond
   * @see NetStats_PacketLossPercent
   * @see NetStats_GetIpPort
   * @see IsPlayerConnected
   * @see OnPlayerConnect
   * @see OnPlayerDisconnect
   * @remarks This function was added in SA-MP 0.3z and will not work in earlier versions!
   * @remarks 
  Status:
  
    0 - NO_ACTION
    1 - DISCONNECT_ASAP
    2 - DISCONNECT_ASAP_SILENTLY
    3 - DISCONNECT_ON_NO_ACK
    4 - REQUESTED_CONNECTION
    5 - HANDLING_CONNECTION_REQUEST
    6 - UNVERIFIED_SENDER
    7 - SET_ENCRYPTION_ON_MULTIPLE_16_BYTE_PACKET
    8 - CONNECTED
  

   * @returns The player&#x27;s connection status, as an integer value.
   */
  static callNative(nativeName: 'NetStats_ConnectionStatus', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native NetStats_GetIpPort 
   *
   * @name samp.callNative
   * @param {string} [nativeName=NetStats_GetIpPort] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to get the IP and port of
   * @param {number} ip_port_len - The maximum length of the IP/port. 22 is recommended
   * @summary Get a player&#x27;s IP and port.
   * @see GetPlayerIp
   * @see GetPlayerNetworkStats
   * @see GetNetworkStats
   * @see NetStats_GetConnectedTime
   * @see NetStats_MessagesReceived
   * @see NetStats_BytesReceived
   * @see NetStats_MessagesSent
   * @see NetStats_BytesSent
   * @see NetStats_MessagesRecvPerSecond
   * @see NetStats_PacketLossPercent
   * @see NetStats_ConnectionStatus
   * @remarks This function was added in SA-MP 0.3z and will not work in earlier versions!
   */
  static callNative(nativeName: 'NetStats_GetIpPort', paramTypes: 'iSi', playerid: number, ip_port_len: number): string;
  /**
   * Calls the AMX native CreateMenu 
   *
   * @name samp.callNative
   * @param {string} [nativeName=CreateMenu] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {string} title - The title for the new menu
   * @param {number} columns - How many colums shall the new menu have
   * @param {number} x - The X position of the menu (640x460 canvas - 0 would put the menu at the far left)
   * @param {number} y - The Y position of the menu (640x460 canvas - 0 would put the menu at the far top)
   * @param {number} col1width - The width for the first column
   * @param {number} col2width - The width for the second column (optional&#x3D;0.0)
   * @summary Creates a menu.
   * @see AddMenuItem
   * @see SetMenuColumnHeader
   * @see DestroyMenu
   * @see ShowMenuForPlayer
   * @see HideMenuForPlayer
   * @see OnPlayerSelectedMenuRow
   * @see OnPlayerExitedMenu
   * @remarks 
  This function merely CREATES the menu - ShowMenuForPlayer must be used to show it.
  You can only create and access 2 columns (0 and 1).
  If the title&#x27;s length is equal to or greater than 32 chars the title is truncated to 30 characters.

   * @remarks There is a limit of 12 items per menu, and a limit of 128 menus in total.
   * @returns The ID of the new menu or -1 on failure.
   */
  static callNative(nativeName: 'CreateMenu', paramTypes: 'siffff', title: string, columns: number, x: number, y: number, col1width: number, col2width: number): number;
  /**
   * Calls the AMX native DestroyMenu 
   *
   * @name samp.callNative
   * @param {string} [nativeName=DestroyMenu] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} menuid - The menu ID to destroy
   * @summary Destroys the specified menu.
   * @see CreateMenu
   * @see SetMenuColumnHeader
   * @see AddMenuItem
   * @see OnPlayerSelectedMenuRow
   * @see OnPlayerExitedMenu
   * @returns 1 if the destroying was successful, otherwise 0.
   */
  static callNative(nativeName: 'DestroyMenu', paramTypes: 'i', menuid: number): number;
  /**
   * Calls the AMX native AddMenuItem 
   *
   * @name samp.callNative
   * @param {string} [nativeName=AddMenuItem] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} menuid - The menu id to add an item to
   * @param {number} column - The column to add the item to
   * @param {string} menutext - The text for the new menu item
   * @summary Adds an item to a specified menu.
   * @see CreateMenu
   * @see SetMenuColumnHeader
   * @see DestroyMenu
   * @see OnPlayerSelectedMenuRow
   * @see OnPlayerExitedMenu
   * @remarks 
  
    Crashes when passed an invalid menu ID.
    You can only have 12 items per menu (13th goes to the right side of the header of column name (colored), 14th and higher not display at all).
    You can only use 2 columns (0 and 1).
    You can only add 8 color codes per one item (~r~, ~g~ etc.).
    Maximum length of menu item is 31 symbols. 
  

   * @returns The index of the row this item was added to.
   */
  static callNative(nativeName: 'AddMenuItem', paramTypes: 'iis', menuid: number, column: number, menutext: string): number;
  /**
   * Calls the AMX native SetMenuColumnHeader 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetMenuColumnHeader] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} menuid - ID of the menu to change
   * @param {number} column - The column (0 or 1) to set the header of
   * @param {string} columnheader - The caption text for the column
   * @summary Sets the caption of a column in a menu.
   * @see AddMenuItem
   * @see CreateMenu
   * @see OnPlayerSelectedMenuRow
   * @remarks Crashes when passed an invalid menu ID.
   * @remarks Note that you can add only 12 items with AddMenuItem. The 13th object of a menu would replace the header of the column which is correctly set with this function.
   */
  static callNative(nativeName: 'SetMenuColumnHeader', paramTypes: 'iis', menuid: number, column: number, columnheader: string): number;
  /**
   * Calls the AMX native ShowMenuForPlayer 
   *
   * @name samp.callNative
   * @param {string} [nativeName=ShowMenuForPlayer] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} menuid - The ID of the menu to show. Returned by CreateMenu
   * @param {number} playerid - The ID of the player to whom the menu will be shown
   * @summary Shows a previously created menu for a player.
   * @see CreateMenu
   * @see AddMenuItem
   * @see SetMenuColumnHeader
   * @see ShowPlayerDialog
   * @see OnPlayerSelectedMenuRow
   * @see OnPlayerExitedMenu
   * @remarks Crashes the both server and player if an invalid menu ID given.
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. Menu and/or player doesn&#x27;t exist.

   */
  static callNative(nativeName: 'ShowMenuForPlayer', paramTypes: 'ii', menuid: number, playerid: number): number;
  /**
   * Calls the AMX native HideMenuForPlayer 
   *
   * @name samp.callNative
   * @param {string} [nativeName=HideMenuForPlayer] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} menuid - The ID of the menu to hide. Returned by CreateMenu and passed to OnPlayerSelectedMenuRow
   * @param {number} playerid - The ID of the player that the menu will be hidden for
   * @summary Hides a menu for a player.
   * @see ShowMenuForPlayer
   * @see AddMenuItem
   * @see SetMenuColumnHeader
   * @see CreateMenu
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute.

   */
  static callNative(nativeName: 'HideMenuForPlayer', paramTypes: 'ii', menuid: number, playerid: number): number;
  /**
   * Calls the AMX native IsValidMenu 
   *
   * @name samp.callNative
   * @param {string} [nativeName=IsValidMenu] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} menuid - The menu to check for existance
   * @summary Check if a menu ID is vliad.
   * @see CreateMenu
   * @see DestroyMenu
   * @returns 1 if the menu is valid, otherwise 0.
   */
  static callNative(nativeName: 'IsValidMenu', paramTypes: 'i', menuid: number): number;
  /**
   * Calls the AMX native DisableMenu 
   *
   * @name samp.callNative
   * @param {string} [nativeName=DisableMenu] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} menuid - The ID of the menu to disable
   * @summary Disable a menu.
   * @see CreateMenu
   * @see DestroyMenu
   * @see AddMenuItem
   * @remarks Crashes when passed an invalid menu ID.
   */
  static callNative(nativeName: 'DisableMenu', paramTypes: 'i', menuid: number): number;
  /**
   * Calls the AMX native DisableMenuRow 
   *
   * @name samp.callNative
   * @param {string} [nativeName=DisableMenuRow] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} menuid - The ID of the menu to disable a row of. Ensure this is valid, as an invalid menu ID will crash the entire server
   * @param {number} row - The ID of the row to disable (rows start at 0)
   * @summary Disable a specific row in a menu for all players. It will be greyed-out and can&#x27;t be selected by players.
   * @see CreateMenu
   * @see DestroyMenu
   * @see AddMenuItem
   * @remarks 
  Crashes when passed an invalid menu ID.
  This function disabled the specified menu row for all players. There is no function to disable a menu row for a specific player. You&#x27;d have to create two menus - one with a row disabled, and one without. Or one per player.

   * @returns This function always returns 1, even if the function fails. If an invalid row is specified, nothing will happen. If an invalid menu ID is specified, the server will crash.
   */
  static callNative(nativeName: 'DisableMenuRow', paramTypes: 'ii', menuid: number, row: number): number;
  /**
   * Calls the AMX native GetPlayerMenu 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPlayerMenu] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to get the current menu of
   * @summary Gets the ID of the menu the player is currently viewing (shown by ShowMenuForPlayer).
   * @see ShowMenuForPlayer
   * @see HideMenuForPlayer
   * @see CreateMenu
   * @see DestroyMenu
   * @see AddMenuItem
   * @see OnPlayerSelectedMenuRow
   * @see OnPlayerExitedMenu
   * @remarks Returns previous menu when none is displayed.
   * @returns The ID of the player&#x27;s currently shown menu, or INVALID_MENU (255) if no menu shown.
   */
  static callNative(nativeName: 'GetPlayerMenu', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native TextDrawCreate 
   *
   * @name samp.callNative
   * @param {string} [nativeName=TextDrawCreate] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} x - 
   * @param {number} y - 
   * @param {string} text - 
   */
  static callNative(nativeName: 'TextDrawCreate', paramTypes: 'ffs', x: number, y: number, text: string): number;
  /**
   * Calls the AMX native TextDrawDestroy 
   *
   * @name samp.callNative
   * @param {string} [nativeName=TextDrawDestroy] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} text - 
   */
  static callNative(nativeName: 'TextDrawDestroy', paramTypes: 'i', text: number): number;
  /**
   * Calls the AMX native TextDrawLetterSize 
   *
   * @name samp.callNative
   * @param {string} [nativeName=TextDrawLetterSize] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} text - 
   * @param {number} x - 
   * @param {number} y - 
   */
  static callNative(nativeName: 'TextDrawLetterSize', paramTypes: 'iff', text: number, x: number, y: number): number;
  /**
   * Calls the AMX native TextDrawTextSize 
   *
   * @name samp.callNative
   * @param {string} [nativeName=TextDrawTextSize] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} text - 
   * @param {number} x - 
   * @param {number} y - 
   */
  static callNative(nativeName: 'TextDrawTextSize', paramTypes: 'iff', text: number, x: number, y: number): number;
  /**
   * Calls the AMX native TextDrawAlignment 
   *
   * @name samp.callNative
   * @param {string} [nativeName=TextDrawAlignment] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} text - 
   * @param {number} alignment - 
   */
  static callNative(nativeName: 'TextDrawAlignment', paramTypes: 'ii', text: number, alignment: number): number;
  /**
   * Calls the AMX native TextDrawColor 
   *
   * @name samp.callNative
   * @param {string} [nativeName=TextDrawColor] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} text - 
   * @param {number} color - 
   */
  static callNative(nativeName: 'TextDrawColor', paramTypes: 'ii', text: number, color: number): number;
  /**
   * Calls the AMX native TextDrawUseBox 
   *
   * @name samp.callNative
   * @param {string} [nativeName=TextDrawUseBox] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} text - 
   * @param {number} use - 
   */
  static callNative(nativeName: 'TextDrawUseBox', paramTypes: 'ii', text: number, use: number): number;
  /**
   * Calls the AMX native TextDrawBoxColor 
   *
   * @name samp.callNative
   * @param {string} [nativeName=TextDrawBoxColor] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} text - 
   * @param {number} color - 
   */
  static callNative(nativeName: 'TextDrawBoxColor', paramTypes: 'ii', text: number, color: number): number;
  /**
   * Calls the AMX native TextDrawSetShadow 
   *
   * @name samp.callNative
   * @param {string} [nativeName=TextDrawSetShadow] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} text - 
   * @param {number} size - 
   */
  static callNative(nativeName: 'TextDrawSetShadow', paramTypes: 'ii', text: number, size: number): number;
  /**
   * Calls the AMX native TextDrawSetOutline 
   *
   * @name samp.callNative
   * @param {string} [nativeName=TextDrawSetOutline] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} text - 
   * @param {number} size - 
   */
  static callNative(nativeName: 'TextDrawSetOutline', paramTypes: 'ii', text: number, size: number): number;
  /**
   * Calls the AMX native TextDrawBackgroundColor 
   *
   * @name samp.callNative
   * @param {string} [nativeName=TextDrawBackgroundColor] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} text - 
   * @param {number} color - 
   */
  static callNative(nativeName: 'TextDrawBackgroundColor', paramTypes: 'ii', text: number, color: number): number;
  /**
   * Calls the AMX native TextDrawFont 
   *
   * @name samp.callNative
   * @param {string} [nativeName=TextDrawFont] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} text - 
   * @param {number} font - 
   */
  static callNative(nativeName: 'TextDrawFont', paramTypes: 'ii', text: number, font: number): number;
  /**
   * Calls the AMX native TextDrawSetProportional 
   *
   * @name samp.callNative
   * @param {string} [nativeName=TextDrawSetProportional] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} text - 
   * @param {number} set - 
   */
  static callNative(nativeName: 'TextDrawSetProportional', paramTypes: 'ii', text: number, set: number): number;
  /**
   * Calls the AMX native TextDrawSetSelectable 
   *
   * @name samp.callNative
   * @param {string} [nativeName=TextDrawSetSelectable] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} text - 
   * @param {number} set - 
   */
  static callNative(nativeName: 'TextDrawSetSelectable', paramTypes: 'ii', text: number, set: number): number;
  /**
   * Calls the AMX native TextDrawShowForPlayer 
   *
   * @name samp.callNative
   * @param {string} [nativeName=TextDrawShowForPlayer] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - 
   * @param {number} text - 
   */
  static callNative(nativeName: 'TextDrawShowForPlayer', paramTypes: 'ii', playerid: number, text: number): number;
  /**
   * Calls the AMX native TextDrawHideForPlayer 
   *
   * @name samp.callNative
   * @param {string} [nativeName=TextDrawHideForPlayer] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player that the textdraw should be hidden for
   * @param {number} text - The ID of the textdraw to hide
   * @summary Hides a textdraw for a specific player.
   * @see TextDrawHideForAll
   * @see TextDrawShowForPlayer
   * @see TextDrawShowForAll
   */
  static callNative(nativeName: 'TextDrawHideForPlayer', paramTypes: 'ii', playerid: number, text: number): number;
  /**
   * Calls the AMX native TextDrawShowForAll 
   *
   * @name samp.callNative
   * @param {string} [nativeName=TextDrawShowForAll] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} text - The ID of the textdraw to show. Returned by TextDrawCreate
   * @summary Shows a textdraw for all players.
   * @see TextDrawShowForPlayer
   * @see TextDrawHideForPlayer
   * @see TextDrawHideForAll
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. This means the textdraw specified does not exist.

   */
  static callNative(nativeName: 'TextDrawShowForAll', paramTypes: 'i', text: number): number;
  /**
   * Calls the AMX native TextDrawHideForAll 
   *
   * @name samp.callNative
   * @param {string} [nativeName=TextDrawHideForAll] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} text - The ID of the textdraw to hide (returned by TextDrawCreate)
   * @summary Hides a text draw for all players.
   * @see TextDrawShowForPlayer
   * @see TextDrawHideForPlayer
   * @see TextDrawShowForAll
   */
  static callNative(nativeName: 'TextDrawHideForAll', paramTypes: 'i', text: number): number;
  /**
   * Calls the AMX native TextDrawSetString 
   *
   * @name samp.callNative
   * @param {string} [nativeName=TextDrawSetString] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} text - 
   * @param {string} string - 
   */
  static callNative(nativeName: 'TextDrawSetString', paramTypes: 'is', text: number, string: string): number;
  /**
   * Calls the AMX native TextDrawSetPreviewModel 
   *
   * @name samp.callNative
   * @param {string} [nativeName=TextDrawSetPreviewModel] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} text - 
   * @param {number} modelindex - 
   */
  static callNative(nativeName: 'TextDrawSetPreviewModel', paramTypes: 'ii', text: number, modelindex: number): number;
  /**
   * Calls the AMX native TextDrawSetPreviewRot 
   *
   * @name samp.callNative
   * @param {string} [nativeName=TextDrawSetPreviewRot] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} text - 
   * @param {number} fRotX - 
   * @param {number} fRotY - 
   * @param {number} fRotZ - 
   * @param {number} fZoom - 
   */
  static callNative(nativeName: 'TextDrawSetPreviewRot', paramTypes: 'iffff', text: number, fRotX: number, fRotY: number, fRotZ: number, fZoom: number): number;
  /**
   * Calls the AMX native TextDrawSetPreviewVehCol 
   *
   * @name samp.callNative
   * @param {string} [nativeName=TextDrawSetPreviewVehCol] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} text - 
   * @param {number} color1 - 
   * @param {number} color2 - 
   */
  static callNative(nativeName: 'TextDrawSetPreviewVehCol', paramTypes: 'iii', text: number, color1: number, color2: number): number;
  /**
   * Calls the AMX native GangZoneCreate 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GangZoneCreate] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} minx - The X coordinate for the west side of the gangzone
   * @param {number} miny - The Y coordinate for the south side of the gangzone
   * @param {number} maxx - The X coordinate for the east side of the gangzone
   * @param {number} maxy - The Y coordinate for the north side of the gangzone
   * @summary Create a gangzone (colored radar area).
   * @see GangZoneDestroy
   * @see GangZoneShowForPlayer
   * @see GangZoneShowForAll
   * @see GangZoneHideForPlayer
   * @see GangZoneHideForAll
   * @see GangZoneFlashForPlayer
   * @see GangZoneFlashForAll
   * @see GangZoneStopFlashForPlayer
   * @see GangZoneStopFlashForAll
   * @remarks 
  There is a limit of 1024 gangzones.
  Putting the parameters in the wrong order results in glitchy behavior.

   * @remarks This function merely CREATES the gangzone, you must use GangZoneShowForPlayer or GangZoneShowForAll to show it.
   * @returns The ID of the created zone, returns -1 if not created.
   */
  static callNative(nativeName: 'GangZoneCreate', paramTypes: 'ffff', minx: number, miny: number, maxx: number, maxy: number): number;
  /**
   * Calls the AMX native GangZoneDestroy 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GangZoneDestroy] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} zone - The ID of the zone to destroy
   * @summary Destroy a gangzone.
   * @see GangZoneCreate
   * @see GangZoneShowForPlayer
   * @see GangZoneShowForAll
   * @see GangZoneHideForPlayer
   * @see GangZoneHideForAll
   * @see GangZoneFlashForPlayer
   * @see GangZoneFlashForAll
   * @see GangZoneStopFlashForPlayer
   * @see GangZoneStopFlashForAll
   */
  static callNative(nativeName: 'GangZoneDestroy', paramTypes: 'i', zone: number): number;
  /**
   * Calls the AMX native GangZoneShowForPlayer 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GangZoneShowForPlayer] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player you would like to show the gangzone for.
   * @param {number} zone - The ID of the gang zone to show for the player. Returned by GangZoneCreate
   * @param {number} color - The color to show the gang zone, as an integer or hex in RGBA color format. Alpha transparency supported
   * @summary Show a gangzone for a player. Must be created with GangZoneCreate first.
   * @see GangZoneCreate
   * @see GangZoneDestroy
   * @see GangZoneShowForAll
   * @see GangZoneHideForPlayer
   * @see GangZoneHideForAll
   * @see GangZoneFlashForPlayer
   * @see GangZoneFlashForAll
   * @see GangZoneStopFlashForPlayer
   * @see GangZoneStopFlashForAll
   * @returns 1 if the gangzone was shown, otherwise 0 (non-existant).
   */
  static callNative(nativeName: 'GangZoneShowForPlayer', paramTypes: 'iii', playerid: number, zone: number, color: number): number;
  /**
   * Calls the AMX native GangZoneShowForAll 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GangZoneShowForAll] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} zone - The ID of the gangzone to show (returned by GangZoneCreate)
   * @param {number} color - The color to show the gang zone, as an integer or hex in RGBA color format. Alpha transparency supported
   * @summary Shows a gangzone with the desired color to all players.
   * @see GangZoneCreate
   * @see GangZoneDestroy
   * @see GangZoneShowForPlayer
   * @see GangZoneHideForPlayer
   * @see GangZoneHideForAll
   * @see GangZoneFlashForPlayer
   * @see GangZoneFlashForAll
   * @see GangZoneStopFlashForPlayer
   * @see GangZoneStopFlashForAll
   * @returns 
  1: The function executed successfully. The gang zone was shown for all players.
  0: The function failed to execute. The gangzone does not exist.

   */
  static callNative(nativeName: 'GangZoneShowForAll', paramTypes: 'ii', zone: number, color: number): number;
  /**
   * Calls the AMX native GangZoneHideForPlayer 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GangZoneHideForPlayer] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to hide the gangzone for
   * @param {number} zone - The ID of the zone to hide
   * @summary Hides a gangzone for a player.
   * @see GangZoneCreate
   * @see GangZoneDestroy
   * @see GangZoneShowForPlayer
   * @see GangZoneShowForAll
   * @see GangZoneHideForAll
   * @see GangZoneFlashForPlayer
   * @see GangZoneFlashForAll
   * @see GangZoneStopFlashForPlayer
   * @see GangZoneStopFlashForAll
   */
  static callNative(nativeName: 'GangZoneHideForPlayer', paramTypes: 'ii', playerid: number, zone: number): number;
  /**
   * Calls the AMX native GangZoneHideForAll 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GangZoneHideForAll] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} zone - The zone to hide
   * @summary GangZoneHideForAll hides a gangzone from all players.
   * @see GangZoneCreate
   * @see GangZoneDestroy
   * @see GangZoneShowForPlayer
   * @see GangZoneShowForAll
   * @see GangZoneHideForPlayer
   * @see GangZoneFlashForPlayer
   * @see GangZoneFlashForAll
   * @see GangZoneStopFlashForPlayer
   * @see GangZoneStopFlashForAll
   */
  static callNative(nativeName: 'GangZoneHideForAll', paramTypes: 'i', zone: number): number;
  /**
   * Calls the AMX native GangZoneFlashForPlayer 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GangZoneFlashForPlayer] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to flash the gangzone for
   * @param {number} zone - The ID of the zone to flash
   * @param {number} flashcolor - The color to flash the gang zone, as an integer or hex in RGBA color format. Alpha transparency supported
   * @summary Makes a gangzone flash for a player.
   * @see GangZoneCreate
   * @see GangZoneDestroy
   * @see GangZoneShowForPlayer
   * @see GangZoneShowForAll
   * @see GangZoneHideForPlayer
   * @see GangZoneHideForAll
   * @see GangZoneFlashForAll
   * @see GangZoneStopFlashForPlayer
   * @see GangZoneStopFlashForAll
   */
  static callNative(nativeName: 'GangZoneFlashForPlayer', paramTypes: 'iii', playerid: number, zone: number, flashcolor: number): number;
  /**
   * Calls the AMX native GangZoneFlashForAll 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GangZoneFlashForAll] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} zone - The zone to flash
   * @param {number} flashcolor - The color to flash the gang zone, as an integer or hex in RGBA color format. Alpha transparency supported
   * @summary GangZoneFlashForAll flashes a gangzone for all players.
   * @see GangZoneCreate
   * @see GangZoneDestroy
   * @see GangZoneShowForPlayer
   * @see GangZoneShowForAll
   * @see GangZoneHideForPlayer
   * @see GangZoneHideForAll
   * @see GangZoneFlashForPlayer
   * @see GangZoneStopFlashForPlayer
   * @see GangZoneStopFlashForAll
   */
  static callNative(nativeName: 'GangZoneFlashForAll', paramTypes: 'ii', zone: number, flashcolor: number): number;
  /**
   * Calls the AMX native GangZoneStopFlashForPlayer 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GangZoneStopFlashForPlayer] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to stop the gangzone flashing for
   * @param {number} zone - The ID of the gangzonezone to stop flashing
   * @summary Stops a gangzone flashing for a player.
   * @see GangZoneCreate
   * @see GangZoneDestroy
   * @see GangZoneShowForPlayer
   * @see GangZoneShowForAll
   * @see GangZoneHideForPlayer
   * @see GangZoneHideForAll
   * @see GangZoneFlashForPlayer
   * @see GangZoneFlashForAll
   * @see GangZoneStopFlashForAll
   */
  static callNative(nativeName: 'GangZoneStopFlashForPlayer', paramTypes: 'ii', playerid: number, zone: number): number;
  /**
   * Calls the AMX native GangZoneStopFlashForAll 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GangZoneStopFlashForAll] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} zone - The ID of the zone to stop flashing. Returned by GangZoneCreate
   * @summary Stops a gangzone flashing for all players.
   * @see GangZoneCreate
   * @see GangZoneDestroy
   * @see GangZoneShowForPlayer
   * @see GangZoneShowForAll
   * @see GangZoneHideForPlayer
   * @see GangZoneHideForAll
   * @see GangZoneFlashForPlayer
   * @see GangZoneFlashForAll
   * @see GangZoneStopFlashForPlayer
   * @returns 
  1: The function executed successfully. Success is reported even if the gang zone wasn&#x27;t flashing to begin with.
  0: The function failed to execute. The gangzone specified does not exist.

   */
  static callNative(nativeName: 'GangZoneStopFlashForAll', paramTypes: 'i', zone: number): number;
  /**
   * Calls the AMX native Create3DTextLabel 
   *
   * @name samp.callNative
   * @param {string} [nativeName=Create3DTextLabel] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {string} text - The initial text string
   * @param {number} color - The text Color, as an integer or hex in RGBA color format
   * @param {number} X - X-Coordinate
   * @param {number} Y - Y-Coordinate
   * @param {number} Z - Z-Coordinate
   * @param {number} DrawDistance - The distance from where you are able to see the 3D Text Label
   * @param {number} virtualworld - The virtual world in which you are able to see the 3D Text
   * @param {number} testLOS - Test the line-of-sight so this text can&#x27;t be seen through objects (optional&#x3D;0)
   * @summary Creates a 3D Text Label at a specific location in the world.
   * @see Delete3DTextLabel
   * @see Attach3DTextLabelToPlayer
   * @see Attach3DTextLabelToVehicle
   * @see Update3DTextLabelText
   * @see CreatePlayer3DTextLabel
   * @see DeletePlayer3DTextLabel
   * @see UpdatePlayer3DTextLabelText
   * @remarks This function was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks 
  If  is empty, the server/clients next to the text might crash!
  If the virtualworld is set as -1 the text will not appear.

   * @remarks drawdistance seems to be a lot smaller when spectating.
   * @remarks Use color embedding for multiple colors in the text.
   * @returns The ID of the newly created 3D Text Label, or INVALID_3DTEXT_ID if the 3D Text Label limit (MAX_3DTEXT_GLOBAL) was reached.
   */
  static callNative(nativeName: 'Create3DTextLabel', paramTypes: 'siffffii', text: string, color: number, X: number, Y: number, Z: number, DrawDistance: number, virtualworld: number, testLOS: number): number;
  /**
   * Calls the AMX native Delete3DTextLabel 
   *
   * @name samp.callNative
   * @param {string} [nativeName=Delete3DTextLabel] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} id - The ID of the 3D text label to delete
   * @summary Delete a 3D text label (created with Create3DTextLabel).
   * @see Create3DTextLabel
   * @see Attach3DTextLabelToPlayer
   * @see Attach3DTextLabelToVehicle
   * @see Update3DTextLabelText
   * @see CreatePlayer3DTextLabel
   * @see DeletePlayer3DTextLabel
   * @see UpdatePlayer3DTextLabelText
   * @remarks This function was added in SA-MP 0.3a and will not work in earlier versions!
   * @returns 1 if the 3D text label was deleted, otherwise 0.
   */
  static callNative(nativeName: 'Delete3DTextLabel', paramTypes: 'i', id: number): number;
  /**
   * Calls the AMX native Attach3DTextLabelToPlayer 
   *
   * @name samp.callNative
   * @param {string} [nativeName=Attach3DTextLabelToPlayer] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} id - The ID of the 3D text label to attach. Returned by Create3DTextLabel
   * @param {number} playerid - The ID of the player to attach the label to
   * @param {number} OffsetX - The X offset from the player
   * @param {number} OffsetY - The Y offset from the player
   * @param {number} OffsetZ - The Z offset from the player
   * @summary Attach a 3D text label to a player.
   * @see Create3DTextLabel
   * @see Delete3DTextLabel
   * @see Attach3DTextLabelToVehicle
   * @see Update3DTextLabelText
   * @see CreatePlayer3DTextLabel
   * @see DeletePlayer3DTextLabel
   * @see UpdatePlayer3DTextLabelText
   * @remarks This function was added in SA-MP 0.3a and will not work in earlier versions!
   * @returns 
1: The function executed successfully.
0: The function failed to execute. This means the player and/or label do not exist.

   */
  static callNative(nativeName: 'Attach3DTextLabelToPlayer', paramTypes: 'iifff', id: number, playerid: number, OffsetX: number, OffsetY: number, OffsetZ: number): number;
  /**
   * Calls the AMX native Attach3DTextLabelToVehicle 
   *
   * @name samp.callNative
   * @param {string} [nativeName=Attach3DTextLabelToVehicle] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} id - The ID of the 3D text label to attach. Returned by Create3DTextLabel
   * @param {number} vehicleid - The vehicle you want to attach the 3D Text Label to
   * @param {number} OffsetX - The Offset-X coordinate of the player vehicle (the vehicle is 0.0,0.0,0.0).
   * @param {number} OffsetY - The Offset-Y coordinate of the player vehicle (the vehicle is 0.0,0.0,0.0).
   * @param {number} OffsetZ - The Offset-Z coordinate of the player vehicle (the vehicle is 0.0,0.0,0.0).
   * @summary Attaches a 3D Text Label to a specific vehicle.
   * @see Create3DTextLabel
   * @see Delete3DTextLabel
   * @see Attach3DTextLabelToPlayer
   * @see Update3DTextLabelText
   * @see CreatePlayer3DTextLabel
   * @see DeletePlayer3DTextLabel
   * @see UpdatePlayer3DTextLabelText
   * @remarks Attach3DTextLabelToPlayer was added in SA-MP 0.3a 	This function was added in SA-MP 0.3a and will not work in earlier versions!
   */
  static callNative(nativeName: 'Attach3DTextLabelToVehicle', paramTypes: 'iifff', id: number, vehicleid: number, OffsetX: number, OffsetY: number, OffsetZ: number): number;
  /**
   * Calls the AMX native Update3DTextLabelText 
   *
   * @name samp.callNative
   * @param {string} [nativeName=Update3DTextLabelText] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} id - The 3D Text Label you want to update
   * @param {number} color - The color the 3D Text Label should have from now on
   * @param {string} text - The new text which the 3D Text Label should have from now on
   * @summary Updates a 3D Text Label text and color.
   * @see Create3DTextLabel
   * @see Delete3DTextLabel
   * @see Attach3DTextLabelToPlayer
   * @see Attach3DTextLabelToVehicle
   * @see CreatePlayer3DTextLabel
   * @see DeletePlayer3DTextLabel
   * @see UpdatePlayer3DTextLabelText
   * @remarks This function was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks If  is empty, the server/clients next to the text might crash!
   */
  static callNative(nativeName: 'Update3DTextLabelText', paramTypes: 'iis', id: number, color: number, text: string): number;
  /**
   * Calls the AMX native CreatePlayer3DTextLabel 
   *
   * @name samp.callNative
   * @param {string} [nativeName=CreatePlayer3DTextLabel] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The player which should see the newly created 3DText Label
   * @param {string} text - The text to display
   * @param {number} color - The text color
   * @param {number} X - X Coordinate (or offset if attached)
   * @param {number} Y - Y Coordinate (or offset if attached)
   * @param {number} Z - Z Coordinate (or offset if attached)
   * @param {number} DrawDistance - The distance where you are able to see the 3D Text Label
   * @param {number} attachedplayer - The player you want to attach the 3D Text Label to. (optional&#x3D;INVALID_PLAYER_ID)
   * @param {number} attachedvehicle - The vehicle you want to attach the 3D Text Label to. (optional&#x3D;INVALID_VEHICLE_ID)
   * @param {number} testLOS - Test the line-of-sight so this text can&#x27;t be seen through walls (optional&#x3D;0)
   * @summary Creates a 3D Text Label only for a specific player.
   * @see Create3DTextLabel
   * @see Delete3DTextLabel
   * @see Attach3DTextLabelToPlayer
   * @see Attach3DTextLabelToVehicle
   * @see Update3DTextLabelText
   * @see DeletePlayer3DTextLabel
   * @see UpdatePlayer3DTextLabelText
   * @remarks This function was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks If  is empty, the server/clients next to the text might crash!
   * @remarks drawdistance seems to be a lot smaller when spectating.
   * @returns The ID of the newly created Player 3D Text Label, or INVALID_3DTEXT_ID if the Player 3D Text Label limit (MAX_3DTEXT_PLAYER) was reached.
   */
  static callNative(nativeName: 'CreatePlayer3DTextLabel', paramTypes: 'isiffffiii', playerid: number, text: string, color: number, X: number, Y: number, Z: number, DrawDistance: number, attachedplayer: number, attachedvehicle: number, testLOS: number): number;
  /**
   * Calls the AMX native DeletePlayer3DTextLabel 
   *
   * @name samp.callNative
   * @param {string} [nativeName=DeletePlayer3DTextLabel] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player whose 3D text label to delete
   * @param {number} id - The ID of the player&#x27;s 3D text label to delete
   * @summary Destroy a 3D text label that was created using CreatePlayer3DTextLabel.
   * @see Create3DTextLabel
   * @see Attach3DTextLabelToPlayer
   * @see Attach3DTextLabelToVehicle
   * @see Update3DTextLabelText
   * @see CreatePlayer3DTextLabel
   * @see UpdatePlayer3DTextLabelText
   * @remarks This function was added in SA-MP 0.3a and will not work in earlier versions!
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. This means the label specified doesn&#x27;t exist.

   */
  static callNative(nativeName: 'DeletePlayer3DTextLabel', paramTypes: 'ii', playerid: number, id: number): number;
  /**
   * Calls the AMX native UpdatePlayer3DTextLabelText 
   *
   * @name samp.callNative
   * @param {string} [nativeName=UpdatePlayer3DTextLabelText] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player for which the 3D Text Label was created
   * @param {number} id - The 3D Text Label you want to update
   * @param {number} color - The color the 3D Text Label should have from now on
   * @param {string} text - The new text which the 3D Text Label should have from now on
   * @summary Updates a player 3D Text Label&#x27;s text and color.
   * @see Create3DTextLabel
   * @see Delete3DTextLabel
   * @see Attach3DTextLabelToPlayer
   * @see Attach3DTextLabelToVehicle
   * @see Update3DTextLabelText
   * @see CreatePlayer3DTextLabel
   * @see DeletePlayer3DTextLabel
   * @remarks This function was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks If  is empty, the server/clients next to the text might crash!
   */
  static callNative(nativeName: 'UpdatePlayer3DTextLabelText', paramTypes: 'iiis', playerid: number, id: number, color: number, text: string): number;
  /**
   * Calls the AMX native ShowPlayerDialog 
   *
   * @name samp.callNative
   * @param {string} [nativeName=ShowPlayerDialog] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to show the dialog to
   * @param {number} dialogid - An ID to assign this dialog to, so responses can be processed. Max dialogid is 32767. Using negative values will close any open dialog
   * @param {number} style - The style of the dialog
   * @param {string} caption - The title at the top of the dialog. The length of the caption can not exceed more than 64 characters before it starts to cut off
   * @param {string} info - The text to display in the main dialog. Use \n to start a new line and \t to tabulate
   * @param {string} button1 - The text on the left button
   * @param {string} button2 - The text on the right button. Leave it blank ( &quot;&quot; ) to hide it
   * @summary Shows the player a synchronous (only one at a time) dialog box.
   * @see TextDrawShowForPlayer
   * @see OnDialogResponse
   * @remarks This function was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks Use color embedding for multiple colors in the text. 
   * @remarks Using -1 as dialogid closes all dialogs currently shown on the client&#x27;s screen. 
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. This means the player is not connected.

   */
  static callNative(nativeName: 'ShowPlayerDialog', paramTypes: 'iiissss', playerid: number, dialogid: number, style: number, caption: string, info: string, button1: string, button2: string): number;
  /**
   * Calls the AMX native gpci 
   *
   * @name samp.callNative
   * @param {string} [nativeName=gpci] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - 
   * @param {number} maxlen - 
   */
  static callNative(nativeName: 'gpci', paramTypes: 'iSi', playerid: number, maxlen: number): string;
  /**
   * Calls the AMX native CreateActor 
   *
   * @name samp.callNative
   * @param {string} [nativeName=CreateActor] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} modelid - The model ID (skin ID) the actor should have
   * @param {number} X - The X coordinate to create the actor at
   * @param {number} Y - The Y coordinate to create the actor at
   * @param {number} Z - The Z coordinate to create the actor at
   * @param {number} Rotation - The facing angle (rotation) for the actor to have
   * @summary Create a static &#x27;actor&#x27; in the world. These &#x27;actors&#x27; are like NPCs, however they have limited functionality. They do not take up server player slots.
   * @see DestroyActor
   * @see SetActorPos
   * @see GetActorPos
   * @see SetActorFacingAngle
   * @see GetActorFacingAngle
   * @see SetActorVirtualWorld
   * @see GetActorVirtualWorld
   * @see ApplyActorAnimation
   * @see ClearActorAnimations
   * @see GetPlayerCameraTargetActor
   * @see IsActorStreamedIn
   * @see SetActorHealth
   * @see GetActorHealth
   * @see SetActorInvulnerable
   * @see IsActorInvulnerable
   * @see IsValidActor
   * @see GetActorPoolSize
   * @see GetPlayerTargetActor
   * @see OnActorStreamIn
   * @see OnActorStreamOut
   * @see OnPlayerGiveDamageActor
   * @remarks This function was added in SA-MP 0.3.7 and will not work in earlier versions!
   * @remarks 
  Actors are completely separate from NPCs. They do NOT use player IDs/slots on the server and CANNOT be handled like NPCs.
  Actors are limited to 1000 (MAX_ACTORS).
  Actors can be pushed by vehicles, use a timer to put them back at their positions.
  As of 0.3.7 R2 actors default to being invulnerable.

   * @returns 
  The created Actor ID (start at 0).
  INVALID_ACTOR_ID (65535) If the actor limit (1000) is reached.

   */
  static callNative(nativeName: 'CreateActor', paramTypes: 'iffff', modelid: number, X: number, Y: number, Z: number, Rotation: number): number;
  /**
   * Calls the AMX native DestroyActor 
   *
   * @name samp.callNative
   * @param {string} [nativeName=DestroyActor] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} actorid - The ID of the actor to destroy. Returned by CreateActor
   * @summary Destroy an actor which was created with CreateActor.
   * @see CreateActor
   * @remarks This function was added in SA-MP 0.3.7 and will not work in earlier versions!
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. The actor with the ID specified does not exist.

   */
  static callNative(nativeName: 'DestroyActor', paramTypes: 'i', actorid: number): number;
  /**
   * Calls the AMX native IsActorStreamedIn 
   *
   * @name samp.callNative
   * @param {string} [nativeName=IsActorStreamedIn] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} actorid - The ID of the actor
   * @param {number} forplayerid - The ID of the player
   * @summary Checks if an actor is streamed in for a player.
   * @see CreateActor
   * @see IsPlayerStreamedIn
   * @remarks This function was added in SA-MP 0.3.7 and will not work in earlier versions!
   * @returns 1 if the actor is streamed in for the player, or 0 if it is not.
   */
  static callNative(nativeName: 'IsActorStreamedIn', paramTypes: 'ii', actorid: number, forplayerid: number): number;
  /**
   * Calls the AMX native SetActorVirtualWorld 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetActorVirtualWorld] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} actorid - The ID of the actor (returned by CreateActor) to set the virtual world of
   * @param {number} vworld - The virtual world to put the actor ID
   * @summary Set the virtual world of an actor. Only players in the same world will see the actor.
   * @see GetActorVirtualWorld
   * @see CreateActor
   * @remarks This function was added in SA-MP 0.3.7 and will not work in earlier versions!
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. The actor specified does not exist.

   */
  static callNative(nativeName: 'SetActorVirtualWorld', paramTypes: 'ii', actorid: number, vworld: number): number;
  /**
   * Calls the AMX native GetActorVirtualWorld 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetActorVirtualWorld] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} actorid - The ID of the actor to get the virtual world of
   * @summary Get the virtual world of an actor.
   * @see SetActorVirtualWorld
   * @remarks This function was added in SA-MP 0.3.7 and will not work in earlier versions!
   * @returns The virtual world of the actor. By default this is 0. Also returns 0 if actor specified does not exist.
   */
  static callNative(nativeName: 'GetActorVirtualWorld', paramTypes: 'i', actorid: number): number;
  /**
   * Calls the AMX native ApplyActorAnimation 
   *
   * @name samp.callNative
   * @param {string} [nativeName=ApplyActorAnimation] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} actorid - The ID of the actor to apply the animation to
   * @param {string} animlib - The animation library from which to apply an animation
   * @param {string} animname - The name of the animation to apply, within the specified library
   * @param {number} fDelta - The speed to play the animation (use 4.1)
   * @param {number} loop - If set to 1, the animation will loop. If set to 0, the animation will play once
   * @param {number} lockx - If set to 0, the actor is returned to their old X coordinate once the animation is complete (for animations that move the actor such as walking). 1 will not return them to their old position
   * @param {number} locky - Same as above but for the Y axis. Should be kept the same as the previous parameter
   * @param {number} freeze - Setting this to 1 will freeze an actor at the end of the animation. 0 will not
   * @param {number} time - Timer in milliseconds. For a never-ending loop it should be 0
   * @summary Apply an animation to an actor.
   * @see ClearActorAnimations
   * @remarks You must preload the animation library for the player the actor will be applying the animation for, and not for the actor. Otherwise, the animation won&#x27;t be applied to the actor until the function is executed again.
   * @remarks This function was added in SA-MP 0.3.7 and will not work in earlier versions!
   * @returns 
1: The function executed successfully.
0: The function failed to execute. The actor specified does not exist.

   */
  static callNative(nativeName: 'ApplyActorAnimation', paramTypes: 'issfiiiii', actorid: number, animlib: string, animname: string, fDelta: number, loop: number, lockx: number, locky: number, freeze: number, time: number): number;
  /**
   * Calls the AMX native ClearActorAnimations 
   *
   * @name samp.callNative
   * @param {string} [nativeName=ClearActorAnimations] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} actorid - The ID of the actor (returned by CreateActor) to clear the animations for
   * @summary Clear any animations applied to an actor.
   * @see ApplyActorAnimation
   * @remarks This function was added in SA-MP 0.3.7 and will not work in earlier versions!
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. The actor specified does not exist.

   */
  static callNative(nativeName: 'ClearActorAnimations', paramTypes: 'i', actorid: number): number;
  /**
   * Calls the AMX native SetActorPos 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetActorPos] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} actorid - The ID of the actor to set the position of. Returned by CreateActor
   * @param {number} X - The X coordinate to position the actor at
   * @param {number} Y - The Y coordinate to position the actor at
   * @param {number} Z - The Z coordinate to position the actor at
   * @summary Set the position of an actor.
   * @see GetActorPos
   * @see CreateActor
   * @remarks This function was added in SA-MP 0.3.7 and will not work in earlier versions!
   * @remarks When creating an actor with CreateActor, you specify it&#x27;s position. You do not need to use this function unless you want to change its position later.
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. The actor specified does not exist.

   */
  static callNative(nativeName: 'SetActorPos', paramTypes: 'ifff', actorid: number, X: number, Y: number, Z: number): number;
  /**
   * Calls the AMX native GetActorPos 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetActorPos] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} actorid - The ID of the actor to get the position of. Returned by CreateActor
   * @summary Get the position of an actor.
   * @see SetActorPos
   * @remarks This function was added in SA-MP 0.3.7 and will not work in earlier versions!
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. The actor specified does not exist.

   */
  static callNative(nativeName: 'GetActorPos', paramTypes: 'iFFF', actorid: number): Array<any>;
  /**
   * Calls the AMX native SetActorFacingAngle 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetActorFacingAngle] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} actorid - The ID of the actor to set the facing angle of. Returned by CreateActor
   * @param {number} ang - The facing angle to set for the actor
   * @summary Set the facing angle of an actor.
   * @see GetActorFacingAngle
   * @see SetActorPos
   * @remarks This function was added in SA-MP 0.3.7 and will not work in earlier versions!
   * @remarks Players will see actor&#x27;s facing angle changed only when it is restreamed to them.
   * @remarks When creating an actor with CreateActor, you specify it&#x27;s facing angle. You do not need to use this function unless you want to change its facing angle later.
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. The actor specified does not exist.

   */
  static callNative(nativeName: 'SetActorFacingAngle', paramTypes: 'if', actorid: number, ang: number): number;
  /**
   * Calls the AMX native GetActorFacingAngle 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetActorFacingAngle] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} actorid - The ID of the actor to get the facing angle of. Returned by CreateActor
   * @summary Get the facing angle of an actor.
   * @see SetActorFacingAngle
   * @see GetActorPos
   * @remarks This function was added in SA-MP 0.3.7 and will not work in earlier versions!
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. The actor specified does not exist.

   */
  static callNative(nativeName: 'GetActorFacingAngle', paramTypes: 'iF', actorid: number): number;
  /**
   * Calls the AMX native SetActorHealth 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetActorHealth] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} actorid - 
   * @param {number} health - 
   */
  static callNative(nativeName: 'SetActorHealth', paramTypes: 'if', actorid: number, health: number): number;
  /**
   * Calls the AMX native GetActorHealth 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetActorHealth] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} actorid - 
   */
  static callNative(nativeName: 'GetActorHealth', paramTypes: 'iF', actorid: number): number;
  /**
   * Calls the AMX native SetActorInvulnerable 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetActorInvulnerable] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} actorid - 
   * @param {number} invulnerable - 
   */
  static callNative(nativeName: 'SetActorInvulnerable', paramTypes: 'ii', actorid: number, invulnerable: number): number;
  /**
   * Calls the AMX native IsActorInvulnerable 
   *
   * @name samp.callNative
   * @param {string} [nativeName=IsActorInvulnerable] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} actorid - The ID of the actor to check
   * @summary Check if an actor is invulnerable.
   * @see CreateActor
   * @see SetActorInvulnerable
   * @see SetActorHealth
   * @remarks This function was added in SA-MP 0.3.7 and will not work in earlier versions!
   * @returns 1 if the actor is invulnerable, 0 otherwise.
   */
  static callNative(nativeName: 'IsActorInvulnerable', paramTypes: 'i', actorid: number): number;
  /**
   * Calls the AMX native IsValidActor 
   *
   * @name samp.callNative
   * @param {string} [nativeName=IsValidActor] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} actorid - 
   */
  static callNative(nativeName: 'IsValidActor', paramTypes: 'i', actorid: number): number;
  /**
   * Calls the AMX native HTTP 
   *
   * @name samp.callNative
   * @param {string} [nativeName=HTTP] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} index - 
   * @param {number} type - 
   * @param {string} url - 
   * @param {string} data - 
   * @param {string} callback - 
   */
  static callNative(nativeName: 'HTTP', paramTypes: 'iisss', index: number, type: number, url: string, data: string, callback: string): number;
  /**
   * Calls the AMX native CreateObject 
   *
   * @name samp.callNative
   * @param {string} [nativeName=CreateObject] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} modelid - The model to create
   * @param {number} X - The X coordinate to create the object at
   * @param {number} Y - The Y coordinate to create the object at
   * @param {number} Z - The Z coordinate to create the object at
   * @param {number} rX - The X rotation of the object
   * @param {number} rY - The Y rotation of the object
   * @param {number} rZ - The Z rotation of the object
   * @param {number} DrawDistance - The distance that San Andreas renders objects at. 0.0 will cause objects to render at their default distances. Usable since 0.3b, limited to 300 prior to 0.3x (optional&#x3D;0.0)
   * @summary Creates an object at specified coordinates in the game world.
   * @see DestroyObject
   * @see IsValidObject
   * @see CreatePlayerObject
   * @see MoveObject
   * @see SetObjectPos
   * @see SetObjectRot
   * @see GetObjectPos
   * @see GetObjectRot
   * @see AttachObjectToPlayer
   * @see SetObjectMaterialText
   * @see SetObjectMaterial
   * @remarks 
  Objects that emit light (lampposts, police lights, bollard lights, neons etc.) that have a greater rotation than 16.26 degrees (or -16.26) on either the X or Y axis will stop shining. This effect also applies to light objects attached to other objects, players and vehicles.
  If a light object is attached to a car and the car is rotated over 16.26 degrees (like in a rollover), the object will also stop emitting light. This is a GTA:SA issue and is not caused by a bug in SA-MP.

   * @remarks In case the light is attached to another object, one fix for this is to set SyncRotation to false in AttachObjectToObject. This will ensure the light stays at 0 rotation. This would only really work for objects that consist ONLY of light, so wouldn&#x27;t work for the police light for example. 
   * @remarks There is a limit of 1000 objects (MAX_OBJECTS). To circumvent this limit, you can use a streamer
   * @returns The ID of the object that was created, or INVALID_OBJECT_ID if the object limit (MAX_OBJECTS) was reached.
   */
  static callNative(nativeName: 'CreateObject', paramTypes: 'ifffffff', modelid: number, X: number, Y: number, Z: number, rX: number, rY: number, rZ: number, DrawDistance: number): number;
  /**
   * Calls the AMX native AttachObjectToVehicle 
   *
   * @name samp.callNative
   * @param {string} [nativeName=AttachObjectToVehicle] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} objectid - The ID of the object to attach to the vehicle. Note that this is an object ID, not a model ID. The object must be CreateObject created first
   * @param {number} vehicleid - The ID of the vehicle to attach the object to
   * @param {number} OffsetX - The X axis offset from the vehicle to attach the object to
   * @param {number} OffsetY - The Y axis offset from the vehicle to attach the object to
   * @param {number} OffsetZ - The Z axis offset from the vehicle to attach the object to
   * @param {number} RotX - The X rotation offset for the object
   * @param {number} RotY - The Y rotation offset for the object
   * @param {number} RotZ - The Z rotation offset for the object
   * @summary Attach an object to a vehicle.
   * @see AttachObjectToPlayer
   * @see AttachObjectToObject
   * @see AttachPlayerObjectToVehicle
   * @see CreateObject
   * @remarks This function was added in SA-MP 0.3c and will not work in earlier versions!
   * @remarks The object must be created first.
   * @remarks When the vehicle is destroyed or respawned, the attached objects won&#x27;t be destroyed with it; they will remain stationary at the position the vehicle disappeared and be reattached to the next vehicle to claim the vehicle ID that the objects were attached to.
   */
  static callNative(nativeName: 'AttachObjectToVehicle', paramTypes: 'iiffffff', objectid: number, vehicleid: number, OffsetX: number, OffsetY: number, OffsetZ: number, RotX: number, RotY: number, RotZ: number): number;
  /**
   * Calls the AMX native AttachObjectToObject 
   *
   * @name samp.callNative
   * @param {string} [nativeName=AttachObjectToObject] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} objectid - The object to attach to another object
   * @param {number} attachtoid - The object to attach the object to
   * @param {number} OffsetX - The distance between the main object and the object in the X direction
   * @param {number} OffsetY - The distance between the main object and the object in the Y direction
   * @param {number} OffsetZ - The distance between the main object and the object in the Z direction
   * @param {number} RotX - The X rotation between the object and the main object
   * @param {number} RotY - The Y rotation between the object and the main object
   * @param {number} RotZ - The Z rotation between the object and the main object
   * @param {number} SyncRotation - If set to 0, objectid&#x27;s rotation will not change with &#x27;s (optional&#x3D;1)
   * @summary You can use this function to attach objects to other objects. The objects will folow the main object.
   * @see AttachObjectToPlayer
   * @see AttachObjectToVehicle
   * @see CreateObject
   * @remarks This function was added in SA-MP 0.3d and will not work in earlier versions!
   * @remarks 
  
    Both objects need to be created before attempting to attach them.
    There is no player-object version of this function (AttachPlayerObjectToObject), meaning it will not be supported by streamers.
  

   * @returns 
1: The function executed successfully.
0: The function failed to execute. This means the first object () does not exist. There are no internal checks to verify that the second object () exists.

   */
  static callNative(nativeName: 'AttachObjectToObject', paramTypes: 'iiffffffi', objectid: number, attachtoid: number, OffsetX: number, OffsetY: number, OffsetZ: number, RotX: number, RotY: number, RotZ: number, SyncRotation: number): number;
  /**
   * Calls the AMX native AttachObjectToPlayer 
   *
   * @name samp.callNative
   * @param {string} [nativeName=AttachObjectToPlayer] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} objectid - The ID of the object to attach to the player
   * @param {number} playerid - The ID of the player to attach the object to
   * @param {number} OffsetX - The distance between the player and the object in the X direction
   * @param {number} OffsetY - The distance between the player and the object in the Y direction
   * @param {number} OffsetZ - The distance between the player and the object in the Z direction
   * @param {number} RotX - The X rotation between the object and the player
   * @param {number} RotY - The Y rotation between the object and the player
   * @param {number} RotZ - The Z rotation between the object and the player
   * @summary Attach an object to a player.
   * @see AttachObjectToVehicle
   * @see AttachObjectToObject
   * @see AttachPlayerObjectToPlayer
   * @see SetPlayerAttachedObject
   * @see CreateObject
   * @returns This function always returns 0.
   */
  static callNative(nativeName: 'AttachObjectToPlayer', paramTypes: 'iiffffff', objectid: number, playerid: number, OffsetX: number, OffsetY: number, OffsetZ: number, RotX: number, RotY: number, RotZ: number): number;
  /**
   * Calls the AMX native SetObjectPos 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetObjectPos] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} objectid - The ID of the object to set the position of. Returned by CreateObject
   * @param {number} X - The X coordinate to position the object at
   * @param {number} Y - The Y coordinate to position the object at
   * @param {number} Z - The Z coordinate to position the object at
   * @summary Change the position of an object.
   * @see GetObjectPos
   * @see SetObjectRot
   * @see GetPlayerObjectPos
   * @see CreateObject
   * @returns This function always returns 1, even if the object specified does not exist.
   */
  static callNative(nativeName: 'SetObjectPos', paramTypes: 'ifff', objectid: number, X: number, Y: number, Z: number): number;
  /**
   * Calls the AMX native GetObjectPos 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetObjectPos] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} objectid - The ID of the object to get the position of.
   * @summary Get the position of an object.
   * @see SetObjectPos
   * @see GetObjectRot
   * @see SetPlayerObjectPos
   * @see CreateObject
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. The specified object does not exist.

   */
  static callNative(nativeName: 'GetObjectPos', paramTypes: 'iFFF', objectid: number): Array<any>;
  /**
   * Calls the AMX native SetObjectRot 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetObjectRot] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} objectid - The ID of the object to set the rotation of
   * @param {number} RotX - The X rotation
   * @param {number} RotY - The Y rotation
   * @param {number} RotZ - The Z rotation
   * @summary Set the rotation of an object on the three axes (X, Y and Z).
   * @see GetObjectRot
   * @see GetObjectPos
   * @see CreateObject
   * @see SetPlayerObjectRot
   * @returns This function always returns 1, even if the object doesn&#x27;t exist.
   */
  static callNative(nativeName: 'SetObjectRot', paramTypes: 'ifff', objectid: number, RotX: number, RotY: number, RotZ: number): number;
  /**
   * Calls the AMX native GetObjectRot 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetObjectRot] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} objectid - The objectid of the object you want to get the rotation from
   * @summary Use this function to get the objects current rotation. The rotation is saved by reference in three RotX/RotY/RotZ variables.
   * @see SetObjectRot
   * @see SetObjectPos
   * @see SetPlayerObjectRot
   * @see CreateObject
   * @returns The object&#x27;s rotation is stored in the referenced variables, not in the return value.
   */
  static callNative(nativeName: 'GetObjectRot', paramTypes: 'iFFF', objectid: number): Array<any>;
  /**
   * Calls the AMX native GetObjectModel 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetObjectModel] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} objectid - The ID of the object to get the model of
   * @summary Get the model ID of an object.
   * @see GetPlayerObjectModel
   * @see CreateObject
   * @remarks This function was added in SA-MP 0.3.7 and will not work in earlier versions!
   * @returns The model ID of the object. -1 if  does not exist.
   */
  static callNative(nativeName: 'GetObjectModel', paramTypes: 'i', objectid: number): number;
  /**
   * Calls the AMX native SetObjectNoCameraCol 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetObjectNoCameraCol] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} objectid - The ID of the object to disable camera collisions on
   * @summary Disable collisions between players&#x27; cameras and the specified object.
   * @see SetObjectsDefaultCameraCol
   * @see SetPlayerObjectNoCameraCol
   * @remarks This function was added in SA-MP 0.3.7 and will not work in earlier versions! 
   * @remarks This only works outside the map boundaries (past -3000/3000 units on the x and/or y axis).
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. The object specified does not exist.

   */
  static callNative(nativeName: 'SetObjectNoCameraCol', paramTypes: 'i', objectid: number): number;
  /**
   * Calls the AMX native IsValidObject 
   *
   * @name samp.callNative
   * @param {string} [nativeName=IsValidObject] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} objectid - The ID of the object to check the existence of
   * @summary Checks if an object with the ID provided exists.
   * @see IsValidPlayerObject
   * @see CreateObject
   * @see DestroyObject
   * @remarks This is to check if an object exists, not if a model is valid.
   * @returns 1 if the object exists, 0 if not.
   */
  static callNative(nativeName: 'IsValidObject', paramTypes: 'i', objectid: number): number;
  /**
   * Calls the AMX native DestroyObject 
   *
   * @name samp.callNative
   * @param {string} [nativeName=DestroyObject] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} objectid - The ID of the object to destroy. Returned by CreateObject
   * @summary Destroys (removes) an object that was created using CreateObject.
   * @see CreateObject
   * @see IsValidObject
   * @see DestroyPlayerObject
   */
  static callNative(nativeName: 'DestroyObject', paramTypes: 'i', objectid: number): number;
  /**
   * Calls the AMX native MoveObject 
   *
   * @name samp.callNative
   * @param {string} [nativeName=MoveObject] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} objectid - The ID of the object to move
   * @param {number} X - The X coordinate to move the object to
   * @param {number} Y - The Y coordinate to move the object to
   * @param {number} Z - The Z coordinate to move the object to
   * @param {number} Speed - The speed at which to move the object (units per second)
   * @param {number} RotX - The FINAL X rotation (optional&#x3D;-1000.0)
   * @param {number} RotY - The FINAL Y rotation (optional&#x3D;-1000.0)
   * @param {number} RotZ - The FINAL Z rotation (optional&#x3D;-1000.0)
   * @summary Move an object to a new position with a set speed. Players/vehicles will &#x27;surf&#x27; the object as it moves.
   * @see OnObjectMoved
   * @see IsObjectMoving
   * @see StopObject
   * @see MovePlayerObject
   * @see SetObjectPos
   * @see SetObjectRot
   * @see CreateObject
   * @remarks This function can be used to make objects rotate smoothly. In order to achieve this however, the object must also be moved. The specified rotation is the rotation the object will have after the movement. Hence the object will not rotate when no movement is applied. For a script example take a look at the ferriswheel.pwn filterscript made by Kye included in the server package (SA-MP 0.3d and above). 
   * @remarks To fully understand the above note, you can (but not limited to) increase the z position by (+0.001) and then (-0.001) after moving it again, as not changing the X, Y or Z will not rotate the object. 
   * @returns The time it will take for the object to move in milliseconds.
   */
  static callNative(nativeName: 'MoveObject', paramTypes: 'ifffffff', objectid: number, X: number, Y: number, Z: number, Speed: number, RotX: number, RotY: number, RotZ: number): number;
  /**
   * Calls the AMX native StopObject 
   *
   * @name samp.callNative
   * @param {string} [nativeName=StopObject] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} objectid - The ID of the object to stop moving
   * @summary Stop a moving object after MoveObject has been used.
   * @see MoveObject
   * @see IsObjectMoving
   * @see OnObjectMoved
   * @see StopPlayerObject
   */
  static callNative(nativeName: 'StopObject', paramTypes: 'i', objectid: number): number;
  /**
   * Calls the AMX native IsObjectMoving 
   *
   * @name samp.callNative
   * @param {string} [nativeName=IsObjectMoving] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} objectid - The objectid you want to check if is moving
   * @summary Checks if the given objectid is moving.
   * @see MoveObject
   * @see StopObject
   * @see OnObjectMoved
   * @see IsPlayerObjectMoving
   * @remarks This function was added in SA-MP 0.3d and will not work in earlier versions!
   * @returns 1 if the object is moving, 0 if not.
   */
  static callNative(nativeName: 'IsObjectMoving', paramTypes: 'i', objectid: number): number;
  /**
   * Calls the AMX native EditObject 
   *
   * @name samp.callNative
   * @param {string} [nativeName=EditObject] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player that should edit the object
   * @param {number} objectid - The ID of the object to be edited by the player
   * @summary Allows a player to edit an object (position and rotation) using their mouse on a GUI (Graphical User Interface).
   * @see EditPlayerObject
   * @see EditAttachedObject
   * @see SelectObject
   * @see CancelEdit
   * @remarks This function was added in SA-MP 0.3e and will not work in earlier versions!
   * @remarks You can move the camera while editing by pressing and holding the spacebar (or W in vehicle) and moving your mouse.
   * @returns 
  1: The function executed successfully. Success is reported when a non-existent object is specified, but nothing will happen.
  0: The function failed to execute. The player is not connected.

   */
  static callNative(nativeName: 'EditObject', paramTypes: 'ii', playerid: number, objectid: number): number;
  /**
   * Calls the AMX native EditPlayerObject 
   *
   * @name samp.callNative
   * @param {string} [nativeName=EditPlayerObject] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player that should edit the object
   * @param {number} objectid - The object to be edited by the player
   * @summary Allows players to edit a player-object (position and rotation) with a GUI and their mouse.
   * @see EditObject
   * @see EditAttachedObject
   * @see SelectObject
   * @see CancelEdit
   * @remarks This function was added in SA-MP 0.3e and will not work in earlier versions!
   * @remarks You can move the camera while editing by pressing and holding the spacebar (or W in vehicle) and moving your mouse.
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. Player or object not valid.

   */
  static callNative(nativeName: 'EditPlayerObject', paramTypes: 'ii', playerid: number, objectid: number): number;
  /**
   * Calls the AMX native SelectObject 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SelectObject] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player that should be able to select the object
   * @summary Display the cursor and allow the player to select an object. OnPlayerSelectObject is called when the player selects an object.
   * @see EditObject
   * @see EditPlayerObject
   * @see EditAttachedObject
   * @see CancelEdit
   * @see OnPlayerSelectObject
   * @remarks This function was added in SA-MP 0.3e and will not work in earlier versions!
   */
  static callNative(nativeName: 'SelectObject', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native CancelEdit 
   *
   * @name samp.callNative
   * @param {string} [nativeName=CancelEdit] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to cancel edition for
   * @summary Cancel object edition mode for a player.
   * @see SelectObject
   * @see EditObject
   * @see EditPlayerObject
   * @see EditAttachedObject
   * @remarks This function was added in SA-MP 0.3e and will not work in earlier versions!
   */
  static callNative(nativeName: 'CancelEdit', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native CreatePlayerObject 
   *
   * @name samp.callNative
   * @param {string} [nativeName=CreatePlayerObject] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to create the object for
   * @param {number} modelid - The model to create
   * @param {number} X - The X coordinate to create the object at
   * @param {number} Y - The Y coordinate to create the object at
   * @param {number} Z - The Z coordinate to create the object at
   * @param {number} rX - The X rotation of the object
   * @param {number} rY - The Y rotation of the object
   * @param {number} rZ - The Z rotation of the object
   * @param {number} DrawDistance - The distance from which objects will appear to players. 0.0 will cause an object to render at its default distance. Leaving this parameter out will cause objects to be rendered at their default distance. The maximum usable distance is 300 in versions prior to 0.3x, in which drawdistance can be unlimited (optional&#x3D;0.0)
   * @summary Creates an object which will be visible to only one player.
   * @see CreateObject
   * @see IsValidPlayerObject
   * @see DestroyPlayerObject
   * @see MovePlayerObject
   * @see StopPlayerObject
   * @see SetPlayerObjectPos
   * @see SetPlayerObjectRot
   * @see GetPlayerObjectPos
   * @see GetPlayerObjectRot
   * @see AttachPlayerObjectToPlayer
   * @see AttachObjectToPlayer
   * @remarks The &#x27;DrawDistance&#x27; parameter was added in 0.3b. It must be left out in scripts for older versions of SA:MP.
   * @returns The ID of the object that was created, or INVALID_OBJECT_ID if the object limit (MAX_OBJECTS) was reached.
   */
  static callNative(nativeName: 'CreatePlayerObject', paramTypes: 'iifffffff', playerid: number, modelid: number, X: number, Y: number, Z: number, rX: number, rY: number, rZ: number, DrawDistance: number): number;
  /**
   * Calls the AMX native AttachPlayerObjectToVehicle 
   *
   * @name samp.callNative
   * @param {string} [nativeName=AttachPlayerObjectToVehicle] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player the object was created for
   * @param {number} objectid - The ID of the object to attach to the vehicle
   * @param {number} vehicleid - The ID of the vehicle to attach the object to
   * @param {number} fOffsetX - The X position offset for attachment
   * @param {number} fOffsetY - The Y position offset for attachment
   * @param {number} fOffsetZ - The Z position offset for attachment
   * @param {number} fRotX - The X rotation offset for attachment
   * @param {number} fRotY - The Y rotation offset for attachment
   * @param {number} RotZ - The Z rotation offset for attachment
   * @summary Attach a player object to a vehicle.
   * @see CreatePlayerObject
   * @see AttachPlayerObjectToPlayer
   * @see AttachObjectToVehicle
   * @remarks This function was added in SA-MP 0.3e and will not work in earlier versions!
   * @remarks You need to create the object before attempting to attach it to a vehicle.
   */
  static callNative(nativeName: 'AttachPlayerObjectToVehicle', paramTypes: 'iiiffffff', playerid: number, objectid: number, vehicleid: number, fOffsetX: number, fOffsetY: number, fOffsetZ: number, fRotX: number, fRotY: number, RotZ: number): number;
  /**
   * Calls the AMX native SetPlayerObjectPos 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetPlayerObjectPos] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player whose player-object to set the position of
   * @param {number} objectid - The ID of the player-object to set the position of. Returned by CreatePlayerObject
   * @param {number} X - The X coordinate to put the object at
   * @param {number} Y - The Y coordinate to put the object at
   * @param {number} Z - The Z coordinate to put the object at
   * @summary Sets the position of a player-object to the specified coordinates.
   * @see GetPlayerObjectPos
   * @see SetPlayerObjectRot
   * @see SetObjectPos
   * @see CreatePlayerObject
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. Player and/or object do not exist.

   */
  static callNative(nativeName: 'SetPlayerObjectPos', paramTypes: 'iifff', playerid: number, objectid: number, X: number, Y: number, Z: number): number;
  /**
   * Calls the AMX native GetPlayerObjectPos 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPlayerObjectPos] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player whose player object to get the position of
   * @param {number} objectid - The object&#x27;s id of which you want the current location
   * @summary Get the position of a player object (CreatePlayerObject).
   * @see 
   * @see SetPlayerObjectPos
   * @see GetPlayerObjectRot
   * @see GetObjectPos
   * @see CreatePlayerObject
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. The player and/or the object don&#x27;t exist.
  The object&#x27;s position is stored in the specified variables.

   */
  static callNative(nativeName: 'GetPlayerObjectPos', paramTypes: 'iiFFF', playerid: number, objectid: number): Array<any>;
  /**
   * Calls the AMX native SetPlayerObjectRot 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetPlayerObjectRot] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player whose player-object to rotate
   * @param {number} objectid - The ID of the player-object to rotate
   * @param {number} RotX - The X rotation to set
   * @param {number} RotY - The Y rotation to set
   * @param {number} RotZ - The Z rotation to set
   * @summary Set the rotation of an object on the X, Y and Z axis.
   * @see GetPlayerObjectRot
   * @see SetPlayerObjectPos
   * @see SetObjectRot
   * @see CreatePlayerObject
   * @remarks To smoothly rotate an object, see MovePlayerObject.
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute.

   */
  static callNative(nativeName: 'SetPlayerObjectRot', paramTypes: 'iifff', playerid: number, objectid: number, RotX: number, RotY: number, RotZ: number): number;
  /**
   * Calls the AMX native GetPlayerObjectRot 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPlayerObjectRot] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The player you associated this object to
   * @param {number} objectid - The objectid of the object you want to get the rotation from
   * @summary Use this function to get the object&#x27;s current rotation. The rotation is saved by reference in three RotX/RotY/RotZ variables.
   * @see SetPlayerObjectRot
   * @see GetPlayerObjectPos
   * @see GetObjectRot
   * @see CreatePlayerObject
   * @returns The object&#x27;s rotation is stored in the specified variables.
   */
  static callNative(nativeName: 'GetPlayerObjectRot', paramTypes: 'iiFFF', playerid: number, objectid: number): Array<any>;
  /**
   * Calls the AMX native GetPlayerObjectModel 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPlayerObjectModel] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player whose player-object to get the model of
   * @param {number} objectid - The ID of the player-object of which to retrieve the model ID
   * @summary Retrieve the model ID of a player-object.
   * @see GetObjectModel
   * @see CreatePlayerObject
   * @remarks This function was added in SA-MP 0.3.7 and will not work in earlier versions!
   * @returns The model ID of the player object. If the player or object don&#x27;t exist, it will return -1 or 0 if the player or object does not exist.
   */
  static callNative(nativeName: 'GetPlayerObjectModel', paramTypes: 'ii', playerid: number, objectid: number): number;
  /**
   * Calls the AMX native SetPlayerObjectNoCameraCol 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetPlayerObjectNoCameraCol] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The playerID the object belongs to
   * @param {number} objectid - The ID of the object you want to toggle
   * @summary Toggles a player object camera collision.
   * @see SetObjectNoCameraCol
   * @see SetObjectsDefaultCameraCol
   * @remarks This function was added in SA-MP 0.3.7 and will not work in earlier versions!
   * @remarks This only works outside the map boundaries (past -3000/3000 units on the x and/or y axis).
   * @returns 1 regardless of if the object exists or not.
   */
  static callNative(nativeName: 'SetPlayerObjectNoCameraCol', paramTypes: 'ii', playerid: number, objectid: number): number;
  /**
   * Calls the AMX native IsValidPlayerObject 
   *
   * @name samp.callNative
   * @param {string} [nativeName=IsValidPlayerObject] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player whose player-object to validate
   * @param {number} objectid - The ID of the object to validate
   * @summary Checks if the given object ID is valid for the given player.
   * @see IsValidObject
   * @see CreatePlayerObject
   * @see DestroyPlayerObject
   * @returns 1 if the object exists, 0 if not.
   */
  static callNative(nativeName: 'IsValidPlayerObject', paramTypes: 'ii', playerid: number, objectid: number): number;
  /**
   * Calls the AMX native DestroyPlayerObject 
   *
   * @name samp.callNative
   * @param {string} [nativeName=DestroyPlayerObject] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player whose player-object to destroy
   * @param {number} objectid - The ID of the player-object to destroy. Returned by CreatePlayerObject
   * @summary Destroy a player-object created using CreatePlayerObject.
   * @see CreatePlayerObject
   * @see IsValidPlayerObject
   * @see DestroyObject
   */
  static callNative(nativeName: 'DestroyPlayerObject', paramTypes: 'ii', playerid: number, objectid: number): number;
  /**
   * Calls the AMX native MovePlayerObject 
   *
   * @name samp.callNative
   * @param {string} [nativeName=MovePlayerObject] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player whose player-object to move
   * @param {number} objectid - The ID of the object to move
   * @param {number} X - The X coordinate to move the object to
   * @param {number} Y - The Y coordinate to move the object to
   * @param {number} Z - The Z coordinate to move the object to
   * @param {number} Speed - The speed at which to move the object
   * @param {number} RotX - The final X rotation (optional&#x3D;-1000.0)
   * @param {number} RotY - The final Y rotation (optional&#x3D;-1000.0)
   * @param {number} RotZ - The final Z rotation (optional&#x3D;-1000.0)
   * @summary Move a player object with a set speed. Also supports rotation. Players/vehicles will surf moving objects.
   * @see OnPlayerObjectMoved
   * @see IsPlayerObjectMoving
   * @see StopPlayerObject
   * @see MoveObject
   * @see SetPlayerObjectPos
   * @see SetPlayerObjectRot
   * @see CreatePlayerObject
   * @remarks 0.3d R2 and older versions do not have the rotational parameters.
   * @returns The time it will take for the object to move in milliseconds.
   */
  static callNative(nativeName: 'MovePlayerObject', paramTypes: 'iifffffff', playerid: number, objectid: number, X: number, Y: number, Z: number, Speed: number, RotX: number, RotY: number, RotZ: number): number;
  /**
   * Calls the AMX native StopPlayerObject 
   *
   * @name samp.callNative
   * @param {string} [nativeName=StopPlayerObject] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player whose player-object to stop
   * @param {number} objectid - The ID of the player-object to stop
   * @summary Stop a moving player-object after MovePlayerObject has been used.
   * @see MovePlayerObject
   * @see IsPlayerObjectMoving
   * @see OnPlayerObjectMoved
   * @see StopObject
   */
  static callNative(nativeName: 'StopPlayerObject', paramTypes: 'ii', playerid: number, objectid: number): number;
  /**
   * Calls the AMX native IsPlayerObjectMoving 
   *
   * @name samp.callNative
   * @param {string} [nativeName=IsPlayerObjectMoving] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player whose player-object is checked
   * @param {number} objectid - The player objectid you want to check if is moving
   * @summary Checks if the given player objectid is moving.
   * @see MovePlayerObject
   * @see StopPlayerObject
   * @see OnPlayerObjectMoved
   * @see IsObjectMoving
   * @remarks This function was added in SA-MP 0.3d and will not work in earlier versions!
   * @returns 1 if the player object is moving, 0 if not.
   */
  static callNative(nativeName: 'IsPlayerObjectMoving', paramTypes: 'ii', playerid: number, objectid: number): number;
  /**
   * Calls the AMX native AttachPlayerObjectToPlayer 
   *
   * @name samp.callNative
   * @param {string} [nativeName=AttachPlayerObjectToPlayer] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} objectplayer - The id of the player which is linked with the object
   * @param {number} objectid - The objectid you want to attach to the player
   * @param {number} attachplayer - The id of the player you want to attach to the object
   * @param {number} OffsetX - The distance between the player and the object in the X direction
   * @param {number} OffsetY - The distance between the player and the object in the Y direction
   * @param {number} OffsetZ - The distance between the player and the object in the Z direction
   * @param {number} rX - The X rotation
   * @param {number} rY - The Y rotation
   * @param {number} rZ - The Z rotation
   * @summary The same as AttachObjectToPlayer but for objects which were created for player.
   * @see SetPlayerAttachedObject
   * @see AttachPlayerObjectToVehicle
   * @see AttachObjectToPlayer
   * @see CreatePlayerObject
   * @remarks This function was removed in SA-MP 0.3.
   */
  static callNative(nativeName: 'AttachPlayerObjectToPlayer', paramTypes: 'iiiffffff', objectplayer: number, objectid: number, attachplayer: number, OffsetX: number, OffsetY: number, OffsetZ: number, rX: number, rY: number, rZ: number): number;
  /**
   * Calls the AMX native SetObjectMaterial 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetObjectMaterial] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} objectid - The ID of the object to change the texture of
   * @param {number} materialindex - The material index on the object to change (0 to 15)
   * @param {number} modelid - The modelid on which the replacement texture is located. Use 0 for alpha. Use -1 to change the material color without altering the texture
   * @param {string} txdname - The name of the txd file which contains the replacement texture (use &quot;none&quot; if not required)
   * @param {string} texturename - The name of the texture to use as the replacement (use &quot;none&quot; if not required)
   * @param {number} materialcolor - The object color to set, as an integer or hex in ARGB color format. Using 0 keeps the existing material color (optional&#x3D;0)
   * @summary Replace the texture of an object with the texture from another model in the game.
   * @see SetPlayerObjectMaterial
   * @see SetObjectMaterialText
   * @remarks This function was added in SA-MP 0.3e and will not work in earlier versions!
   * @remarks Vertex lightning of the object will disappear if material color is changed.
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute.

   */
  static callNative(nativeName: 'SetObjectMaterial', paramTypes: 'iiissi', objectid: number, materialindex: number, modelid: number, txdname: string, texturename: string, materialcolor: number): number;
  /**
   * Calls the AMX native SetPlayerObjectMaterial 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetPlayerObjectMaterial] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player the object is associated to
   * @param {number} objectid - The ID of the object to replace the texture of
   * @param {number} materialindex - The material index on the object to change (0 to 15)
   * @param {number} modelid - The modelid on which replacement texture is located. Use 0 for alpha. Use -1 to change the material color without altering the existing texture
   * @param {string} txdname - The name of the txd file which contains the replacement texture (use &quot;none&quot; if not required)
   * @param {string} texturename - The name of the texture to use as the replacement (use &quot;none&quot; if not required)
   * @param {number} materialcolor - The object color to set (ARGB). Using 0 keeps the existing material color (optional&#x3D;0)
   * @summary Replace the texture of a player-object with the texture from another model in the game.
   * @see SetObjectMaterial
   * @see SetPlayerObjectMaterialText
   * @remarks This function was added in SA-MP 0.3e and will not work in earlier versions!
   * @remarks Vertex lightning of the object will disappear if material color is changed.
   */
  static callNative(nativeName: 'SetPlayerObjectMaterial', paramTypes: 'iiiissi', playerid: number, objectid: number, materialindex: number, modelid: number, txdname: string, texturename: string, materialcolor: number): number;
  /**
   * Calls the AMX native SetObjectMaterialText 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetObjectMaterialText] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} objectid - The ID of the object to replace the texture of with text
   * @param {string} text - The text to show on the object. (MAX 2048 characters)
   * @param {number} materialindex - The object&#x27;s material index to replace with text (optional&#x3D;0)
   * @param {number} materialsize - The size of the material (optional&#x3D;OBJECT_MATERIAL_SIZE_256x128)
   * @param {string} fontface - The font to use (optional&#x3D;&quot;Arial&quot;)
   * @param {number} fontsize - The size of the text (MAX 255) (optional&#x3D;24)
   * @param {number} bold - Bold text. Set to 1 for bold, 0 for not (optional&#x3D;1)
   * @param {number} fontcolor - The color of the text, in ARGB format (optional&#x3D;-1)
   * @param {number} backcolor - The background color, in ARGB format (optional&#x3D;0)
   * @param {number} textalignment - The alignment of the text (optional&#x3D;OBJECT_MATERIAL_TEXT_ALIGN_LEFT)
   * @summary Replace the texture of an object with text.
   * @see SetPlayerObjectMaterialText
   * @see SetObjectMaterial
   * @remarks This function was added in SA-MP 0.3e and will not work in earlier versions!
   * @remarks Color embedding can be used for multiple colors in the text.
   * @remarks 
  Alignment:
  
    OBJECT_MATERIAL_TEXT_ALIGN_LEFT 0
    OBJECT_MATERIAL_TEXT_ALIGN_CENTER 1
    OBJECT_MATERIAL_TEXT_ALIGN_RIGHT 2
  

   * @remarks 
  Sizes:
  
    OBJECT_MATERIAL_SIZE_32x32 10
    OBJECT_MATERIAL_SIZE_64x32 20
    OBJECT_MATERIAL_SIZE_64x64 30
    OBJECT_MATERIAL_SIZE_128x32 40
    OBJECT_MATERIAL_SIZE_128x64 50
    OBJECT_MATERIAL_SIZE_128x128 60
    OBJECT_MATERIAL_SIZE_256x32 70
    OBJECT_MATERIAL_SIZE_256x64 80
    OBJECT_MATERIAL_SIZE_256x128 90
    OBJECT_MATERIAL_SIZE_256x256 100
    OBJECT_MATERIAL_SIZE_512x64 110
    OBJECT_MATERIAL_SIZE_512x128 120
    OBJECT_MATERIAL_SIZE_512x256 130
    OBJECT_MATERIAL_SIZE_512x512 140
  

   * @returns 
  1: The function executed successfully.
  0: The function failed to execute.

   */
  static callNative(nativeName: 'SetObjectMaterialText', paramTypes: 'isiisiiiii', objectid: number, text: string, materialindex: number, materialsize: number, fontface: string, fontsize: number, bold: number, fontcolor: number, backcolor: number, textalignment: number): number;
  /**
   * Calls the AMX native SetPlayerObjectMaterialText 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetPlayerObjectMaterialText] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player whose player object to set the text of
   * @param {number} objectid - The ID of the object on which to place the text
   * @param {string} text - The text to set
   * @param {number} materialindex - The material index to replace with text (optional&#x3D;0)
   * @param {number} materialsize - The size of the material (optional&#x3D;OBJECT_MATERIAL_SIZE_256x128)
   * @param {string} fontface - The font to use (optional&#x3D;&quot;Arial&quot;)
   * @param {number} fontsize - The size of the text (MAX 255) (optional&#x3D;24)
   * @param {number} bold - Bold text. Set to 1 for bold, 0 for not (optional&#x3D;1)
   * @param {number} fontcolor - The color of the text (optional&#x3D;-1)
   * @param {number} backcolor - The background color (optional&#x3D;0)
   * @param {number} textalignment - The alignment of the text (optional&#x3D;OBJECT_MATERIAL_TEXT_ALIGN_LEFT)
   * @summary Replace the texture of a player object with text.
   * @see SetObjectMaterialText
   * @see SetPlayerObjectMaterial
   * @remarks This function was added in SA-MP 0.3e and will not work in earlier versions!
   * @remarks Color embedding can be used for multiple colors in the text.
   * @remarks 
  Alignment:
  
    OBJECT_MATERIAL_TEXT_ALIGN_LEFT 0
    OBJECT_MATERIAL_TEXT_ALIGN_CENTER 1
    OBJECT_MATERIAL_TEXT_ALIGN_RIGHT 2
  

   * @remarks 
  Sizes:
  
    OBJECT_MATERIAL_SIZE_32x32 10
    OBJECT_MATERIAL_SIZE_64x32 20
    OBJECT_MATERIAL_SIZE_64x64 30
    OBJECT_MATERIAL_SIZE_128x32 40
    OBJECT_MATERIAL_SIZE_128x64 50
    OBJECT_MATERIAL_SIZE_128x128 60
    OBJECT_MATERIAL_SIZE_256x32 70
    OBJECT_MATERIAL_SIZE_256x64 80
    OBJECT_MATERIAL_SIZE_256x128 90
    OBJECT_MATERIAL_SIZE_256x256 100
    OBJECT_MATERIAL_SIZE_512x64 110
    OBJECT_MATERIAL_SIZE_512x128 120
    OBJECT_MATERIAL_SIZE_512x256 130
    OBJECT_MATERIAL_SIZE_512x512 140
  

   */
  static callNative(nativeName: 'SetPlayerObjectMaterialText', paramTypes: 'iisiisiiiii', playerid: number, objectid: number, text: string, materialindex: number, materialsize: number, fontface: string, fontsize: number, bold: number, fontcolor: number, backcolor: number, textalignment: number): number;
  /**
   * Calls the AMX native SetObjectsDefaultCameraCol 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetObjectsDefaultCameraCol] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} disable - 1 to disable camera collisions for newly created objects and 0 to enable them (enabled by default)
   * @summary Allows camera collisions with newly created objects to be disabled by default.
   * @see SetObjectNoCameraCol
   * @see SetPlayerObjectNoCameraCol
   * @remarks This function was added in SA-MP 0.3.7 and will not work in earlier versions!
   * @remarks This function only affects the camera collision of objects created AFTER its use - it does not toggle existing objects&#x27; camera collisions.
   * @remarks This only works outside the map boundaries (past -3000/3000 units on the x and/or y axis).
   */
  static callNative(nativeName: 'SetObjectsDefaultCameraCol', paramTypes: 'i', disable: number): number;
  /**
   * Calls the AMX native SetSpawnInfo 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetSpawnInfo] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The PlayerID of who you want to set the spawn information
   * @param {number} team - The Team-ID of the chosen player
   * @param {number} skin - The skin which the player will spawn with
   * @param {number} x - The X-coordinate of the player&#x27;s spawn position
   * @param {number} y - The Y-coordinate of the player&#x27;s spawn position
   * @param {number} z - The Z-coordinate of the player&#x27;s spawn position
   * @param {number} rotation - The direction in which the player needs to be facing after spawning
   * @param {number} weapon1 - The first spawn-weapon for the player
   * @param {number} weapon1_ammo - The amount of ammunition for the primary spawnweapon
   * @param {number} weapon2 - The second spawn-weapon for the player
   * @param {number} weapon2_ammo - The amount of ammunition for the second spawnweapon
   * @param {number} weapon3 - The third spawn-weapon for the player
   * @param {number} weapon3_ammo - The amount of ammunition for the third spawnweapon
   * @summary This function can be used to change the spawn information of a specific player. It allows you to automatically set someone&#x27;s spawn weapons, their team, skin and spawn position, normally used in case of minigames or automatic-spawn systems. This function is more crash-safe then using SetPlayerSkin in OnPlayerSpawn and/or OnPlayerRequestClass, even though this has been fixed in 0.2.
   * @see SetPlayerSkin
   * @see SetPlayerTeam
   * @see SpawnPlayer
   */
  static callNative(nativeName: 'SetSpawnInfo', paramTypes: 'iiiffffiiiiii', playerid: number, team: number, skin: number, x: number, y: number, z: number, rotation: number, weapon1: number, weapon1_ammo: number, weapon2: number, weapon2_ammo: number, weapon3: number, weapon3_ammo: number): number;
  /**
   * Calls the AMX native SpawnPlayer 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SpawnPlayer] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to spawn
   * @summary (Re)Spawns a player.
   * @see SetSpawnInfo
   * @see AddPlayerClass
   * @see OnPlayerSpawn
   * @remarks Kills the player if they are in a vehicle and then they spawn with a bottle in their hand.
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. This means the player is not connected.

   */
  static callNative(nativeName: 'SpawnPlayer', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native SetPlayerPos 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetPlayerPos] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to set the position of
   * @param {number} x - The X coordinate to position the player at
   * @param {number} y - The Y coordinate to position the player at
   * @param {number} z - The Z coordinate to position the player at
   * @summary Set a player&#x27;s position.
   * @see SetPlayerPosFindZ
   * @see SetPlayerFacingAngle
   * @see GetPlayerPos
   * @see SetVehiclePos
   * @see GetVehiclePos
   * @remarks Using this function on a player in a vehicle will instantly remove them from the vehicle. Useful for quickly ejecting players.
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. This means the player specified does not exist.

   */
  static callNative(nativeName: 'SetPlayerPos', paramTypes: 'ifff', playerid: number, x: number, y: number, z: number): number;
  /**
   * Calls the AMX native SetPlayerPosFindZ 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetPlayerPosFindZ] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to set the position of
   * @param {number} x - The X coordinate to position the player at
   * @param {number} y - The X coordinate to position the player at
   * @param {number} z - The Z coordinate to position the player at
   * @summary This sets the players position then adjusts the players z-coordinate to the nearest solid ground under the position.
   * @see SetPlayerPos
   * @see OnPlayerClickMap
   * @remarks This function does not work if the new coordinates are far away from where the player currently is. The Z height will be 0, which will likely put them underground. It is highly recommended that the MapAndreas plugin be used instead.
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. This means the player specified does not exist.

   */
  static callNative(nativeName: 'SetPlayerPosFindZ', paramTypes: 'ifff', playerid: number, x: number, y: number, z: number): number;
  /**
   * Calls the AMX native GetPlayerPos 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPlayerPos] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to get the position of
   * @summary Get the position of a player, represented by X, Y and Z coordinates.
   * @see SetPlayerPos
   * @see GetVehiclePos
   * @see IsPlayerInRangeOfPoint
   * @see GetPlayerDistanceFromPoint
   * @remarks This function is known to return unreliable values when used in OnPlayerDisconnect and OnPlayerRequestClass. This is because the player is not spawned.
   * @returns true on success, false on failure (i.e. player not connected).
   */
  static callNative(nativeName: 'GetPlayerPos', paramTypes: 'iFFF', playerid: number): Array<any>;
  /**
   * Calls the AMX native SetPlayerFacingAngle 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetPlayerFacingAngle] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to set the facing angle of
   * @param {number} ang - The angle the player should face
   * @summary Set a player&#x27;s facing angle (Z rotation).
   * @see GetPlayerFacingAngle
   * @see SetPlayerPos
   * @remarks Angles are reversed in GTA:SA; 90 degrees would be East in the real world, but in GTA:SA 90 degrees is in fact West. North and South are still 0/360 and 180. To convert this, simply do 360 - angle.
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. The player specified does not exist.

   */
  static callNative(nativeName: 'SetPlayerFacingAngle', paramTypes: 'if', playerid: number, ang: number): number;
  /**
   * Calls the AMX native GetPlayerFacingAngle 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPlayerFacingAngle] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The player you want to get the angle of
   * @summary Gets the angle a player is facing.
   * @see GetVehicleZAngle
   * @see SetPlayerFacingAngle
   * @remarks Angles are reversed in GTA:SA; 90 degrees would be East in the real world, but in GTA:SA 90 degrees is in fact West. North and South are still 0/360 and 180. To convert this, simply do 360 - angle.
   * @remarks Angles returned when inside a vehicle is rarely correct. To get the correct facing angle while inside a vehicle, use GetVehicleZAngle.
   */
  static callNative(nativeName: 'GetPlayerFacingAngle', paramTypes: 'iF', playerid: number): number;
  /**
   * Calls the AMX native IsPlayerInRangeOfPoint 
   *
   * @name samp.callNative
   * @param {string} [nativeName=IsPlayerInRangeOfPoint] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player
   * @param {number} range - The furthest distance the player can be from the point to be in range
   * @param {number} x - The X coordinate of the point to check the range to
   * @param {number} y - The Y coordinate of the point to check the range to
   * @param {number} z - The Z coordinate of the point to check the range to
   * @summary Checks if a player is in range of a point. This native function is faster than the PAWN implementation using distance formula.
   * @see GetPlayerDistanceFromPoint
   * @see GetVehicleDistanceFromPoint
   * @see GetPlayerPos
   * @remarks This function was added in SA-MP 0.3a and will not work in earlier versions!
   * @returns 1 if the player is in range, 0 if not.
   */
  static callNative(nativeName: 'IsPlayerInRangeOfPoint', paramTypes: 'iffff', playerid: number, range: number, x: number, y: number, z: number): number;
  /**
   * Calls the AMX native GetPlayerDistanceFromPoint that returns a value with a Float tag
   *
   * @name samp.callNativeFloat
   * @param {string} [nativeName=GetPlayerDistanceFromPoint] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to calculate the distance from
   * @param {number} X - The X map coordinate
   * @param {number} Y - The Y map coordinate
   * @param {number} Z - The Z map coordinate
   * @summary Calculate the distance between a player and a map coordinate.
   * @see IsPlayerInRangeOfPoint
   * @see GetVehicleDistanceFromPoint
   * @see GetPlayerPos
   * @remarks This function was added in SA-MP 0.3c R3 and will not work in earlier versions!
   * @returns The distance between the player and the point as a float.
   */
  static callNativeFloat(nativeName: 'GetPlayerDistanceFromPoint', paramTypes: 'ifff', playerid: number, X: number, Y: number, Z: number): number;
  /**
   * Calls the AMX native IsPlayerStreamedIn 
   *
   * @name samp.callNative
   * @param {string} [nativeName=IsPlayerStreamedIn] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to check is streamed in
   * @param {number} forplayerid - The ID of the player to check if playerid is streamed in for
   * @summary Checks if a player is streamed in another player&#x27;s client.
   * @see IsActorStreamedIn
   * @see IsVehicleStreamedIn
   * @see OnPlayerStreamIn
   * @see OnPlayerStreamOut
   * @see OnVehicleStreamIn
   * @see OnVehicleStreamOut
   * @remarks This function was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks Players aren&#x27;t streamed in on their own client, so if playerid is the same as forplayerid it will return false!
   * @remarks Players stream out if they are more than 150 meters away (see server.cfg - stream_distance)
   * @returns 1 if the player is streamed in, 0 if not.
   */
  static callNative(nativeName: 'IsPlayerStreamedIn', paramTypes: 'ii', playerid: number, forplayerid: number): number;
  /**
   * Calls the AMX native SetPlayerInterior 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetPlayerInterior] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to set the interior of
   * @param {number} interiorid - The interior ID to set the player in
   * @summary Set a player&#x27;s interior. A list of currently known interiors and their positions can be found here.
   * @see GetPlayerInterior
   * @see LinkVehicleToInterior
   * @see OnPlayerInteriorChange
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. This means the player is not connected.

   */
  static callNative(nativeName: 'SetPlayerInterior', paramTypes: 'ii', playerid: number, interiorid: number): number;
  /**
   * Calls the AMX native GetPlayerInterior 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPlayerInterior] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The player to get the interior ID of
   * @summary Retrieves the player&#x27;s current interior. A list of currently known interiors with their positions can be found on this page.
   * @see SetPlayerInterior
   * @see GetPlayerVirtualWorld
   * @remarks Always returns 0 for NPCs.
   * @returns The interior ID the player is currently in.
   */
  static callNative(nativeName: 'GetPlayerInterior', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native SetPlayerHealth 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetPlayerHealth] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to set the health of
   * @param {number} health - The value to set the player&#x27;s health to. Max health that can be displayed in the HUD is 100, though higher values are valid
   * @summary Set the health of a player.
   * @see GetPlayerHealth
   * @see GetPlayerArmour
   * @see SetPlayerArmour
   * @remarks Health is obtained rounded to integers: set 50.15, but get 50.0
   * @remarks If a player&#x27;s health is set to 0 or a minus value, they will die instantly.
   * @remarks If a player&#x27;s health is below 10 or above 98303, their health bar will flash. 
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. This means the player specified does not exist.

   */
  static callNative(nativeName: 'SetPlayerHealth', paramTypes: 'if', playerid: number, health: number): number;
  /**
   * Calls the AMX native GetPlayerHealth 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPlayerHealth] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player
   * @summary The function GetPlayerHealth allows you to retrieve the health of a player. Useful for cheat detection, among other things.
   * @see SetPlayerHealth
   * @see GetVehicleHealth
   * @see GetPlayerArmour
   * @remarks 
  Even though the health can be set to near infinite values on the server side, the individual clients will only report values up to 255. Anything higher will wrap around; 256 becomes 0, 257 becomes 1, etc.
  Health is obtained rounded to integers: set 50.15, but get 50.0

   * @returns 
  1 - success.
  0 - failure (i.e. player not connected).

   */
  static callNative(nativeName: 'GetPlayerHealth', paramTypes: 'iF', playerid: number): number;
  /**
   * Calls the AMX native SetPlayerArmour 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetPlayerArmour] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to set the armour of
   * @param {number} armour - The amount of armour to set, as a percentage (float). Values larger than 100 are valid, but won&#x27;t be displayed in the HUD&#x27;s armour bar
   * @summary Set a player&#x27;s armor level.
   * @see GetPlayerArmour
   * @see SetPlayerHealth
   * @see GetPlayerHealth
   * @remarks Armour is obtained rounded to integers: set 50.15, but get 50.0
   * @remarks The function&#x27;s name is armour, not armor (Americanized). This is inconsistent with the rest of SA-MP, so remember that.
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. This means the player specified does not exist.

   */
  static callNative(nativeName: 'SetPlayerArmour', paramTypes: 'if', playerid: number, armour: number): number;
  /**
   * Calls the AMX native GetPlayerArmour 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPlayerArmour] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player that you want to get the armour of
   * @summary This function stores the armour of a player into a variable.
   * @see SetPlayerArmour
   * @see GetPlayerHealth
   * @see GetVehicleHealth
   * @remarks Even though the armour can be set to near infinite values on the server side, the individual clients will only report values up to 255. Anything higher will wrap around; 256 becomes 0, 257 becomes 1, etc. 
   * @remarks Armour is obtained rounded to integers: set 50.15, but get 50.0 
   * @remarks The function&#x27;s name is armour, not armor (Americanized). This is inconsistent with the rest of SA-MP, so remember that.
   * @returns 
  1 - success.
  0 - failure (i.e. player not connected).

   */
  static callNative(nativeName: 'GetPlayerArmour', paramTypes: 'iF', playerid: number): number;
  /**
   * Calls the AMX native SetPlayerAmmo 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetPlayerAmmo] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to set the weapon ammo of
   * @param {number} weaponslot - The ID of the weapon slot to set the ammo of.
   * @param {number} ammo - The amount of ammo to set
   * @summary Set the ammo of a player&#x27;s weapon.
   * @see GetPlayerAmmo
   * @see GivePlayerWeapon
   * @see SetPlayerArmedWeapon
   * @remarks Set the ammo to 0 to remove a weapon from a player&#x27;s inventory. Note that the weapon will still show up in GetPlayerWeaponData, albeit with 0 ammo.
   * @returns 
  1: The function executed successfully. Success is also returned when the weapon slot specified is invalid (not 0-12).
  0: The function failed to execute. The player isn&#x27;t connected.

   */
  static callNative(nativeName: 'SetPlayerAmmo', paramTypes: 'iii', playerid: number, weaponslot: number, ammo: number): number;
  /**
   * Calls the AMX native GetPlayerAmmo 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPlayerAmmo] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player whose ammo to get
   * @summary Gets the amount of ammo in a player&#x27;s current weapon.
   * @see SetPlayerAmmo
   * @see GetPlayerWeaponData
   * @remarks The ammo can hold 16-bit values, therefore values over 32767 will return erroneous values.
   * @returns The amount of ammo in the player&#x27;s current weapon.
   */
  static callNative(nativeName: 'GetPlayerAmmo', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native GetPlayerWeaponState 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPlayerWeaponState] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to obtain the weapon state of
   * @summary Check the state of a player&#x27;s weapon.
   * @see GivePlayerWeapon
   * @remarks This function was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks 
  Weapon states:
  
    WEAPONSTATE_UNKNOWN - unknown (Set when in a vehicle)
    WEAPONSTATE_NO_BULLETS - The weapon has no remaining ammo
    WEAPONSTATE_LAST_BULLET - the weapon has one remaining bullet
    WEAPONSTATE_MORE_BULLETS - the weapon has multiple bullets
    WEAPONSTATE_RELOADING - the player is reloading their weapon 
  

   * @returns The state of the player&#x27;s weapon. 0 if player specified does not exist.
   */
  static callNative(nativeName: 'GetPlayerWeaponState', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native GetPlayerTargetPlayer 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPlayerTargetPlayer] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to get the target of
   * @summary Check who a player is aiming at.
   * @see GetPlayerCameraFrontVector
   * @see OnPlayerGiveDamage
   * @see OnPlayerTakeDamage
   * @remarks This function was added in SA-MP 0.3d and will not work in earlier versions! 
   * @remarks Does not work for joypads/controllers, and after a certain distance. 
   * @remarks Does not work for the sniper rifle, as it doesn&#x27;t lock on to anything and as such can&#x27;t and won&#x27;t return a player. 
   * @returns The ID of the target player, or INVALID_PLAYER_ID if none.
   */
  static callNative(nativeName: 'GetPlayerTargetPlayer', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native GetPlayerTargetActor 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPlayerTargetActor] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to get the target of
   * @summary Gets id of an actor which is aimed by certain player.
   * @see GetPlayerCameraTargetActor
   * @see GetPlayerCameraFrontVector
   * @see OnPlayerGiveDamageActor
   * @remarks This function was added in SA-MP 0.3.7 and will not work in earlier versions!
   * @remarks Does not work for joypads/controllers, and after a certain distance. 
   * @remarks Does not work for the sniper rifle, as it doesn&#x27;t lock on to anything and as such can&#x27;t and won&#x27;t return a player. 
   * @returns The ID of the targeted actor, or INVALID_ACTOR_ID if none.
   */
  static callNative(nativeName: 'GetPlayerTargetActor', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native SetPlayerTeam 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetPlayerTeam] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player you want to set the team of
   * @param {number} teamid - The team to put the player in. Use NO_TEAM to remove the player from any team
   * @summary Set the team of a player.
   * @see GetPlayerTeam
   * @see SetTeamCount
   * @see EnableVehicleFriendlyFire
   * @remarks Players can not damage/kill players on the same team unless they use a knife to slit their throat. As of SA-MP 0.3x, players are also unable to damage vehicles driven by a player from the same team. This can be enabled with EnableVehicleFriendlyFire.
   * @remarks 255 (or NO_TEAM) is the default team to be able to shoot other players, not 0.
   */
  static callNative(nativeName: 'SetPlayerTeam', paramTypes: 'ii', playerid: number, teamid: number): number;
  /**
   * Calls the AMX native GetPlayerTeam 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPlayerTeam] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to get the team of
   * @summary Get the ID of the team the player is on.
   * @see SetPlayerTeam
   * @see SetTeamCount
   * @returns 
  0-254: The player&#x27;s team. (0 is a valid team).
  255: Defined as NO_TEAM. The player is not on any team.
  -1: The function failed to execute. Player is not connected.

   */
  static callNative(nativeName: 'GetPlayerTeam', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native SetPlayerScore 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetPlayerScore] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to set the score of
   * @param {number} score - The value to set the player&#x27;s score to
   * @summary Set a player&#x27;s score. Players&#x27; scores are shown in the scoreboard (shown by holding the TAB key).
   * @see GetPlayerScore
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. This means the player specified does not exist.

   */
  static callNative(nativeName: 'SetPlayerScore', paramTypes: 'ii', playerid: number, score: number): number;
  /**
   * Calls the AMX native GetPlayerScore 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPlayerScore] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The player to get the score of
   * @summary This function returns a player&#x27;s score as it was set using SetPlayerScore.
   * @see SetPlayerScore
   * @see GetPlayerPing
   * @returns The player&#x27;s score.
   */
  static callNative(nativeName: 'GetPlayerScore', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native GetPlayerDrunkLevel 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPlayerDrunkLevel] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The player you want to check the drunkenness level of
   * @summary 
  Checks the player&#x27;s level of drunkenness. If the level is less than 2000, the player is sober. The player&#x27;s level of drunkness goes down slowly automatically (1 level per frame) but will always reach 2000 at the end (in 0.3b it will stop at 0).
  The higher drunkenness levels affect the player&#x27;s camera, and the car driving handling. The level of drunkenness increases when the player drinks from a bottle (You can use SetPlayerSpecialAction to give them bottles).

   * @see SetPlayerDrunkLevel
   * @remarks This function was added in SA-MP 0.3a and will not work in earlier versions!
   * @returns An integer with the level of drunkenness of the player.
   */
  static callNative(nativeName: 'GetPlayerDrunkLevel', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native SetPlayerDrunkLevel 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetPlayerDrunkLevel] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to set the drunkenness of
   * @param {number} level - The level of drunkenness to set
   * @summary Sets the drunk level of a player which makes the player&#x27;s camera sway and vehicles hard to control.
   * @see GetPlayerDrunkLevel
   * @remarks 
  Players&#x27; drunk level will automatically decrease over time, based on their FPS (players with 50 FPS will lose 50 &#x27;levels&#x27; per second. This is useful for determining a player&#x27;s FPS!).
  In 0.3a the drunk level will decrement and stop at 2000. In 0.3b+ the drunk level decrements to 0)
  Levels over 2000 make the player drunk (camera swaying and vehicles difficult to control).
  Max drunk level is 50000.
  While the drunk level is above 5000, the player&#x27;s HUD (radar etc.) will be hidden.

   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. This means the player is not connected.

   */
  static callNative(nativeName: 'SetPlayerDrunkLevel', paramTypes: 'ii', playerid: number, level: number): number;
  /**
   * Calls the AMX native SetPlayerColor 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetPlayerColor] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player whose color to set
   * @param {number} color - The color to set. Supports alpha values (RGBA)
   * @summary Set the colour of a player&#x27;s nametag and marker (radar blip).
   * @see SetPlayerMarkerForPlayer
   * @see GetPlayerColor
   * @see ChangeVehicleColor
   * @remarks This function will change player&#x27;s color for everyone, even if player&#x27;s color was changed with SetPlayerMarkerForPlayer for any other player. 
   * @remarks If used under OnPlayerConnect, the affecting player will not see the color in the TAB menu. 
   */
  static callNative(nativeName: 'SetPlayerColor', paramTypes: 'ii', playerid: number, color: number): number;
  /**
   * Calls the AMX native GetPlayerColor 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPlayerColor] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to get the color of
   * @summary Gets the color of the player&#x27;s name and radar marker. Only works after SetPlayerColor.
   * @see SetPlayerColor
   * @see ChangeVehicleColor
   * @remarks GetPlayerColor will return 0 unless SetPlayerColor has been used first.
   * @returns The player&#x27;s color. 0 if no color set or player not connected.
   */
  static callNative(nativeName: 'GetPlayerColor', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native SetPlayerSkin 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetPlayerSkin] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to set the skin of
   * @param {number} skinid - The skin the player should use
   * @summary Set the skin of a player. A player&#x27;s skin is their character model.
   * @see GetPlayerSkin
   * @see SetSpawnInfo
   * @remarks If a player&#x27;s skin is set when they are crouching, in a vehicle, or performing certain animations, they will become frozen or otherwise glitched. This can be fixed by using TogglePlayerControllable. Players can be detected as being crouched through GetPlayerSpecialAction (SPECIAL_ACTION_DUCK).
   * @remarks Setting a player&#x27;s skin when he is dead may crash players around him.
   * @remarks Note that &#x27;success&#x27; is reported even when skin ID is invalid (not 0-311, or 74), but the skin will be set to ID 0 (CJ).
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. This means the player specified does not exist.

   */
  static callNative(nativeName: 'SetPlayerSkin', paramTypes: 'ii', playerid: number, skinid: number): number;
  /**
   * Calls the AMX native GetPlayerSkin 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPlayerSkin] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The player you want to get the skin from
   * @summary Returns the class of the players skin.
   * @see SetPlayerSkin
   * @remarks Returns the new skin after SetSpawnInfo is called but before the player actually respawns to get the new skin. 
   * @remarks Returns the old skin if the player was spawned through SpawnPlayer function. 
   * @returns The skin id (0 if invalid).
   */
  static callNative(nativeName: 'GetPlayerSkin', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native GivePlayerWeapon 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GivePlayerWeapon] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to give a weapon to
   * @param {number} weaponid - The ID of the weapon to give to the player
   * @param {number} ammo - The amount of ammo to give to the player
   * @summary Give a player a weapon with a specified amount of ammo.
   * @see SetPlayerArmedWeapon
   * @see GetPlayerWeapon
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. This means the player is not connected.

   */
  static callNative(nativeName: 'GivePlayerWeapon', paramTypes: 'iii', playerid: number, weaponid: number, ammo: number): number;
  /**
   * Calls the AMX native ResetPlayerWeapons 
   *
   * @name samp.callNative
   * @param {string} [nativeName=ResetPlayerWeapons] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player whose weapons to remove
   * @summary Removes all weapons from a player.
   * @see GivePlayerWeapon
   * @see GetPlayerWeapon
   * @remarks To remove individual weapons from a player, set their ammo to 0 using SetPlayerAmmo.
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. This means the player specified does not exist.

   */
  static callNative(nativeName: 'ResetPlayerWeapons', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native SetPlayerArmedWeapon 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetPlayerArmedWeapon] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to arm with a weapon
   * @param {number} weaponid - The ID of the weapon that the player should be armed with
   * @summary Sets which weapon (that a player already has) the player is holding.
   * @see GivePlayerWeapon
   * @see GetPlayerWeapon
   * @remarks This function was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks This function arms a player with a weapon they already have; it does not give them a new weapon. See GivePlayerWeapon.
   * @returns 
  1: The function executed successfully. Success is returned even when the function fails to execute (the player doesn&#x27;t have the weapon specified, or it is an invalid weapon).
  0: The function failed to execute. The player is not connected.

   */
  static callNative(nativeName: 'SetPlayerArmedWeapon', paramTypes: 'ii', playerid: number, weaponid: number): number;
  /**
   * Calls the AMX native GetPlayerWeaponData 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPlayerWeaponData] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player whose weapon data to retrieve
   * @param {number} slot - The weapon slot to get data for (0-12)
   * @summary Get the weapon and ammo in a specific player&#x27;s weapon slot (e.g. the weapon in the &#x27;SMG&#x27; slot).
   * @see GetPlayerWeapon
   * @see GivePlayerWeapon
   * @remarks Old weapons with no ammo left are still returned.
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. The player isn&#x27;t connected and/or the weapon slot specified is invalid (valid is 0-12).

   */
  static callNative(nativeName: 'GetPlayerWeaponData', paramTypes: 'iiII', playerid: number, slot: number): Array<any>;
  /**
   * Calls the AMX native GivePlayerMoney 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GivePlayerMoney] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to give money to or take money from
   * @param {number} money - The amount of money to give the player. Use a minus value to take money
   * @summary Give money to or take money from a player.
   * @see ResetPlayerMoney
   * @see GetPlayerMoney
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. This means the player is not connected.

   */
  static callNative(nativeName: 'GivePlayerMoney', paramTypes: 'ii', playerid: number, money: number): number;
  /**
   * Calls the AMX native ResetPlayerMoney 
   *
   * @name samp.callNative
   * @param {string} [nativeName=ResetPlayerMoney] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to reset the money of
   * @summary Reset a player&#x27;s money to $0.
   * @see GetPlayerMoney
   * @see GivePlayerMoney
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. This means the player is not connected.

   */
  static callNative(nativeName: 'ResetPlayerMoney', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native SetPlayerName 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetPlayerName] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to set the name of
   * @param {string} name - The name to set. Must be 1-24 characters long and only contain valid characters (0-9, a-z, A-Z, [], (), $, @, ., _, &#x3D;)
   * @summary Sets the name of a player.
   * @see GetPlayerName
   * @remarks Changing the players&#x27; name to the same name but with different character cases (e.g. &quot;John&quot; to &quot;JOHN&quot;) will not work. 
   * @remarks If used in OnPlayerConnect, the new name will not be shown for the connecting player. 
   * @remarks Passing a null string as the new name will crash the server. 
   * @remarks Player names can be up to 24 characters when using this function, but when joining the server from the SA-MP server browser, players&#x27; names must be no more than 20 and less than 3 characters (the server will deny entry). This allows for 4 characters extra when using SetPlayerName. 
   * @returns 
  1 The name was changed successfully.
  0 The player already has that name.
  -1 The name can not be changed (it&#x27;s already in use, too long or has invalid characters).

   */
  static callNative(nativeName: 'SetPlayerName', paramTypes: 'is', playerid: number, name: string): number;
  /**
   * Calls the AMX native GetPlayerMoney 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPlayerMoney] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to get the money of
   * @summary Retrieves the amount of money a player has.
   * @see GivePlayerMoney
   * @see ResetPlayerMoney
   * @returns The amount of money the player has.
   */
  static callNative(nativeName: 'GetPlayerMoney', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native GetPlayerState 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPlayerState] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to get the current state of
   * @summary Get a player&#x27;s current state.
   * @see GetPlayerSpecialAction
   * @see SetPlayerSpecialAction
   * @see OnPlayerStateChange
   * @remarks 
  States:
  
    PLAYER_STATE_NONE - empty (while initializing)
    PLAYER_STATE_ONFOOT - player is on foot
    PLAYER_STATE_DRIVER - player is the driver of a vehicle
    PLAYER_STATE_PASSENGER - player is passenger of a vehicle
    PLAYER_STATE_WASTED - player is dead or on class selection
    PLAYER_STATE_SPAWNED - player is spawned
    PLAYER_STATE_SPECTATING - player is spectating
    PLAYER_STATE_EXIT_VEHICLE - player exits a vehicle
    PLAYER_STATE_ENTER_VEHICLE_DRIVER - player enters a vehicle as driver
    PLAYER_STATE_ENTER_VEHICLE_PASSENGER - player enters a vehicle as passenger 
  

   * @returns The player&#x27;s current state as an integer.
   */
  static callNative(nativeName: 'GetPlayerState', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native GetPlayerIp 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPlayerIp] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to get the IP address of
   * @param {number} len - The maximum length of the IP address (recommended 16)
   * @summary Get the specified player&#x27;s IP address and store it in a string.
   * @see NetStats_GetIpPort
   * @see GetPlayerName
   * @see GetPlayerPing
   * @see GetPlayerVersion
   * @see OnIncomingConnection
   * @see OnPlayerConnect
   * @see OnPlayerDisconnect
   * @remarks This function does not work when used in OnPlayerDisconnect because the player is already disconnected. It will return an invalid IP (255.255.255.255). Save players&#x27; IPs under OnPlayerConnect if they need to be used under OnPlayerDisconnect. 
   * @returns 1 on success and 0 on failure.
   */
  static callNative(nativeName: 'GetPlayerIp', paramTypes: 'iSi', playerid: number, len: number): string;
  /**
   * Calls the AMX native GetPlayerPing 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPlayerPing] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to get the ping of
   * @summary Get the ping of a player. The ping measures the amount of time it takes for the server to &#x27;ping&#x27; the client and for the client to send the message back.
   * @see GetPlayerIp
   * @see GetPlayerName
   * @see GetPlayerVersion
   * @remarks Player&#x27;s ping may be 65535 for a while after a player connects
   * @returns The current ping of the player (expressed in milliseconds).
   */
  static callNative(nativeName: 'GetPlayerPing', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native GetPlayerWeapon 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPlayerWeapon] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to get the currently held weapon of
   * @summary Returns the ID of the weapon a player is currently holding.
   * @see GetPlayerWeaponData
   * @see GivePlayerWeapon
   * @see ResetPlayerWeapons
   * @remarks Prior to version 0.3z R1-2, when the player state is PLAYER_STATE_PASSENGER this function returns the weapon held by the player before they entered the vehicle. If a cheat is used to spawn a weapon inside a vehicle, this function will not report it.
   * @returns The ID of the player&#x27;s current weapon. Returns -1 if the player specified does not exist.
   */
  static callNative(nativeName: 'GetPlayerWeapon', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native GetPlayerKeys 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPlayerKeys] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to get the keys of
   * @summary Check which keys a player is pressing.
   * @see OnPlayerKeyStateChange
   * @remarks Only the FUNCTION of keys can be detected; not actual keys. For example, it is not possible to detect if a player presses SPACE, but you can detect if they press SPRINT (which can be mapped (assigned/binded) to ANY key (but is space by default)). 
   * @remarks As of update 0.3.7, the keys &quot;A&quot; and &quot;D&quot; are not recognized when in a vehicle. However, keys &quot;W&quot; and &quot;S&quot; can be detected with the &quot;keys&quot; parameter. 
   * @returns The keys are stored in the specified variables.
   */
  static callNative(nativeName: 'GetPlayerKeys', paramTypes: 'iIII', playerid: number): Array<any>;
  /**
   * Calls the AMX native GetPlayerName 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPlayerName] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to get the name of
   * @param {number} len - The length of the string that should be stored. Recommended to be MAX_PLAYER_NAME
   * @summary Get a player&#x27;s name.
   * @see SetPlayerName
   * @see GetPlayerIp
   * @see GetPlayerPing
   * @see GetPlayerScore
   * @see GetPlayerVersion
   * @remarks A player&#x27;s name can be up to 24 characters long (as of 0.3d R2) by using SetPlayerName. This is defined in a_samp.inc as MAX_PLAYER_NAME. However, the client can only join with a nickname between 3 and 20 characters, otherwise the connection will be rejected and the player has to quit to choose a valid name.
   * @returns The length of the player&#x27;s name. 0 if player specified doesn&#x27;t exist.
   */
  static callNative(nativeName: 'GetPlayerName', paramTypes: 'iSi', playerid: number, len: number): string;
  /**
   * Calls the AMX native SetPlayerTime 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetPlayerTime] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to set the game time of
   * @param {number} hour - Hour to set (0-23)
   * @param {number} minute - Minutes to set (0-59)
   * @summary Sets the game time for a player. If a player&#x27;s clock is enabled (TogglePlayerClock) the time displayed by it will update automatically.
   * @see SetWorldTime
   * @see GetPlayerTime
   * @see TogglePlayerClock
   * @remarks Using this function under OnPlayerConnect doesn&#x27;t work.
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. The player specified does not exist.

   */
  static callNative(nativeName: 'SetPlayerTime', paramTypes: 'iii', playerid: number, hour: number, minute: number): number;
  /**
   * Calls the AMX native GetPlayerTime 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPlayerTime] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to get the game time of
   * @summary Get the player&#x27;s current game time. Set by SetWorldTime or SetPlayerTime, or by the game automatically if TogglePlayerClock is used.
   * @see SetPlayerTime
   * @see SetWorldTime
   * @see TogglePlayerClock
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. The player specified does not exist.

   */
  static callNative(nativeName: 'GetPlayerTime', paramTypes: 'iII', playerid: number): Array<any>;
  /**
   * Calls the AMX native TogglePlayerClock 
   *
   * @name samp.callNative
   * @param {string} [nativeName=TogglePlayerClock] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - 
   * @param {number} toggle - 
   */
  static callNative(nativeName: 'TogglePlayerClock', paramTypes: 'ii', playerid: number, toggle: number): number;
  /**
   * Calls the AMX native SetPlayerWeather 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetPlayerWeather] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player whose weather to set
   * @param {number} weather - The weather to set
   * @summary Set a player&#x27;s weather.
   * @see SetWeather
   * @see SetGravity
   * @remarks If TogglePlayerClock is enabled, weather will slowly change over time, instead of changing instantly.
   */
  static callNative(nativeName: 'SetPlayerWeather', paramTypes: 'ii', playerid: number, weather: number): number;
  /**
   * Calls the AMX native ForceClassSelection 
   *
   * @name samp.callNative
   * @param {string} [nativeName=ForceClassSelection] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The player to send back to class selection
   * @summary Forces a player to go back to class selection.
   * @see AddPlayerClass
   * @see SetPlayerSkin
   * @see GetPlayerSkin
   * @see OnPlayerRequestClass
   * @remarks The player will not return to class selection until they re-spawn. This can be achieved with TogglePlayerSpectating, as seen in the below example.
   */
  static callNative(nativeName: 'ForceClassSelection', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native SetPlayerWantedLevel 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetPlayerWantedLevel] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to set the wanted level of
   * @param {number} level - The wanted level to set for the player (0-6)
   * @summary Set a player&#x27;s wanted level (6 brown stars under HUD).
   * @see GetPlayerWantedLevel
   * @see PlayCrimeReportForPlayer
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. The player specified does not exist.

   */
  static callNative(nativeName: 'SetPlayerWantedLevel', paramTypes: 'ii', playerid: number, level: number): number;
  /**
   * Calls the AMX native GetPlayerWantedLevel 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPlayerWantedLevel] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player that you want to get the wanted level of
   * @summary Gets the wanted level of a player.
   * @see SetPlayerWantedLevel
   * @see PlayCrimeReportForPlayer
   * @returns The player&#x27;s wanted level.
   */
  static callNative(nativeName: 'GetPlayerWantedLevel', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native SetPlayerFightingStyle 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetPlayerFightingStyle] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of player to set the fighting style of
   * @param {number} style - The fighting style that should be set
   * @summary Set a player&#x27;s special fighting style. To use in-game, aim and press the &#x27;secondary attack&#x27; key (ENTER by default).
   * @see GetPlayerFightingStyle
   * @remarks This function was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks This does not affect normal fist attacks - only special/secondary attacks (aim + press &#x27;secondary attack&#x27; key).
   * @remarks 
  Fighting styles:
  
    FIGHT_STYLE_NORMAL
    FIGHT_STYLE_BOXING
    FIGHT_STYLE_KUNGFU
    FIGHT_STYLE_KNEEHEAD
    FIGHT_STYLE_GRABKICK
    FIGHT_STYLE_ELBOW
  

   */
  static callNative(nativeName: 'SetPlayerFightingStyle', paramTypes: 'ii', playerid: number, style: number): number;
  /**
   * Calls the AMX native GetPlayerFightingStyle 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPlayerFightingStyle] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to get the fighting style of
   * @summary Get the fighting style the player currently using.
   * @see SetPlayerFightingStyle
   * @remarks This function was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks 
  Fighting styles:
  
    FIGHT_STYLE_NORMAL
    FIGHT_STYLE_BOXING
    FIGHT_STYLE_KUNGFU
    FIGHT_STYLE_KNEEHEAD
    FIGHT_STYLE_GRABKICK
    FIGHT_STYLE_ELBOW
  

   * @returns The ID of the fighting style of the player.
   */
  static callNative(nativeName: 'GetPlayerFightingStyle', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native SetPlayerVelocity 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetPlayerVelocity] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The player to apply the speed to
   * @param {number} X - The velocity (speed) on the X axis
   * @param {number} Y - The velocity (speed) on the Y axis
   * @param {number} Z - The velocity (speed) on the Z axis
   * @summary Set a player&#x27;s velocity on the X, Y and Z axes.
   * @see GetPlayerVelocity
   * @see SetVehicleVelocity
   * @see GetVehicleVelocity
   * @remarks This function was added in SA-MP 0.3a and will not work in earlier versions!
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. This means the player is not connected.

   */
  static callNative(nativeName: 'SetPlayerVelocity', paramTypes: 'ifff', playerid: number, X: number, Y: number, Z: number): number;
  /**
   * Calls the AMX native GetPlayerVelocity 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPlayerVelocity] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The player to get the speed from
   * @summary Get the velocity (speed) of a player on the X, Y and Z axes.
   * @see SetPlayerVelocity
   * @see SetVehicleVelocity
   * @see GetVehicleVelocity
   * @remarks This function was added in SA-MP 0.3a and will not work in earlier versions!
   */
  static callNative(nativeName: 'GetPlayerVelocity', paramTypes: 'iFFF', playerid: number): Array<any>;
  /**
   * Calls the AMX native PlayCrimeReportForPlayer 
   *
   * @name samp.callNative
   * @param {string} [nativeName=PlayCrimeReportForPlayer] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player that will hear the crime report
   * @param {number} suspectid - The ID of the suspect player whom will be described in the crime report
   * @param {number} crime - The crime ID, which will be reported as a 10-code (i.e. 10-16 if 16 was passed as the crime)
   * @summary This function plays a crime report for a player - just like in single-player when CJ commits a crime.
   * @see PlayerPlaySound
   * @remarks This function was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks 
  Crime list:
  
    3 10-71 Advise nature of fire (size, type, contents of building)
    4 10-47 Emergency road repairs needed
    5 10-81 Breatherlizer Report
    6 10-24 Assignment Completed
    7 10-21 Call () by phone
    8 10-21 Call () by phone
    9 10-21 Call () by phone
    10 10-17 Meet Complainant
    11 10-81 Breatherlizer Report
    12 10-91 Pick up prisoner/subject
    13 10-28 Vehicle registration information
    14 10-81 Breathalyzer
    15 10-28 Vehicle registration information
    16 10-91 Pick up prisoner/subject
    17 10-34 Riot
    18 10-37 (Investigate) suspicious vehicle
    19 10-81 Breathalyzer
    21 10-7 Out of service
    22 10-7 Out of service 
  

   */
  static callNative(nativeName: 'PlayCrimeReportForPlayer', paramTypes: 'iii', playerid: number, suspectid: number, crime: number): number;
  /**
   * Calls the AMX native PlayAudioStreamForPlayer 
   *
   * @name samp.callNative
   * @param {string} [nativeName=PlayAudioStreamForPlayer] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to play the audio for
   * @param {string} url - The url to play. Valid formats are mp3 and ogg/vorbis. A link to a .pls (playlist) file will play that playlist
   * @param {number} posX - The X position at which to play the audio. Has no effect unless usepos is set to 1 (optional&#x3D;0.0)
   * @param {number} posY - The Y position at which to play the audio. Has no effect unless usepos is set to 1 (optional&#x3D;0.0)
   * @param {number} posZ - The Z position at which to play the audio. Has no effect unless usepos is set to 1 (optional&#x3D;0.0)
   * @param {number} distance - The distance over which the audio will be heard. Has no effect unless usepos is set to 1 (optional&#x3D;50.0)
   * @param {number} usepos - Use the positions and distance specified. (optional&#x3D;0)
   * @summary Play an &#x27;audio stream&#x27; for a player. Normal audio files also work (e.g. MP3).
   * @see StopAudioStreamForPlayer
   * @see PlayerPlaySound
   * @remarks This function was added in SA-MP 0.3d and will not work in earlier versions!
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. The player specified does not exist.

   */
  static callNative(nativeName: 'PlayAudioStreamForPlayer', paramTypes: 'isffffi', playerid: number, url: string, posX: number, posY: number, posZ: number, distance: number, usepos: number): number;
  /**
   * Calls the AMX native StopAudioStreamForPlayer 
   *
   * @name samp.callNative
   * @param {string} [nativeName=StopAudioStreamForPlayer] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The player you want to stop the audio stream for
   * @summary Stops the current audio stream for a player.
   * @see PlayAudioStreamForPlayer
   * @see PlayerPlaySound
   * @remarks This function was added in SA-MP 0.3d and will not work in earlier versions!
   */
  static callNative(nativeName: 'StopAudioStreamForPlayer', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native SetPlayerShopName 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetPlayerShopName] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to load the interior script for
   * @param {string} shopname - The shop script to load. Leave blank (&quot;&quot;) to unload scripts
   * @summary Loads or unloads an interior script for a player (for example the ammunation menu).
   * @see DisableInteriorEnterExits
   * @see SetPlayerInterior
   * @remarks This function was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks This function does not support casino scripts.
   * @remarks 
  Shop names:
  
    &quot;FDPIZA&quot; Pizza Stack
    &quot;FDBURG&quot; Burger Shot
    &quot;FDCHICK&quot;Cluckin&#x27; Bell
    &quot;AMMUN1&quot; Ammunation 1
    &quot;AMMUN2&quot; Ammunation 2
    &quot;AMMUN3&quot; Ammunation 3
    &quot;AMMUN4&quot; Ammunation 4
    &quot;AMMUN5&quot; Ammunation 5
  

   */
  static callNative(nativeName: 'SetPlayerShopName', paramTypes: 'is', playerid: number, shopname: string): number;
  /**
   * Calls the AMX native SetPlayerSkillLevel 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetPlayerSkillLevel] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to set the weapon skill of
   * @param {number} skill - The weapon to set the skill of
   * @param {number} level - The skill level to set for that weapon, ranging from 0 to 999. A level out of range will max it out
   * @summary Set the skill level of a certain weapon type for a player.
   * @see SetPlayerArmedWeapon
   * @see GivePlayerWeapon
   * @remarks This function was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks 
  Weapon skills:
  
    WEAPONSKILL_PISTOL(0)
    WEAPONSKILL_PISTOL_SILENCED(1)
    WEAPONSKILL_DESERT_EAGLE(2)
    WEAPONSKILL_SHOTGUN(3)
    WEAPONSKILL_SAWNOFF_SHOTGUN(4)
    WEAPONSKILL_SPAS12_SHOTGUN(5)
    WEAPONSKILL_MICRO_UZI(6)
    WEAPONSKILL_MP5(7)
    WEAPONSKILL_AK47(8)
    WEAPONSKILL_M4(9)
    WEAPONSKILL_SNIPERRIFLE(10)
  

   */
  static callNative(nativeName: 'SetPlayerSkillLevel', paramTypes: 'iii', playerid: number, skill: number, level: number): number;
  /**
   * Calls the AMX native GetPlayerSurfingVehicleID 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPlayerSurfingVehicleID] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player you want to know the surfing vehicle ID of
   * @summary Get the ID of the vehicle that the player is surfing (stuck to the roof of).
   * @see GetPlayerVehicleID
   * @see GetPlayerVehicleSeat
   * @remarks This function was added in SA-MP 0.3a and will not work in earlier versions!
   * @returns The ID of the vehicle that the player is surfing. If they are not surfing a vehicle or the vehicle they are surfing has no driver, INVALID_VEHICLE_ID. If the player specified is not connected, INVALID_VEHICLE_ID also.
   */
  static callNative(nativeName: 'GetPlayerSurfingVehicleID', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native GetPlayerSurfingObjectID 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPlayerSurfingObjectID] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - 
   */
  static callNative(nativeName: 'GetPlayerSurfingObjectID', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native RemoveBuildingForPlayer 
   *
   * @name samp.callNative
   * @param {string} [nativeName=RemoveBuildingForPlayer] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to remove the objects for
   * @param {number} modelid - The model to remove
   * @param {number} fX - The X coordinate around which the objects will be removed
   * @param {number} fY - The Y coordinate around which the objects will be removed
   * @param {number} fZ - The Z coordinate around which the objects will be removed
   * @param {number} fRadius - The radius around the specified point to remove objects with the specified model
   * @summary Removes a standard San Andreas model for a single player within a specified range.
   * @see DestroyObject
   * @see DestroyPlayerObject
   * @remarks This function was added in SA-MP 0.3d and will not work in earlier versions!
   * @remarks There appears to be a limit of around 1000 lines/objects. There is no workaround. 
   * @remarks When removing the same object for a player, they will crash. Commonly, players crash when reconnecting to the server because the server removes buildings on OnPlayerConnect. 
   * @remarks In SA-MP 0.3.7 you can use -1 for the modelid to remove all objects within the specified radius.
   */
  static callNative(nativeName: 'RemoveBuildingForPlayer', paramTypes: 'iiffff', playerid: number, modelid: number, fX: number, fY: number, fZ: number, fRadius: number): number;
  /**
   * Calls the AMX native GetPlayerLastShotVectors 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPlayerLastShotVectors] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to get the last bullet shot information of
   * @summary Retrieves the start and end (hit) position of the last bullet a player fired.
   * @see GetPlayerWeaponData
   * @see GetPlayerWeapon
   * @see VectorSize
   * @see OnPlayerWeaponShot
   * @remarks This function was added in SA-MP 0.3z and will not work in earlier versions!
   * @remarks This function will only work when lag compensation is enabled. 
   * @remarks If the player hit nothing, the hit positions will be 0. This means you can&#x27;t currently calculate how far a bullet travels through open air. 
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. The player specified does not exist.

   */
  static callNative(nativeName: 'GetPlayerLastShotVectors', paramTypes: 'iFFFFFF', playerid: number): Array<any>;
  /**
   * Calls the AMX native SetPlayerAttachedObject 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetPlayerAttachedObject] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to attach the object to
   * @param {number} index - The index (slot) to assign the object to (0-9 since 0.3d, 0-4 in previous versions)
   * @param {number} modelid - The model to attach
   * @param {number} bone - The bone to attach the object to
   * @param {number} fOffsetX - X axis offset for the object position (optional&#x3D;0.0)
   * @param {number} fOffsetY - Y axis offset for the object position (optional&#x3D;0.0)
   * @param {number} fOffsetZ - Z axis offset for the object position (optional&#x3D;0.0)
   * @param {number} fRotX - X axis rotation of the object (optional&#x3D;0.0)
   * @param {number} fRotY - Y axis rotation of the object (optional&#x3D;0.0)
   * @param {number} fRotZ - Z axis rotation of the object (optional&#x3D;0.0)
   * @param {number} fScaleX - X axis scale of the object (optional&#x3D;1.0)
   * @param {number} fScaleY - Y axis scale of the object (optional&#x3D;1.0)
   * @param {number} fScaleZ - Z axis scale of the object (optional&#x3D;1.0)
   * @param {number} materialcolor1 - The first object color to set ARGB (optional&#x3D;0)
   * @param {number} materialcolor2 - The second object color to set ARGB (optional&#x3D;0)
   * @summary Attach an object to a specific bone on a player.
   * @see RemovePlayerAttachedObject
   * @see IsPlayerAttachedObjectSlotUsed
   * @see EditAttachedObject
   * @remarks This function was added in SA-MP 0.3c and will not work in earlier versions!
   * @remarks In version 0.3d and onwards, 10 objects can be attached to a single player (index 0-9). In earlier versions, the limit is 5 (index 0-4).
   * @remarks This function is separate from the CreateObject / CreatePlayerObject pools.
   * @remarks 
  Bone IDs:
  
    1 - spine
    2 - head
    3 - left upper arm
    4 - right upper arm
    5 - left hand
    6 - right hand
    7 - left thigh
    8 - right thigh
    9 - left foot
    10 - right foot
    11 - right calf
    12 - left calf
    13 - left forearm
    14 - right forearm
    15 - left clavicle (shoulder)
    16 - right clavicle (shoulder)
    17 - neck
    18 - jaw 
  

   * @returns 1 on success, 0 on failure.
   */
  static callNative(nativeName: 'SetPlayerAttachedObject', paramTypes: 'iiiifffffffffii', playerid: number, index: number, modelid: number, bone: number, fOffsetX: number, fOffsetY: number, fOffsetZ: number, fRotX: number, fRotY: number, fRotZ: number, fScaleX: number, fScaleY: number, fScaleZ: number, materialcolor1: number, materialcolor2: number): number;
  /**
   * Calls the AMX native RemovePlayerAttachedObject 
   *
   * @name samp.callNative
   * @param {string} [nativeName=RemovePlayerAttachedObject] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to remove the object from
   * @param {number} index - The index of the object to remove (set with SetPlayerAttachedObject)
   * @summary Remove an attached object from a player.
   * @see SetPlayerAttachedObject
   * @see IsPlayerAttachedObjectSlotUsed
   * @remarks This function was added in SA-MP 0.3c and will not work in earlier versions!
   * @returns 1 on success, 0 on failure.
   */
  static callNative(nativeName: 'RemovePlayerAttachedObject', paramTypes: 'ii', playerid: number, index: number): number;
  /**
   * Calls the AMX native IsPlayerAttachedObjectSlotUsed 
   *
   * @name samp.callNative
   * @param {string} [nativeName=IsPlayerAttachedObjectSlotUsed] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to check
   * @param {number} index - The index (slot) to check
   * @summary Check if a player has an object attached in the specified index (slot).
   * @see SetPlayerAttachedObject
   * @see RemovePlayerAttachedObject
   * @remarks This function was added in SA-MP 0.3c and will not work in earlier versions!
   * @returns 1 if used, 0 if not.
   */
  static callNative(nativeName: 'IsPlayerAttachedObjectSlotUsed', paramTypes: 'ii', playerid: number, index: number): number;
  /**
   * Calls the AMX native EditAttachedObject 
   *
   * @name samp.callNative
   * @param {string} [nativeName=EditAttachedObject] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to enter in to edition mode
   * @param {number} index - The index (slot) of the attached object to edit
   * @summary Enter edition mode for an attached object.
   * @see SetPlayerAttachedObject
   * @see RemovePlayerAttachedObject
   * @see IsPlayerAttachedObjectSlotUsed
   * @see EditObject
   * @see EditPlayerObject
   * @see SelectObject
   * @see CancelEdit
   * @see OnPlayerEditAttachedObject
   * @remarks This function was added in SA-MP 0.3e and will not work in earlier versions!
   * @remarks You can move the camera while editing by pressing and holding the spacebar (or W in vehicle) and moving your mouse.
   * @remarks 
  There are 7 clickable buttons in edition mode.
  The three single icons that have X/Y/Z on them can be dragged to edit position/rotation/scale.
  The four buttons in a row are to select the edition mode and save edition: [Move] [Rotate] [Scale] [Save].
  Clicking save will call OnPlayerEditAttachedObject.

   * @remarks Players will be able to scale objects up to a very large or negative value size. Limits should be put in place using OnPlayerEditAttachedObject to abort the edit.
   * @returns 1 on success and 0 on failure.
   */
  static callNative(nativeName: 'EditAttachedObject', paramTypes: 'ii', playerid: number, index: number): number;
  /**
   * Calls the AMX native CreatePlayerTextDraw 
   *
   * @name samp.callNative
   * @param {string} [nativeName=CreatePlayerTextDraw] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to create the textdraw for
   * @param {number} x - X-Coordinate
   * @param {number} y - Y-Coordinate
   * @param {string} text - The text in the textdraw
   * @summary Creates a textdraw for a single player. This can be used as a way around the global text-draw limit.
   * @see PlayerTextDrawDestroy
   * @see PlayerTextDrawColor
   * @see PlayerTextDrawBoxColor
   * @see PlayerTextDrawBackgroundColor
   * @see PlayerTextDrawAlignment
   * @see PlayerTextDrawFont
   * @see PlayerTextDrawLetterSize
   * @see PlayerTextDrawTextSize
   * @see PlayerTextDrawSetOutline
   * @see PlayerTextDrawSetShadow
   * @see PlayerTextDrawSetProportional
   * @see PlayerTextDrawUseBox
   * @see PlayerTextDrawSetString
   * @see PlayerTextDrawShow
   * @see PlayerTextDrawHide
   * @remarks This feature (player-textdraws) was added in SA-MP 0.3e and will not work in earlier versions!
   * @remarks 
  If you choose values for y that are less than 1, the first text row will be invisible and only the shadow is visible.
   must NOT be empty or the server will crash! If you need a textdraw that shows nothing, use &quot; &quot; (a space) or _ (underscore)
  If the last character in the text is a space (&quot; &quot;), the text will all be blank.
  If part of the text is off-screen, the color of the text will not show, only the shadow (if enabled) will. 

   * @remarks 
  This applies ONLY to sa-mp versions before 0.3z:
  Maximum length of textdraw is 800 characters. Longer text will crash the client in older versions.
  If you use color codes (such as ~R~ ~G~) beyond 255th character the client will crash trying to display the textdraw. 

   * @remarks Keyboard key mapping codes (such as ~k~~VEHICLE_ENTER_EXIT~ Doesn&#x27;t work beyond 255th character. 
   * @remarks 
  The x,y coordinate is the top left coordinate for the text draw area based on a 640x480 &quot;canvas&quot; (irrespective of screen resolution). If you plan on using PlayerTextDrawAlignment with alignment 3 (right), the x,y coordinate is the top right coordinate for the text draw.
  This function merely CREATES the textdraw, you must use PlayerTextDrawShow to show it to a player.
  It is recommended to use WHOLE numbers instead of decimal positions when creating player textdraws to ensure resolution friendly design. 

   * @remarks Player-textdraws are automatically destroyed when a player disconnects.
   * @returns The ID of the created textdraw.
   */
  static callNative(nativeName: 'CreatePlayerTextDraw', paramTypes: 'iffs', playerid: number, x: number, y: number, text: string): number;
  /**
   * Calls the AMX native PlayerTextDrawDestroy 
   *
   * @name samp.callNative
   * @param {string} [nativeName=PlayerTextDrawDestroy] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player who&#x27;s player-textdraw to destroy
   * @param {number} text - The ID of the textdraw to destroy
   * @summary Destroy a player-textdraw.
   * @see CreatePlayerTextDraw
   * @see PlayerTextDrawColor
   * @see PlayerTextDrawBoxColor
   * @see PlayerTextDrawBackgroundColor
   * @see PlayerTextDrawAlignment
   * @see PlayerTextDrawFont
   * @see PlayerTextDrawLetterSize
   * @see PlayerTextDrawTextSize
   * @see PlayerTextDrawSetOutline
   * @see PlayerTextDrawSetShadow
   * @see PlayerTextDrawSetProportional
   * @see PlayerTextDrawUseBox
   * @see PlayerTextDrawSetString
   * @see PlayerTextDrawShow
   * @see PlayerTextDrawHide
   * @remarks This feature (player-textdraws) was added in SA-MP 0.3e and will not work in earlier versions!
   */
  static callNative(nativeName: 'PlayerTextDrawDestroy', paramTypes: 'ii', playerid: number, text: number): number;
  /**
   * Calls the AMX native PlayerTextDrawLetterSize 
   *
   * @name samp.callNative
   * @param {string} [nativeName=PlayerTextDrawLetterSize] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player whose player-textdraw to set the letter size of
   * @param {number} text - The ID of the player-textdraw to change the letter size of
   * @param {number} x - Width of a char
   * @param {number} y - Height of a char
   * @summary Sets the width and height of the letters in a player-textdraw.
   * @see CreatePlayerTextDraw
   * @see PlayerTextDrawDestroy
   * @see PlayerTextDrawColor
   * @see PlayerTextDrawBoxColor
   * @see PlayerTextDrawBackgroundColor
   * @see PlayerTextDrawAlignment
   * @see PlayerTextDrawFont
   * @see PlayerTextDrawTextSize
   * @see PlayerTextDrawSetOutline
   * @see PlayerTextDrawSetShadow
   * @see PlayerTextDrawSetProportional
   * @see PlayerTextDrawUseBox
   * @see PlayerTextDrawSetString
   * @see PlayerTextDrawShow
   * @see PlayerTextDrawHide
   * @remarks This feature (player-textdraws) was added in SA-MP 0.3e and will not work in earlier versions!
   * @remarks When using this function purely for the benefit of affecting the textdraw box, multiply &#x27;Y&#x27; by 0.135 to convert to TextDrawTextSize-like measurements
   * @remarks Fonts appear to look the best with an X to Y ratio of 1 to 4 (e.g. if x is 0.5 then y should be 2).
   */
  static callNative(nativeName: 'PlayerTextDrawLetterSize', paramTypes: 'iiff', playerid: number, text: number, x: number, y: number): number;
  /**
   * Calls the AMX native PlayerTextDrawTextSize 
   *
   * @name samp.callNative
   * @param {string} [nativeName=PlayerTextDrawTextSize] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player whose player-textdraw to set the size of
   * @param {number} text - The ID of the player-textdraw to set the size of
   * @param {number} x - The size on the X axis (left/right) following the same 640x480 grid as TextDrawCreate
   * @param {number} y - The size on the Y axis (up/down) following the same 640x480 grid as TextDrawCreate
   * @summary Change the size of a player-textdraw (box if PlayerTextDrawUseBox is enabled and/or clickable area for use with PlayerTextDrawSetSelectable).
   * @see CreatePlayerTextDraw
   * @see PlayerTextDrawDestroy
   * @see PlayerTextDrawColor
   * @see PlayerTextDrawBoxColor
   * @see PlayerTextDrawBackgroundColor
   * @see PlayerTextDrawAlignment
   * @see PlayerTextDrawFont
   * @see PlayerTextDrawLetterSize
   * @see PlayerTextDrawSetOutline
   * @see PlayerTextDrawSetShadow
   * @see PlayerTextDrawSetProportional
   * @see PlayerTextDrawUseBox
   * @see PlayerTextDrawSetString
   * @see PlayerTextDrawShow
   * @see PlayerTextDrawHide
   * @remarks This feature (player-textdraws) was added in SA-MP 0.3e and will not work in earlier versions!
   * @remarks 
  The x and y have different meanings with different PlayerTextDrawAlignment values:
  
    1 (left): they are the right-most corner of the box, absolute coordinates.
    2 (center): they need to inverted (switch the two) and the x value is the overall width of the box.
    3 (right): the x and y are the coordinates of the left-most corner of the box 
  

   * @remarks 
  Using font type 4 (sprite) and 5 (model preview) converts X and Y of this function from corner coordinates to WIDTH and HEIGHT (offsets).
  The TextDraw box starts 10.0 units up and 5.0 to the left as the origin (TextDrawCreate coordinate).
  This function defines the clickable area for use with PlayerTextDrawSetSelectable, whether a box is shown or not.

   */
  static callNative(nativeName: 'PlayerTextDrawTextSize', paramTypes: 'iiff', playerid: number, text: number, x: number, y: number): number;
  /**
   * Calls the AMX native PlayerTextDrawAlignment 
   *
   * @name samp.callNative
   * @param {string} [nativeName=PlayerTextDrawAlignment] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player whose player-textdraw to set the alignment of
   * @param {number} text - The ID of the player-textdraw to set the alignment of
   * @param {number} alignment - 1-left 2-centered 3-right
   * @summary Set the text alignment of a player-textdraw.
   * @see CreatePlayerTextDraw
   * @see PlayerTextDrawDestroy
   * @see PlayerTextDrawColor
   * @see PlayerTextDrawBoxColor
   * @see PlayerTextDrawBackgroundColor
   * @see PlayerTextDrawFont
   * @see PlayerTextDrawLetterSize
   * @see PlayerTextDrawTextSize
   * @see PlayerTextDrawSetOutline
   * @see PlayerTextDrawSetShadow
   * @see PlayerTextDrawSetProportional
   * @see PlayerTextDrawUseBox
   * @see PlayerTextDrawSetString
   * @see PlayerTextDrawShow
   * @see PlayerTextDrawHide
   * @remarks This feature (player-textdraws) was added in SA-MP 0.3e and will not work in earlier versions!
   * @remarks For alignment 2 (center) the x and y values of TextSize need to be swapped, see notes at PlayerTextDrawTextSize. 
   */
  static callNative(nativeName: 'PlayerTextDrawAlignment', paramTypes: 'iii', playerid: number, text: number, alignment: number): number;
  /**
   * Calls the AMX native PlayerTextDrawColor 
   *
   * @name samp.callNative
   * @param {string} [nativeName=PlayerTextDrawColor] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player who&#x27;s textdraw to set the color of
   * @param {number} text - The TextDraw to change
   * @param {number} color - The color in hexadecimal format
   * @summary Sets the text color of a player-textdraw.
   * @see CreatePlayerTextDraw
   * @see PlayerTextDrawDestroy
   * @see PlayerTextDrawBoxColor
   * @see PlayerTextDrawBackgroundColor
   * @see PlayerTextDrawAlignment
   * @see PlayerTextDrawFont
   * @see PlayerTextDrawLetterSize
   * @see PlayerTextDrawTextSize
   * @see PlayerTextDrawSetOutline
   * @see PlayerTextDrawSetShadow
   * @see PlayerTextDrawSetProportional
   * @see PlayerTextDrawUseBox
   * @see PlayerTextDrawSetString
   * @see PlayerTextDrawShow
   * @see PlayerTextDrawHide
   * @remarks This feature (player-textdraws) was added in SA-MP 0.3e and will not work in earlier versions!
   * @remarks You can also use Gametext colors in textdraws.
   * @remarks The textdraw must be re-shown to the player in order to update the color.
   */
  static callNative(nativeName: 'PlayerTextDrawColor', paramTypes: 'iii', playerid: number, text: number, color: number): number;
  /**
   * Calls the AMX native PlayerTextDrawUseBox 
   *
   * @name samp.callNative
   * @param {string} [nativeName=PlayerTextDrawUseBox] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player whose textdraw to toggle the box of
   * @param {number} text - The ID of the player-textdraw to toggle the box of
   * @param {number} use - 1 to use a box or 0 to not use a box
   * @summary Toggle the box on a player-textdraw.
   * @see CreatePlayerTextDraw
   * @see PlayerTextDrawDestroy
   * @see PlayerTextDrawColor
   * @see PlayerTextDrawBoxColor
   * @see PlayerTextDrawBackgroundColor
   * @see PlayerTextDrawAlignment
   * @see PlayerTextDrawFont
   * @see PlayerTextDrawLetterSize
   * @see PlayerTextDrawTextSize
   * @see PlayerTextDrawSetOutline
   * @see PlayerTextDrawSetShadow
   * @see PlayerTextDrawSetProportional
   * @see PlayerTextDrawSetString
   * @see PlayerTextDrawShow
   * @see PlayerTextDrawHide
   * @remarks This feature (player-textdraws) was added in SA-MP 0.3e and will not work in earlier versions!
   */
  static callNative(nativeName: 'PlayerTextDrawUseBox', paramTypes: 'iii', playerid: number, text: number, use: number): number;
  /**
   * Calls the AMX native PlayerTextDrawBoxColor 
   *
   * @name samp.callNative
   * @param {string} [nativeName=PlayerTextDrawBoxColor] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player whose textdraw to set the box color of
   * @param {number} text - The ID of the player textdraw to set the box color of
   * @param {number} color - The color to set. Alpha (transparency) is supported
   * @summary Sets the color of a textdraw&#x27;s box (PlayerTextDrawUseBox).
   * @see CreatePlayerTextDraw
   * @see PlayerTextDrawDestroy
   * @see PlayerTextDrawColor
   * @see PlayerTextDrawBackgroundColor
   * @see PlayerTextDrawAlignment
   * @see PlayerTextDrawFont
   * @see PlayerTextDrawLetterSize
   * @see PlayerTextDrawTextSize
   * @see PlayerTextDrawSetOutline
   * @see PlayerTextDrawSetShadow
   * @see PlayerTextDrawSetProportional
   * @see PlayerTextDrawUseBox
   * @see PlayerTextDrawSetString
   * @see PlayerTextDrawShow
   * @see PlayerTextDrawHide
   * @remarks This feature (player-textdraws) was added in SA-MP 0.3e and will not work in earlier versions!
   */
  static callNative(nativeName: 'PlayerTextDrawBoxColor', paramTypes: 'iii', playerid: number, text: number, color: number): number;
  /**
   * Calls the AMX native PlayerTextDrawSetShadow 
   *
   * @name samp.callNative
   * @param {string} [nativeName=PlayerTextDrawSetShadow] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to show the textdraw for
   * @param {number} text - The ID of the textdraw to show
   * @param {number} size - The size of the shadow. 0 will hide the shadow
   * @summary Show a player-textdraw to the player it was created for.
   * @see PlayerTextDrawHide
   * @see CreatePlayerTextDraw
   * @see PlayerTextDrawDestroy
   * @see PlayerTextDrawColor
   * @see PlayerTextDrawBoxColor
   * @see PlayerTextDrawBackgroundColor
   * @see PlayerTextDrawAlignment
   * @see PlayerTextDrawFont
   * @see PlayerTextDrawLetterSize
   * @see PlayerTextDrawTextSize
   * @see PlayerTextDrawSetOutline
   * @see PlayerTextDrawSetShadow
   * @see PlayerTextDrawSetProportional
   * @see PlayerTextDrawUseBox
   * @see PlayerTextDrawSetString
   * @remarks This feature (player-textdraws) was added in SA-MP 0.3e and will not work in earlier versions!
   */
  static callNative(nativeName: 'PlayerTextDrawSetShadow', paramTypes: 'iii', playerid: number, text: number, size: number): number;
  /**
   * Calls the AMX native PlayerTextDrawSetOutline 
   *
   * @name samp.callNative
   * @param {string} [nativeName=PlayerTextDrawSetOutline] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player whose player-textdraw to set the outline of
   * @param {number} text - The ID of the player-textdraw to set the outline of
   * @param {number} size - The thickness of the outline
   * @summary Set the outline of a player-textdraw. The outline colour cannot be changed unless PlayerTextDrawBackgroundColor is used.
   * @see CreatePlayerTextDraw
   * @see PlayerTextDrawDestroy
   * @see PlayerTextDrawColor
   * @see PlayerTextDrawBoxColor
   * @see PlayerTextDrawBackgroundColor
   * @see PlayerTextDrawAlignment
   * @see PlayerTextDrawFont
   * @see PlayerTextDrawLetterSize
   * @see PlayerTextDrawTextSize
   * @see PlayerTextDrawSetShadow
   * @see PlayerTextDrawSetProportional
   * @see PlayerTextDrawUseBox
   * @see PlayerTextDrawSetString
   * @see PlayerTextDrawShow
   * @see PlayerTextDrawHide
   * @remarks This feature (player-textdraws) was added in SA-MP 0.3e and will not work in earlier versions!
   */
  static callNative(nativeName: 'PlayerTextDrawSetOutline', paramTypes: 'iii', playerid: number, text: number, size: number): number;
  /**
   * Calls the AMX native PlayerTextDrawBackgroundColor 
   *
   * @name samp.callNative
   * @param {string} [nativeName=PlayerTextDrawBackgroundColor] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player whose player-textdraw to set the background color of
   * @param {number} text - The ID of the player-textdraw to set the background color of
   * @param {number} color - The color that the textdraw should be set to
   * @summary Adjust the background color of a player-textdraw.
   * @see CreatePlayerTextDraw
   * @see PlayerTextDrawDestroy
   * @see PlayerTextDrawColor
   * @see PlayerTextDrawBoxColor
   * @see PlayerTextDrawAlignment
   * @see PlayerTextDrawFont
   * @see PlayerTextDrawLetterSize
   * @see PlayerTextDrawTextSize
   * @see PlayerTextDrawSetOutline
   * @see PlayerTextDrawSetShadow
   * @see PlayerTextDrawSetProportional
   * @see PlayerTextDrawUseBox
   * @see PlayerTextDrawSetString
   * @see PlayerTextDrawShow
   * @see PlayerTextDrawHide
   * @remarks This feature (player-textdraws) was added in SA-MP 0.3e and will not work in earlier versions!
   * @remarks If PlayerTextDrawSetOutline is used with size &gt; 0, the outline color will match the color used in PlayerTextDrawBackgroundColor. Changing the value of color seems to alter the color used in PlayerTextDrawColor
   */
  static callNative(nativeName: 'PlayerTextDrawBackgroundColor', paramTypes: 'iii', playerid: number, text: number, color: number): number;
  /**
   * Calls the AMX native PlayerTextDrawFont 
   *
   * @name samp.callNative
   * @param {string} [nativeName=PlayerTextDrawFont] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player whose player-textdraw to change the font of
   * @param {number} text - The ID of the player-textdraw to change the font of
   * @param {number} font - There are four font styles. A font value greater than 3 does not display, and anything greater than 16 crashes the client. See http://wiki.sa-mp.com/wiki/PlayerTextDrawFont
   * @summary Change the font of a player-textdraw.
   * @see CreatePlayerTextDraw
   * @see PlayerTextDrawDestroy
   * @see PlayerTextDrawColor
   * @see PlayerTextDrawBoxColor
   * @see PlayerTextDrawBackgroundColor
   * @see PlayerTextDrawAlignment
   * @see PlayerTextDrawLetterSize
   * @see PlayerTextDrawTextSize
   * @see PlayerTextDrawSetOutline
   * @see PlayerTextDrawSetShadow
   * @see PlayerTextDrawSetProportional
   * @see PlayerTextDrawUseBox
   * @see PlayerTextDrawSetString
   * @see PlayerTextDrawShow
   * @see PlayerTextDrawHide
   * @remarks This feature (player-textdraws) was added in SA-MP 0.3e and will not work in earlier versions!
   */
  static callNative(nativeName: 'PlayerTextDrawFont', paramTypes: 'iii', playerid: number, text: number, font: number): number;
  /**
   * Calls the AMX native PlayerTextDrawSetProportional 
   *
   * @name samp.callNative
   * @param {string} [nativeName=PlayerTextDrawSetProportional] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player whose player-textdraw to set the proportionality of
   * @param {number} text - The ID of the player-textdraw to set the proportionality of
   * @param {number} set - 1 to enable proportionality, 0 to disable
   * @summary Appears to scale text spacing to a proportional ratio. Useful when using PlayerTextDrawLetterSize to ensure the text has even character spacing.
   * @see CreatePlayerTextDraw
   * @see PlayerTextDrawDestroy
   * @see PlayerTextDrawColor
   * @see PlayerTextDrawBoxColor
   * @see PlayerTextDrawBackgroundColor
   * @see PlayerTextDrawAlignment
   * @see PlayerTextDrawFont
   * @see PlayerTextDrawLetterSize
   * @see PlayerTextDrawTextSize
   * @see PlayerTextDrawSetOutline
   * @see PlayerTextDrawSetShadow
   * @see PlayerTextDrawUseBox
   * @see PlayerTextDrawSetString
   * @see PlayerTextDrawShow
   * @see PlayerTextDrawHide
   * @remarks This feature (player-textdraws) was added in SA-MP 0.3e and will not work in earlier versions!
   */
  static callNative(nativeName: 'PlayerTextDrawSetProportional', paramTypes: 'iii', playerid: number, text: number, set: number): number;
  /**
   * Calls the AMX native PlayerTextDrawSetSelectable 
   *
   * @name samp.callNative
   * @param {string} [nativeName=PlayerTextDrawSetSelectable] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player whose player-textdraw to set the selectability of
   * @param {number} text - The ID of the player-textdraw to set the selectability of
   * @param {number} set - Set the player-textdraw selectable (1) or non-selectable (0). By default this is 0
   * @summary Toggles whether a player-textdraw can be selected or not.
   * @see SelectTextDraw
   * @see CancelSelectTextDraw
   * @see OnPlayerClickPlayerTextDraw
   * @remarks This feature (player-textdraws) was added in SA-MP 0.3e and will not work in earlier versions!
   * @remarks PlayerTextDrawSetSelectable MUST be used BEFORE the textdraw is shown to the player.
   * @remarks Use PlayerTextDrawTextSize to define the clickable area.
   */
  static callNative(nativeName: 'PlayerTextDrawSetSelectable', paramTypes: 'iii', playerid: number, text: number, set: number): number;
  /**
   * Calls the AMX native PlayerTextDrawShow 
   *
   * @name samp.callNative
   * @param {string} [nativeName=PlayerTextDrawShow] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to show the textdraw for
   * @param {number} text - The ID of the textdraw to show
   * @summary Show a player-textdraw to the player it was created for.
   * @see PlayerTextDrawHide
   * @see CreatePlayerTextDraw
   * @see PlayerTextDrawDestroy
   * @see PlayerTextDrawColor
   * @see PlayerTextDrawBoxColor
   * @see PlayerTextDrawBackgroundColor
   * @see PlayerTextDrawAlignment
   * @see PlayerTextDrawFont
   * @see PlayerTextDrawLetterSize
   * @see PlayerTextDrawTextSize
   * @see PlayerTextDrawSetOutline
   * @see PlayerTextDrawSetShadow
   * @see PlayerTextDrawSetProportional
   * @see PlayerTextDrawUseBox
   * @see PlayerTextDrawSetString
   * @remarks This feature (player-textdraws) was added in SA-MP 0.3e and will not work in earlier versions!
   */
  static callNative(nativeName: 'PlayerTextDrawShow', paramTypes: 'ii', playerid: number, text: number): number;
  /**
   * Calls the AMX native PlayerTextDrawHide 
   *
   * @name samp.callNative
   * @param {string} [nativeName=PlayerTextDrawHide] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to hide the textdraw for
   * @param {number} text - The ID of the textdraw to hide
   * @summary Hide a player-textdraw from the player it was created for.
   * @see PlayerTextDrawShow
   * @see CreatePlayerTextDraw
   * @see PlayerTextDrawDestroy
   * @see PlayerTextDrawColor
   * @see PlayerTextDrawBoxColor
   * @see PlayerTextDrawBackgroundColor
   * @see PlayerTextDrawAlignment
   * @see PlayerTextDrawFont
   * @see PlayerTextDrawLetterSize
   * @see PlayerTextDrawTextSize
   * @see PlayerTextDrawSetOutline
   * @see PlayerTextDrawSetShadow
   * @see PlayerTextDrawSetProportional
   * @see PlayerTextDrawUseBox
   * @see PlayerTextDrawSetString
   * @remarks This feature (player-textdraws) was added in SA-MP 0.3e and will not work in earlier versions!
   */
  static callNative(nativeName: 'PlayerTextDrawHide', paramTypes: 'ii', playerid: number, text: number): number;
  /**
   * Calls the AMX native PlayerTextDrawSetString 
   *
   * @name samp.callNative
   * @param {string} [nativeName=PlayerTextDrawSetString] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player who&#x27;s textdraw string to set
   * @param {number} text - The ID of the textdraw to change
   * @param {string} string - The new string for the TextDraw
   * @summary Change the text of a player-textdraw.
   * @see CreatePlayerTextDraw
   * @see PlayerTextDrawDestroy
   * @see PlayerTextDrawColor
   * @see PlayerTextDrawBoxColor
   * @see PlayerTextDrawBackgroundColor
   * @see PlayerTextDrawAlignment
   * @see PlayerTextDrawFont
   * @see PlayerTextDrawLetterSize
   * @see PlayerTextDrawTextSize
   * @see PlayerTextDrawSetOutline
   * @see PlayerTextDrawSetShadow
   * @see PlayerTextDrawSetProportional
   * @see PlayerTextDrawUseBox
   * @see PlayerTextDrawShow
   * @see PlayerTextDrawHide
   * @remarks This feature (player-textdraws) was added in SA-MP 0.3e and will not work in earlier versions!
   * @remarks There are limits to the length of textdraw strings! See Limits for more info.
   * @remarks You don&#x27;t have to show the TextDraw again in order to apply the changes.
   */
  static callNative(nativeName: 'PlayerTextDrawSetString', paramTypes: 'iis', playerid: number, text: number, string: string): number;
  /**
   * Calls the AMX native PlayerTextDrawSetPreviewModel 
   *
   * @name samp.callNative
   * @param {string} [nativeName=PlayerTextDrawSetPreviewModel] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The PlayerTextDraw player ID
   * @param {number} text - The textdraw id that will display the 3D preview
   * @param {number} modelindex - The GTA SA or SA:MP model ID to display
   * @summary Sets a player textdraw 2D preview sprite of a specified model ID.
   * @see PlayerTextDrawSetPreviewRot
   * @see PlayerTextDrawSetPreviewVehCol
   * @see PlayerTextDrawFont
   * @see OnPlayerClickPlayerTextDraw
   * @remarks This function was added in SA-MP 0.3x and will not work in earlier versions!
   * @remarks The textdraw MUST use the font type TEXT_DRAW_FONT_MODEL_PREVIEW in order for this function to have effect.
   * @returns 
  1: The function executed successfully. If an invalid model is passed &#x27;success&#x27; is reported, but the model will appear as a yellow/black question mark.
  0: The function failed to execute. Player and/or textdraw do not exist.

   */
  static callNative(nativeName: 'PlayerTextDrawSetPreviewModel', paramTypes: 'iii', playerid: number, text: number, modelindex: number): number;
  /**
   * Calls the AMX native PlayerTextDrawSetPreviewRot 
   *
   * @name samp.callNative
   * @param {string} [nativeName=PlayerTextDrawSetPreviewRot] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player whose player-textdraw to change
   * @param {number} text - The ID of the player-textdraw to change
   * @param {number} fRotX - The X rotation value
   * @param {number} fRotY - The Y rotation value
   * @param {number} fRotZ - The Z rotation value
   * @param {number} fZoom - The zoom value, smaller values make the camera closer and larger values make the camera further away (optional&#x3D;1.0)
   * @summary Sets the rotation and zoom of a 3D model preview player-textdraw.
   * @see TextDrawSetPreviewRot
   * @see PlayerTextDrawSetPreviewModel
   * @see PlayerTextDrawSetPreviewVehCol
   * @see PlayerTextDrawFont
   * @see OnPlayerClickPlayerTextDraw
   * @remarks This function was added in SA-MP 0.3x and will not work in earlier versions!
   * @remarks The textdraw MUST use the font type TEXT_DRAW_FONT_MODEL_PREVIEW and already have a model set in order for this function to have effect.
   */
  static callNative(nativeName: 'PlayerTextDrawSetPreviewRot', paramTypes: 'iiffff', playerid: number, text: number, fRotX: number, fRotY: number, fRotZ: number, fZoom: number): number;
  /**
   * Calls the AMX native PlayerTextDrawSetPreviewVehCol 
   *
   * @name samp.callNative
   * @param {string} [nativeName=PlayerTextDrawSetPreviewVehCol] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player whose player-textdraw to change
   * @param {number} text - The ID of the player&#x27;s player-textdraw to change
   * @param {number} color1 - The color to set the vehicle&#x27;s primary color to
   * @param {number} color2 - The color to set the vehicle&#x27;s secondary color to
   * @summary Set the color of a vehicle in a player-textdraw model preview (if a vehicle is shown).
   * @see PlayerTextDrawSetPreviewModel
   * @see PlayerTextDrawSetPreviewRot
   * @see PlayerTextDrawFont
   * @see OnPlayerClickPlayerTextDraw
   * @remarks This function was added in SA-MP 0.3x and will not work in earlier versions!
   * @remarks The textdraw MUST use the font TEXT_DRAW_FONT_MODEL_PREVIEW and be showing a vehicle in order for this function to have effect.
   */
  static callNative(nativeName: 'PlayerTextDrawSetPreviewVehCol', paramTypes: 'iiii', playerid: number, text: number, color1: number, color2: number): number;
  /**
   * Calls the AMX native SetPVarInt 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetPVarInt] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player whose player variable will be set
   * @param {string} varname - The name of the player variable
   * @param {number} int_value - The integer to be set
   * @summary Set an integer player variable.
   * @see GetPVarInt
   * @see SetPVarString
   * @see GetPVarString
   * @see SetPVarFloat
   * @see GetPVarFloat
   * @see DeletePVar
   * @remarks Variables aren&#x27;t reset until after OnPlayerDisconnect is called, so the values are still accessible in OnPlayerDisconnect.
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. Either the player specified is not connected, or the variable name is null or over 40 characters.

   */
  static callNative(nativeName: 'SetPVarInt', paramTypes: 'isi', playerid: number, varname: string, int_value: number): number;
  /**
   * Calls the AMX native GetPVarInt 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPVarInt] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player whose player variable to get
   * @param {string} varname - The name of the player variable (case-insensitive). Assigned in SetPVarInt
   * @summary Gets an integer player variable&#x27;s value.
   * @see SetPVarInt
   * @see SetPVarString
   * @see GetPVarString
   * @see SetPVarFloat
   * @see GetPVarFloat
   * @see DeletePVar
   * @returns The integer value of the specified player variable. It will still return 0 if the variable is not set, or the player does not exist.
   */
  static callNative(nativeName: 'GetPVarInt', paramTypes: 'is', playerid: number, varname: string): number;
  /**
   * Calls the AMX native SetPVarString 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetPVarString] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player whose player variable will be set
   * @param {string} varname - The name of the player variable
   * @param {string} string_value - The string you want to save in the player variable
   * @summary Saves a string into a player variable.
   * @see SetPVarInt
   * @see GetPVarInt
   * @see GetPVarString
   * @see SetPVarFloat
   * @see GetPVarFloat
   * @see DeletePVar
   */
  static callNative(nativeName: 'SetPVarString', paramTypes: 'iss', playerid: number, varname: string, string_value: string): number;
  /**
   * Calls the AMX native GetPVarString 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPVarString] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player whose player variable to get
   * @param {string} varname - The name of the player variable, set by SetPVarString
   * @param {number} len - The maximum length of the returned string
   * @summary Gets a player variable as a string.
   * @see SetPVarString
   * @see SetPVarInt
   * @see GetPVarInt
   * @see SetPVarFloat
   * @see GetPVarFloat
   * @see DeletePVar
   * @remarks If length of string is zero (value not set), string_return text will not be updated or set to anything and will remain with old data, neccesying that you clear the variable to blank value if GetPVarString returns 0 if that behavior is undesired 
   * @returns The length of the string.
   */
  static callNative(nativeName: 'GetPVarString', paramTypes: 'isSi', playerid: number, varname: string, len: number): string;
  /**
   * Calls the AMX native SetPVarFloat 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetPVarFloat] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player whose player variable will be set
   * @param {string} varname - The name of the player variable
   * @param {number} float_value - The float you want to save in the player variable
   * @summary Set a float player variable&#x27;s value.
   * @see SetPVarInt
   * @see GetPVarInt
   * @see SetPVarString
   * @see GetPVarString
   * @see GetPVarFloat
   * @see DeletePVar
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. Either the player specified is not connected, or the variable name is null or over 40 characters.

   */
  static callNative(nativeName: 'SetPVarFloat', paramTypes: 'isf', playerid: number, varname: string, float_value: number): number;
  /**
   * Calls the AMX native GetPVarFloat that returns a value with a Float tag
   *
   * @name samp.callNativeFloat
   * @param {string} [nativeName=GetPVarFloat] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player whose player variable you want to get
   * @param {string} varname - The name of the player variable
   * @summary Gets a player variable as a float.
   * @see SetPVarInt
   * @see GetPVarInt
   * @see SetPVarString
   * @see GetPVarString
   * @see SetPVarFloat
   * @see DeletePVar
   * @returns The float from the specified player variable.
   */
  static callNativeFloat(nativeName: 'GetPVarFloat', paramTypes: 'is', playerid: number, varname: string): number;
  /**
   * Calls the AMX native DeletePVar 
   *
   * @name samp.callNative
   * @param {string} [nativeName=DeletePVar] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player whose player variable to delete
   * @param {string} varname - The name of the player variable to delete
   * @summary Deletes a previously set player variable.
   * @see SetPVarInt
   * @see GetPVarInt
   * @see SetPVarString
   * @see GetPVarString
   * @see SetPVarFloat
   * @see GetPVarFloat
   * @remarks Once a variable is deleted, attempts to retrieve the value will return 0 (for integers and floats and NULL for strings).
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. Either the player specified isn&#x27;t connected or there is no variable set with the given name.

   */
  static callNative(nativeName: 'DeletePVar', paramTypes: 'is', playerid: number, varname: string): number;
  /**
   * Calls the AMX native GetPVarsUpperIndex 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPVarsUpperIndex] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to get the upper PVar index of
   * @summary Each PVar (player-variable) has its own unique identification number for lookup, this function returns the highest ID set for a player.
   * @see GetPVarNameAtIndex
   * @see GetPVarType
   * @returns The highest set PVar ID.
   */
  static callNative(nativeName: 'GetPVarsUpperIndex', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native GetPVarNameAtIndex 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPVarNameAtIndex] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player whose player variable to get the name of
   * @param {number} index - The index of the player&#x27;s pVar
   * @param {number} ret_len - The max length of the returned string
   * @summary Retrieve the name of a player&#x27;s pVar via the index.
   * @see GetPVarType
   * @see GetPVarInt
   * @see GetPVarFloat
   * @see GetPVarString
   */
  static callNative(nativeName: 'GetPVarNameAtIndex', paramTypes: 'iiSi', playerid: number, index: number, ret_len: number): string;
  /**
   * Calls the AMX native GetPVarType 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPVarType] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player whose player variable to get the type of
   * @param {string} varname - The name of the player variable to get the type of
   * @summary Gets the type (integer, float or string) of a player variable.
   * @see SetPVarInt
   * @see GetPVarInt
   * @see SetPVarString
   * @see GetPVarString
   * @see SetPVarFloat
   * @see GetPVarFloat
   * @see DeletePVar
   * @remarks 
  Variable types:
  
    PLAYER_VARTYPE_NONE (pVar with name given does not exist)
    PLAYER_VARTYPE_INT
    PLAYER_VARTYPE_STRING
    PLAYER_VARTYPE_FLOAT
  

   * @returns Returns the type of the PVar. See table below.
   */
  static callNative(nativeName: 'GetPVarType', paramTypes: 'is', playerid: number, varname: string): number;
  /**
   * Calls the AMX native SetPlayerChatBubble 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetPlayerChatBubble] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - 
   * @param {string} text - 
   * @param {number} color - 
   * @param {number} drawdistance - 
   * @param {number} expiretime - 
   */
  static callNative(nativeName: 'SetPlayerChatBubble', paramTypes: 'isifi', playerid: number, text: string, color: number, drawdistance: number, expiretime: number): number;
  /**
   * Calls the AMX native PutPlayerInVehicle 
   *
   * @name samp.callNative
   * @param {string} [nativeName=PutPlayerInVehicle] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to put in a vehicle
   * @param {number} vehicleid - The ID of the vehicle to put the player in
   * @param {number} seatid - The ID of the seat to put the player in
   * @summary Puts a player in a vehicle.
   * @see RemovePlayerFromVehicle
   * @see GetPlayerVehicleID
   * @see GetPlayerVehicleSeat
   * @see OnPlayerEnterVehicle
   * @remarks If this function is used on a player that is already in a vehicle, other players will still see them in their previous vehicle. To fix this, first remove the player from the vehicle.
   * @remarks If the seat is invalid or is taken, will cause a crash when they EXIT the vehicle.
   * @remarks You can use GetPlayerVehicleSeat in a loop to check if a seat is occupied by any players.
   * @remarks 
  Seats:
  
    0 - driver.
    1 - front passenger.
    2 - back-left passenger.
    3 - back-right passenger.
    4+ - passenger seats (coach etc.).
  

   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. The player or vehicle don&#x27;t exist.

   */
  static callNative(nativeName: 'PutPlayerInVehicle', paramTypes: 'iii', playerid: number, vehicleid: number, seatid: number): number;
  /**
   * Calls the AMX native GetPlayerVehicleID 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPlayerVehicleID] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player in the vehicle that you want to get the ID of
   * @summary This function gets the ID of the vehicle the player is currently in. Note: NOT the model id of the vehicle. See GetVehicleModel for that.
   * @see IsPlayerInVehicle
   * @see IsPlayerInAnyVehicle
   * @see GetPlayerVehicleSeat
   * @see GetVehicleModel
   * @returns ID of the vehicle or 0 if not in a vehicle.
   */
  static callNative(nativeName: 'GetPlayerVehicleID', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native GetPlayerVehicleSeat 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPlayerVehicleSeat] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player you want to get the seat of
   * @summary Find out which seat a player is in.
   * @see GetPlayerVehicleID
   * @see PutPlayerInVehicle
   * @remarks This function was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks Sometimes the result can be 128 which is an invalid seat ID. Circumstances of this are not yet known, but it is best to discard information when returned seat number is 128.
   * @returns The ID of the seat the player is in. -1 is not in vehicle, 0 is the driver, 1 is the front passenger, and 2 &amp; 3 are the rear passengers.
   */
  static callNative(nativeName: 'GetPlayerVehicleSeat', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native RemovePlayerFromVehicle 
   *
   * @name samp.callNative
   * @param {string} [nativeName=RemovePlayerFromVehicle] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to remove from their vehicle
   * @summary Removes/ejects a player from their vehicle.
   * @see PutPlayerInVehicle
   * @remarks 
  The exiting animation is not synced for other players.
  This function will not work when used in OnPlayerEnterVehicle, because the player isn&#x27;t in the vehicle when the callback is called. Use OnPlayerStateChange instead.
  The player isn&#x27;t removed if he is in a RC Vehicle.

   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. This means the player is not connected.

   */
  static callNative(nativeName: 'RemovePlayerFromVehicle', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native TogglePlayerControllable 
   *
   * @name samp.callNative
   * @param {string} [nativeName=TogglePlayerControllable] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - 
   * @param {number} toggle - 
   */
  static callNative(nativeName: 'TogglePlayerControllable', paramTypes: 'ii', playerid: number, toggle: number): number;
  /**
   * Calls the AMX native PlayerPlaySound 
   *
   * @name samp.callNative
   * @param {string} [nativeName=PlayerPlaySound] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player for whom to play the sound
   * @param {number} soundid - The sound to play
   * @param {number} x - X coordinate for the sound to play at. (0 for no position)
   * @param {number} y - Y coordinate for the sound to play at. (0 for no position)
   * @param {number} z - Z coordinate for the sound to play at. (0 for no position)
   * @summary Plays the specified sound for a player.
   * @see PlayCrimeReportForPlayer
   * @see PlayAudioStreamForPlayer
   * @see StopAudioStreamForPlayer
   * @remarks Only use the coordinates if you want the sound to be played at a certain position. Set coordinates all to 0 to just play the sound.
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. This means the player is not connected.

   */
  static callNative(nativeName: 'PlayerPlaySound', paramTypes: 'iifff', playerid: number, soundid: number, x: number, y: number, z: number): number;
  /**
   * Calls the AMX native ApplyAnimation 
   *
   * @name samp.callNative
   * @param {string} [nativeName=ApplyAnimation] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to apply the animation to
   * @param {string} animlib - The animation library from which to apply an animation
   * @param {string} animname - The name of the animation to apply, within the specified library
   * @param {number} fDelta - The speed to play the animation (use 4.1)
   * @param {number} loop - If set to 1, the animation will loop. If set to 0, the animation will play once
   * @param {number} lockx - If set to 0, the player is returned to their old X coordinate once the animation is complete (for animations that move the player such as walking). 1 will not return them to their old position
   * @param {number} locky - Same as above but for the Y axis. Should be kept the same as the previous parameter
   * @param {number} freeze - Setting this to 1 will freeze the player at the end of the animation. 0 will not
   * @param {number} time - Timer in milliseconds. For a never-ending loop it should be 0
   * @param {number} forcesync - Set to 1 to make server sync the animation with all other players in streaming radius. 2 works same as 1, but will ONLY apply the animation to streamed-in players, but NOT the actual player being animated (useful for npc animations and persistent animations when players are being streamed) (optional&#x3D;0)
   * @summary Apply an animation to a player.
   * @see ClearAnimations
   * @see SetPlayerSpecialAction
   * @remarks The  optional parameter, which defaults to 0, in most cases is not needed since players sync animations themselves. The  parameter can force all players who can see  to play the animation regardless of whether the player is performing that animation. This is useful in circumstances where the player can&#x27;t sync the animation themselves. For example, they may be paused.
   * @remarks An invalid animation library will crash the player&#x27;s game.
   * @returns This function always returns 1, even if the player specified does not exist, or any of the parameters are invalid (e.g. invalid library).
   */
  static callNative(nativeName: 'ApplyAnimation', paramTypes: 'issfiiiiii', playerid: number, animlib: string, animname: string, fDelta: number, loop: number, lockx: number, locky: number, freeze: number, time: number, forcesync: number): number;
  /**
   * Calls the AMX native ClearAnimations 
   *
   * @name samp.callNative
   * @param {string} [nativeName=ClearAnimations] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to clear the animations of
   * @param {number} forcesync - Set to 1 to force playerid to sync the animation with other players in streaming radius (optional&#x3D;0)
   * @summary Clears all animations for the given player (it also cancels all current tasks such as jetpacking,parachuting,entering vehicles, driving (removes player out of vehicle), swimming, etc.. ).
   * @see ApplyAnimation
   * @remarks ClearAnimations doesn&#x27;t do anything when the animation ends if we pass 1 for the freeze parameter in ApplyAnimation.
   * @remarks Unlike some other ways to remove player from a vehicle, this will also reset the vehicle&#x27;s velocity to zero, instantly stopping the car. Player will appear on top of the vehicle with the same location as he was in his car seat.
   * @returns This function always returns 1, even when the player specified is not connected.
   */
  static callNative(nativeName: 'ClearAnimations', paramTypes: 'ii', playerid: number, forcesync: number): number;
  /**
   * Calls the AMX native GetPlayerAnimationIndex 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPlayerAnimationIndex] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - ID of the player of whom you want to get the animation index of
   * @summary Returns the index of any running applied animations.
   * @see GetAnimationName
   * @remarks This function was added in SA-MP 0.3b and will not work in earlier versions!
   * @returns 0 if there is no animation applied.
   */
  static callNative(nativeName: 'GetPlayerAnimationIndex', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native GetAnimationName 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetAnimationName] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} index - The animation index, returned by GetPlayerAnimationIndex
   * @param {number} len1 - Size of the string that stores the animation library
   * @param {number} len2 - Size of the string that stores the animation name
   * @summary Get the animation library/name for the index.
   * @see GetPlayerAnimationIndex
   * @remarks This function was added in SA-MP 0.3b and will not work in earlier versions!
   * @returns 1 on success, 0 on failure.
   */
  static callNative(nativeName: 'GetAnimationName', paramTypes: 'iSiSi', index: number, len1: number, len2: number): Array<any>;
  /**
   * Calls the AMX native GetPlayerSpecialAction 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPlayerSpecialAction] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to get the special action of
   * @summary Retrieves a player&#x27;s current special action.
   * @see SetPlayerSpecialAction
   * @see GetPlayerState
   * @remarks 
  Special actions: (marked with * cannot be set)
  
    0 - SPECIAL_ACTION_NONE
    2 - SPECIAL_ACTION_USEJETPACK
    5 - SPECIAL_ACTION_DANCE1
    6 - SPECIAL_ACTION_DANCE2
    7 - SPECIAL_ACTION_DANCE3
    8 - SPECIAL_ACTION_DANCE4
    10 - SPECIAL_ACTION_HANDSUP
    11 - SPECIAL_ACTION_USECELLPHONE
    12 - SPECIAL_ACTION_SITTING *
    13 - SPECIAL_ACTION_STOPUSECELLPHONE
  
  added in SA-MP 0.3:
  
    1 - SPECIAL_ACTION_DUCK * - Detect if the player is crouching.
    3 - SPECIAL_ACTION_ENTER_VEHICLE * - Detect if the player is entering a vehicle via an animation.
    4 - SPECIAL_ACTION_EXIT_VEHICLE * - Detect if the player is exiting a vehicle via an animation.
    20 - SPECIAL_ACTION_DRINK_BEER - Will increase the player&#x27;s drunk level when used
    21 - SPECIAL_ACTION_SMOKE_CIGGY - Will give the player a cigar
    22 - SPECIAL_ACTION_DRINK_WINE - Will give the player a wine bottle to get drunk from
    23 - SPECIAL_ACTION_DRINK_SPRUNK - Will give the player a sprunk bottle to drink from
    68 - SPECIAL_ACTION_PISSING - Will make make the player perform the pissing animation with visible pee.
  
  added in SA-MP 0.3e:
  
    24 - SPECIAL_ACTION_CUFFED - Will force the player in to cuffs (hands are behind their back) (does not work on CJ skin)
  
  added in SA-MP 0.3x:
  
    25 - SPECIAL_ACTION_CARRY         - Will apply a &#x27;carrying&#x27; animation to the player and make them unable to sprint, jump or punch (does not work on CJ skin)
  

   * @returns The special action of the player.
   */
  static callNative(nativeName: 'GetPlayerSpecialAction', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native SetPlayerSpecialAction 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetPlayerSpecialAction] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The player that should perform the action
   * @param {number} actionid - The action that should be performed
   * @summary This function allows to set players special action.
   * @see GetPlayerSpecialAction
   * @see ApplyAnimation
   * @remarks Removing jetpacks from players by setting their special action to 0 causes the sound to stay until death.
   * @remarks 
  Special actions: (marked with * cannot be set)
  
    0 - SPECIAL_ACTION_NONE
    2 - SPECIAL_ACTION_USEJETPACK
    5 - SPECIAL_ACTION_DANCE1
    6 - SPECIAL_ACTION_DANCE2
    7 - SPECIAL_ACTION_DANCE3
    8 - SPECIAL_ACTION_DANCE4
    10 - SPECIAL_ACTION_HANDSUP
    11 - SPECIAL_ACTION_USECELLPHONE
    12 - SPECIAL_ACTION_SITTING *
    13 - SPECIAL_ACTION_STOPUSECELLPHONE
  
  added in SA-MP 0.3:
  
    1 - SPECIAL_ACTION_DUCK * - Detect if the player is crouching.
    3 - SPECIAL_ACTION_ENTER_VEHICLE * - Detect if the player is entering a vehicle via an animation.
    4 - SPECIAL_ACTION_EXIT_VEHICLE * - Detect if the player is exiting a vehicle via an animation.
    20 - SPECIAL_ACTION_DRINK_BEER - Will increase the player&#x27;s drunk level when used
    21 - SPECIAL_ACTION_SMOKE_CIGGY - Will give the player a cigar
    22 - SPECIAL_ACTION_DRINK_WINE - Will give the player a wine bottle to get drunk from
    23 - SPECIAL_ACTION_DRINK_SPRUNK - Will give the player a sprunk bottle to drink from
    68 - SPECIAL_ACTION_PISSING - Will make make the player perform the pissing animation with visible pee.
  
  added in SA-MP 0.3e:
  
    24 - SPECIAL_ACTION_CUFFED - Will force the player in to cuffs (hands are behind their back) (does not work on CJ skin)
  
  added in SA-MP 0.3x:
  
    25 - SPECIAL_ACTION_CARRY         - Will apply a &#x27;carrying&#x27; animation to the player and make them unable to sprint, jump or punch (does not work on CJ skin)
  

   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. This means the player is not connected.

   */
  static callNative(nativeName: 'SetPlayerSpecialAction', paramTypes: 'ii', playerid: number, actionid: number): number;
  /**
   * Calls the AMX native DisableRemoteVehicleCollisions 
   *
   * @name samp.callNative
   * @param {string} [nativeName=DisableRemoteVehicleCollisions] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - 
   * @param {number} disable - 
   */
  static callNative(nativeName: 'DisableRemoteVehicleCollisions', paramTypes: 'ii', playerid: number, disable: number): number;
  /**
   * Calls the AMX native SetPlayerCheckpoint 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetPlayerCheckpoint] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - 
   * @param {number} x - 
   * @param {number} y - 
   * @param {number} z - 
   * @param {number} size - 
   */
  static callNative(nativeName: 'SetPlayerCheckpoint', paramTypes: 'iffff', playerid: number, x: number, y: number, z: number, size: number): number;
  /**
   * Calls the AMX native DisablePlayerCheckpoint 
   *
   * @name samp.callNative
   * @param {string} [nativeName=DisablePlayerCheckpoint] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player whose checkpoint to disable
   * @summary Disables (hides/destroys) a player&#x27;s set checkpoint. Players can only have a single checkpoint set at a time. Checkpoints don&#x27;t need to be disabled before setting another one.
   * @see SetPlayerCheckpoint
   * @see IsPlayerInCheckpoint
   * @see SetPlayerRaceCheckpoint
   * @see DisablePlayerRaceCheckpoint
   * @see IsPlayerInRaceCheckpoint
   * @see OnPlayerEnterCheckpoint
   * @see OnPlayerLeaveCheckpoint
   * @see OnPlayerEnterRaceCheckpoint
   * @see OnPlayerLeaveRaceCheckpoint
   * @returns 
  1: The function executed successfully. Success is also returned if the player doesn&#x27;t have a checkpoint shown already.
  0: The function failed to execute. This means the player is not connected.

   */
  static callNative(nativeName: 'DisablePlayerCheckpoint', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native SetPlayerRaceCheckpoint 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetPlayerRaceCheckpoint] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to set the checkpoint for
   * @param {number} type - Type of checkpoint. 0-Normal, 1-Finish, 2-Nothing(Only the checkpoint without anything on it), 3-Air normal, 4-Air finish, 5-Air (rotates and stops), 6-Air (increases, decreases and disappears), 7-Air (swings down and up), 8-Air (swings up and down)
   * @param {number} x - X-Coordinate
   * @param {number} y - Y-Coordinate
   * @param {number} z - Z-Coordinate
   * @param {number} nextx - X-Coordinate of the next point, for the arrow facing direction
   * @param {number} nexty - Y-Coordinate of the next point, for the arrow facing direction
   * @param {number} nextz - Z-Coordinate of the next point, for the arrow facing direction
   * @param {number} size - Size (diameter) of the checkpoint
   * @summary Creates a race checkpoint. When the player enters it, the OnPlayerEnterRaceCheckpoint callback is called.
   * @see SetPlayerCheckpoint
   * @see DisablePlayerCheckpoint
   * @see IsPlayerInCheckpoint
   * @see DisablePlayerRaceCheckpoint
   * @see IsPlayerInRaceCheckpoint
   * @see OnPlayerEnterCheckpoint
   * @see OnPlayerLeaveCheckpoint
   * @see OnPlayerEnterRaceCheckpoint
   * @see OnPlayerLeaveRaceCheckpoint
   * @remarks If a race checkpoint is already set it will use the size of that checkpoint instead of the new one. 
   * @remarks 
  Race checkpoints created on server-created objects (CreateObject/CreatePlayerObject) will appear down on the &#x27;real&#x27; ground, but will still function correctly.
  Race checkpoints are asynchronous, meaning only one can be shown at a time. To &#x27;stream&#x27; race checkpoints (only show them when players are close enough), use a race checkpoint streamer.

   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. This means the player specified does not exist.

   */
  static callNative(nativeName: 'SetPlayerRaceCheckpoint', paramTypes: 'iifffffff', playerid: number, type: number, x: number, y: number, z: number, nextx: number, nexty: number, nextz: number, size: number): number;
  /**
   * Calls the AMX native DisablePlayerRaceCheckpoint 
   *
   * @name samp.callNative
   * @param {string} [nativeName=DisablePlayerRaceCheckpoint] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The player to disable the current checkpoint for
   * @summary Disable any initialized race checkpoints for a specific player, since you can only have one at any given time.
   * @see SetPlayerCheckpoint
   * @see DisablePlayerCheckpoint
   * @see IsPlayerInCheckpoint
   * @see SetPlayerRaceCheckpoint
   * @see IsPlayerInRaceCheckpoint
   * @see OnPlayerEnterCheckpoint
   * @see OnPlayerLeaveCheckpoint
   * @see OnPlayerEnterRaceCheckpoint
   * @see OnPlayerLeaveRaceCheckpoint
   */
  static callNative(nativeName: 'DisablePlayerRaceCheckpoint', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native SetPlayerWorldBounds 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetPlayerWorldBounds] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to set the world boundaries of
   * @param {number} x_max - The maximum X coordinate the player can go to
   * @param {number} x_min - The minimum X coordinate the player can go to
   * @param {number} y_max - The maximum Y coordinate the player can go to
   * @param {number} y_min - The minimum Y coordinate the player can go to
   * @summary Set the world boundaries for a player. Players can not go out of the boundaries (they will be pushed back in).
   * @see GangZoneCreate
   * @remarks This function does not work if used in OnPlayerConnect
   * @remarks A player&#x27;s world boundaries can be reset by setting them to 20000.0, -20000.0, 20000.0, -20000.0. These are the default values.
   * @remarks This function doesn&#x27;t work in interiors!
   */
  static callNative(nativeName: 'SetPlayerWorldBounds', paramTypes: 'iffff', playerid: number, x_max: number, x_min: number, y_max: number, y_min: number): number;
  /**
   * Calls the AMX native SetPlayerMarkerForPlayer 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetPlayerMarkerForPlayer] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The player that will see the player&#x27;s changed blip/nametag color
   * @param {number} showplayerid - The player whose color will be changed
   * @param {number} color - New color. (RGBA)
   * @summary Change the colour of a player&#x27;s nametag and radar blip for another player.
   * @see ShowPlayerMarkers
   * @see LimitPlayerMarkerRadius
   * @see SetPlayerColor
   * @see ShowPlayerNameTagForPlayer
   */
  static callNative(nativeName: 'SetPlayerMarkerForPlayer', paramTypes: 'iii', playerid: number, showplayerid: number, color: number): number;
  /**
   * Calls the AMX native ShowPlayerNameTagForPlayer 
   *
   * @name samp.callNative
   * @param {string} [nativeName=ShowPlayerNameTagForPlayer] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - Player who will see the results of this function
   * @param {number} showplayerid - Player whose name tag will be shown or hidden
   * @param {number} show - 1-show name tag, 0-hide name tag
   * @summary This functions allows you to toggle the drawing of player nametags, healthbars and armor bars which display above their head. For use of a similar function like this on a global level, ShowNameTags function.
   * @see ShowNameTags
   * @see DisableNameTagLOS
   * @see SetPlayerMarkerForPlayer
   * @remarks ShowNameTags must be set to 1 to be able to show name tags with ShowPlayerNameTagForPlayer, that means that in order to be effective you need to ShowPlayerNameTagForPlayer(forplayerid, playerid, 0) ahead of time(OnPlayerStreamIn is a good spot).
   */
  static callNative(nativeName: 'ShowPlayerNameTagForPlayer', paramTypes: 'iii', playerid: number, showplayerid: number, show: number): number;
  /**
   * Calls the AMX native SetPlayerMapIcon 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetPlayerMapIcon] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to set the map icon for
   * @param {number} iconid - The player&#x27;s icon ID, ranging from 0 to 99. This means there is a maximum of 100 map icons. ID can be used in RemovePlayerMapIcon
   * @param {number} x - The X coordinate to place the map icon at
   * @param {number} y - The Y coordinate to place the map icon at
   * @param {number} z - The Z coordinate to place the map icon at
   * @param {number} markertype - The icon to set
   * @param {number} color - The color of the icon (RGBA). This should only be used with the square icon (ID: 0)
   * @param {number} style - The style of icon (optional&#x3D;MAPICON_LOCAL)
   * @summary Place an icon/marker on a player&#x27;s map. Can be used to mark locations such as banks and hospitals to players.
   * @see RemovePlayerMapIcon
   * @see SetPlayerMarkerForPlayer
   * @remarks If you use an invalid marker type, it will create ID 1 (White Square). 
   * @remarks If you use an icon ID that is already in use, it will replace the current map icon using that ID. 
   * @remarks Marker type 1 (square), 2 (player blip), 4 (north), and 56 (single airstrip blip) will cause your game to crash if you have map legends enabled while viewing the map.
   * @remarks 
  Map icon styles:
  
    0 MAPICON_LOCAL - close proximity only
    1 MAPICON_GLOBAL - show on radar edge as long as in range
    2 MAPICON_LOCAL_CHECKPOINT - Close proximity only (with checkpoint)
    3 MAPICON_GLOBAL_CHECKPOINT - Show on radar edge as long as in range (with checkpoint)
  

   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. Player is not connected.

   */
  static callNative(nativeName: 'SetPlayerMapIcon', paramTypes: 'iifffiii', playerid: number, iconid: number, x: number, y: number, z: number, markertype: number, color: number, style: number): number;
  /**
   * Calls the AMX native RemovePlayerMapIcon 
   *
   * @name samp.callNative
   * @param {string} [nativeName=RemovePlayerMapIcon] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player whose icon to remove
   * @param {number} iconid - The ID of the icon to remove. This is the second parameter of SetPlayerMapIcon
   * @summary Removes a map icon that was set earlier for a player using SetPlayerMapIcon.
   * @see SetPlayerMapIcon
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute.

   */
  static callNative(nativeName: 'RemovePlayerMapIcon', paramTypes: 'ii', playerid: number, iconid: number): number;
  /**
   * Calls the AMX native AllowPlayerTeleport 
   *
   * @name samp.callNative
   * @param {string} [nativeName=AllowPlayerTeleport] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to allow teleport
   * @param {number} allow - 1 to allow, 0 to disallow
   * @summary Enable/Disable the teleporting ability for a player by right-clicking on the map.
   * @see AllowAdminTeleport
   * @remarks This function, as of 0.3d, is deprecated. Check OnPlayerClickMap.
   * @remarks This function will work only if AllowAdminTeleport is enabled, and you have to be an admin.
   */
  static callNative(nativeName: 'AllowPlayerTeleport', paramTypes: 'ii', playerid: number, allow: number): number;
  /**
   * Calls the AMX native SetPlayerCameraPos 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetPlayerCameraPos] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - ID of the player
   * @param {number} x - The X coordinate to place the camera at
   * @param {number} y - The Y coordinate to place the camera at
   * @param {number} z - The Z coordinate to place the camera at
   * @summary Sets the camera to a specific position for a player.
   * @see SetPlayerCameraLookAt
   * @see SetCameraBehindPlayer
   * @remarks You may also have to use SetPlayerCameraLookAt with this function in order to work properly.
   * @remarks Use SetCameraBehindPlayer to reset the camera to behind the player.
   * @remarks Using the camera functions directly after enabling spectator mode doesn&#x27;t work.
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. The player specified doesn&#x27;t exist.

   */
  static callNative(nativeName: 'SetPlayerCameraPos', paramTypes: 'ifff', playerid: number, x: number, y: number, z: number): number;
  /**
   * Calls the AMX native SetPlayerCameraLookAt 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetPlayerCameraLookAt] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player whose camera to set
   * @param {number} x - The X coordinate for the player&#x27;s camera to look at
   * @param {number} y - The Y coordinate for the player&#x27;s camera to look at
   * @param {number} z - The Z coordinate for the player&#x27;s camera to look at
   * @param {number} cut - The style of the change. Can be used to interpolate (change slowly) from old pos to new pos using CAMERA_MOVE. Added in 0.3e. Leave out for older versions (optional&#x3D;CAMERA_CUT)
   * @summary Set the direction a player&#x27;s camera looks at. Generally meant to be used in combination with SetPlayerCameraPos.
   * @see SetPlayerCameraPos
   * @see SetCameraBehindPlayer
   * @see GetPlayerCameraPos
   * @see GetPlayerCameraFrontVector
   * @remarks Using the camera functions directly after enabling spectator mode doesn&#x27;t work.
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. The player specified does not exist.

   */
  static callNative(nativeName: 'SetPlayerCameraLookAt', paramTypes: 'ifffi', playerid: number, x: number, y: number, z: number, cut: number): number;
  /**
   * Calls the AMX native SetCameraBehindPlayer 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetCameraBehindPlayer] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The player you want to restore the camera for
   * @summary Restore the camera to a place behind the player, after using a function like SetPlayerCameraPos.
   * @see SetPlayerCameraPos
   * @see SetPlayerCameraLookAt
   */
  static callNative(nativeName: 'SetCameraBehindPlayer', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native GetPlayerCameraPos 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPlayerCameraPos] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to get the camera position of
   * @summary Get the position of the player&#x27;s camera.
   * @see SetPlayerCameraPos
   * @see GetPlayerCameraZoom
   * @see GetPlayerCameraAspectRatio
   * @see GetPlayerCameraMode
   * @see GetPlayerCameraFrontVector
   * @remarks This function was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks Player&#x27;s camera positions are only updated once a second, unless aiming.
   * @remarks It is recommended to set a 1 second timer if you wish to take action that relies on a player&#x27;s camera position.
   */
  static callNative(nativeName: 'GetPlayerCameraPos', paramTypes: 'iFFF', playerid: number): Array<any>;
  /**
   * Calls the AMX native GetPlayerCameraFrontVector 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPlayerCameraFrontVector] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player you want to obtain the camera front vector of
   * @summary This function will return the current direction of player&#x27;s aiming in 3-D space, the coords are relative to the camera position, see GetPlayerCameraPos.
   * @see GetPlayerCameraPos
   * @remarks This function was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks In 0.3a the camera front vector is only obtainable when player is inside a rhino, S.W.A.T tank, fire truck, or on foot. 
   * @remarks Since 0.3b the camera data can be obtained when the player is in any vehicle or on foot. 
   * @returns The position is stored in the specified variables.
   */
  static callNative(nativeName: 'GetPlayerCameraFrontVector', paramTypes: 'iFFF', playerid: number): Array<any>;
  /**
   * Calls the AMX native GetPlayerCameraMode 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPlayerCameraMode] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player whose camera mode to retrieve
   * @summary Returns the current GTA camera mode for the requested player. The camera modes are useful in determining whether a player is aiming, doing a passenger driveby etc.
   * @see GetPlayerCameraPos
   * @see GetPlayerCameraFrontVector
   * @see SetPlayerCameraPos
   * @see SetPlayerCameraLookAt
   * @see SetCameraBehindPlayer
   * @remarks This function was added in SA-MP 0.3c R3 and will not work in earlier versions!
   * @returns The camera mode as an integer (or -1 if player is not connected).
   */
  static callNative(nativeName: 'GetPlayerCameraMode', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native EnablePlayerCameraTarget 
   *
   * @name samp.callNative
   * @param {string} [nativeName=EnablePlayerCameraTarget] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to toggle camera targeting functions for
   * @param {number} enable - 1 to enable camera targeting functions and 0 to disable them
   * @summary Toggle camera targeting functions for a player. Disabled by default to save bandwidth.
   * @see GetPlayerCameraTargetVehicle
   * @see GetPlayerCameraTargetPlayer
   * @see GetPlayerCameraFrontVector
   * @remarks This function was added in SA-MP 0.3.7 and will not work in earlier versions!
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. The player is not connected.

   */
  static callNative(nativeName: 'EnablePlayerCameraTarget', paramTypes: 'ii', playerid: number, enable: number): number;
  /**
   * Calls the AMX native GetPlayerCameraTargetObject 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPlayerCameraTargetObject] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to check
   * @summary Allows you to retrieve the ID of the object the player is looking at.
   * @see GetPlayerCameraTargetVehicle
   * @see GetPlayerCameraTargetPlayer
   * @see GetPlayerCameraFrontVector
   * @remarks This function was added in SA-MP 0.3.7 and will not work in earlier versions!
   * @remarks This function is disabled by default to save bandwidth. Use EnablePlayerCameraTarget to enable it for each player.
   * @returns The ID of the object playerid is looking at. If INVALID_OBJECT_ID (65535) is returned, playerid isn&#x27;t looking at any object.
   */
  static callNative(nativeName: 'GetPlayerCameraTargetObject', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native GetPlayerCameraTargetVehicle 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPlayerCameraTargetVehicle] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to check
   * @summary Get the ID of the vehicle the player is looking at.
   * @see GetPlayerCameraTargetPlayer
   * @see GetPlayerCameraTargetObject
   * @see EnablePlayerCameraTarget
   * @see GetPlayerCameraFrontVector
   * @remarks This function was added in SA-MP 0.3.7 and will not work in earlier versions!
   * @remarks This function is disabled by default to save bandwidth. Use EnablePlayerCameraTarget to enable it for each player.
   * @remarks This function can (obviously) only return one vehicle ID at a time, while the player may be looking at multiple. It generally seems to detect the closest vehicle first.
   * @returns The vehicle ID of the vehicle the player is looking at. INVALID_VEHICLE_ID if none.
   */
  static callNative(nativeName: 'GetPlayerCameraTargetVehicle', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native GetPlayerCameraTargetPlayer 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPlayerCameraTargetPlayer] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to check
   * @summary Allows you to retrieve the ID of the player the playerid is looking at.
   * @see GetPlayerCameraTargetActor
   * @see GetPlayerCameraTargetVehicle
   * @see GetPlayerCameraTargetObject
   * @see GetPlayerCameraFrontVector
   * @remarks This function was added in SA-MP 0.3.7 and will not work in earlier versions!
   * @remarks This function is disabled by default to save bandwidth. Use EnablePlayerCameraTarget to enable it for each player.
   * @remarks Do not confuse this function with GetPlayerTargetPlayer. GetPlayerTargetPlayer returns the ID of the player playerid is aming at (with a weapon). GetPlayerCameraTargetPlayer returns the ID of the player playerid is looking at (reference point is the center of the screen).
   * @returns The ID of the player the playerid is looking at.
   */
  static callNative(nativeName: 'GetPlayerCameraTargetPlayer', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native GetPlayerCameraTargetActor 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPlayerCameraTargetActor] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to get the target actor of
   * @summary Allows you to retrieve the ID of the actor the player is looking at (if any).
   * @see GetPlayerTargetActor
   * @see GetPlayerCameraTargetPlayer
   * @see GetPlayerCameraTargetVehicle
   * @see GetPlayerCameraTargetObject
   * @see GetPlayerCameraFrontVector
   * @remarks This function was added in SA-MP 0.3.7 and will not work in earlier versions!
   * @remarks This function is disabled by default to save bandwidth. Use EnablePlayerCameraTarget to enable it for each player.
   * @remarks This function only tells you which actor (if any) the player is looking at. To find out if they are aiming at them, you need to use GetPlayerTargetActor.
   * @returns The ID of the actor the player is looking at.
   */
  static callNative(nativeName: 'GetPlayerCameraTargetActor', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native GetPlayerCameraAspectRatio that returns a value with a Float tag
   *
   * @name samp.callNativeFloat
   * @param {string} [nativeName=GetPlayerCameraAspectRatio] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to get the camera aspect ratio of
   * @summary Retrieves the aspect ratio of a player&#x27;s camera.
   * @see GetPlayerCameraZoom
   * @see GetPlayerCameraPos
   * @see GetPlayerCameraFrontVector
   * @remarks This function was added in SA-MP 0.3z and will not work in earlier versions! 
   * @remarks The return value of this function represents the value of the &quot;widescreen&quot; option in the game&#x27;s display settings, not the actual aspect ratio of the player&#x27;s display.
   * @returns The aspect ratio of the player&#x27;s camera, as a float. The aspect ratio can be one of three values: 4:3 (1.3333334, Float:0x3FAAAAAB) when widescreen is turned off, 5:4 (1.2470589, Float:0x3F9F9FA0) when letterbox mode is turned on, and 16:9 (1.7764707, Float:0x3FE36364) when widescreen is turned on regardless of the letterbox mode.
   */
  static callNativeFloat(nativeName: 'GetPlayerCameraAspectRatio', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native GetPlayerCameraZoom that returns a value with a Float tag
   *
   * @name samp.callNativeFloat
   * @param {string} [nativeName=GetPlayerCameraZoom] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to get the camera zoom level of
   * @summary Retrieves the game camera zoom level for a given player.
   * @see GetPlayerCameraAspectRatio
   * @see GetPlayerCameraPos
   * @see GetPlayerCameraFrontVector
   * @remarks This function was added in SA-MP 0.3z and will not work in earlier versions!
   * @remarks This retrieves the zoom level of the GAME camera, not the camera WEAPON.
   * @returns The player&#x27;s camera zoom level (camera, sniper etc.), a float.
   */
  static callNativeFloat(nativeName: 'GetPlayerCameraZoom', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native AttachCameraToObject 
   *
   * @name samp.callNative
   * @param {string} [nativeName=AttachCameraToObject] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player which will have your camera attached on object
   * @param {number} objectid - The object id which you want to attach the player camera
   * @summary You can use this function to attach the player camera to objects.
   * @see AttachCameraToPlayerObject
   * @remarks This function was added in SA-MP 0.3e and will not work in earlier versions!
   * @remarks You need to create the object first, before attempting to attach a player camera for that.
   */
  static callNative(nativeName: 'AttachCameraToObject', paramTypes: 'ii', playerid: number, objectid: number): number;
  /**
   * Calls the AMX native AttachCameraToPlayerObject 
   *
   * @name samp.callNative
   * @param {string} [nativeName=AttachCameraToPlayerObject] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player which will have their camera attached to a player-object
   * @param {number} playerobjectid - The ID of the player-object to which the player&#x27;s camera will be attached
   * @summary Attaches a player&#x27;s camera to a player-object. The player is able to move their camera while it is attached to an object. Can be used with MovePlayerObject and AttachPlayerObjectToVehicle.
   * @see AttachCameraToObject
   * @see SetPlayerCameraPos
   * @see SetPlayerCameraLookAt
   * @remarks This function was added in SA-MP 0.3e and will not work in earlier versions!
   * @remarks The player-object must be created before attempting to attach the player&#x27;s camera to it.
   */
  static callNative(nativeName: 'AttachCameraToPlayerObject', paramTypes: 'ii', playerid: number, playerobjectid: number): number;
  /**
   * Calls the AMX native InterpolateCameraPos 
   *
   * @name samp.callNative
   * @param {string} [nativeName=InterpolateCameraPos] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player the camera should be moved for
   * @param {number} FromX - The X position the camera should start to move from
   * @param {number} FromY - The Y position the camera should start to move from
   * @param {number} FromZ - The Z position the camera should start to move from
   * @param {number} ToX - The X position the camera should move to
   * @param {number} ToY - The Y position the camera should move to
   * @param {number} ToZ - The Z position the camera should move to
   * @param {number} time - Time in milliseconds
   * @param {number} cut - The jumpcut to use. Set to CAMERA_MOVE for a smooth movement (optional&#x3D;CAMERA_CUT)
   * @summary Move a player&#x27;s camera from one position to another, within the set time. Useful for scripted cut scenes.
   * @see InterpolateCameraLookAt
   * @see SetPlayerCameraPos
   * @see SetPlayerCameraLookAt
   * @remarks This function was added in SA-MP 0.3e and will not work in earlier versions!
   * @remarks Use TogglePlayerSpectating to make objects stream in for the player while the camera is moving. You can reset the camera behind the player with SetCameraBehindPlayer.
   */
  static callNative(nativeName: 'InterpolateCameraPos', paramTypes: 'iffffffii', playerid: number, FromX: number, FromY: number, FromZ: number, ToX: number, ToY: number, ToZ: number, time: number, cut: number): number;
  /**
   * Calls the AMX native InterpolateCameraLookAt 
   *
   * @name samp.callNative
   * @param {string} [nativeName=InterpolateCameraLookAt] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player the camera should be moved for
   * @param {number} FromX - The X position the camera should start to move from
   * @param {number} FromY - The Y position the camera should start to move from
   * @param {number} FromZ - The Z position the camera should start to move from
   * @param {number} ToX - The X position the camera should move to
   * @param {number} ToY - The Y position the camera should move to
   * @param {number} ToZ - The Z position the camera should move to
   * @param {number} time - Time in milliseconds to complete interpolation
   * @param {number} cut - The &#x27;jumpcut&#x27; to use. Set to CAMERA_MOVE for interpolation (optional&#x3D;CAMERA_CUT)
   * @summary Interpolate a player&#x27;s camera&#x27;s &#x27;look at&#x27; point between two coordinates with a set speed. Can be be used with InterpolateCameraPos.
   * @see InterpolateCameraPos
   * @see SetPlayerCameraLookAt
   * @see SetPlayerCameraPos
   * @remarks This function was added in SA-MP 0.3e and will not work in earlier versions!
   * @remarks Use TogglePlayerSpectating to make objects stream in for the player while the camera is moving. You can reset the camera behind the player with SetCameraBehindPlayer.
   */
  static callNative(nativeName: 'InterpolateCameraLookAt', paramTypes: 'iffffffii', playerid: number, FromX: number, FromY: number, FromZ: number, ToX: number, ToY: number, ToZ: number, time: number, cut: number): number;
  /**
   * Calls the AMX native IsPlayerConnected 
   *
   * @name samp.callNative
   * @param {string} [nativeName=IsPlayerConnected] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to check
   * @summary Checks if a player is connected (if an ID is taken by a connected player).
   * @see IsPlayerAdmin
   * @see OnPlayerConnect
   * @see OnPlayerDisconnect
   * @remarks This function can be omitted in a lot of cases. Many other functions already have some sort of connection check built in.
   * @returns 1 if the player is connected, 0 if not.
   */
  static callNative(nativeName: 'IsPlayerConnected', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native IsPlayerInVehicle 
   *
   * @name samp.callNative
   * @param {string} [nativeName=IsPlayerInVehicle] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - ID of the player
   * @param {number} vehicleid - ID of the vehicle
   * @summary Checks if a player is in a specific vehicle.
   * @see IsPlayerInAnyVehicle
   * @see GetPlayerVehicleSeat
   * @returns 1 if the player is in the vehicle, 0 if not.
   */
  static callNative(nativeName: 'IsPlayerInVehicle', paramTypes: 'ii', playerid: number, vehicleid: number): number;
  /**
   * Calls the AMX native IsPlayerInAnyVehicle 
   *
   * @name samp.callNative
   * @param {string} [nativeName=IsPlayerInAnyVehicle] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to check
   * @summary Check if a player is inside any vehicle (as a driver or passenger).
   * @see IsPlayerInVehicle
   * @see GetPlayerVehicleSeat
   * @returns 1 if the player is in a vehicle, 0 if not.
   */
  static callNative(nativeName: 'IsPlayerInAnyVehicle', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native IsPlayerInCheckpoint 
   *
   * @name samp.callNative
   * @param {string} [nativeName=IsPlayerInCheckpoint] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The player you want to know the status of
   * @summary Check if the player is currently inside a checkpoint, this could be used for properties or teleport points for example.
   * @see SetPlayerCheckpoint
   * @see DisablePlayerCheckpoint
   * @see SetPlayerRaceCheckpoint
   * @see DisablePlayerRaceCheckpoint
   * @see IsPlayerInRaceCheckpoint
   * @see OnPlayerEnterCheckpoint
   * @see OnPlayerLeaveCheckpoint
   * @see OnPlayerEnterRaceCheckpoint
   * @see OnPlayerLeaveRaceCheckpoint
   * @returns 0 if player isn&#x27;t in his checkpoint else 1.
   */
  static callNative(nativeName: 'IsPlayerInCheckpoint', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native IsPlayerInRaceCheckpoint 
   *
   * @name samp.callNative
   * @param {string} [nativeName=IsPlayerInRaceCheckpoint] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to check
   * @summary Check if the player is inside their current set race checkpoint (SetPlayerRaceCheckpoint).
   * @see SetPlayerCheckpoint
   * @see DisablePlayerCheckpoint
   * @see IsPlayerInCheckpoint
   * @see SetPlayerRaceCheckpoint
   * @see DisablePlayerRaceCheckpoint
   * @see OnPlayerEnterCheckpoint
   * @see OnPlayerLeaveCheckpoint
   * @see OnPlayerEnterRaceCheckpoint
   * @see OnPlayerLeaveRaceCheckpoint
   * @returns 1 is the player is in a race checkpoint, 0 if not.
   */
  static callNative(nativeName: 'IsPlayerInRaceCheckpoint', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native SetPlayerVirtualWorld 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetPlayerVirtualWorld] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player you want to set the virtual world of
   * @param {number} worldid - The virtual world ID to put the player in
   * @summary Set the virtual world of a player. They can only see other players or vehicles that are in that same world.
   * @see GetPlayerVirtualWorld
   * @see SetVehicleVirtualWorld
   * @remarks The default virtual world is 0
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. This means the player is not connected.

   */
  static callNative(nativeName: 'SetPlayerVirtualWorld', paramTypes: 'ii', playerid: number, worldid: number): number;
  /**
   * Calls the AMX native GetPlayerVirtualWorld 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetPlayerVirtualWorld] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to get the virtual world of
   * @summary Retrieves the current virtual world the player is in.
   * @see SetPlayerVirtualWorld
   * @see GetVehicleVirtualWorld
   * @see GetPlayerInterior
   * @returns The ID of the virtual world the player is currently in.
   */
  static callNative(nativeName: 'GetPlayerVirtualWorld', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native EnableStuntBonusForPlayer 
   *
   * @name samp.callNative
   * @param {string} [nativeName=EnableStuntBonusForPlayer] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to toggle stunt bonuses for
   * @param {number} enable - 1 to enable stunt bonuses and 0 to disable them
   * @summary Toggle stunt bonuses for a player. Enabled by default.
   * @see EnableStuntBonusForAll
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. The player is not connected.

   */
  static callNative(nativeName: 'EnableStuntBonusForPlayer', paramTypes: 'ii', playerid: number, enable: number): number;
  /**
   * Calls the AMX native EnableStuntBonusForAll 
   *
   * @name samp.callNative
   * @param {string} [nativeName=EnableStuntBonusForAll] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} enable - 1 to enable stunt bonuses or 0 to disable them
   * @summary Enables or disables stunt bonuses for all players. If enabled, players will receive monetary rewards when performing a stunt in a vehicle (e.g. a wheelie).
   * @see EnableStuntBonusForPlayer
   */
  static callNative(nativeName: 'EnableStuntBonusForAll', paramTypes: 'i', enable: number): number;
  /**
   * Calls the AMX native TogglePlayerSpectating 
   *
   * @name samp.callNative
   * @param {string} [nativeName=TogglePlayerSpectating] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player who should spectate
   * @param {number} toggle - 1 to enable spectating and 0 to disable
   * @summary Toggle whether a player is in spectator mode or not. While in spectator mode a player can spectate (watch) other players and vehicles. After using this function, either PlayerSpectatePlayer or PlayerSpectateVehicle needs to be used.
   * @see PlayerSpectatePlayer
   * @see PlayerSpectateVehicle
   * @remarks If the player is not loaded in before setting the spectate status to false, the connection can be closed unexpectedly.
   * @remarks When spectator mode is disabled, OnPlayerSpawn will automatically be called, if you wish to restore player to state before spectating, you will have to handle that in OnPlayerSpawn. Note also, that player can also go to class selection before if they used F4 during spectate, a player also CAN die in spectate mode due to various glitches.
   * @remarks When a player is in spectate mode their HUD is hidden, making it useful for setting a player&#x27;s camera without the HUD. Also, objects near the player&#x27;s camera will be streamed in, making this useful for interpolating cameras.
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. The player does not exist.

   */
  static callNative(nativeName: 'TogglePlayerSpectating', paramTypes: 'ii', playerid: number, toggle: number): number;
  /**
   * Calls the AMX native PlayerSpectatePlayer 
   *
   * @name samp.callNative
   * @param {string} [nativeName=PlayerSpectatePlayer] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player that will spectate
   * @param {number} targetplayerid - The ID of the player that should be spectated
   * @param {number} mode - The mode to spectate with (optional&#x3D;SPECTATE_MODE_NORMAL)
   * @summary Makes a player spectate (watch) another player.
   * @see PlayerSpectateVehicle
   * @see TogglePlayerSpectating
   * @remarks Order is CRITICAL! Ensure that you use TogglePlayerSpectating before PlayerSpectatePlayer. 
   * @remarks playerid and targetplayerid&#x27;s virtual world and interior must be the same for this function to work properly. 
   * @remarks 
  Spectate modes:
  
    SPECTATE_MODE_NORMAL - normal spectate mode (third person point of view). Camera can not be changed.
    SPECTATE_MODE_FIXED  - use SetPlayerCameraPos after this to position the player&#x27;s camera, and it will track the player/vehicle set with PlayerSpectatePlayer/PlayerSpectateVehicle.
    SPECTATE_MODE_SIDE - the camera will be attached to the side of the player/vehicle (like when you&#x27;re in first-person camera on a bike and you do a wheelie).
  

   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. One of the players specified does not exist.

   */
  static callNative(nativeName: 'PlayerSpectatePlayer', paramTypes: 'iii', playerid: number, targetplayerid: number, mode: number): number;
  /**
   * Calls the AMX native PlayerSpectateVehicle 
   *
   * @name samp.callNative
   * @param {string} [nativeName=PlayerSpectateVehicle] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player who should spectate a vehicle
   * @param {number} targetvehicleid - The ID of the vehicle the player should spectate
   * @param {number} mode - The spectate mode. Can generally be left blank as it defaults to &#x27;normal&#x27;
   * @summary Sets a player to spectate another vehicle. Their camera will be attached to the vehicle as if they are driving it.
   * @see PlayerSpectatePlayer
   * @see TogglePlayerSpectating
   * @remarks Order is CRITICAL! Ensure that you use TogglePlayerSpectating before PlayerSpectatePlayer. 
   * @remarks playerid and targetvehicleid have to be in the same interior for this function to work properly. 
   * @returns 
  1: The function executed successfully. Note that success is reported if the player is not in spectator mode (TogglePlayerSpectating), but nothing will happen. TogglePlayerSpectating MUST be used first.
  0: The function failed to execute. The player, vehicle, or both don&#x27;t exist.

   */
  static callNative(nativeName: 'PlayerSpectateVehicle', paramTypes: 'iii', playerid: number, targetvehicleid: number, mode: number): number;
  /**
   * Calls the AMX native StartRecordingPlayerData 
   *
   * @name samp.callNative
   * @param {string} [nativeName=StartRecordingPlayerData] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to record
   * @param {number} recordtype - The type of recording
   * @param {string} recordname - The name of the file which will hold the recorded data. It will be saved in the scriptfiles directory, with an automatically added .rec extension, you will need to move the file to npcmodes/recordings to use for playback
   * @summary Starts recording a player&#x27;s movements to a file, which can then be reproduced by an NPC.
   * @see StopRecordingPlayerData
   * @remarks This function was added in SA-MP 0.3a and will not work in earlier versions!
   */
  static callNative(nativeName: 'StartRecordingPlayerData', paramTypes: 'iis', playerid: number, recordtype: number, recordname: string): number;
  /**
   * Calls the AMX native StopRecordingPlayerData 
   *
   * @name samp.callNative
   * @param {string} [nativeName=StopRecordingPlayerData] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The player you want to stop the recordings of
   * @summary Stops all the recordings that had been started with StartRecordingPlayerData for a specific player.
   * @see StartRecordingPlayerData
   * @remarks This function was added in SA-MP 0.3a and will not work in earlier versions!
   */
  static callNative(nativeName: 'StopRecordingPlayerData', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native SelectTextDraw 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SelectTextDraw] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player that should be able to select a textdraw
   * @param {number} hovercolor - The color of the textdraw when hovering over with mouse (RGBA)
   * @summary Display the cursor and allow the player to select a textdraw.
   * @see CancelSelectTextDraw
   * @see TextDrawSetSelectable
   * @see PlayerTextDrawSetSelectable
   * @see OnPlayerClickTextDraw
   * @see OnPlayerClickPlayerTextDraw
   * @remarks This function was added in SA-MP 0.3e and will not work in earlier versions!
   * @remarks TextDrawSetSelectable or PlayerTextDrawSetSelectable MUST be used first, to allow a textdraw to be selectable.
   * @remarks It is the TEXT which will be highlighted when hovered over, NOT the box (if one is shown).
   */
  static callNative(nativeName: 'SelectTextDraw', paramTypes: 'ii', playerid: number, hovercolor: number): number;
  /**
   * Calls the AMX native CancelSelectTextDraw 
   *
   * @name samp.callNative
   * @param {string} [nativeName=CancelSelectTextDraw] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player that should be the textdraw selection disabled
   * @summary Cancel textdraw selection with the mouse.
   * @see SelectTextDraw
   * @see TextDrawSetSelectable
   * @see OnPlayerClickTextDraw
   * @remarks This function was added in SA-MP 0.3e and will not work in earlier versions!
   * @remarks This function calls OnPlayerClickTextDraw with INVALID_TEXT_DRAW (65535). Using this function inside OnPlayerClickTextDraw without catching this case will cause clients to go into an infinite loop.
   */
  static callNative(nativeName: 'CancelSelectTextDraw', paramTypes: 'i', playerid: number): number;
  /**
   * Calls the AMX native CreateExplosionForPlayer 
   *
   * @name samp.callNative
   * @param {string} [nativeName=CreateExplosionForPlayer] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - The ID of the player to create the explosion for
   * @param {number} X - The X coordinate of the explosion
   * @param {number} Y - The Y coordinate of the explosion
   * @param {number} Z - The Z coordinate of the explosion
   * @param {number} type - The explosion type
   * @param {number} Radius - The radius of the explosion
   * @summary Creates an explosion that is only visible to a single player. This can be used to isolate explosions from other players or to make them only appear in specific virtual worlds.
   * @see CreateExplosion
   * @remarks This function was added in SA-MP 0.3z R2-2 and will not work in earlier versions!
   * @remarks There is a limit as to how many explosions can be seen at once by a player. This is roughly 10.
   * @returns This function always returns 1, even if the function failed to excute (player doesn&#x27;t exist, invalid radius, or invalid explosion type).
   */
  static callNative(nativeName: 'CreateExplosionForPlayer', paramTypes: 'ifffif', playerid: number, X: number, Y: number, Z: number, type: number, Radius: number): number;
  /**
   * Calls the AMX native SendClientCheck 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SendClientCheck] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} playerid - 
   * @param {number} type - 
   * @param {number} memAddr - 
   * @param {number} memOffset - 
   * @param {number} byteCount - 
   */
  static callNative(nativeName: 'SendClientCheck', paramTypes: 'iiiii', playerid: number, type: number, memAddr: number, memOffset: number, byteCount: number): number;
  /**
   * Calls the AMX native db_open 
   *
   * @name samp.callNative
   * @param {string} [nativeName=db_open] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {string} name - 
   */
  static callNative(nativeName: 'db_open', paramTypes: 's', name: string): number;
  /**
   * Calls the AMX native db_close 
   *
   * @name samp.callNative
   * @param {string} [nativeName=db_close] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} db - 
   */
  static callNative(nativeName: 'db_close', paramTypes: 'i', db: number): number;
  /**
   * Calls the AMX native db_query 
   *
   * @name samp.callNative
   * @param {string} [nativeName=db_query] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} db - 
   * @param {string} query - 
   */
  static callNative(nativeName: 'db_query', paramTypes: 'is', db: number, query: string): number;
  /**
   * Calls the AMX native db_free_result 
   *
   * @name samp.callNative
   * @param {string} [nativeName=db_free_result] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} dbresult - 
   */
  static callNative(nativeName: 'db_free_result', paramTypes: 'i', dbresult: number): number;
  /**
   * Calls the AMX native db_num_rows 
   *
   * @name samp.callNative
   * @param {string} [nativeName=db_num_rows] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} dbresult - 
   */
  static callNative(nativeName: 'db_num_rows', paramTypes: 'i', dbresult: number): number;
  /**
   * Calls the AMX native db_next_row 
   *
   * @name samp.callNative
   * @param {string} [nativeName=db_next_row] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} dbresult - 
   */
  static callNative(nativeName: 'db_next_row', paramTypes: 'i', dbresult: number): number;
  /**
   * Calls the AMX native db_num_fields 
   *
   * @name samp.callNative
   * @param {string} [nativeName=db_num_fields] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} dbresult - 
   */
  static callNative(nativeName: 'db_num_fields', paramTypes: 'i', dbresult: number): number;
  /**
   * Calls the AMX native db_field_name 
   *
   * @name samp.callNative
   * @param {string} [nativeName=db_field_name] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} dbresult - 
   * @param {number} field - 
   * @param {number} maxlength - 
   */
  static callNative(nativeName: 'db_field_name', paramTypes: 'iiSi', dbresult: number, field: number, maxlength: number): string;
  /**
   * Calls the AMX native db_get_field 
   *
   * @name samp.callNative
   * @param {string} [nativeName=db_get_field] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} dbresult - 
   * @param {number} field - 
   * @param {number} maxlength - 
   */
  static callNative(nativeName: 'db_get_field', paramTypes: 'iiSi', dbresult: number, field: number, maxlength: number): string;
  /**
   * Calls the AMX native db_get_field_int 
   *
   * @name samp.callNative
   * @param {string} [nativeName=db_get_field_int] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} result - 
   * @param {number} field - 
   */
  static callNative(nativeName: 'db_get_field_int', paramTypes: 'ii', result: number, field: number): number;
  /**
   * Calls the AMX native db_get_field_float that returns a value with a Float tag
   *
   * @name samp.callNativeFloat
   * @param {string} [nativeName=db_get_field_float] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} result - 
   * @param {number} field - 
   */
  static callNativeFloat(nativeName: 'db_get_field_float', paramTypes: 'ii', result: number, field: number): number;
  /**
   * Calls the AMX native db_get_field_assoc 
   *
   * @name samp.callNative
   * @param {string} [nativeName=db_get_field_assoc] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} dbresult - 
   * @param {string} field - 
   * @param {number} maxlength - 
   */
  static callNative(nativeName: 'db_get_field_assoc', paramTypes: 'isSi', dbresult: number, field: string, maxlength: number): string;
  /**
   * Calls the AMX native db_get_field_assoc_int 
   *
   * @name samp.callNative
   * @param {string} [nativeName=db_get_field_assoc_int] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} result - 
   * @param {string} field - 
   */
  static callNative(nativeName: 'db_get_field_assoc_int', paramTypes: 'is', result: number, field: string): number;
  /**
   * Calls the AMX native db_get_field_assoc_float that returns a value with a Float tag
   *
   * @name samp.callNativeFloat
   * @param {string} [nativeName=db_get_field_assoc_float] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} result - 
   * @param {string} field - 
   */
  static callNativeFloat(nativeName: 'db_get_field_assoc_float', paramTypes: 'is', result: number, field: string): number;
  /**
   * Calls the AMX native db_get_mem_handle 
   *
   * @name samp.callNative
   * @param {string} [nativeName=db_get_mem_handle] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} db - 
   */
  static callNative(nativeName: 'db_get_mem_handle', paramTypes: 'i', db: number): number;
  /**
   * Calls the AMX native db_get_result_mem_handle 
   *
   * @name samp.callNative
   * @param {string} [nativeName=db_get_result_mem_handle] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} result - 
   */
  static callNative(nativeName: 'db_get_result_mem_handle', paramTypes: 'i', result: number): number;
  /**
   * Calls the AMX native db_debug_openfiles 
   *
   * @name samp.callNative
   * @param {string} [nativeName=db_debug_openfiles] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   */
  static callNative(nativeName: 'db_debug_openfiles', paramTypes: ''): number;
  /**
   * Calls the AMX native db_debug_openresults 
   *
   * @name samp.callNative
   * @param {string} [nativeName=db_debug_openresults] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   */
  static callNative(nativeName: 'db_debug_openresults', paramTypes: ''): number;
  /**
   * Calls the AMX native CreateVehicle 
   *
   * @name samp.callNative
   * @param {string} [nativeName=CreateVehicle] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} vehicletype - The model for the vehicle
   * @param {number} x - The X coordinate for the vehicle
   * @param {number} y - The Y coordinate for the vehicle
   * @param {number} z - The Z coordinate for the vehicle
   * @param {number} rotation - The facing angle for the vehicle
   * @param {number} color1 - The primary color ID
   * @param {number} color2 - The secondary color ID
   * @param {number} respawn_delay - The delay until the car is respawned without a driver in seconds. Using -1 will prevent the vehicle from respawning
   * @param {number} addsiren - Added in 0.3.7; will not work in earlier versions. Enables the vehicle to have a siren, providing the vehicle has a horn (optional&#x3D;0)
   * @summary Creates a vehicle in the world. Can be used in place of AddStaticVehicleEx at any time in the script.
   * @see DestroyVehicle
   * @see AddStaticVehicle
   * @see AddStaticVehicleEx
   * @see GetVehicleParamsSirenState
   * @see OnVehicleSpawn
   * @see OnVehicleSirenStateChange
   * @remarks Trains can only be added with AddStaticVehicle and AddStaticVehicleEx.
   * @returns 
  The vehicle ID of the vehicle created (1 to MAX_VEHICLES).
  INVALID_VEHICLE_ID (65535) if vehicle was not created (vehicle limit reached or invalid vehicle model ID passed).

   */
  static callNative(nativeName: 'CreateVehicle', paramTypes: 'iffffiiii', vehicletype: number, x: number, y: number, z: number, rotation: number, color1: number, color2: number, respawn_delay: number, addsiren: number): number;
  /**
   * Calls the AMX native DestroyVehicle 
   *
   * @name samp.callNative
   * @param {string} [nativeName=DestroyVehicle] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} vehicleid - The ID of the vehicle to destroy
   * @summary Destroy a vehicle. It will disappear instantly.
   * @see CreateVehicle
   * @see RemovePlayerFromVehicle
   * @see SetVehicleToRespawn
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. The vehicle does not exist.

   */
  static callNative(nativeName: 'DestroyVehicle', paramTypes: 'i', vehicleid: number): number;
  /**
   * Calls the AMX native IsVehicleStreamedIn 
   *
   * @name samp.callNative
   * @param {string} [nativeName=IsVehicleStreamedIn] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} vehicleid - The ID of the vehicle to check
   * @param {number} forplayerid - The ID of the player to check
   * @summary Checks if a vehicle is streamed in for a player. Only nearby vehicles are streamed in (visible) for a player.
   * @see IsPlayerStreamedIn
   * @see OnVehicleStreamIn
   * @see OnVehicleStreamOut
   * @see OnPlayerStreamIn
   * @see OnPlayerStreamOut
   * @remarks This function was added in SA-MP 0.3a and will not work in earlier versions!
   * @returns 
  0: Vehicle is not streamed in for the player, or the function failed to execute (player and/or vehicle do not exist).
  1: Vehicle is streamed in for the player.

   */
  static callNative(nativeName: 'IsVehicleStreamedIn', paramTypes: 'ii', vehicleid: number, forplayerid: number): number;
  /**
   * Calls the AMX native GetVehiclePos 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetVehiclePos] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} vehicleid - The ID of the vehicle to get the position of
   * @summary Gets the position of a vehicle.
   * @see GetVehicleDistanceFromPoint
   * @see SetVehiclePos
   * @see GetVehicleZAngle
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. The vehicle specified does not exist.

   */
  static callNative(nativeName: 'GetVehiclePos', paramTypes: 'iFFF', vehicleid: number): Array<any>;
  /**
   * Calls the AMX native SetVehiclePos 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetVehiclePos] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} vehicleid - Vehicle ID that you want set new position
   * @param {number} x - The X coordinate to position the vehicle at
   * @param {number} y - The Y coordinate to position the vehicle at
   * @param {number} z - The Z coordinate to position the vehicle at
   * @summary Set a vehicle&#x27;s position.
   * @see SetPlayerPos
   * @see GetVehiclePos
   * @see SetVehicleZAngle
   * @remarks An empty vehicle will not fall after being teleported into the air.
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. The vehicle specified does not exist.

   */
  static callNative(nativeName: 'SetVehiclePos', paramTypes: 'ifff', vehicleid: number, x: number, y: number, z: number): number;
  /**
   * Calls the AMX native GetVehicleZAngle 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetVehicleZAngle] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} vehicleid - The ID of the vehicle to get the Z angle of
   * @summary Get the rotation of a vehicle on the Z axis (yaw).
   * @see GetVehicleRotationQuat
   * @see GetVehicleRotation
   * @see SetVehicleZAngle
   * @see GetVehiclePos
   * @see GetPlayerFacingAngle
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. This means the vehicle does not exist.

   */
  static callNative(nativeName: 'GetVehicleZAngle', paramTypes: 'iF', vehicleid: number): number;
  /**
   * Calls the AMX native GetVehicleRotationQuat 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetVehicleRotationQuat] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} vehicleid - The ID of the vehicle to get the rotation of
   * @summary Returns a vehicle&#x27;s rotation on all axes as a quaternion.
   * @see GetVehicleZAngle
   * @remarks This function was added in SA-MP 0.3b and will not work in earlier versions!
   * @remarks 
  To euler:
  
    //GetVehicleRotation Created by IllidanS4
    stock GetVehicleRotation(vehicleid,&amp;Float:rx,&amp;Float:ry,&amp;Float:rz){
    	new Float:qw,Float:qx,Float:qy,Float:qz;
    	GetVehicleRotationQuat(vehicleid,qw,qx,qy,qz);
    	rx &#x3D; asin(2*qy*qz-2*qx*qw);
    	ry &#x3D; -atan2(qx*qz+qy*qw,0.5-qx*qx-qy*qy);
    	rz &#x3D; -atan2(qx*qy+qz*qw,0.5-qx*qx-qz*qz);
    }
  

   * @remarks There is no &#x27;set&#x27; variation of this function; you can not SET a vehicle&#x27;s rotation (apart from the Z angle) 
   * @remarks This function may return incorrect values for unoccupied vehicles. The reason is that the third row of the vehicle&#x27;s internal rotation matrix gets corrupted if it gets updated while unoccupied. 
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. This means the vehicle specified does not exist.

   */
  static callNative(nativeName: 'GetVehicleRotationQuat', paramTypes: 'iFFFF', vehicleid: number): Array<any>;
  /**
   * Calls the AMX native GetVehicleDistanceFromPoint that returns a value with a Float tag
   *
   * @name samp.callNativeFloat
   * @param {string} [nativeName=GetVehicleDistanceFromPoint] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} vehicleid - The ID of the vehicle to calculate the distance for
   * @param {number} X - The X map coordinate
   * @param {number} Y - The Y map coordinate
   * @param {number} Z - The Z map coordinate
   * @summary This function can be used to calculate the distance (as a float) between a vehicle and another map coordinate. This can be useful to detect how far a vehicle away is from a location.
   * @see GetPlayerDistanceFromPoint
   * @see GetVehiclePos
   * @remarks This function was added in SA-MP 0.3c R3 and will not work in earlier versions!
   * @returns A float containing the distance from the point specified in the coordinates.
   */
  static callNativeFloat(nativeName: 'GetVehicleDistanceFromPoint', paramTypes: 'ifff', vehicleid: number, X: number, Y: number, Z: number): number;
  /**
   * Calls the AMX native SetVehicleZAngle 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetVehicleZAngle] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} vehicleid - The ID of the vehicle to set the rotation of
   * @param {number} z_angle - The Z angle to set
   * @summary Set the Z rotation (yaw) of a vehicle.
   * @see GetVehicleZAngle
   * @see SetVehiclePos
   * @remarks A vehicle&#x27;s X and Y (pitch and roll) rotation will be reset when this function is used. The X and Y rotations can not be set.
   * @remarks This function does not work on unoccupied vehicles.
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. The vehicle specified does not exist.

   */
  static callNative(nativeName: 'SetVehicleZAngle', paramTypes: 'if', vehicleid: number, z_angle: number): number;
  /**
   * Calls the AMX native SetVehicleParamsForPlayer 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetVehicleParamsForPlayer] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} vehicleid - 
   * @param {number} playerid - The ID of the player to set the vehicle&#x27;s parameters for
   * @param {number} objective - 0 to disable the objective or 1 to show it. This is a bobbing yellow arrow above the vehicle
   * @param {number} doorslocked - 0 to unlock the doors or 1 to lock them
   * @summary Set the parameters of a vehicle for a player.
   * @see SetVehicleParamsEx
   * @remarks Vehicles must be respawned for the &#x27;objective&#x27; to be removed. This can be circumvented somewhat using Get/SetVehicleParamsEx which do not require the vehicle to be respawned. It is worth noting however that the object will be disabled on a global scale, and this is only useful if only one player has the vehicle as an objective.
   * @remarks Since 0.3a you will have to reapply this function when OnVehicleStreamIn is called.
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. The player and/or vehicle specified do not exist.

   */
  static callNative(nativeName: 'SetVehicleParamsForPlayer', paramTypes: 'iiii', vehicleid: number, playerid: number, objective: number, doorslocked: number): number;
  /**
   * Calls the AMX native ManualVehicleEngineAndLights 
   *
   * @name samp.callNative
   * @param {string} [nativeName=ManualVehicleEngineAndLights] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @summary Use this function before any player connects (OnGameModeInit) to tell all clients that the script will control vehicle engines and lights. This prevents the game automatically turning the engine on/off when players enter/exit vehicles and headlights automatically coming on when it is dark.
   * @see SetVehicleParamsEx
   * @see GetVehicleParamsEx
   * @see SetVehicleParamsForPlayer
   * @remarks This Function was added in SA-MP 0.3c and will not work in earlier versions!
   * @remarks Is it not possible to reverse this function after it has been used. You must either use it or not use it.
   * @returns This function always returns 1. It cannot fail to execute.
   */
  static callNative(nativeName: 'ManualVehicleEngineAndLights', paramTypes: ''): number;
  /**
   * Calls the AMX native SetVehicleParamsEx 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetVehicleParamsEx] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} vehicleid - The ID of the vehicle to set the parameters of
   * @param {number} engine - Engine status. 0 - Off, 1 - On
   * @param {number} lights - Light status. 0 - Off, 1 - On
   * @param {number} alarm - Vehicle alarm status. If on, the alarm starts. 0 - Off, 1 - On
   * @param {number} doors - Door lock status. 0 - Unlocked, 1 - Locked
   * @param {number} bonnet - Bonnet (hood) status. 0 - Closed, 1 - Open
   * @param {number} boot - Boot/trunk status. 0 - Closed, 1 - Open
   * @param {number} objective - Toggle the objective arrow above the vehicle. 0 - Off, 1 - On
   * @summary Sets a vehicle&#x27;s parameters for all players.
   * @see GetVehicleParamsEx
   * @see SetVehicleParamsForPlayer
   * @see UpdateVehicleDamageStatus
   * @remarks This function was added in SA-MP 0.3c and will not work in earlier versions! 
   * @remarks The alarm will not reset when finished, you&#x27;ll need to reset it by yourself with this function. 
   * @remarks Lights also operate during the day (Only when ManualVehicleEngineAndLights is enabled). 
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. This means the vehicle does not exist.

   */
  static callNative(nativeName: 'SetVehicleParamsEx', paramTypes: 'iiiiiiii', vehicleid: number, engine: number, lights: number, alarm: number, doors: number, bonnet: number, boot: number, objective: number): number;
  /**
   * Calls the AMX native GetVehicleParamsEx 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetVehicleParamsEx] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} vehicleid - The ID of the vehicle to get the parameters from
   * @summary Gets a vehicle&#x27;s parameters.
   * @see SetVehicleParamsEx
   * @remarks This function was added in SA-MP 0.3c and will not work in earlier versions!
   * @remarks If a parameter is unset (SetVehicleParamsEx not used beforehand) the value will be -1 (&#x27;unset&#x27;).
   */
  static callNative(nativeName: 'GetVehicleParamsEx', paramTypes: 'iIIIIIII', vehicleid: number): Array<any>;
  /**
   * Calls the AMX native GetVehicleParamsSirenState 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetVehicleParamsSirenState] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} vehicleid - The ID of the vehicle to get the siren state of
   * @summary Returns a vehicle&#x27;s siren state (on/off).
   * @see OnVehicleSirenStateChange
   * @remarks This function was added in SA-MP 0.3c R3 and will not work in earlier versions!
   * @returns -1 if unset (off), 0 if off, 1 if on
   */
  static callNative(nativeName: 'GetVehicleParamsSirenState', paramTypes: 'i', vehicleid: number): number;
  /**
   * Calls the AMX native SetVehicleParamsCarDoors 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetVehicleParamsCarDoors] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} vehicleid - The ID of the vehicle to set the door state of
   * @param {number} driver - The state of the driver&#x27;s door. 1 to open, 0 to close
   * @param {number} passenger - The state of the passenger door. 1 to open, 0 to close
   * @param {number} backleft - The state of the rear left door (if available). 1 to open, 0 to close
   * @param {number} backright - The state of the rear right door (if available). 1 to open, 0 to close
   * @summary Allows you to open and close the doors of a vehicle.
   * @see GetVehicleParamsCarDoors
   * @see SetVehicleParamsCarWindows
   * @see GetVehicleParamsCarWindows
   * @remarks This function was added in SA-MP 0.3.7 and will not work in earlier versions!
   * @remarks 1 is open, 0 is closed
   */
  static callNative(nativeName: 'SetVehicleParamsCarDoors', paramTypes: 'iiiii', vehicleid: number, driver: number, passenger: number, backleft: number, backright: number): number;
  /**
   * Calls the AMX native GetVehicleParamsCarDoors 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetVehicleParamsCarDoors] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} vehicleid - The ID of the vehicle
   * @summary Allows you to retrieve the current state of a vehicle&#x27;s doors.
   * @see SetVehicleParamsCarDoors
   * @see SetVehicleParamsCarWindows
   * @see GetVehicleParamsCarWindows
   * @remarks This function was added in SA-MP 0.3.7 and will not work in earlier versions!
   * @remarks The values returned in each variable are as follows: -1 if not set, 0 if closed, 1 if open.
   */
  static callNative(nativeName: 'GetVehicleParamsCarDoors', paramTypes: 'iIIII', vehicleid: number): Array<any>;
  /**
   * Calls the AMX native SetVehicleParamsCarWindows 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetVehicleParamsCarWindows] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} vehicleid - The ID of the vehicle to set the window state of
   * @param {number} driver - The state of the driver&#x27;s window. 0 to open, 1 to close
   * @param {number} passenger - The state of the passenger window. 0 to open, 1 to close
   * @param {number} backleft - The state of the rear left window (if available). 0 to open, 1 to close
   * @param {number} backright - The state of the rear right window (if available). 0 to open, 1 to close
   * @summary Allows you to open and close the windows of a vehicle.
   * @see SetVehicleParamsCarDoors
   * @see GetVehicleParamsCarDoors
   * @see GetVehicleParamsCarWindows
   * @remarks This function was added in SA-MP 0.3.7 and will not work in earlier versions!
   */
  static callNative(nativeName: 'SetVehicleParamsCarWindows', paramTypes: 'iiiii', vehicleid: number, driver: number, passenger: number, backleft: number, backright: number): number;
  /**
   * Calls the AMX native GetVehicleParamsCarWindows 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetVehicleParamsCarWindows] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} vehicleid - The ID of the vehicle
   * @summary Allows you to retrieve the current state of a vehicle&#x27;s windows.
   * @see SetVehicleParamsCarWindows
   * @see GetVehicleParamsCarDoors
   * @see SetVehicleParamsCarDoors
   * @remarks This function was added in SA-MP 0.3.7 and will not work in earlier versions!
   * @remarks The values returned in each variable are as follows: -1 if not set, 0 if closed, 1 if open.
   * @returns The vehicle&#x27;s windows state is stored in the specified variables.
   */
  static callNative(nativeName: 'GetVehicleParamsCarWindows', paramTypes: 'iIIII', vehicleid: number): Array<any>;
  /**
   * Calls the AMX native SetVehicleToRespawn 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetVehicleToRespawn] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} vehicleid - The ID of the vehicle to respawn
   * @summary Sets a vehicle back to the position at where it was created.
   * @see CreateVehicle
   * @see DestroyVehicle
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. The vehicle does not exist.

   */
  static callNative(nativeName: 'SetVehicleToRespawn', paramTypes: 'i', vehicleid: number): number;
  /**
   * Calls the AMX native LinkVehicleToInterior 
   *
   * @name samp.callNative
   * @param {string} [nativeName=LinkVehicleToInterior] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} vehicleid - The ID of the vehicle to link to an interior
   * @param {number} interiorid - The Interior ID to link it to
   * @summary Links a vehicle to an interior. Vehicles can only be seen by players in the same interior (SetPlayerInterior).
   * @see SetVehicleVirtualWorld
   * @see SetPlayerInterior
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. This means the vehicle does not exist.

   */
  static callNative(nativeName: 'LinkVehicleToInterior', paramTypes: 'ii', vehicleid: number, interiorid: number): number;
  /**
   * Calls the AMX native AddVehicleComponent 
   *
   * @name samp.callNative
   * @param {string} [nativeName=AddVehicleComponent] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} vehicleid - The ID of the vehicle to add the component to. Not to be confused with modelid
   * @param {number} componentid - The ID of the component to add to the vehicle
   * @summary Adds a &#x27;component&#x27; (often referred to as a &#x27;mod&#x27; (modification)) to a vehicle. Valid components can be found here.
   * @see RemoveVehicleComponent
   * @see GetVehicleComponentInSlot
   * @see GetVehicleComponentType
   * @see OnVehicleMod
   * @see OnEnterExitModShop
   * @remarks Using an invalid component ID crashes the player&#x27;s game. There are no internal checks for this.
   * @returns 
  
    0 - The component was not added because the vehicle does not exist.
    1 - The component was successfully added to the vehicle.
  

   */
  static callNative(nativeName: 'AddVehicleComponent', paramTypes: 'ii', vehicleid: number, componentid: number): number;
  /**
   * Calls the AMX native RemoveVehicleComponent 
   *
   * @name samp.callNative
   * @param {string} [nativeName=RemoveVehicleComponent] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} vehicleid - ID of the vehicle
   * @param {number} componentid - ID of the component to remove
   * @summary Remove a component from a vehicle.
   * @see AddVehicleComponent
   * @see GetVehicleComponentInSlot
   * @see GetVehicleComponentType
   * @see OnVehicleMod
   * @see OnEnterExitModShop
   */
  static callNative(nativeName: 'RemoveVehicleComponent', paramTypes: 'ii', vehicleid: number, componentid: number): number;
  /**
   * Calls the AMX native ChangeVehicleColor 
   *
   * @name samp.callNative
   * @param {string} [nativeName=ChangeVehicleColor] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} vehicleid - The ID of the vehicle to change the colors of
   * @param {number} color1 - The new vehicle&#x27;s primary Color ID
   * @param {number} color2 - The new vehicle&#x27;s secondary Color ID
   * @summary Change a vehicle&#x27;s primary and secondary colors.
   * @see ChangeVehiclePaintjob
   * @see OnVehicleRespray
   * @remarks Some vehicles have only a primary color and some can not have the color changed at all. A few (cement, squallo) have 4 colors, of which 2 can not be changed in SA:MP
   * @returns 
  1: The function executed successfully. The vehicle&#x27;s color was successfully changed.
  0: The function failed to execute. The vehicle does not exist.

   */
  static callNative(nativeName: 'ChangeVehicleColor', paramTypes: 'iii', vehicleid: number, color1: number, color2: number): number;
  /**
   * Calls the AMX native ChangeVehiclePaintjob 
   *
   * @name samp.callNative
   * @param {string} [nativeName=ChangeVehiclePaintjob] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} vehicleid - The ID of the vehicle to change the paintjob of
   * @param {number} paintjobid - The ID of the Paintjob to apply. Use 3 to remove a paintjob
   * @summary Change a vehicle&#x27;s paintjob (for plain colors see ChangeVehicleColor).
   * @see ChangeVehicleColor
   * @see OnVehiclePaintjob
   * @remarks 
  Known Bugs:
  This function calls OnVehicleRespray.
  Vehicles change their color to white anymore when a paintjob is removed.

   * @returns This function always returns 1 (success), even if the vehicle passed is not created.
   */
  static callNative(nativeName: 'ChangeVehiclePaintjob', paramTypes: 'ii', vehicleid: number, paintjobid: number): number;
  /**
   * Calls the AMX native SetVehicleHealth 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetVehicleHealth] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} vehicleid - The ID of the vehicle to set the health of
   * @param {number} health - The health, given as a float value
   * @summary Set a vehicle&#x27;s health. When a vehicle&#x27;s health decreases the engine will produce smoke, and finally fire when it decreases to less than 250 (25%).
   * @see GetVehicleHealth
   * @see RepairVehicle
   * @see SetPlayerHealth
   * @see OnVehicleDeath
   * @remarks Full vehicle health is 1000, however higher values are possible and increase the health of the vehicle.
   * @remarks 
  Health:
  
    &gt; 650 - undamaged
    650-550 - white Smoke
    550-390 - grey Smoke
    390-250 - black Smoke
    &lt; 250 - on fire (will explode seconds later)
  

   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. This means the vehicle does not exist.

   */
  static callNative(nativeName: 'SetVehicleHealth', paramTypes: 'if', vehicleid: number, health: number): number;
  /**
   * Calls the AMX native GetVehicleHealth 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetVehicleHealth] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} vehicleid - The ID of the vehicle to get the health of
   * @summary Get the health of a vehicle.
   * @see SetVehicleHealth
   * @see GetPlayerHealth
   * @see GetPlayerArmour
   * @remarks Full vehicle health is 1000, however higher values are possible and increase the health of the vehicle.
   * @remarks 
  Health:
  
    &gt; 650 - undamaged
    650-550 - white Smoke
    550-390 - grey Smoke
    390-250 - black Smoke
    &lt; 250 - on fire (will explode seconds later)
  

   * @returns 
  1 - success.
  0 - failure (invalid vehicle ID).

   */
  static callNative(nativeName: 'GetVehicleHealth', paramTypes: 'iF', vehicleid: number): number;
  /**
   * Calls the AMX native AttachTrailerToVehicle 
   *
   * @name samp.callNative
   * @param {string} [nativeName=AttachTrailerToVehicle] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} trailerid - The ID of the vehicle that will be pulled
   * @param {number} vehicleid - The ID of the vehicle that will pull the trailer
   * @summary Attach a vehicle to another vehicle as a trailer.
   * @see DetachTrailerFromVehicle
   * @see IsTrailerAttachedToVehicle
   * @see GetVehicleTrailer
   * @remarks This will only work if both vehicles are streamed in for a player (check IsVehicleStreamedIn).
   * @returns This function always returns 1, even if neither of the vehicle IDs passed are valid.
   */
  static callNative(nativeName: 'AttachTrailerToVehicle', paramTypes: 'ii', trailerid: number, vehicleid: number): number;
  /**
   * Calls the AMX native DetachTrailerFromVehicle 
   *
   * @name samp.callNative
   * @param {string} [nativeName=DetachTrailerFromVehicle] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} vehicleid - ID of the pulling vehicle
   * @summary Detach the connection between a vehicle and its trailer, if any.
   * @see AttachTrailerToVehicle
   * @see IsTrailerAttachedToVehicle
   * @see GetVehicleTrailer
   */
  static callNative(nativeName: 'DetachTrailerFromVehicle', paramTypes: 'i', vehicleid: number): number;
  /**
   * Calls the AMX native IsTrailerAttachedToVehicle 
   *
   * @name samp.callNative
   * @param {string} [nativeName=IsTrailerAttachedToVehicle] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} vehicleid - The ID of the vehicle to check for trailers
   * @summary Checks if a vehicle has a trailer attached to it. Use GetVehicleTrailer to get the vehicle ID of the trailer (if any).
   * @see GetVehicleTrailer
   * @see AttachTrailerToVehicle
   * @see DetachTrailerFromVehicle
   * @returns 1 if the vehicle has a trailer attached, 0 if not.
   */
  static callNative(nativeName: 'IsTrailerAttachedToVehicle', paramTypes: 'i', vehicleid: number): number;
  /**
   * Calls the AMX native GetVehicleTrailer 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetVehicleTrailer] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} vehicleid - The ID of the vehicle to get the trailer of
   * @summary Get the ID of the trailer attached to a vehicle.
   * @see AttachTrailerToVehicle
   * @see DetachTrailerFromVehicle
   * @see IsTrailerAttachedToVehicle
   * @returns The vehicle ID of the trailer or 0 if no trailer is attached.
   */
  static callNative(nativeName: 'GetVehicleTrailer', paramTypes: 'i', vehicleid: number): number;
  /**
   * Calls the AMX native SetVehicleNumberPlate 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetVehicleNumberPlate] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} vehicleid - The ID of the vehicle to set the number plate of
   * @param {string} numberplate - The text that should be displayed on the number plate
   * @summary Set a vehicle numberplate.
   * @see SetVehicleToRespawn
   * @see ChangeVehicleColor
   * @see ChangeVehiclePaintjob
   * @remarks This function was added in SA-MP 0.3c and will not work in earlier versions!
   * @remarks You can use color embedding on the number plate text.
   * @remarks 
  This function has no internal error checking. Do not assign custom number plates to vehicles without plates (boats, planes, etc) as this will result in some unneeded processing time on the client.
  The vehicle must be re-spawned or re-streamed for the changes to take effect.
  There&#x27;s a limit of 32 characters on each number plate (including embedded colors).
  The text length that can be seen on the number plate is around 9 to 10 characters, more characters will cause the text to split.
  Some vehicle models has a backward number plate, e.g. Boxville (498) (as an alternative to this vehicle you can use vehicle model ID 609, which is a duplicated Boxville (aka Boxburg), but with a regular number plate).
  This function only works in versions 0.2.1, 0.2.2, 0.2x and 0.3c (and beyond). 

   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. The vehicle does not exist.

   */
  static callNative(nativeName: 'SetVehicleNumberPlate', paramTypes: 'is', vehicleid: number, numberplate: string): number;
  /**
   * Calls the AMX native GetVehicleModel 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetVehicleModel] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} vehicleid - The ID of the vehicle to get the model of
   * @summary Gets the model ID of a vehicle.
   * @see GetPlayerVehicleID
   * @see GetVehiclePos
   * @see GetVehicleZAngle
   * @see GetPlayerVehicleSeat
   * @returns The vehicle&#x27;s model ID, or 0 if the vehicle doesn&#x27;t exist.
   */
  static callNative(nativeName: 'GetVehicleModel', paramTypes: 'i', vehicleid: number): number;
  /**
   * Calls the AMX native GetVehicleComponentInSlot 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetVehicleComponentInSlot] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} vehicleid - The ID of the vehicle to check for the component
   * @param {number} slot - The component slot to check for components (see below)
   * @summary Retrieves the installed component ID (modshop mod(ification)) on a vehicle in a specific slot.
   * @see AddVehicleComponent
   * @see GetVehicleComponentType
   * @see OnVehicleMod
   * @see OnEnterExitModShop
   * @remarks This function was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks 
  Slots:
  
    CARMODTYPE_SPOILER
    CARMODTYPE_HOOD
    CARMODTYPE_ROOF
    CARMODTYPE_SIDESKIRT
    CARMODTYPE_LAMPS
    CARMODTYPE_NITRO
    CARMODTYPE_EXHAUST
    CARMODTYPE_WHEELS
    CARMODTYPE_STEREO
    CARMODTYPE_HYDRAULICS
    CARMODTYPE_FRONT_BUMPER
    CARMODTYPE_REAR_BUMPER
    CARMODTYPE_VENT_RIGHT
    CARMODTYPE_VENT_LEFT
  

   * @remarks 
  Known Bugs:
  
    Doesn&#x27;t work for CARMODTYPE_STEREO.
    Both front bull bars and front bumper components are saved in the CARMODTYPE_FRONT_BUMPER slot. If a vehicle has both of them installed, this function will only return the one which was installed last.
    Both rear bull bars and rear bumper components are saved in the CARMODTYPE_REAR_BUMPER slot. If a vehicle has both of them installed, this function will only return the one which was installed last.
    Both left side skirt and right side skirt are saved in the CARMODTYPE_SIDESKIRT slot. If a vehicle has both of them installed, this function will only return the one which was installed last. 
  

   * @returns The ID of the component installed in the specified slot. Returns 0 if no component in specified vehicle&#x27;s specified slot, or if vehicle doesn&#x27;t exist.
   */
  static callNative(nativeName: 'GetVehicleComponentInSlot', paramTypes: 'ii', vehicleid: number, slot: number): number;
  /**
   * Calls the AMX native GetVehicleComponentType 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetVehicleComponentType] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} component - The component ID to check
   * @summary Find out what type of component a certain ID is.
   * @see AddVehicleComponent
   * @see RemoveVehicleComponent
   * @see GetVehicleComponentInSlot
   * @see OnVehicleMod
   * @see OnEnterExitModShop
   * @remarks This function was added in SA-MP 0.3a and will not work in earlier versions!
   * @returns The component slot ID of the specified component or -1 if the component is invalid.
   */
  static callNative(nativeName: 'GetVehicleComponentType', paramTypes: 'i', component: number): number;
  /**
   * Calls the AMX native RepairVehicle 
   *
   * @name samp.callNative
   * @param {string} [nativeName=RepairVehicle] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} vehicleid - The ID of the vehicle to repair
   * @summary Fully repairs a vehicle, including visual damage (bumps, dents, scratches, popped tires etc.).
   * @see SetVehicleHealth
   * @see GetVehicleHealth
   * @remarks This function was added in SA-MP 0.3a and will not work in earlier versions!
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. This means the vehicle specified does not exist.

   */
  static callNative(nativeName: 'RepairVehicle', paramTypes: 'i', vehicleid: number): number;
  /**
   * Calls the AMX native GetVehicleVelocity 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetVehicleVelocity] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} vehicleid - The ID of the vehicle to get the velocity of
   * @summary Get the velocity of a vehicle on the X, Y and Z axes.
   * @see GetPlayerVelocity
   * @see SetVehicleVelocity
   * @see SetPlayerVelocity
   * @remarks This function was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks Multiply vector with 250.66667 for kmph or 199.416667 for mph or something...
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. This means the vehicle specified does not exist.

   */
  static callNative(nativeName: 'GetVehicleVelocity', paramTypes: 'iFFF', vehicleid: number): Array<any>;
  /**
   * Calls the AMX native SetVehicleVelocity 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetVehicleVelocity] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} vehicleid - 
   * @param {number} X - 
   * @param {number} Y - 
   * @param {number} Z - 
   */
  static callNative(nativeName: 'SetVehicleVelocity', paramTypes: 'ifff', vehicleid: number, X: number, Y: number, Z: number): number;
  /**
   * Calls the AMX native SetVehicleAngularVelocity 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetVehicleAngularVelocity] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} vehicleid - The ID of the vehicle to set the velocity of
   * @param {number} X - The amount of velocity in the angular X direction
   * @param {number} Y - The amount of velocity in the angular Y direction 
   * @param {number} Z - The amount of velocity in the angular Z direction
   * @summary Sets the angular X, Y and Z velocity of a vehicle.
   * @see SetVehicleVelocity
   * @see GetVehicleVelocity
   * @remarks This function was added in SA-MP 0.3b and will not work in earlier versions!
   * @remarks This function has no effect on un-occupied vehicles and does not effect trains.
   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. The vehicle does not exist.

   */
  static callNative(nativeName: 'SetVehicleAngularVelocity', paramTypes: 'ifff', vehicleid: number, X: number, Y: number, Z: number): number;
  /**
   * Calls the AMX native GetVehicleDamageStatus 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetVehicleDamageStatus] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} vehicleid - The ID of the vehicle to get the damage statuses of
   * @summary Retrieve the damage statuses of a vehicle.
   * @see UpdateVehicleDamageStatus
   * @see SetVehicleHealth
   * @see GetVehicleHealth
   * @see RepairVehicle
   * @see OnVehicleDamageStatusUpdate
   * @remarks This Callback was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks 
  Door states:
  
    0x000000FF - hood
    0x0000FF00 - trunk
    0x00FF0000 - drivers door
    0xFF000000 - co-drivers door
    byte meaning:
    0x1 - is opened
    0x2 - is damaged
    0x4 - is removed
    other bytes are unused
  

   * @remarks 
  Light states:
  
    0x01 - front left broken
    0x04 - front right broken
    0x40 - back both broken
  

   * @remarks 
  Tire states:
  
    0x1 - back right popped
    0x2 - front right popped
    0x4 - back left popped
    0x8 - front left popped
    only check the right states for bikes
  

   * @returns 
  1: The function executed successfully.
  0: The function failed to execute. This means the vehicle specified does not exist.

   */
  static callNative(nativeName: 'GetVehicleDamageStatus', paramTypes: 'iIIII', vehicleid: number): Array<any>;
  /**
   * Calls the AMX native UpdateVehicleDamageStatus 
   *
   * @name samp.callNative
   * @param {string} [nativeName=UpdateVehicleDamageStatus] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} vehicleid - The ID of the vehicle to set the damage of
   * @param {number} panels - A set of bits containing the panel damage status
   * @param {number} doors - A set of bits containing the door damage status
   * @param {number} lights - A set of bits containing the light damage status
   * @param {number} tires - A set of bits containing the tire damage status
   * @summary Sets the various visual damage statuses of a vehicle, such as popped tires, broken lights and damaged panels.
   * @see SetVehicleHealth
   * @see GetVehicleHealth
   * @see RepairVehicle
   * @see GetVehicleDamageStatus
   * @see OnVehicleDamageStatusUpdate
   * @remarks This function was added in SA-MP 0.3a and will not work in earlier versions!
   * @remarks 
  Door states:
  
    0x000000FF - hood
    0x0000FF00 - trunk
    0x00FF0000 - drivers door
    0xFF000000 - co-drivers door
    byte meaning:
    0x1 - is opened
    0x2 - is damaged
    0x4 - is removed
    other bytes are unused
  

   * @remarks 
  Light states:
  
    0x01 - front left broken
    0x04 - front right broken
    0x40 - back both broken
  

   * @remarks 
  Tire states:
  
    0x1 - back right popped
    0x2 - front right popped
    0x4 - back left popped
    0x8 - front left popped
    only check the right states for bikes
  

   */
  static callNative(nativeName: 'UpdateVehicleDamageStatus', paramTypes: 'iiiii', vehicleid: number, panels: number, doors: number, lights: number, tires: number): number;
  /**
   * Calls the AMX native GetVehicleModelInfo 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetVehicleModelInfo] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} vehiclemodel - The vehicle model to get info of
   * @param {number} infotype - The type of information to retrieve
   * @summary Retrieve information about a specific vehicle model such as the size or position of seats.
   * @see GetVehicleModel
   * @remarks This function was added in SA-MP 0.3e and will not work in earlier versions!
   * @remarks 
  Information types:
  
    VEHICLE_MODEL_INFO_SIZE - vehicle size
    VEHICLE_MODEL_INFO_FRONTSEAT - position of the front seat
    VEHICLE_MODEL_INFO_REARSEAT - position of the rear seat
    VEHICLE_MODEL_INFO_PETROLCAP - position of the fuel cap
    VEHICLE_MODEL_INFO_WHEELSFRONT - position of the front wheels
    VEHICLE_MODEL_INFO_WHEELSREAR - position of the rear wheels
    VEHICLE_MODEL_INFO_WHEELSMID - position of the middle wheels (applies to vehicles with 3 axes)
    VEHICLE_MODEL_INFO_FRONT_BUMPER_Z - height of the front bumper
    VEHICLE_MODEL_INFO_REAR_BUMPER_Z  - height of the rear bumper
  

   */
  static callNative(nativeName: 'GetVehicleModelInfo', paramTypes: 'iiFFF', vehiclemodel: number, infotype: number): Array<any>;
  /**
   * Calls the AMX native SetVehicleVirtualWorld 
   *
   * @name samp.callNative
   * @param {string} [nativeName=SetVehicleVirtualWorld] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} vehicleid - The ID of vehicle to set the virtual world of
   * @param {number} worldid - The ID of the virtual world to put the vehicle in
   * @summary Sets the &#x27;virtual world&#x27; of a vehicle. Players will only be able to see vehicles in their own virtual world.
   * @see GetVehicleVirtualWorld
   * @see SetPlayerVirtualWorld
   */
  static callNative(nativeName: 'SetVehicleVirtualWorld', paramTypes: 'ii', vehicleid: number, worldid: number): number;
  /**
   * Calls the AMX native GetVehicleVirtualWorld 
   *
   * @name samp.callNative
   * @param {string} [nativeName=GetVehicleVirtualWorld] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} vehicleid - The ID of the vehicle to get the virtual world of
   * @summary Get the virtual world of a vehicle.
   * @see SetVehicleVirtualWorld
   * @see GetPlayerVirtualWorld
   * @returns The virtual world that the vehicle is in.
   */
  static callNative(nativeName: 'GetVehicleVirtualWorld', paramTypes: 'i', vehicleid: number): number;
  /**
   * Calls the AMX native IsValidVehicle 
   *
   * @name samp.callNative
   * @param {string} [nativeName=IsValidVehicle] - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {number} vehicleid - The ID of the vehicle to check
   * @summary Check if a vehicle ID is valid.
   * @see CreateVehicle
   * @see DestroyVehicle
   * @returns true or false.
   */
  static callNative(nativeName: 'IsValidVehicle', paramTypes: 'i', vehicleid: number): number;
  /**
   * Calls an AMX native
   *
   * @name samp.callNative
   * @param {string} nativeName - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {...*} args - Native arguments
   * @returns {*}
   */
  static callNative(nativeName: string, paramTypes: string, ...args: Array<any>): any;
  /**
   * Calls an AMX native that returns a value with a Float tag
   *
   * @name samp.callNativeFloat
   * @param {string} nativeName - Name of the native
   * @param {string} paramTypes - String of argument specifiers
   * @param {...*} args - Native arguments
   * @returns {*}
   */
  static callNativeFloat(nativeName: string, paramTypes: string, ...args: Array<any>): any;

  /**
   * Calls an AMX public function
   *
   * @name samp.callPublic
   * @param {string} publicName - Name of the public function
   * @param {string} paramTypes - String of argument specifiers
   * @param {...*} args - Native arguments
   * @returns {*}
   */
  static callPublic(publicName: string, paramTypes: string, ...args: Array<any>): any;
  /**
   * Calls an AMX public function that returns a value with a Float tag
   *
   * @name samp.callPublicFloat
   * @param {string} publicName - Name of the public function
   * @param {string} paramTypes - String of argument specifiers
   * @param {...*} args - Native arguments
   * @returns {*}
   */
  static callPublicFloat(publicName: string, paramTypes: string, ...args: Array<any>): any;

  /**
   * Prints a string to the server log
   *
   * @name samp.logprint
   * @param {string} str - string to print (max. 2051 chars)
   * @returns {void}
   */
  static logprint(str: string): void;
}
