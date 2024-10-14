// 获取webview元素
const webview = document.getElementById('webview');

// 加载URL
function loadUrl() {
    const urlInput = document.getElementById('url-input');
    let url = urlInput.value.trim();
    
    // 如果URL不以http://或https://开头，则添加https://
    if (!/^https?:\/\//i.test(url)) {
        url = 'https://' + url;
    }
    
    webview.src = url;
}

// 后退
function goBack() {
    if (webview.canGoBack()) {
        webview.back();
    }
}

// 前进
function goForward() {
    if (webview.canGoForward()) {
        webview.forward();
    }
}

// 刷新
function reload() {
    webview.reload();
}

// 当页面加载完成时，更新输入框中的URL
webview.addEventListener('loadstop', function() {
    document.getElementById('url-input').value = webview.src;
});

// 初始加载默认页面
window.onload = function() {
    loadUrl();
};