$("#form").on("submit", function(event){
    $.ajax({
        type: "POST",
        url: "/ThrowIt/php/login.php",
        data:{
            id: $("#id").val(),
            pswd: $("#pswd").val()
        },
        success: function(response){
            if(response==true){
                //alert("Successfull");
                window.location.replace("/ThrowIt/index.html");
            }
            else{
                alert("Unknown id or password");
            }
        },
        error: function(data){
            alert("Error");
        }

    });
    event.preventDefault();
});