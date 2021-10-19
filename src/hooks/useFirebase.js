import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState, useEffect } from "react";
import initializeAuthentication from "./../components/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = (name, email, password) => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();

  const signInUsingGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };

  const signUpUsingEmail = (name, email, password) => {
    // e.preventDefault();

    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password, name).then(
      (result) => {
        const user = result.user;

        setUserName(name);
      }
    );
  };

  const signIngUsingEmail = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
      });
  };

  const setUserName = (name) => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };

  return {
    user,
    isLoading,
    signUpUsingEmail,
    signIngUsingEmail,
    signInUsingGoogle,
    logOut,
  };
};

export default useFirebase;
