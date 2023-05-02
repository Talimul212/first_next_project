import Link from "next/link";

function Postlist({data}) {
    console.log("post data:",data);
    return (
        <div>
           {
            data.map((post)=>{
                return(

                    <div key={post.id}>
                        <div className=" bg-slate-400 m-2 p-3">
                           <Link href={`/post/${post?.id}`}> <h1 className=" text-x font-bold">{post?.title}</h1></Link>
                            <p>{post?.body}</p>
                        </div>
                    </div>
                )
                
            })
           }
        </div>
    );
}

export async function getStaticProps(ctx){
const res=await fetch("https://jsonplaceholder.typicode.com/posts")
const data=await res.json()

    return {
        props:{
            data:data
        }
    }
}

export default Postlist;