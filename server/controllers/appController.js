import UserModel from '../model/User_model.js'
import bcrypt from 'bcrypt'

/** POST: http://localhost:8080/api/register 
 * @param : {
    "username" : "example123",
    "password" : "admin123",
    "email": "example@gmail.com",
    "firstName" : "bill",
    "lastName": "william",
    "mobile": 8009860560,
    "address" : "Apt. 556, Kulas Light, Gwenborough",
    "profile": ""
}
*/
export async function register(req, res){
    // res.join('register route')
    try{
        const { username, password, profile, email } = req.body;

        const existUsername = new Promise((resolve, reject)=>{
            UserModel.findOne({ username }, function(err, user){
                if(err) reject(new Error(err))

                if(user) reject({ error: "Please use unique Username: "});

                resolve();
            })
        });

        const existEmail = new Promise((resolve, reject)=>{
            UserModel.findOne({ email }, function(err, email){
                if(err) reject(new Error(err))

                if(user) reject({ error: "Please use unique Email: "});

                resolve();
            })        
        });

        Promise.all([existUsername, existEmail])
            .then(()=>{
                if(password){
                    bcrypt.hash(password, 10)
                        .then( hashedPassword => {
                            const user = new UserModel({
                                username,
                                password: hashedPassword,
                                profile: profile || '',
                                email: email
                            })

                            user.save()
                                .then(result => res.status(201).send({msg: "User Register Successfully"}))
                                .catch(error => res.status(500).send({error}))
                        }).catch(error=>{
                            return res.status(500).send({
                                error: "Enable to hashed password"
                            })
                        })
                }
            }).catch(error=>{
                return res.status(500).send({
                    error: "Enable to hashed password"
                })
            })
    }catch(error){
        return res.status(500).send(error);
    }
}


/** POST: http://localhost:8080/api/login 
 * @param: {
    "username" : "example123",
    "password" : "admin123"
}
*/
export async function login(req, res){
    res.join('login route')
}

/** GET: http://localhost:8080/api/user/example123 */
export async function getUser(req, res){
    res.join('getUser route')
}

/** PUT: http://localhost:8080/api/updateuser 
 * @param: {
    "header" : "<token>"
}
body: {
    firstName: '',
    address : '',
    profile : ''
}
*/
export async function updateUser(req, res){
    res.join('updateUser route')
}

/** GET: http://localhost:8080/api/generateOTP */
export async function generateOTP(req, res){
    res.join('generateOTP route')
}

/** GET: http://localhost:8080/api/verifyOTP */
export async function verifyOTP(req, res){
    res.join('verifyOTP route')
}

// successfully redirect user when OTP is valid
/** GET: http://localhost:8080/api/createResetSession */
export async function createResetSession(req, res){
    res.join('createResetSession route')
}

// update the password when we have valid session
/** PUT: http://localhost:8080/api/resetPassword */
export async function resetPassword(req, res){
    res.join('resetPassword route')
}
