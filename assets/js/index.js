
function InitHead(){
    $.ajax({
        url: "./templete/header/head.html",
        dataType: "html",
        success: function(data) {
            $("#header").html(data);
        },
        error: function(err){
            console.log(err);
        }
    })

    $.ajax({
        url: href,
        dataType: 'css',
        success: function(){                  
                $('<link rel="stylesheet" type="text/css" href="'+href+'" />').appendTo("head");
                //your callback
            }
    })
}

