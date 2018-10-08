sap.ui.define([
	"sap/ui/core/Renderer"
], function (Renderer) {
	"use strict";

	var newRenderers = new Renderer.extend("ns.extControl.controls.extControl.newRenderers");

	newRenderers.render = function (oRm, oControl) {

		oRm.write("<div>");
		oRm.writeControlData(oControl);
		oRm.write("</div>");
	};
	return newRenderers;

});