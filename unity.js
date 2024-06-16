var _unityInstance;
var tg = window.Telegram.WebApp;
var userId = tg.initDataUnsafe.user.id;

tg.expand();

function onUnitySceneLoaded() {
    if (userId) {
        if (typeof _unityInstance !== 'undefined') {
            _unityInstance.SendMessage('UserIdReceiver', 'ReceiveUserId', userId);
        } else {
            console.error('Unity instance is not defined');
        }
    } else {
        console.log('User ID не найден');
    }
}