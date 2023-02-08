import IPersonaje from '../types/personaje.types'

interface Props {
    data: IPersonaje
}
const Personaje = ({data}: Props) => {
   
  
    return (
    <div key={data.id} style={{display: "flex", flexDirection: "column", alignItems:"center", marginBottom: "20px"}}>
                <label style={{marginBottom: 5}}>Nombre: {data.name}</label>
                <img src={data.image} alt="personaje"/>
                <button onClick={()=>{}} >Añadir personaje</button>
    </div>
  )
}

export default Personaje