// # Problem-2:
function sentNotification(email) {
    if(!email.includes('@')) {
       return "Invalid Email"; 
    }
    let splittedEmail = email.split("@");
    const userName = splittedEmail[0];
    const domain = splittedEmail[1];
    let NewString = userName + " sent you an email from " + domain;
    return NewString;
}

let result = sentNotification("lima.ph@gmail.com");
console.log(result);
