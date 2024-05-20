import { LightningElement } from 'lwc';
import { getBiometricsService } from 'lightning/mobileCapabilities';

export default class NimbusPluginBiometricsService extends LightningElement {
    biometricsService;

    connectedCallback() {
      this.biometricsService = getBiometricsService();
    }

    get hideComponent(){
      return !this.biometricsService.isAvailable();
    }

    handleVerifyClick() {
      if (this.biometricsService.isAvailable()) {
        const options = {
          permissionRequestBody: "Required to confirm device ownership.",
          additionalSupportedPolicies: ['PIN_CODE']
        };
        this.biometricsService.checkUserIsDeviceOwner(options)
          .then((result) => {

          })
          .catch((error) => {
            // Handle errors

          });
      } else {
        // service not available

      }
    }
}