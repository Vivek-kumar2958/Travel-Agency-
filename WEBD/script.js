function validateForm() {
    let name = document.forms["bookingForm"]["name"].value;
    let email = document.forms["bookingForm"]["email"].value;
    let date = document.forms["bookingForm"]["date"].value;

    if (name == "" || email == "" || date == "") {
        alert("Please fill all fields!");
        return false;
    } else {
        alert("Booking Successful!");
        return true;
    }
}