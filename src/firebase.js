import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBM6pVLCudNxwgmDjpqz76NmX_H3v8tzfg",
    authDomain: "nba-full-4a792.firebaseapp.com",
    databaseURL: "https://nba-full-4a792.firebaseio.com",
    projectId: "nba-full-4a792",
    storageBucket: "nba-full-4a792.appspot.com",
    messagingSenderId: "538259603169"
  };

  firebase.initializeApp(config);

  const firebaseDB = firebase.database();
  const firebaseArticles = firebaseDB.ref('articles');
  const firebaseTeams = firebaseDB.ref('teams');
  const firebaseVideos = firebaseDB.ref('videos');

  const firebaseLooper=(snapshot)=>{
    const data = [];
    snapshot.forEach(element => {
        data.push({
            ...element.val(),
            id:element.key

        })
    });
    return data;
  };

  export {
      firebase,
      firebaseDB,
      firebaseArticles,
      firebaseVideos,
      firebaseTeams,
      firebaseLooper
  }
  