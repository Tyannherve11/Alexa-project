function validate(){
    var un = getElementById('un');
    var pw = getElementById('pw');

    if ((un.value == "web") && (pw.value == "6303")) {
        window.alert("welcome back ! " + un.value);
    }
    else{
        window.alert("invalid input! try again")
    }
}