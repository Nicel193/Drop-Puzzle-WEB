var _unityInstance;

function getUserIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('userId');
}

function onUnitySceneLoaded() {
    const userId = getUserIdFromUrl();

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