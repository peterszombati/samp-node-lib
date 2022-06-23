import {ShowPlayerDialog} from "./SampFunctions";
import {SMART_DIALOG_CALLBACK} from "./SampInterface";
 
import {EventEmitter} from "events";
 
const dialogEvent = new EventEmitter();
 
dialogEvent.setMaxListeners(0);
 
export const ShowPlayerSmartDialog = (playerid: number, style: number, caption: string, info: string, button1: string, button2: string, callback: SMART_DIALOG_CALLBACK) => {
     return SmartDialogFunctions.ShowPlayerSmartDialog(playerid, style, caption, info, button1, button2, callback);
};
 
export class SmartDialogFunctions {
    static ShowPlayerSmartDialog(playerid: number, style: number, caption: string, info: string, button1: string, button2: string, callback: SMART_DIALOG_CALLBACK): void {
        ShowPlayerDialog(playerid, 0, style, caption, info, button1, button2);
  
        function onResponse(responseDialogId: number, responseButton: number, responseListItem: number, responseInputText: string) {
            if(responseDialogId != 0) return;
            callback({
                button: responseButton,
                listItem: responseListItem,
                inputText: responseInputText,
                repeatDialog(repeatInfo = info) {
                    SmartDialogFunctions.ShowPlayerSmartDialog(playerid, style, caption, repeatInfo, button1, button2, (newCallBack) => {
                        callback(newCallBack);
                    });
                }
            });
            removeAllListeners();
        }

        function onDisconnect() {
            removeAllListeners();
        }

        dialogEvent.once(`onResponse${playerid}`, onResponse);
        dialogEvent.once(`onDisconnect${playerid}`, onDisconnect);

        function removeAllListeners() {
            dialogEvent.removeListener("onResponse", onResponse);
            dialogEvent.removeListener("onDisconnect", onDisconnect);
        }
    }
}
 
samp.on("OnDialogResponse", (playerid, dialogid, response, listitem, inputtext) => {
    dialogEvent.emit(`onResponse${playerid}`, dialogid, response, listitem, inputtext);
});
 
samp.on("OnPlayerDisconnect", (playerid, reason) => {
    dialogEvent.emit(`onDisconnect${playerid}`);
});