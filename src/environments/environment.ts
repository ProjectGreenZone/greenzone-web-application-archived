// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyB2iX7Onk0-WfPClxdSm4eMLpmL-mAfMAs",
    authDomain: "give-my-space.firebaseapp.com",
    databaseURL: "https://give-my-space.firebaseio.com",
    projectId: "give-my-space",
    storageBucket: "give-my-space.appspot.com",
    messagingSenderId: "650080943199"
  }
};