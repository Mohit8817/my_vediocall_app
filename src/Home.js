import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const [roomID, setRoomID] = useState();
    const navigate = useNavigate();
    const handlejoin = () => {
        navigate(`/room/${roomID}`)
        
    }

  return (
    <div>
   
    <h3 className='text-danger text-center m-3  '>Home</h3>
   <div className='' >
    <input placeholder='Enter Room ID' type='text'   
        className='form-control w-25 text-center'  
        value={roomID}
        onChange={(e)=>setRoomID(e.target.value)}
    />
    <button className='btn btn-success w-25 mt-2' onClick={handlejoin}>Join</button>
   </div>
      
    </div>
  )
}

export default Home
