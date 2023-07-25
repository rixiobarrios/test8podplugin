sap.ui.define([
	"sap/dm/dme/podfoundation/component/production/ProductionUIComponent",
	"sap/ui/Device"
], function (ProductionUIComponent, Device) {
	"use strict";

	return ProductionUIComponent.extend("sap.custom.plugin.testplugin.notification.displaynotification.displaynotification.Component", {
		metadata: {
			manifest: "json"
		}
	});
});