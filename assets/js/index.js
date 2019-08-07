function InitHead() {
    $.ajax({
        url: "./templete/header/head.html",
        dataType: "html",
        success: function(data) {
            $("#header").html(data);
            $("head").append('<link rel="stylesheet" type="text/css" href="./assets/scss/header/head.css" />');
        },
        error: function(err) {
            console.log(err);
        }
    })
}

function InitFoot() {
    $.ajax({
        url: "./templete/footer/footer.html",
        dataType: "html",
        success: function(data) {
            $("#footer").html(data);
            $("head").append('<link rel="stylesheet" type="text/css" href="./assets/scss/footer/foot.css" />');
        },
        error: function(err) {
            console.log(err);
        }
    })
}

function InitMainPage() {
    $.ajax({
        url: "./templete/Page/home.html",
        dataType: "html",
        success: function(data) {
            $("#mainContent").html(data);
            $("head").append('<link rel="stylesheet" type="text/css" href="./assets/scss/home/home.css" />');
            $('.carousel').carousel();
        },
        error: function(err) {
            console.log(err);
        }
    })
}