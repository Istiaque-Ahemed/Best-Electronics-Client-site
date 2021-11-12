import { useState } from "react"
import initializeAuthentication from './../firebase/firebase.init';
import { getAuth, signInWithPopup, signInWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect } from "react";


initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const auth = getAuth()
  const [isLoading, setIsLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const signInUsinGoogle = (location, history) => {
    setIsLoading(true);

    signInWithPopup(auth, googleProvider)

      .then((result) => {
        const user = result.user;
        setError('')
      }).catch((error) => {
        setError(error.message);
      }).finally(() => setIsLoading(false));

  }
  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .finally(() => setIsLoading(false));
  }

  const loginUser = (email, password, location, history) => {
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || '/';
        history.replace(destination)
        setError('')
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
    ;

  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  const handleUserRegister = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setError('')
        const newUser = { email, displayName: name }
        setUser(newUser);
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {

        }).catch((error) => {

        });
        history.replace('/');
      })
      .catch((error) => {
        setError(error.message)
      })
      .finally(() => setIsLoading(false));

  }
  return {
    user,
    error,
    logout,
    signInUsinGoogle,
    isLoading,
    handleUserRegister,
    loginUser


  }


}
export default useFirebase;