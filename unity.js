function getUserIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('userId');
}

function sendUserIdToUnity(unityInstance) {
    const userId = getUserIdFromUrl();
    if (userId) {
        console.log('User ID:', userId);

        setTimeout(function() {
            if (typeof unityInstance !== 'undefined') {
                unityInstance.SendMessage('UserIdReceiver', 'ReceiveUserId', userId);
            } else {
                console.error('Unity instance is not defined');
            }
        }, 5000);
    } else {
        console.log('User ID не найден');
    }
}