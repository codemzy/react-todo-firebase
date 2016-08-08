import firebase from 'firebase';

try {
    var config = {
        apiKey: process.env.FIREBASE_API,
        authDomain: process.env.FIREBASE_AUTH,
        databaseURL: process.env.FIREBASE_DB_URL,
        storageBucket: process.env.FIREBASE_BUCKET
    };
    firebase.initializeApp(config);
} catch (error) {
    
}

// authenticate with github
export var githubProvider = new firebase.auth.GithubAuthProvider();

// so we can link to the db
export var firebaseRef = firebase.database().ref();

// so other modules using firebase can just grab it from this file
export default firebase;