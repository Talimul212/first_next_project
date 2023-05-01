import { useRouter } from "next/router";

function commentId() {

const router=useRouter()
const {blogId,commentId}=router.query;

    return (
        <div>
           <h1>
        blogId {blogId}  comment Details {commentId}
           </h1>
        </div>
    );
}

export default commentId;