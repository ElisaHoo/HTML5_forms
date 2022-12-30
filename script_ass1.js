function displayInput(event) {
    let info_name = document.getElementById("id_fullname").value;
    let info_pass1 = document.getElementById("id_password").value;
    let info_pass2 = document.getElementById("id_confirm").value;
    let info_date = document.getElementById("id_birthday").value;
    let info_height = document.getElementById("id_height").value;
    let info_color = document.getElementById("id_color").value;
    let info_home = document.getElementById("id_country").value;
    let info_profession = document.getElementById("id_profession").value;
    let info_message = document.getElementById("id_message").value;
    if (info_pass1 === info_pass2) {
        if (displayCheckbox().length != 0) {
            document.getElementById("id_result").innerText = `Full Name: ${info_name}\nPassword: ${info_pass1}\nConfirm Password: ${info_pass2}\nGender: ${displayRadioValue()}\nHobbies: ${displayCheckbox()}\nBirthday: ${info_date}\nHeight: ${info_height}\nFavorite Colour: ${info_color}\nHome Country: ${info_home}\nProfession: ${info_profession}\nMessage: ${info_message}`;
            event.preventDefault();
            return false;
        }
        else {
            document.getElementById("id_result").innerText = `Full Name: ${info_name}\nPassword: ${info_pass1}\nConfirm Password: ${info_pass2}\nGender: ${displayRadioValue()}\nBirthday: ${info_date}\nHeight: ${info_height}\nFavorite Colour: ${info_color}\nHome Country: ${info_home}\nProfession: ${info_profession}\nMessage: ${info_message}`;
            event.preventDefault();
            return false;
        }
    }
    else {
        document.getElementById("id_result").innerText = "Passwords didn't match!"
        event.preventDefault();
        return false;
    } 

}
 
function displayRadioValue() {
    gen_element = document.getElementsByName("gender");
    if (gen_element.length > 0) {
        for (i = 0; i < gen_element.length; i++) {
            if (gen_element[i].checked) {
                return gen_element[i].value;
            }

        }
    }
}

function displayCheckbox() { 
    var allhobbies = ["Sports", "Games", "TV", "Music"];
    var myHobbies = [];
    for (let choice of document.getElementsByName("hobbies")) {
        if(choice.checked && allhobbies.findIndex((x) => x == choice.value) != -1) {
            myHobbies.push(choice.value);
        }
    }
    if (myHobbies.length) {
        return `${myHobbies.join(", ")}`;
    }
    else {
        return "";
    }
 
}