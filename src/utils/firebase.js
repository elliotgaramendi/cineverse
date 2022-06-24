import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../configs/authFirebase";

export const signUp = (user) => {
  const { email, password } = user;
  return (createUserWithEmailAndPassword(auth, email, password));
};

export const signIn = (user) => {
  const { email, password } = user;
  return (signInWithEmailAndPassword(auth, email, password));
};

export const recoverPassword = (user) => {
  const { email } = user;
  return (sendPasswordResetEmail(auth, email));
};