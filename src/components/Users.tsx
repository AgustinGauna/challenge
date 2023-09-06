import { User } from '../types'
import '../App.css'

interface Users {
    users: User[]
    toggle: boolean
    handleDelete: (email: string) => void
}

const Users = ({users, toggle, handleDelete} : Users) => {

   
  return (
    <div className='users'>
        <table className='user' >
            <tbody>    
                <tr>
                    <th>Foto</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Pais</th>
                </tr>
                {
                    users.map((user, index)=>(
                        <tr className={toggle ? index % 2 === 0 ? "row-par" : "row-inpar" : ""} key={user.email}>
                            <th><img src={user.picture.thumbnail} alt={user.name.first} /></th>
                            <th>{user.name.first}</th>
                            <th>{user.name.last}</th>
                            <th>{user.location.country}</th>
                            <th>
                                <button onClick={() => {
                                    handleDelete(user.email)
                                }}>Borrar</button>
                            </th>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Users