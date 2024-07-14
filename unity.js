var _unityInstance;
var tg = Telegram.WebApp;

function showTelegramAlert(message) {
    if (tg) {
        tg.showAlert(message);
    } else {
        alert(message);
    }
}

function isMobile() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
        return true;
    }

    if (/iPhone|iPad|iPod/i.test(userAgent)) {
        return true;
    }

    if (/windows phone/i.test(userAgent)) {
        return true;
    }

    return false;
}

if(!isMobile()){
    showTelegramAlert("Not available for PC")
}

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