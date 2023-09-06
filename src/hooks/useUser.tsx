import {useState, useEffect, useMemo, useRef} from 'react'
import { User } from '../types'


const useUser = () => {
    const [users, setUsers] = useState<User[]>([])
    const [toggleColor, setToggleColor] = useState<boolean>(false)
    const [sortCountry, setSortCountry] = useState<boolean>(false)
    const [filterCountry, setFilterCountry] = useState<string | null>(null)
    const originalUsers = useRef<User[]>([])


  

    useEffect(()=>{
        fetch('https://randomuser.me/api/?results=100')
        .then(res => res.json())
        .then(data => {
            setUsers(data.results)
            originalUsers.current = data.results
        })

       
    },[])

      

    const handleColor = () => {
        setToggleColor(!toggleColor)
      }
    

    const handleSortByCountry = () => {
        setSortCountry(!sortCountry)
    }
    
    const handleDelete = (email: string) => {
        const filteredUsers = users.filter((user) => 
            user.email !== email
        )
        setUsers(filteredUsers)
      }


    const filteredUsers = useMemo(()=>{
    
    return filterCountry ? users.filter((user) => {
        
        return user.location.country.toLocaleLowerCase().includes(filterCountry.toLocaleLowerCase())
    }) : users
    },[users, filterCountry])


    const usersByCountry = useMemo(()=>{

    return sortCountry ?
    [...filteredUsers].sort((a,b) => a.location.country.localeCompare(b.location.country)) : filteredUsers}
    ,[ sortCountry, filteredUsers])

    
 
    const resetUsers = () => {
        setUsers(originalUsers.current)
    }


    

      return {users: usersByCountry, handleColor, toggleColor, handleSortByCountry, handleDelete, resetUsers, setFilterCountry}
}

export default useUser