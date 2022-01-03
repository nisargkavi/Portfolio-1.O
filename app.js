function valid() {
    var x = document.contact1.txtEmail.value;
    if (x == "") {
        alert("Form Must Be filled Up!");
        return false;
    }
    else{
        alert("Form Sent Sucessfully!!");
        location.reload();
    }
}

