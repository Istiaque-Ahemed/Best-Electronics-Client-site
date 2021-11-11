import { useState } from "react"
import initializeAuthentication from './../firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect } from "react";


initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const auth = getAuth()
  const [isLoading, setIsLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const signInUsinGoogle = () => {
    return signInWithPopup(auth, googleProvider)

  }
  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .finally(() => setIsLoading(false));
  }
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, [auth]);

  const handleUserRegister = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        const errorMessage = error.message
      })

  }
  return {
    user,
    error,
    logout,
    signInUsinGoogle,
    isLoading,
    handleUserRegister


  }


}
export default useFirebase;