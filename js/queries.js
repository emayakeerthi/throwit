window.addEventListener("load", ()=>{
    //getting the event data from mongodb 
    $.ajax({
        type: "POST",
        url: "/ThrowIt/php/queries.php",
        data: {},
        success: function(json){
            var queries = document.querySelector(".queries");
            //console.lotg(JSON.stringify(data));
            
            //decode the json data throwed by the php
            var data = JSON.parse(json); 
            //console.log(data[0]);

            //appending title
            var title = document.getElementById("title");
            title.innerHTML = data[0];

            //displaying the content dynamically
            for(let i=1; i<data.length; i++){
                // var div = document.createElement('div');
                // var query = document.createElement("h4");
                // query.innerHTML = data[i].query;
                // query.setAttribute("id", data[i].query_id);
                // div.appendChild(query);
    
                // div.classList.add("query");
                // queries.appendChild(div);
                if(data[i].length === 0){
                    continue;
                }
                var div = document.createElement('div');
                var query = document.createElement("h5");
                query.innerHTML = data[i].query;
                query.setAttribute("id", data[i].query_id);
                div.appendChild(query);
                
                var table = document.createElement("table");
                var row = table.insertRow(-1)
        
                var query_id_cell = row.insertCell(0);
                var query_id = document.createElement('p');
                query_id.innerHTML = "Query ID: "+data[i].query_id;
                query_id_cell.appendChild(query_id)
        
                var date_cell = row.insertCell(1);
                var date = document.createElement('p');
                date.innerHTML = "Date: "+data[i].date;
                date_cell.appendChild(date)
        
                table.setAttribute('class', "table");
                div.appendChild(table);
                div.classList.add("query");
                queries.appendChild(div);

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


$("form").on("submit", function(){
    //alert("Working");
    $.ajax({
        type: "POST",
        url: "/ThrowIt/php/insert_query.php",
        data: {
            query: $("#askqus").val()
        },
        success: function(response){
            if(response == true){
                window.location.replace("/ThrowIt/queries.html");
            }
            else{
                alert("Something Wrong");
            }
        },
        error: function(response){
            alert("Something Wrong: Not working")
        }
    });
});