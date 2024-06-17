var _unityInstance;
var tg = Telegram.WebApp;

function showTelegramAlert(message) {
    // Проверьте, доступен ли объект WebApp
    if (tg) {
        // Используйте метод showAlert для отображения уведомления
        tg.showAlert(message);
    } else {
        // Если объект WebApp недоступен, используйте обычный alert
        alert(message);
    }
}

showTelegramAlert(`UserId: ${tg.initDataUnsafe.user.id}, FirstName: ${tg.initDataUnsafe.user.first_name}, Test get user id`);

console.log(`UserId: ${tg.initDataUnsafe.user.id}, FirstName: ${tg.initDataUnsafe.user.first_name}, Test get user id`);

function getUserIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('userId');
}

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