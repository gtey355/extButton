sap.ui.define([
	"sap/ui/core/Control",
	"ns/extControl/controls/newRenderers"
], function (Control, newRenderers) {
	"use strict";

	return Control.extend("ns.extControl.controls.extControl", {
		metadata: {
			properties: {
				"propID": "string",
				"propName": "string",
				"allowHover": {
					type: "boolean",
					defaultValue: false
				},
				"myText": "string",
				"width": {
					type: "sap.ui.core.CSSSize",
					defaultValue: "100px"
				},
				"height": {
					type: "sap.ui.core.CSSSize",
					defaultValue: "100px"
				}
			},

			events: {
				"hover": {}
			},
			aggregations: {
				content: {
					type: "sap.ui.core.Control"
				}
			},
			defaultAggregation: "content"

		},
		init: function () {
			//initialisation code, in this case, ensure css is imported
			var libraryPath = jQuery.sap.getModulePath("ns.extControl"); //get the server location of the ui library
			jQuery.sap.includeStyleSheet(libraryPath + "/css/ext.css"); //specify the css path relative from the ui folder
		},
		onmouseover: function (evt) {
			if (this.getAllowHover()) {
				this.fireHover();
			}
		},
		renderer: newRenderers
	});
});