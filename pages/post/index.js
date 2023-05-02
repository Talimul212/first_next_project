import Link from "next/link";

function Postlist({data}) {
    console.log("post data :-",data);
    return (
        <div>
           {
            data.map((post)=>{
                return(
                    <div key={post?.id}>
                        <div  className=" bg-orange-300 my-2 mx-2 p-2">
                      <Link href={`/post/${post?.userId}`}>
                      <h1 className=" text-xl ">{post?.title}</h1>
                      </Link>
                    <p>{post?.body}</p>
                        </div>
                    </div>
                )
            })
           }
        </div>
    );
}

export async function getStaticProps(ctx) {
const res=await fetch("https://jsonplaceholder.typicode.com/posts") 
const data=await res.json(); 
return{
    props:{
        data:data.slice(0,4),
    },
}; 
}

export default Postlist;