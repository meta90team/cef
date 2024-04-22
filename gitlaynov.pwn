// в main():
cef_subscribe("callback_dialog_response", "CallbackDialogResponse");

// в конец мода:
forward CallbackDialogResponse(playerid, const arguments[]);
public CallbackDialogResponse(playerid, const arguments[]) {
	new dId, responsed, list, input[64];
	sscanf(arguments, "P< >ddds[64]", dId, responsed, list, input);
	OnDialogResponse(playerid, dId, responsed, list, input);
	return 1;
}

// в мод: (замена для ShowPlayerDialog)
stock CEF__Dialog(playerid, dialogId, dialogType, dHeader[], dText[], button_1[], button_2[]) {
 	cef_emit_event(playerid, "show_dialog", CEFINT(dialogId), CEFINT(dialogType), CEFSTR(dHeader), CEFSTR(dText), CEFSTR(button_1), CEFSTR(button_2));
 	return 1;
}

// для спека:
"show-spectate",
"hide-spectate",
"update-spectate", (id, value) 
// обновить значение в спеке, id в соотсветствии со список, начиначая с 1.

