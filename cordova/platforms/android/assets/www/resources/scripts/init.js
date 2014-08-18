//User var
var user = [];

//Listener to "deviceready" event
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    //Init facebook plugin
    FB.init({
        appId: '1486437984928127',
        nativeInterface: CDV.FB,
        useCachedDialogs: false
    });

    FB.getLoginStatus(handleStatusChange);
}

function handleStatusChange(session) {
    //Validate the fb api response
    if (session.authResponse) {
        //Fetch user's id, name, and picture
        FB.api('/me', {
            fields: 'name, picture'
        },
        function (response) {
            if (!response.error) {
                document.body.className = 'connected';

                user = response;

                console.log('Got the user\'s name and picture: ' + JSON.stringify(response));

            } else {
                console.log('Error getting user info: ' + JSON.stringify(response.error));
                // Check for errors due to app being unininstalled
                if (response.error.error_subcode && response.error.error_subcode == "458") {
                    setTimeout(function () {
                        alert("The app was removed. Please log in again.");
                    }, 0);
                }
            }
        });
    }
}