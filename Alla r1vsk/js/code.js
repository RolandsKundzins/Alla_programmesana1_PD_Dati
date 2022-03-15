function deleteTableRows(){
    var table = document.getElementsByTagName('table')[0];

    while(table.rows.length > 1){
        table.rows[1].remove();
    }
}

function displayInventars(viss){
    if(viss == 0)deleteTableRows();
    
    $(document).ready(function(){
        $.getJSON("/js/inventars.json", function(data){
            var inventars_data = '';
            $.each(data, function(key, value){
                inventars_data += '<tr>';
                inventars_data += '<td>'+value.id+'</td>';
                inventars_data += '<td>'+value.nosaukums+'</td>';
                inventars_data += '<td>'+value.tips+'</td>';
                inventars_data += '<td>'+value.apakstips+'</td>';
                inventars_data += '<td>'+value.skaits+'</td>';
                inventars_data += '<td>'+'</td>';
                inventars_data += '<td>'+value.komentari+'</td>';
                inventars_data += '</tr>';
            });
            $('#table1').append(inventars_data);
        }); 
    })
}

function displayVielas(viss){
    if(viss == 0) deleteTableRows();

    $(document).ready(function(){
        $.getJSON("/js/vielas.json", function(data){
            var vielas_data = '';
            $.each(data, function(key, value){
                vielas_data += '<tr>';
                vielas_data += '<td>'+value.id+'</td>';
                vielas_data += '<td>'+value.nosaukums+'</td>';
                vielas_data += '<td>'+value.tips+'</td>';
                vielas_data += '<td>'+value.apakstips+'</td>';
                vielas_data += '<td>'+value.skaits+'</td>';
                vielas_data += '<td>'+value.mervienibas+'</td>';
                vielas_data += '<td>'+value.komentari+'</td>';
                vielas_data += '</tr>';
            });
            $('#table1').append(vielas_data);
        }); 
    })
}


function displayViss(){
    deleteTableRows();
    displayVielas(1);
    displayInventars(1);
}