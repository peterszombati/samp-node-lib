/*
MIT License

Copyright (c) 2020 Peter Szombati

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */
import {TEXTDRAW_ALIGN} from "./SampEnum";
import {TextDraws} from "./TextDraws";
import {
    CreatePlayerTextDraw,
    PlayerTextDrawSetSelectable,
    PlayerTextDrawShow,
    PlayerTextDrawHide,
    PlayerTextDrawSetString,
    PlayerTextDrawDestroy,
    PlayerTextDrawLetterSize,
    PlayerTextDrawTextSize,
    PlayerTextDrawAlignment,
    PlayerTextDrawColor,
    PlayerTextDrawUseBox,
    PlayerTextDrawBoxColor,
    PlayerTextDrawSetShadow,
    PlayerTextDrawSetOutline,
    PlayerTextDrawBackgroundColor,
    PlayerTextDrawFont,
    PlayerTextDrawSetProportional,
    PlayerTextDrawSetPreviewRot,
    PlayerTextDrawSetPreviewVehCol,
    PlayerTextDrawSetPreviewModel
} from "./SampFunctions";

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
        this._textid = CreatePlayerTextDraw(playerid, config.x || 0, config.y || 0, config.text || '');
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
            PlayerTextDrawSetSelectable(this.playerid, this._textid, 1);
        }
        return this;
    }

    show() {
        if (this._textid === null) {
            return this;
        }
        PlayerTextDrawShow(this.playerid, this._textid);
        return this;
    }

    hide() {
        if (this._textid === null) {
            return this;
        }
        PlayerTextDrawHide(this.playerid, this._textid);
        return this;
    }

    setText(value: string) {
        if (this._textid === null) {
            return this;
        }
        PlayerTextDrawSetString(this.playerid, this._textid, value);
        return this;
    }

    destroy() {
        if (this._textid === null) {
            return this;
        }
        PlayerTextDrawDestroy(this.playerid, this._textid);
        this._textid = null;
    }

    setState(config: TextDrawConfig) {
        if (this._textid === null) {
            return this;
        }
        this.config = {...this.config, ...config};
        if (config.text !== undefined) {
            PlayerTextDrawSetString(this.playerid, this._textid, config.text);
        }
        if (config.letterSize !== undefined) {
            PlayerTextDrawLetterSize(this.playerid, this._textid, config.letterSize.x, config.letterSize.y);
        }
        if (config.textSize !== undefined) {
            PlayerTextDrawTextSize(this.playerid, this._textid, config.textSize.x, config.textSize.y);
        }
        if (config.align !== undefined) {
            PlayerTextDrawAlignment(this.playerid, this._textid, config.align);
        }
        if (config.color !== undefined) {
            PlayerTextDrawColor(this.playerid, this._textid, config.color);
        }
        if (config.useBox !== undefined) {
            PlayerTextDrawUseBox(this.playerid, this._textid, config.useBox);
        }
        if (config.boxColor !== undefined) {
            PlayerTextDrawBoxColor(this.playerid, this._textid, config.boxColor);
        }
        if (config.shadowSize !== undefined) {
            PlayerTextDrawSetShadow(this.playerid, this._textid, config.shadowSize);
        }
        if (config.outlineSize !== undefined) {
            PlayerTextDrawSetOutline(this.playerid, this._textid, config.outlineSize);
        }
        if (config.backgroundColor !== undefined) {
            PlayerTextDrawBackgroundColor(this.playerid, this._textid, config.backgroundColor);
        }
        if (config.font !== undefined) {
            PlayerTextDrawFont(this.playerid, this._textid, config.font);
        }
        if (config.setProportional !== undefined) {
            PlayerTextDrawSetProportional(this.playerid, this._textid, config.setProportional);
        }
        if (config.setSelectable !== undefined) {
            PlayerTextDrawSetSelectable(this.playerid, this._textid, config.setSelectable);
        }
        if (config.previewRot !== undefined) {
            PlayerTextDrawSetPreviewRot(this.playerid, this._textid, config.previewRot.fRotX, config.previewRot.fRotY, config.previewRot.fRotZ, config.previewRot.fZoom);
        }
        if (config.vehicleColor !== undefined) {
            PlayerTextDrawSetPreviewVehCol(this.playerid, this._textid, config.vehicleColor.color1, config.vehicleColor.color2);
        }
        if (config.previewModel !== undefined) {
            PlayerTextDrawSetPreviewModel(this.playerid, this._textid, config.previewModel);
        }
        return this;
    }

}
