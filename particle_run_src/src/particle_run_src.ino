/*
 * Project particle_run
 * Description: Particle run source file
 * Author: Danish Dua
 * Date: Feb 17, 2018
 */

// Standard library for onboard gps system
#include "cellular_hal.h"
#include "google-maps-device-locator.h"

GoogleMapsDeviceLocator locator;

STARTUP(cellular_credentials_set("isp.telus.com", "", "", NULL));

void onLocation(float lan, float lon, float accuracy);

// timers for gps data update
unsigned long update_T = 0;

const long delay_T = 5000;

void setup() {
    // particle byte setup for telus SIM integration
    Particle.keepAlive(30);

    // change event name from default
    locator.withEventName("fr_electron");

    // callback on location found
    locator.withSubscribe(onLocation).withLocatePeriodic(5);

    // for debugging
    Serial.begin(9600);

}

// loop() runs over and over again, as quickly as it can execute.
void loop() {
    locator.loop();
}

// Subscribed to google location return (doesn't work without GPS module)
void onLocation(float lan, float lon, float accuracy) {
    Serial.print("lan: ");
    Serial.println(lan);

    Serial.print("lon: ");
    Serial.println(lon);

    Serial.print("accuracy: ");
    Serial.println(accuracy);
}
