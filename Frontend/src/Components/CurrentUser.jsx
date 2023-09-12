import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../Firebase/Firebase';

function CurrentUser() {
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
         setCurrentUser(user)

          const uid = user.uid;
         
        } else {
          // User is signed out
          // ...
          setCurrentUser(null)
          console.log('User is not signed in')
        }
      });
 return () => unsubscribe()
},[])
  return currentUser
}

export default CurrentUser