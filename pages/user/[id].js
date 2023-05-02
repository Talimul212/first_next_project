function SingleUser({user}) {
    return (
        <div>
          <h1>Single User Data</h1>
          <p>user name : {user.name}</p>
        </div>
    );
}

export async function getStaticProps(ctx){
const {params}=ctx
    const res=await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const data=await res.json()
    return {
        props:{
            user:data
        }
    }
}


export async function getStaticPaths() {
    const res=await fetch("https://jsonplaceholder.typicode.com/users")
const data=await res.json()
const paths=data.map((user)=>{
    return{
       params:{id:`${user.id}`},
    }
})
    return {
    //   paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    paths: paths,
      fallback: false, // can also be true or 'blocking'
    }
  }

export default SingleUser;