import React from 'react';
import { useState } from 'react';
import { json, useLoaderData } from 'react-router-dom';

const Prupdate = () => {
    const [user, setUser ]  = useState({})
    const storedUser = useLoaderData();
    console.log(user);
    const { _id, address, name, email } = useLoaderData();
    const handleOnSubmit = e =>{
        e.preventDefault();
        fetch(`http://localhost:5500/userpr/${_id}`,{
            method:'PUT', 
            headers:{
                'content-type':'application/json', 
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount > 0){
                alert('user updated')
            }
        })
    }
    const handleOnBlur = function (e){
        const feild = e.target.name;
     console.log(feild);

     const updatedUser = {...user}  
     updatedUser[feild] = e.target.value;
        console.log(updatedUser);          
        setUser(updatedUser)
            return null;
    }
    return <div>
        <h3>Please update</h3>
        <form onSubmit={handleOnSubmit}>
            <input onBlur={handleOnBlur} defaultValue={name} type="text" placeholder="name" name="name" /> <br />
            <input onBlur={handleOnBlur} defaultValue={address} type="text" placeholder="address" name="address" /> <br />
            <input onBlur={handleOnBlur} defaultValue={email} type="email" placeholder="email" name="email" /> <br />
            <button type="submit">Update User</button></form>
    </div>
};

export default Prupdate;