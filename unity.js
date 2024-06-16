var _unityInstance;
var tg = window.Telegram.WebApp;

tg.expand();

function onUnitySceneLoaded() {
    const userId = tg.initDataUnsafe.user.id;

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