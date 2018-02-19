# particle_run

Particle electron web based run tracker built at [Calgary Hacks](http://calgaryhacks.tech) 2018 by @dandua98, @RoyalKingMomo and @seanmai.</br>
Using Particle Electron cellular IoT board provided by **TELUS** for the *Long Range cellular IoT theme*.

## Idea and Execution
The base idea was too get user location using GPS (which we didn't realize Particle Electron didn't have onboard) and to plot the path on a map which could be shared over social media. Due to lack of accuracy using cellular Geolocation, we decided to manually publish data in a format the [AssetTracker](https://store.particle.io/products/asset-tracker) GPS shield would have got using the native library to particle cloud and have our board subscribe to the stream, therefore replicating the GPS module until we actually got it.<br/>
<img src="https://github.com/CalgaryHacks2018/particle_run/blob/master/common/images/particle_run.png" width="350"><br/>

Also, we provided our own geoLocation dataset for a trial run to map the coordinates on the web framework which can be found at [data.json](https://github.com/CalgaryHacks2018/particle_run/blob/master/data.json) in the repo.

## Getting Started
### Hardware
<img src="https://github.com/CalgaryHacks2018/particle_run/blob/master/common/images/setup.JPG" width="500"><br/>
To set up your hardware, check [WIRING.md](https://github.com/CalgaryHacks2018/particle_run/blob/master/WIRING.md) for a detailed explanation and Particle Electron [documentation](https://docs.particle.io/reference/firmware/electron/).

### Prerequisites
The web framework was created using following frameworks and technologies:
* Node.js
* Express.js
* MongoDB

These can be installed using Homebrew, apt-get or the respective package manager for your system.

The main Node Modules used were:
* [Particle-api-js](https://docs.particle.io/reference/javascript/) (for particle cloud)
* Passport (for user authentication)
* Mongoose (for MongoDB)

A complete listing can be found [here](https://github.com/CalgaryHacks2018/particle_run/tree/master/node_modules).

### Installation
To install and run, in your command line/terminal tool, run:
```sh
$ git clone https://github.com/CalgaryHacks2018/particle_run.git
$ cd particle_run
$ node app.js
```

_Assumes required packages have been installed_

In another terminal, run the MongoDB server
```sh
$ cd particle_run
$ mongod
```

### Images
<img src="https://github.com/CalgaryHacks2018/particle_run/blob/master/common/images/map.png" width="450" height= "300">
* User run map screen - To view user's run location, path and other data which can be added as each point is stored as a timestamped node in the database<br/>

<img src="https://github.com/CalgaryHacks2018/particle_run/blob/master/common/images/sign_in.png" width="280" height="200"> <img src="https://github.com/CalgaryHacks2018/particle_run/blob/master/common/images/new_user.png" width="280" height="200"> <br/>
* Login screen - To login for a current user and sign up for a new user, additional data like weight and height can later be used for health data<br/>
<img src = "https://github.com/CalgaryHacks2018/particle_run/blob/master/common/images/profile.png" width="320"><br/>
* Profile screen - <br/>

## Authors
* __Danish Dua__ - _Software engineering student at University of Alberta_ - [GitHub](https://github.com/dandua98)
* __Sean Mai__ - _Software engineering student at University of Calgary_ - [GitHub](https://github.com/seanmai)
* __Mohammad Al-Ahdal__ - _Electrical engineering student at University of Alberta_ - [GitHub](https://github.com/RoyalKingMomo)

## License
The project is licensed under MIT License - see the [LICENSE](https://github.com/CalgaryHacks2018/particle_run/blob/master/LICENSE "LICENSE") file for details

## Acknowledgement
* [CalgaryHacks2018](http://calgaryhacks.tech) organizers and sponsors
* Any open source codebase that way used in this project
