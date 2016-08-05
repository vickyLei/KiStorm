// Diverge App
// Created by Drew Dunne

function KIApp(data) {
    // url is files needing importing
    this.kiappURL = "//git.hub.ki/ki-apps/diverge/1.0/diverge.min.html";
    //var $data = JSON.parse($("#data").html());
    // $('<script src="'+this.webcomponents+'"></script><link href="'+this.divergeURL+'" rel="import">').appendTo($("#" + data.targetSection));
    $('<ki-app dbref="'+data.dbref+'" uid="'+data.uid+'" accessLevel="'+data.accessLevel+'" token="'+data.token+'"></ki-app>').appendTo($("#" + data.targetSection));
}

$(document).ready(function() {
    console.log( "ready!" );
    var $data = JSON.parse($("#data").html());
    var app = new KIApp($data);
});
