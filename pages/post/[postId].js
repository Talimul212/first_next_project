function Post({data}) {
    console.log("post data:",data);
    return (
        <div>
            <h1>Single post page</h1>
        </div>
    );
}
export async function getStaticProps({params}){
   
   
    
    console.log("lolo",params);
    const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`) 
    const data=await res.json();
console.log(data);
    return {
        props:{
            data:data,
        }
    }
}


export async function getStaticPaths() {
    return {
      paths: [
        { params: { id:"1" } }
    ],
      fallback: true, // can also be true or 'blocking'
    }
  }
  

export default Post;
// https://api.tvmaze.com/shows