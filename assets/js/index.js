function directUrl(route) {
    if (route == "login" || route == "terms" || route == "register") route = "Member/" + route;

    if (route != "/") {
        window.location.href = route;
    } else {
        window.location.href = "/";
    }

}

// function InitMeta() {
//     $.ajax({
//         url: '/templete/headModule.html',
//         dataType: "html",
//         success: function(data) {
//             $("head").append(data);
//         }
//     })
// }

function InitHead() {
    $("#header").load("/templete/header/head.html");
}

function InitHead_OnlyLogo() {
    $("#header").load("/templete/header/head_onlylogo.html");
}

function InitFoot() {
    $("#footer").load("/templete/footer/footer.html");
}

function InitBanner() {
    $("#banner").load("/templete/main/banner.html");
    $('.carousel').carousel();
}

function InitMainPage() {
    $(".main").load("/templete/Page/storeGameList/storeGameList.html");
}

function canvasDrawCircle(x, y, wid, obj) {
    var ctx = obj.getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y, wid, 0, 2 * Math.PI, false);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
}