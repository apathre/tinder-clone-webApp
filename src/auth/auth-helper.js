import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import $ from 'jquery';


var firebaseConfig={
    apiKey: "AIzaSyBHbScvIZkzxqyqnQdhXyTXEQYEUtkXHQo",
    authDomain: "tinder-clone-77a5b.firebaseapp.com",
    databaseURL: "https://tinder-clone-77a5b.firebaseio.com",
    projectId: "tinder-clone-77a5b",
    storageBucket: "tinder-clone-77a5b.appspot.com",
    messagingSenderId: "969970823137",
    appId: "1:969970823137:web:ec1d54cbb01c9983ec2ca0",
    measurementId: "G-C345ZC8WR2"
}

firebase.initializeApp(firebaseConfig);


const auth = {
    isAuthenticated(){
         return true;
    },
    signin(values){
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);

        firebase.auth().signInWithEmailAndPassword(values.email,values.password)
        .then((user)=>{
            console.log('item at signin is:',user);
            return user.getIdToken().then(idToken=>{
                
                const csrfToken = getCookie('csrfToken');
                return postIdTokenToSessionLogin(idToken,csrfToken)
                .then(()=>{
            window.location.assign('/profile')
        })
        .catch((err)=>{
            window.location.assign('/');
            });
        })
    })
    },
     
    createAccount(values){
        firebase.auth().createUserWithEmailAndPassword(values.email,values.password)
        .then((item)=>{
            console.log('item at cr Acc is:',item);

        })
        .catch((err)=>{
            console.log(err.message);
            return err.message});
    }
}

function getCookie(name) {
    const v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
  }

function postIdTokenToSessionLogin(idToken, csrfToken) {
    // POST to session login endpoint.
    const expiresIn = 60*60*24*5*1000;

    admin.auth().verifyIdToken(idToken)
    .then((decodedClaims)=>{
        if(new Date().getTime()/1000-decodedClaims.auth_time<5*60){
            return admin.auth().createSessionCookie(idToken,{expiresIn:expiresIn});
        }
        throw new Error('UNAUTHORIZED REQUEST!');
    })
    .then((sessionCookie)=>{
        const options={maxAge:expiresIn,httpOnly:true,secure:false}
    })
  }


export default auth;