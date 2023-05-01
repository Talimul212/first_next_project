import Link from "next/link";

function index() {
  return (
    <div>
     <h1>This is home Page</h1>
    <Link href='/about'><h>go to about page</h></Link>
    </div>
  );
}

export default index;