/*
 * Project particle_run
 * Description: Particle run source file
 * Author: Danish Dua
 * Date: Feb 17, 2018
 */

 // Standard library for onboard gps system
 #include "cellular_hal.h"
 #include "google-maps-device-locator.h"

STARTUP(cellular_credentials_set("isp.telus.com", "", "", NULL));

GoogleMapsDeviceLocator locator;

// timers for gps data update
unsigned long update_T = 0;

const long delay_T = 5000;

void setup() {
    // setup particle publish mode
    Particle.keepAlive(30);

    // initalize asset tracker
    locator.withLocatePeriodic(5);

    // for debugging
    Serial.begin(9600);

}

// loop() runs over and over again, as quickly as it can execute.
void loop() {
  // Core publish code
  locator.loop();


}
