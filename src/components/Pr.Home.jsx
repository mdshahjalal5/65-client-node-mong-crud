import { useState } from "react"
import { Link, useLoaderData } from "react-router-dom"

export  const PrHome = function (){
    const [users, setUsers] = useState(useLoaderData())
    const handleDeletUser = async(user)=>{
        const agreed = window.confirm(`Sure want to deleta ${user.name}`)
        // console.log(agreed);
        // console.log(user, 'user');
        if(agreed){
            fetch(`http://localhost:5500/userspr/${user._id}`, {
                method: 'DELETE',
            })
                .then(res => {
                    return res.json()
                })
                .then(data => {
                    console.log(data);
                    if (data.acknowledged){
                        alert('user deleted successfully')
                        const remainingUsers = users.filter(u => u._id !==user._id);
                        setUsers(remainingUsers)

                    }
                })
        }
    }
    // console.log(users);
return <>
        <h2>All users {users?.length} </h2>
        {users.map(function named(user, index, tArr){
            const ui = <p key={user._id}>{index+1}: {user?.name} {user?.email}  {user?.address} <Link to={`../prupdate/${user?._id}`}><button >update</button></Link> <button onClick={() => handleDeletUser(user)}>Delete </button> </p>
             return ui;
        })}
    </>
}