var _unityInstance;
var tg = Telegram.WebApp;

// function showTelegramAlert(message) {
//     if (tg) {
//         tg.showAlert(message);
//     } else {
//         alert(message);
//     }
// }

showTelegramAlert(`UserId: ${tg.initDataUnsafe.user.id}, FirstName: ${tg.initDataUnsafe.user.first_name}, Test get user id`);

function getUserIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('userId');
}

function onUnitySceneLoaded() {
    const userId = tg.initDataUnsafe.user.id;

    if (userId) {
        if (typeof _unityInstance !== 'undefined') {
            _unityInstance.SendMessage('UserIdReceiver', 'ReceiveUserId', userId.toString());
        } else {
            console.error('Unity instance is not defined');
        }
    } else {
        console.log('User ID не найден');
    }
}

function onOpenDirectLink(link){
    window.location.href = link;
}

console.log("Test");