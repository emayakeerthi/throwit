window.addEventListener("load", ()=>{
    //getting the event data from mongodb 
    $.ajax({
        type: "POST",
        url: "/ThrowIt/php/events.php",
        data: {},
        success: function(json){
            var events = document.querySelector(".event");
            //console.lotg(JSON.stringify(data));

            //decode the json data throwed by the php
            var data = JSON.parse(json); 
            //console.log(data[0]);

            //displaying the content dynamically
            var table = document.createElement("table");
            var row = table.insertRow(-1);
            for(let i=0; i<data.length; i++){
                var title = document.createElement("h3");
                var a = document.createElement('a');
                a.innerHTML = data[i].title;
                //console.log(title.innerHTML);
                a.href = "http://localhost/ThrowIt/"+data[i].event_id;
                title.appendChild(a);
                events.appendChild(title);
            }

            //table += "</table>";
            // events.innerHTML = "";
            // events.appendChild(table);
        },
        error: function(response){
            alert("Something Wrong: Not working")
        }
    });
});