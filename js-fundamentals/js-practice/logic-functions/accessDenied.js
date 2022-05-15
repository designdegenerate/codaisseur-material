const password = 'supersecretpassword'
const input = 'iamhackingyou'
const isAccountLocked = true

const passwordCorrect = password === input

const accountLocked = !passwordCorrect || isAccountLocked

// just locking someone out of their account isn't very nice ...
// We want to display some feedback:

// If the password is correct AND the account is not locked -> 'Welcome'
// If the account was locked or the password is wrong -> 'Your login attempt failed, contact system administrator'

const verifylogin = passwordCorrect && !accountLocked ? console.log("Welcome") : console.log("Your login attempt failed, contact system administrator");
