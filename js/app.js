var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
        initApp();
    }
};

app.initialize();

function startNew(location){
    ctp.nativewindow.startSlideBackWindow(getAbsoluteUrl(location), null);
}
function presentNew(location){
    ctp.nativewindow.startNormalWindow(getAbsoluteUrl(location), null);
}

function getAbsoluteUrl(url){
    var img = new Image();
    img.src = url;  // 设置相对路径给Image, 此时会发送出请求
    url = img.src;  // 此时相对路径已经变成绝对路径
    img.src = null; // 取消请求
    return url;
}


var initApp = function(){
    console.log("This is a demo page of CtpMobile.");

};