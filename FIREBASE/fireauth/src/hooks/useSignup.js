import { useState } from "react"
import { appAuth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export const useSignup = () => {
    // 에러정보를 관리합니다.
    const [error, setError] = useState(null);

    // 통신 상태를 관리합니다.
    const [isPending, setIsPending] = useState(false);

    const signup = (email, password, displayName) => {

        // 회원가입 처리 함수
        createUserWithEmailAndPassword(appAuth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);

                if (!user) {
                    throw new Error('회원 정보를 불러올 수 없습니다.');
                }
                // 회원 정보 업데이트 함수.
                updateProfile(appAuth.currentUser, { displayName })
                    .then(() => {
                        setError(null);
                        setIsPending(false);
                    }).catch((err) => {
                        setError(err.message);
                        setIsPending(false);
                        console.error(error);
                    })

            })
            .catch((err) => {
                setError(err.message);
                setIsPending(false);
                console.error(error);
            });
    }

    return { error, isPending, signup }
}