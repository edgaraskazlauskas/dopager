import { authRef, provider } from "../config/firebase";

export const signIn = () => {
    const authenticate = authRef.signInWithPopup(provider);

    return new Promise((resolve, reject) => {
        authenticate
            .then((authData) => {
                resolve({
                    name: authData.user.displayName,
                    email: authData.user.email,
                    photo: authData.user.photoURL,
                    uid: authData.user.uid
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