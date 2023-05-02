function PostDetails({data}) {
    console.log(data);
    return (
        <div>
                    <div key={data.id}>
                    <div className=" bg-slate-400 m-2 p-3">
                        <h1 className=" text-x font-bold">{data?.title}</h1>
                        <p>{data?.body}</p>
                    </div>
                </div>
        
        </div>
    );
}

export async function getStaticProps(ctx){
    const {params}=ctx
    const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const data=await res.json()

    return {
        props:{
            data:data
        }
    }
}

export async function getStaticPaths() {
    return {
      paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
      fallback: false, // can also be true or 'blocking'
    }
  }


export default PostDetails;