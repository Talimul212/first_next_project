import Link from "next/link";

function user({users}) {
    console.log(users);
    return (
        <div>
           <h1 className="px-3">All user</h1>
           {
            users.map((user)=>{
                return(
                    <>
                    <Link href={`user/${user.id}`} passHref>
                    <h3>
                        {user.name}
                    </h3>
                    </Link>
                    </>
                )
            })
           }
        </div>
    );
}

export async function getServerSideProps(ctx){
const res=await fetch("https://jsonplaceholder.typicode.com/users")
const data=await res.json()

    return {
        props:{
            users:data
        }
    }
}

export default user;