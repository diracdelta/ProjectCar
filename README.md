## Steps to run the app in your browser

1. Install npm
2. Install ionic - `npm install -g ionic`
3. Clone the repo (I think it's better to fork and clone) and change to the new app directory
4. Start ionic - `ionic serve`

## For testing on Android Phone

1. Install Android Studio
2. Install SDK 25 (Nougat) required for ionic
3. Under the project directory run following commands:
  ```
  ionic cordova platform add android
  ionic cordova requirements
  ```
4. Enable USB debugging on your phone and connect your phone and run `ionic cordova run android` 
