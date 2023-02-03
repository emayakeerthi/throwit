window.addEventListener("load", ()=>{
    var events = document.getElementById("events");

    //getting the event data from mongodb 
    fetch("http://localhost/ThrowIt/php/events.php",{
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        body: events,
    }).then((response) => response.json()).then((data)=> {
        var table = "<table>";
        
        for(var event of data){
            table += "<h3>" + event.title + "</h3>";
            table += "<tr>";
            table += "<td>Event ID: " + event.id + "</td>";
            table += "<td>Organizer: " + event.organizer + "</td>";
            table += "<td>Speaker: " + event.speaker + "</td>";
            table += "<td>Date: " + event.date + "</td>";
            table += "</tr><hr><br>"
        }

        table += "</table>";

        events.innerHTML = table;        
    })

});