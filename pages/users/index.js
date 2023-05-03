import { useState } from "react";


function users() {
const[users,setUsers]=useState([]);;
const[user,setUser]=useState([]);;
    const loadAllData=()=>{
        fetch('/api/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    };

    const handlerUser=()=>{
        fetch('/api/users',{
            method:"POST",
            body:JSON.stringify({user}),
            headers:{"content-Type":"application/json"}
        })
loadAllData();
    }

    const handlerDeleteBtn=(id)=>{
fetch(`/api/users/${id}`,{
    method:"DELETE",
})
loadAllData()
    }


    if(!users){
        return<p>Loading.....</p>
    }
    return (
        <div className="m-2">
          <h1>All users</h1>
          <div>
            <input className=" border-4 bg-slate-300" onChange={e=>setUser(e.target.value)} 
            type="text"/>
          <button onClick={handlerUser} className=" my-3 bg-slate-300 rounded-xl p-2">Add user</button>
          </div>
          <button className=" my-3 bg-slate-300 rounded-xl p-2" onClick={loadAllData} >Load users data</button>

          <div className="my-2">
{
    users.map(user=>{
        return(
            <div key={user?.id}>
            <h1>{user?.id}:{user?.name}</h1>
            <button className=" my-3 bg-slate-300 rounded-xl p-2" onClick={()=>handlerDeleteBtn(user?.id)}>Delete</button>
            </div>
        )
    })
}
          </div>
        </div>
    );
}

export default users;