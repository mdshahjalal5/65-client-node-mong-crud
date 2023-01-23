import { useState } from "react";

const PrAdduser = function(){
    const [user, setUser ] = useState({})
    function handleOnSubmit(e){
        e.preventDefault();
      
       handleform()
         
    }
    const handleform = async(e)=>{
        const res =await fetch('http://localhost:5500/userspr', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
            });
        const data = await res.json();
        console.log(data, 'data');
        if (data.acknowledged){
            alert('user added successfully')
        }
    }
    const handleOnBlur = function(e){
        const feild = e.target;
        const value = feild.value;
        const newUser = {}
        newUser[feild.name] = value;
        setUser({...user, ...newUser} )
    }
    console.log(user, 'user');
    return <>
        <form onSubmit={handleOnSubmit}>
            <input onBlur={handleOnBlur} type="text" placeholder="name"  name="name"/> <br />
            <input onBlur={handleOnBlur} type="text"  placeholder="address"  name="address"/> <br />
            <input onBlur={handleOnBlur} type="email" placeholder="email"  name="email"/> <br />
            <button type="submit">Add user</button></form>
    </>
}
export default PrAdduser;