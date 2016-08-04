import firebase from 'firebase';

var config = {
    apiKey: process.env.FIREBASE_API,
    authDomain: process.env.FIREBASE_AUTH,
    databaseURL: process.env.FIREBASE_DB_URL,
    storageBucket: process.env.FIREBASE_BUCKET
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
    app: {
        name: 'Todo App',
        version: "0.0.1"
    },
    isRunning: true,
    user: {
        name: 'Andrew',
        age: 25
    }
});

var todosRef = firebaseRef.child('todos');

// listen for items being added
todosRef.on('child_added', (snapshot) => {
    console.log('New todo added', snapshot.key, snapshot.val());
});

// listen for items being changed
todosRef.on('child_changed', (snapshot) => {
    console.log('Todo changed', snapshot.key, snapshot.val());
});

// listen for items being removed
todosRef.on('child_removed', (snapshot) => {
    console.log('Todo removed', snapshot.key, snapshot.val());
});

// add items
todosRef.push({
    text: 'Walk the dog'
});

// add items
todosRef.push({
    text: 'Brush teeth'
});