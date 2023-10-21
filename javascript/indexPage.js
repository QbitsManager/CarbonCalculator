

const loginButton = document.getElementById("loginButton");
loginButton.addEventListener("click", showLoginForm);
function showLoginForm() {
    // get the div element that contains the card components
    const cardDiv = document.getElementById("cardDiv");
    // get the div element that contains the form
    const formDiv = document.getElementById("formDiv");
    // hide the cardDiv by removing the class d-flex and adding the class d-none
    cardDiv.classList.remove("d-flex");
    cardDiv.classList.add("d-none");
    // show the formDiv by removing the class d-none and adding the class d-flex
    formDiv.classList.remove("d-none");
    formDiv.classList.add("d-flex");
}

    const backButton = document.getElementById("backButton");
    backButton.addEventListener("click", showIndexPage);
    function showIndexPage() {
        // get the cardDiv and formDiv
        const cardDiv = document.getElementById("cardDiv");
        const formDiv = document.getElementById("formDiv");
        // show the cardDiv by removing the class d-none and adding the class d-flex
        cardDiv.classList.remove("d-none");
        cardDiv.classList.add("d-flex");
        // hide the formDiv by removing the class d-flex and adding the class d-none
        formDiv.classList.remove("d-flex");
        formDiv.classList.add("d-none");
        // reset the input elements and the error div
        let username = document.getElementById("username");
        let password = document.getElementById("password");
        let error = document.getElementById("error");
        // set the empty values to reset the form input elements
        username.value = "";
        password.value = "";
        error.textContent = "";
    }


    const loginSubmit = document.getElementById("loginSubmit");
    loginSubmit.addEventListener("click", userAuthentication);
 
    function userAuthentication(event) {
        event.preventDefault();
        let error = document.getElementById("error");
        let username = document.getElementById("username").value;
        let passwordValue = document.getElementById("password").value;
        if (username !== "" && passwordValue !== "") {
            let dbResult = dbAPI.select("SELECT password FROM login WHERE username = ?", [username]);
           // console.log(dbResult);
            if(dbResult.length !== 0){
                 // get the array where the password is stored
            let dbPasswordArray = dbResult[0].values[0];
            // get the password
            let dbPassword = dbPasswordArray[0];
            // calculate MD5 hash
            const md5Hash = CryptoJS.MD5(passwordValue);
            // convert the MD5 hash to a string
            const encryptPassword = md5Hash.toString();
            // check for equality
            if (dbPassword === encryptPassword) {
                 window.location.href = "admin.html";
            }
            else{
                 // if the passwords are not equal, display the error message in the error div
                 error.textContent = "Incorrect password";
            }
           }else{
               // display the error message Incorrect username
               error.textContent = "Incorrect username";
           }
        }
        else {
            error.textContent = "Incorrect username or password";
        }
    }
    createDbObject();
    async function createDbObject() {
        dbAPI = await new DB();
    };
