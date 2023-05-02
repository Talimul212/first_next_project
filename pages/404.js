import Link from "next/link";

function Error() {
    return (
        <div>
        <h1>This is error page .go lolo page or home page or where your wish to go</h1>
       <Link href='/'>
       <p>Home</p>
       </Link>
        </div>
    );
}

export default Error;