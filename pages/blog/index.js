import Link from "next/link";

function Blog({blogId=300}) {

    return (
        <div>
           <Link href='/blog/1'>
           <h1> Blog 1</h1>
           </Link>
           <Link href='/blog/2'>
           <h1> Blog 2</h1>
           </Link>
           <Link href='/blog/3'>
           <h1> Blog 3</h1>
           </Link>
           <Link href={`/blog/${blogId}`} replace>
           <h1> Blog 400</h1>
           </Link>
        </div>
    );
}

export default Blog;