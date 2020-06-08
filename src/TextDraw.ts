import {TEXTDRAW_ALIGN} from "./SampEnum";
import {SampFunctions} from "./SampFunctions";
import {TextDraws} from "./TextDraws";

export interface TextDrawConfig {
    x?: number,
    y?: number,
    text?: string,
    letterSize?: {
        x: number,
        y: number
    },
    textSize?: {
        x: number,
        y: number
    },
    align?: TEXTDRAW_ALIGN
    color?: string
    useBox?: 0 | 1
    boxColor?: string
    shadowSize?: number
    outlineSize?: number
    backgroundColor?: string
    font?: 0 | 1 | 2 | 3 | 4 | 5
    setProportional?: 0 | 1
    setSelectable?: 0 | 1,
    previewRot?: {
        fRotX: number,
        fRotY: number,
        fRotZ: number,
        fZoom: number
    }
    vehicleColor?: {
        color1: number,
        color2: number
    }
    previewModel?: number
}

export class TextDraw {
    private playerid: number;
    private config: TextDrawConfig = {};

    constructor(playerid: number, config: TextDrawConfig, name: string) {
        this.playerid = playerid;
        this.config = config;
        this._name = name;
        this._textid = SampFunctions.CreatePlayerTextDraw(playerid, config.x || 0, config.y || 0, config.text || '');
        this.setState(config);
        TextDraws.add(playerid, this);
        return this;
    }

    private _textid: number | null;

    public get textid() {
        return this._textid;
    }

    private _name: string;

    public get name() {
        return this._name;
    }

    private _callback: ((playerid: number) => void)[] = [];

    public get callback() {
        return this._callback;
    }

    onClick(callBack: (playerid: number) => void) {
        this._callback.push(callBack);
        if (this.config.setSelectable !== 1 && this._textid !== null) {
            this.config.setSelectable = 1;
            SampFunctions.PlayerTextDrawSetSelectable(this.playerid, this._textid, 1);
        }
        return this;
    }

    show() {
        if (this._textid === null) {
            return this;
        }
        SampFunctions.PlayerTextDrawShow(this.playerid, this._textid);
        return this;
    }

    hide() {
        if (this._textid === null) {
            return this;
        }
        SampFunctions.PlayerTextDrawHide(this.playerid, this._textid);
        return this;
    }

    setText(value: string) {
        if (this._textid === null) {
            return this;
        }
        SampFunctions.PlayerTextDrawSetString(this.playerid, this._textid, value);
        return this;
    }

    destroy() {
        if (this._textid === null) {
            return this;
        }
        SampFunctions.PlayerTextDrawDestroy(this.playerid, this._textid);
        this._textid = null;
    }

    setState(config: TextDrawConfig) {
        if (this._textid === null) {
            return this;
        }
        this.config = {...this.config, ...config};
        if (config.text !== undefined) {
            SampFunctions.PlayerTextDrawSetString(this.playerid, this._textid, config.text);
        }
        if (config.letterSize !== undefined) {
            SampFunctions.PlayerTextDrawLetterSize(this.playerid, this._textid, config.letterSize.x, config.letterSize.y);
        }
        if (config.textSize !== undefined) {
            SampFunctions.PlayerTextDrawTextSize(this.playerid, this._textid, config.textSize.x, config.textSize.y);
        }
        if (config.align !== undefined) {
            SampFunctions.PlayerTextDrawAlignment(this.playerid, this._textid, config.align);
        }
        if (config.color !== undefined) {
            SampFunctions.PlayerTextDrawColor(this.playerid, this._textid, config.color);
        }
        if (config.useBox !== undefined) {
            SampFunctions.PlayerTextDrawUseBox(this.playerid, this._textid, config.useBox);
        }
        if (config.boxColor !== undefined) {
            SampFunctions.PlayerTextDrawBoxColor(this.playerid, this._textid, config.boxColor);
        }
        if (config.shadowSize !== undefined) {
            SampFunctions.PlayerTextDrawSetShadow(this.playerid, this._textid, config.shadowSize);
        }
        if (config.outlineSize !== undefined) {
            SampFunctions.PlayerTextDrawSetOutline(this.playerid, this._textid, config.outlineSize);
        }
        if (config.backgroundColor !== undefined) {
            SampFunctions.PlayerTextDrawBackgroundColor(this.playerid, this._textid, config.backgroundColor);
        }
        if (config.font !== undefined) {
            SampFunctions.PlayerTextDrawFont(this.playerid, this._textid, config.font);
        }
        if (config.setProportional !== undefined) {
            SampFunctions.PlayerTextDrawSetProportional(this.playerid, this._textid, config.setProportional);
        }
        if (config.setSelectable !== undefined) {
            SampFunctions.PlayerTextDrawSetSelectable(this.playerid, this._textid, config.setSelectable);
        }
        if (config.previewRot !== undefined) {
            SampFunctions.PlayerTextDrawSetPreviewRot(this.playerid, this._textid, config.previewRot.fRotX, config.previewRot.fRotY, config.previewRot.fRotZ, config.previewRot.fZoom);
        }
        if (config.vehicleColor !== undefined) {
            SampFunctions.PlayerTextDrawSetPreviewVehCol(this.playerid, this._textid, config.vehicleColor.color1, config.vehicleColor.color2);
        }
        if (config.previewModel !== undefined) {
            SampFunctions.PlayerTextDrawSetPreviewModel(this.playerid, this._textid, config.previewModel);
        }
        return this;
    }

}