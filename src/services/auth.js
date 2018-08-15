import { authRef, provider } from "../config/firebase";

export const signIn = () => {
    return new Promise((resolve, reject) => {
        authRef.signInWithPopup(provider)
            .then((data) => {
                resolve({
                    name: data.user.displayName,
                    email: data.user.email,
                    photo: data.user.photoURL,
                    uid: data.user.uid
                });
            })
            .catch(() => {
                reject();
            });
    });
};
  
export const signOut = () => {
    return new Promise((resolve, reject) => {
        authRef.signOut()
            .then(() => resolve())
            .catch(() => reject())
    });
};  