import { createContext, useContext, useEffect, useState } from 'react'
import Router, { useRouter} from 'next/router'
import { setCookie, parseCookies, destroyCookie } from 'nookies'

import { api } from '../services/api'

type Credentials = {
    email: string
    password: string
}

type AuthContextData = {
    signIn: (credentials: Credentials) => Promise<void>
    signUp: (data: User) => Promise<void>
    signOut: () => void
    isAuthenticated: boolean
    user: User
}

type User = {
    name: string
    email: string
    phone: string
    city: string
    street: string
    number: string
    district: string
    type: 'COMMON' | 'PERSONAL'
}

const AuthContext = createContext({} as AuthContextData)

let authChannel: BroadcastChannel

export function signOut(){
    destroyCookie(undefined, 'nextauth.token')
    destroyCookie(undefined, 'nextauth.refreshToken')

    authChannel.postMessage('signout')

    Router.push('/')
}

export function AuthProvider({children}){
    const { push } = useRouter()

    const [user, setUser] = useState<User>()

    const isAuthenticated = !!user

    async function signIn({email, password}: Credentials){
        try{
            const response = await api.post('auth/login', {
                email,
                password
            })

            const { user, token, refreshToken } = response.data

            setCookie(undefined, 'nextauth.token', token, {
                maxAge: 60 * 60 * 24 * 30, // 30 days
                path: '/'
            })
            setCookie(undefined, 'nextauth.refreshToken', refreshToken, {
                maxAge: 60 * 60 * 24 * 30, // 30 days
                path: '/'
            })

            setUser({
                email,
                ...user
            })

            api.defaults.headers['Authorization'] = `Bearer ${token}`

            push('/dashboard')
        }catch(error){
            console.log(error)
        }
    }

    async function signUp(data: User){
        try{
            console.log('asdasd')

            const response = await api.post('/users', data)

            console.log(response)
        }catch(err){
            console.log(err)
        }
    }
    
    useEffect(()=>{
        authChannel = new BroadcastChannel('signout')

        authChannel.onmessage = (message) => {
            switch(message.data){
                case 'signout': 
                    signOut();
                    break;
                    
                default: 
                    break;
            }
        }
    },[])

    return(
        <AuthContext.Provider value={{signIn,isAuthenticated, user, signOut, signUp}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {return useContext(AuthContext)}