const app = require('./app')
const firebase = require('firebase/app');
const firebaseConfig = require('./configFirebase') ;

const port = process.env.PORT || 6000

firebase.initializeApp(firebaseConfig);


app.listen(5000, () => console.log(`server hase been started on ${port}`))


