import Link from "next/link";
import { useRouter } from "next/router";

function index() {
  
 const router=useRouter();
 
  const handleClick=()=>{
// router.replace("/about")
router.push("/about")
  }
  return (
    <div>
     <h1>This is home Page</h1>
    <Link href='/about'><h>go to about page</h></Link>
    <Link href='/profile'><h>go to profile page</h></Link>

    <button className=" bg-slate-300 p-2 m-2 rounded-2xl block " onClick={handleClick}>form submitted</button>
    </div>
  );
}

export default index;