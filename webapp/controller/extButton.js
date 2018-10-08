sap.ui.define([
	"sap/m/Button"
], function (Button) {
	"use strict";

	return Button.extend("ns.extControl.controller.extButton", {
		metedata: {
			proprertes: {
				"allowHover": {
					type: "boolean",
					defaultValue: false
				},
				"hoverText": {
					type: "boolean"
				}
			},
			events: {
				"hover": {}
			}
		},
		onmouseover: {},
		renderer: {}
	});
});