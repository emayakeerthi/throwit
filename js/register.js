$("#form").on("submit", function(event){
    $.ajax({
        type: "POST",
        url: "/ThrowIt/php/register.php",
        data: {
            name: $('#name').val(),
            id: $('#id').val(),
            email: $('#email').val(),
            password: $('#pswd').val()
        },
        success: function(response){
            if(response==true){
                alert("Registered Successfully");
                window.location.replace('/ThrowIt/index.html');
            }
            else{
                alert("User already registered, Redirecting to login page");
                window.location.replace('/ThrowIt/login.html');
            }
        },
        error: function(data){
            alert("Something went wrong, Try again!");
        }
    });

    event.preventDefault();
});