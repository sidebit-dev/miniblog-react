import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth';

import {useState, useEffect} from 'react';

export const useAuthentication = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    // cleanup - não podemos deixar resquicios 
    // de funçoes sendo executadas ainda, devido a 
    // mudanças de componentes e páginas
    // deal with memmory leak
    const [cancelled, setCancelled] = useState(false);

    const auth = getAuth();

    function checkIfIsCancelled(){
        if(cancelled){
            return;
        }
    }
};