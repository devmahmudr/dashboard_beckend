import jwt from 'jsonwebtoken'

export const TokenHelper= {
    sign:(payload,secret_key,options={}) =>{
        try {
            return jwt.sign(payload,secret_key,options)
        } catch (error) {
            console.log(error.message);
        }
    },
    verify:(payload,secret_key) =>{
        try {
            return jwt.verify(payload,secret_key)
        } catch (error) {
            console.log(error.message);
        }
    }
}
