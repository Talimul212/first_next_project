import { useRouter } from "next/router";

function Document() {

    const router=useRouter();
    const params=router.query.params || [];

if(params.length===2){
    return(
        <h2>
            {" "}
            this page for <span className=" bg-slate-400">{params[0]}</span> and <span className=" bg-slate-400">{params[1]}</span>{" "}
        </h2>
    )
}
if(params.length===1){
    return(
        <h2>
            {" "}
            this page for <span className=" bg-slate-400">{params[0]}</span>
        </h2>
    )
}
    return (
        <div>
            Document home page
        </div>
    );
}

export default Document;