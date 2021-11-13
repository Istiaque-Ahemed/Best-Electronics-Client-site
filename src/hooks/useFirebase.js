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
  const [admin, setAdmin] = useState(false)

  const googleProvider = new GoogleAuthProvider();

  const signInUsinGoogle = (location, history) => {
    setIsLoading(true);

    signInWithPopup(auth, googleProvider)

      .then((result) => {
        const user = result.user;
        setError('')
        const destination = location?.state?.from || '/';
        history.replace(destination)
        saveUser(user.email, user.displayName, 'PUT')
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

    fetch(`http://localhost:5000/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))

  }, [user.email])


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
        // Save user to the database 
        saveUser(email, name, 'POST');
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
  const saveUser = (email, displayName, method) => {

    const user = { email, displayName }
    fetch('http://localhost:5000/users', {
      method: method,
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then()

  }
  return {
    user,
    admin,
    error,
    logout,
    signInUsinGoogle,
    isLoading,
    handleUserRegister,
    loginUser


  }


}
export default useFirebase;