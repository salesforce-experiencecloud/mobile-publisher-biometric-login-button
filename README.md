## Biometrics Login Service


## Overview

Biometrics Login Service is a plugin that allows JavaScript in a Lightning web component (or, for internal-only use, a webview) to call functions that can access a mobile device's biometrics scanner for user validation purposes.

<br>
<br>

## 1. Using Biometrics Login Service from JavaScript

Please refer to the developer documentaion available [here](https://developer.salesforce.com/docs/atlas.en-us.mobile_offline.meta/mobile_offline/use_biometricsservice_in_a_lightning_component.htm) with detailed explanation and examples on how to use this plugin in a Lightning Web Component and JavaScript.
<br>
<br>

## 2. Interface

Users can interact with the plugin by calling any of the following methods from their JavaScript code.

    isBiometricsReady(
      options: BiometricsServiceOptions | null,
      callback: (result: boolean | null, error: BiometricsServiceFailure | null) => void
    ): void;

    checkUserIsDeviceOwner(
      options: BiometricsServiceOptions | null,
      callback: (result: boolean | null, error: BiometricsServiceFailure | null) => void
    ): void
        
<br>
<br>
