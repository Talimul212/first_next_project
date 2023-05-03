import { users } from "@/userjson";

export default function handler(req,res) {
    console.log(req.body);
    if(req.method==="GET"){
        res.status(200).json(users)
    }
    else if(req.method==="POST"){
        const user=req.body.user;
        console.log(user);
        const newUser={
            id:Date.now(),
            name:user,
        }
        console.log(newUser);
        users.push(newUser);
        console.log(users);
        
        res.status(201).json(newUser)
    }
}