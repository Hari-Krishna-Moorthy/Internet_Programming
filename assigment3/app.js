const checkUsername  = username => {
    if(username=="")
        alert("Enter the User Name ")
    return true;
}
const chechPassword = password => {
    // if(password.match("[a-zA-Z]{6,15}/")==null)
    //     alert("Password must be 6 to 14 character ");
    return true;
}
const checkPhoneNumber = phoneNumber => {
    // if(!phoneNumber.match("/^[0-9]{10}$/")) 
        // alert("Phone Number must be 10 digit Number")
    return true;
}


const validatePassword = () => {
    const formDatas = document.getElementById("form");
    if(checkUsername(formDatas.elements[0].value) 

        && chechPassword(formDatas.elements[2].value)
        && checkPhoneNumber(formDatas.elements[3].value))
        alert("SUCCESS");
}