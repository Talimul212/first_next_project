import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function SingleUser({user}) {
    const[users,setUsers]=useState({}||" ");
    const{id}=useRouter().query;
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res=>res.json())
        .then(data=>setUsers(data))
    }
    ,[])

    return (
        <div>
          <h1>Single User Data</h1>
          <p>user name : {users.name}</p>
        </div>
    );
}



// export async function getServerSideProps(ctx){

//     const {params}=ctx
//     const res=await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
//     const data=await res.json()
//     return {
//         props:{
//             user:data
//         }
//     }
// }



export default SingleUser;