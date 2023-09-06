import './App.css'
import Users from './components/Users'
import useUser from './hooks/useUser'


function App() {
  
  const {users, handleColor, toggleColor, handleSortByCountry, handleDelete, resetUsers, setFilterCountry} = useUser()
  




  return (
    <div className='app'>
        <h1>Prueba tecnica</h1>
        <div className='buttons'>
          <button onClick={handleColor}>Colorear filas</button>
          <button onClick={handleSortByCountry}>Ordenar por pais</button>
          <button onClick={resetUsers}>Resetear estado</button>
          <input onChange={(e)=>{setFilterCountry(e.target.value)}} placeholder='filtrar por pais' type="text" />
      </div>


      <Users users={users} toggle={toggleColor} handleDelete={handleDelete}/>
    </div>
  )
}

export default App
