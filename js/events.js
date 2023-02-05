window.addEventListener("load", ()=>{
    //getting the event data from mongodb 
    $.ajax({
        type: "POST",
        url: "/ThrowIt/php/events.php",
        data: {},
        success: function(json){
            var events = document.querySelector(".events");
            //console.lotg(JSON.stringify(data));
            
            //decode the json data throwed by the php
            var data = JSON.parse(json); 
            //console.log(data[0]);

            //displaying the content dynamically
            for(let i=0; i<data.length; i++){
                var div = document.createElement('div');
                var title = document.createElement("h3");
                var a = document.createElement('a');
                a.innerHTML = data[i].title;
                a.setAttribute("id", data[i].event_id);
                a.setAttribute('href', '/ThrowIt/queries.html');
                title.appendChild(a);
                div.appendChild(title);
                
                var table = document.createElement("table");
                var row = table.insertRow(-1);

                var event_id_cell = row.insertCell(0);
                var event_id = document.createElement('p');
                event_id.innerHTML = "Event ID: "+data[i].event_id;
                event_id_cell.appendChild(event_id);

                var event_id_cell = row.insertCell(1);
                var event_id = document.createElement('p');
                event_id.innerHTML = "Oranizer: "+data[i].organizer;
                event_id_cell.appendChild(event_id);

                var event_id_cell = row.insertCell(2);
                var event_id = document.createElement('p');
                event_id.innerHTML = "Speaker: "+data[i].speaker;
                event_id_cell.appendChild(event_id);

                var event_id_cell = row.insertCell(3);
                var event_id = document.createElement('p');
                event_id.innerHTML = "Date: "+data[i].date;
                event_id_cell.appendChild(event_id);

                div.appendChild(table);
                div.classList.add("event");
                events.appendChild(div);

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

$(document).on("click", 'a', function(){
    alert("working : " + this.id);
});