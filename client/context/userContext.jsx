import axios from 'axios'
import { createContext,useState, useEffect } from 'react'

export const UserContext = createContext({})

export function UserContextProvider({children}){
    const [user,setUser] = useState(null);
    useEffect(()=> {
        if(!user){
            axios.get('/profile').then(({data}) =>{
                setUser(data)
            }).catch(error=>{
                console.log('Error fetching user profile:', error)
            })
        }
    },[user])
    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}