// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyBZsk1fGrQHsiBIeptDRe5Kknlid1aUOVo",
    authDomain: "hotel-booking-p2201.firebaseapp.com",
    databaseURL: "https://hotel-booking-p2201.firebaseio.com",
    projectId: "hotel-booking-p2201",
    storageBucket: "",
    messagingSenderId: "876516847848",
    appId: "1:876516847848:web:4c3058fd10a4d18a"
  },
  urlApiFirebase: "https://hotel-booking-p2201.firebaseio.com/"
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
