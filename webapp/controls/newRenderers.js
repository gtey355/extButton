sap.ui.define([
	"sap/ui/core/Renderer"
], function (Renderer) {
	"use strict";

	var newRenderers = new Renderer.extend("ns.extControl.controls.extControl.newRenderers");

	newRenderers.render = function (oRm, oControl) {

		oRm.write("<div");
		//oRm.write(oControl.getMyText());
		//add this controls style class (plus any additional ones the developer has specified)
		oRm.addClass("testcss");
		oRm.writeClasses(oControl);
		//render width & height properties
		oRm.write(" style=\"width: " + oControl.getWidth() + "; height: " + oControl.getHeight() + ";\"");
		//oRm.write(" style=\"height: " + oControl.getHeight() + ";\"");
		//next, render the control information, this handles your sId (you must do this for your control to be properly tracked by ui5).
		oRm.writeControlData(oControl);
		oRm.write(">");
		$(oControl.getContent()).each(function () {
			oRm.renderControl(this);
		});
		//and obviously, close off our div
		oRm.write("</div>");
	};
	return newRenderers;

});