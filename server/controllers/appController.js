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
    res.join('register route')
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
