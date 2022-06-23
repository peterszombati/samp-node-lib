export enum DIALOG_STYLE {
    MSGBOX = 0,
    INPUT = 1,
    LIST = 2,
    PASSWORD = 3,
    TABLIST = 4,
    TABLIST_HEADERS = 5
}

export enum KEY {
    ACTION = 1,
    CROUCH = 2,
    FIRE = 4,
    SPRINT = 8,
    SECONDARY_ATTACK = 16,
    JUMP = 32,
    LOOK_RIGHT = 64,
    HANDBRAKE = 128,
    LOOK_LEFT = 256,
    SUBMISSION = 512,
    LOOK_BEHIND = 512,
    WALK = 1024,
    ANALOG_UP = 2048,
    ANALOG_DOWN = 4096,
    ANALOG_RIGHT = 16384,
    ANALOG_LEFT = 8192,

    UP = -128,
    DOWN = 128,
    LEFT = -128,
    RIGHT = 128,
}

export enum SPECIAL_ACTION {
    NONE = 0,
    DUCK = 1,
    USEJETPACK = 2,
    ENTER_VEHICLE = 3,
    EXIT_VEHICLE = 4,
    DANCE1 = 5,
    DANCE2 = 6,
    DANCE3 = 7,
    DANCE4 = 8,
    HANDSUP = 10,
    USECELLPHONE = 11,
    SITTING = 12,
    STOPUSECELLPHONE = 13,
    DRINK_BEER = 20,
    SMOKE_CIGGY = 21,
    DRINK_WINE = 22,
    DRINK_SPRUNK = 23,
    CUFFED = 24,
    CARRY = 25,
    PISSING = 68,
}

export enum PLAYER_STATE {
    NONE = 0,
    ONFOOT = 1,
    DRIVER = 2,
    PASSENGER = 3,
    EXIT_VEHICLE = 4, // (used internally)
    ENTER_VEHICLE_DRIVER = 5, // (used internally)
    ENTER_VEHICLE_PASSENGER = 6, // (used internally)
    WASTED = 7,
    SPAWNED = 8,
    SPECTATING = 9
}

export enum FIGHT_STYLE {
    NORMAL = 4,
    BOXING = 5,
    KUNGFU = 6,
    KNEEHEAD = 7,
    GRABKICK = 15,
    ELBOW = 16
}

export enum WEAPONSKILL {
    PISTOL = 0,
    PISTOL_SILENCED = 1,
    DESERT_EAGLE = 2,
    SHOTGUN = 3,
    SAWNOFF_SHOTGUN = 4,
    SPAS12_SHOTGUN = 5,
    MICRO_UZI = 6,
    MP5 = 7,
    AK47 = 8,
    M4 = 9,
    SNIPERRIFLE = 10
}

export enum WEAPONSTATE {
    UNKNOWN = -1,
    NO_BULLETS = 0,
    LAST_BULLET = 1,
    MORE_BULLETS = 2,
    RELOADING = 3
}

export enum WEAPON {
    BRASSKNUCKLE = 1,
    GOLFCLUB = 2,
    NITESTICK = 3,
    KNIFE = 4,
    BAT = 5,
    SHOVEL = 6,
    POOLSTICK = 7,
    KATANA = 8,
    CHAINSAW = 9,
    DILDO = 10,
    DILDO2 = 11,
    VIBRATOR = 12,
    VIBRATOR2 = 13,
    FLOWER = 14,
    CANE = 15,
    GRENADE = 16,
    TEARGAS = 17,
    MOLTOV = 18,
    COLT45 = 22,
    SILENCED = 23,
    DEAGLE = 24,
    SHOTGUN = 25,
    SAWEDOFF = 26,
    SHOTGSPA = 27,
    UZI = 28,
    MP5 = 29,
    AK47 = 30,
    M4 = 31,
    TEC9 = 32,
    RIFLE = 33,
    SNIPER = 34,
    ROCKETLAUNCHER = 35,
    HEATSEEKER = 36,
    FLAMETHROWER = 37,
    MINIGUN = 38,
    SATCHEL = 39,
    BOMB = 40,
    SPRAYCAN = 41,
    FIREEXTINGUISHER = 42,
    CAMERA = 43,
    PARACHUTE = 46,
    VEHICLE = 49,
    DROWN = 53,
    COLLISION = 54
}

export enum VEHICLE_MODEL_INFO {
    SIZE = 1,            // Vehicle size
    FRONTSEAT = 2,       // Position of the front seat*
    REARSEAT = 3,        // Position of the rear seat*
    PETROLCAP = 4,       // Position of the fuel cap*
    WHEELSFRONT = 5,     // Position of the front wheels*
    WHEELSREAR = 6,      // Position of the rear wheels*
    WHEELSMID = 7,       // Position of the middle wheels (applies to vehicles with 3 axes)*
    FRONT_BUMPER_Z = 8,  // Height of the front bumper
    REAR_BUMPER_Z = 9   // Height of the rear bumper
}

export enum OBJECT_MATERIAL_SIZE {
    _32x32 = 10,
    _64x32 = 20,
    _64x64 = 30,
    _128x32 = 40,
    _128x64 = 50,
    _128x128 = 60,
    _256x32 = 70,
    _256x64 = 80,
    _256x128 = 90,
    _256x256 = 100,
    _512x64 = 110,
    _512x128 = 120,
    _512x256 = 130,
    _512x512 = 140
}

export enum OBJECT_MATERIAL_TEXT_ALIGN {
    LEFT = 0,
    CENTER = 1,
    RIGHT = 2
}

export enum BULLET_HIT_TYPE {
    NONE = 0,
    PLAYER = 1,
    VEHICLE = 2,
    OBJECT = 3,
    PLAYER_OBJECT = 4
}

export enum TEXTDRAW_ALIGN {
    LEFT = 1,
    CENTER = 2,
    RIGHT = 3
}

export enum CARMODTYPE {
    SPOILER = 0,
    HOOD = 1,
    ROOF = 2,
    SIDESKIRT = 3,
    LAMPS = 4,
    NITRO = 5,
    EXHAUST = 6,
    WHEELS = 7,
    STEREO = 8,
    HYDRAULICS = 9,
    FRONT_BUMPER = 10,
    REAR_BUMPER = 11,
    VENT_RIGHT = 12,
    VENT_LEFT = 13
}

export enum BODY_PARTS {
    TORSO = 3,
    GROIN,
    LEFT_ARM,
    RIGHT_ARM,
    LEFT_LEG,
    RIGHT_LEG,
    HEAD
}

export enum CAMERA_STYLE {
    MOVE = 1,
    CUT = 2
}
