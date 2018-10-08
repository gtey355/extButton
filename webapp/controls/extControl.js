sap.ui.define([
	"sap/ui/core/Control",
	"ns/extControl/controls/newRenderers"
], function (Control, newRenderers) {
	"use strict";

	return Control.extend("ns.extControl.controls.extControl", {
		metadata: {
			proprertes: {
				"propID": "string",
				"propName": "string",
				"allowHover": {
					type: "boolean",
					defaultValue: false
				},
				"myText": "string",
				"width": {
					type: "sap.ui.core.CCSSize",
					defaultValue: "100px"
				},
				"heigth": {
					type: "sap.ui.core.CCSSize",
					defaultValue: "100px"
				}
			},
			events: {
				"hover": {}
			},
			aggregations: {
				"header": {
					type: "sap.ui.core.Control",
					multiple: true,
					singulagName: "header"
				}
			}
		},
		onmouseover: function (evt) {
			if (this.getAllowHover()) {
				this.fireHover();
			}
		},
		renderer: newRenderers
	});
});