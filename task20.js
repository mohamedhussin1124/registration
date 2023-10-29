const nameInput = document.getElementById("inputName");
const errornameInput = document.getElementById("errorinputName")


const inputEmail = document.getElementById("inputEmail");
const erroremail = document.getElementById("erroremail")


const inputPassowrd = document.getElementById("inputPassowrd");
const errorinputPassowrd = document.getElementById("errorinputPassowrd")


const inputRePassowrd = document.getElementById("inputRePassowrd");
const errorinputRePassowrd = document.getElementById("errorinputRePassowrd")

// Validate password
const passw = /^[A-Za-z]\w{7,14}$/;





const validation = () => {

    /* Validate Name */
    if (nameInput.value === '') {
        errornameInput.classList.add("error");
        nameInput.classList.add("errorInput")
        errornameInput.innerHTML = "Please Set Your Name"


        return false
    }
    else if (nameInput.value.length <= 2) {
        errornameInput.innerHTML = "Please Set  Name More Than 3 character"
        errornameInput.classList.add("error")
        nameInput.classList.add("errorInput")
        return false

    }
    else {

        errornameInput.classList.remove("error")
        errornameInput.innerHTML = "";
        nameInput.classList.remove("errorInput")
    }


    /* Validate Email */
    if (inputEmail.value === '') {
        erroremail.innerHTML = "Please Set Your Password"
        erroremail.classList.add("error")
        inputEmail.classList.add("errorInput")
        return false
    } else {
        inputEmail.classList.remove("errorInput")
        erroremail.innerHTML = ""
        erroremail.classList.remove("error")
    }

    /* Validate Passowrd */
    if (inputPassowrd.value === '') {
        errorinputPassowrd.innerHTML = "Please Set Your Password"
        errorinputPassowrd.classList.add("error")
        inputPassowrd.classList.add("errorInput")
        return false
    }
    else if (inputPassowrd.value.length <= 8) {
        errorinputPassowrd.innerHTML = "Please Set  Name More Than 8 character"
        errorinputPassowrd.classList.add("error")
        inputPassowrd.classList.add("errorInput")
        return false

    }
    else if (inputPassowrd.value.match(passw)
    ) {
        errorinputPassowrd.innerHTML = "Please use lowerCaseLetters and upperCaseLetters  and numbers"
        errorinputPassowrd.classList.add("error")
        inputPassowrd.classList.add("errorInput")
        return false

    }
    else {
        errorinputPassowrd.innerHTML = ""
        errorinputPassowrd.classList.remove("error")
        inputPassowrd.classList.remove("errorInput")
    }


    /* Validate inputRePassowrd */
    if (inputRePassowrd.value === '') {
        errorinputRePassowrd.innerHTML = "Please set Password"
        errorinputRePassowrd.classList.add("error")
        inputRePassowrd.classList.add("errorInput")
        return false
    }
    else if (inputRePassowrd.value !== inputPassowrd.value) {
        errorinputRePassowrd.innerHTML = "Please Repeat Your Password"
        errorinputRePassowrd.classList.add("error")
        inputRePassowrd.classList.add("errorInput")
        return false

    }
    else {
        errorinputRePassowrd.innerHTML = ""
        errorinputRePassowrd.classList.remove("error")
        inputRePassowrd.classList.remove("errorInput")
    }

    setlocalStorages("Email" ,inputEmail.value )
    setlocalStorages("Password" ,inputPassowrd.value )
    document.location.href = '/'
    return true
}





const  setlocalStorages = (name,data)=> {
    let stor =localStorage.setItem(name, data)
}


/* Valdation Sign in */

const validationSign = (e)=>{

    /* Get Data From Storage Browser to Validation */
    const getEmailFromStorage = getlocalStorages("Email")
    const getPasswordFromStorage = getlocalStorages("Password")


    if(inputEmail.value !== getEmailFromStorage) {
        erroremail.innerHTML = "Your Pssword Is valid Please set Your Email"
        erroremail.classList.add("error")
        inputEmail.classList.add("errorInput")
        return false
    }else{
        erroremail.innerHTML = ""
        erroremail.classList.remove("error")
        inputEmail.classList.remove("errorInput")
    }


    if(inputPassowrd.value !== getPasswordFromStorage) {
        errorinputPassowrd.innerHTML = "Your Pssword Is valid Please set Your Password"
        errorinputPassowrd.classList.add("error")
        inputPassowrd.classList.add("errorInput")
        return false
    }else{
        errorinputPassowrd.innerHTML = ""
        errorinputPassowrd.classList.remove("error")
        inputPassowrd.classList.remove("errorInput")
    }
    
    return true
}



function getlocalStorages(nameStorage) {
    let stor = localStorage.getItem(nameStorage)
    return stor
}