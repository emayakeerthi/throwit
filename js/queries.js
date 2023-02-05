window.addEventListener("load", ()=>{
    //getting the event data from mongodb 
    $.ajax({
        type: "POST",
        url: "/ThrowIt/php/queries.php",
        data: {},
        success: function(json){
            var events = document.querySelector(".queries");
            //console.lotg(JSON.stringify(data));
            
            //decode the json data throwed by the php
            var data = JSON.parse(json); 
            //console.log(data[0]);

            //displaying the content dynamically
            for(let i=0; i<data.length; i++){
                var div = document.createElement('div');
                var query = document.createElement("h2");
                query.innerHTML = data[i].query;
                query.setAttribute("id", data[i].query_id);
                div.appendChild(query);
    
                div.classList.add("query");
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