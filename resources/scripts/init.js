//User var
var user = [];

//Listener to "deviceready" event
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    //Init facebook plugin
    FB.init({
        appId: '1486435364928389',
        nativeInterface: CDV.FB,
        useCachedDialogs: false
    });
}