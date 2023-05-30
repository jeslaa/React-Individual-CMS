import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '../../../firebase/config'


//Login
const login = async (email, password) => {
    const userCred = await signInWithEmailAndPassword(auth, email, password)
    const user = {
        uid: userCred.user.uid,
        email: userCred.user.email
    }

    return user
}


const authServ = {
    login
}

export default authServ