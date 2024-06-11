import { jwtVerify,SignJWT } from "jose"

// we will use jose pckage to verify these tokens because we can't do jwt.verify in edge or versal
export async function verifyAuth(token:string){
try {
    const verified=await jwtVerify(token,new TextEncoder().encode("my secret"))
    return verified.payload
} catch (error) {
    throw new Error("Your token has expired")
}
}