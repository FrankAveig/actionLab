function isMobile() {
    if (sessionStorage.desktop) return false;
    else if (localStorage.mobile) return true;
    var mobileAgents = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobileAgents) {
        if (navigator.userAgent.toLowerCase().indexOf(mobileAgents[i].toLowerCase()) > 0) return true;
    }
    return false;
}

document.addEventListener('DOMContentLoaded', function() {
    const whatsappInfoButton = document.querySelector('#whatsappInfo');
    whatsappInfoButton.addEventListener('click', function() {
        const mensajeInfo = 'send?phone=593998065907&text=Comprar%20Boleto%20Bootcamp'; 
        if (isMobile()) {
            window.open('whatsapp://' + mensajeInfo, '_blank');
        } else {
            window.open('https://web.whatsapp.com/' + mensajeInfo, '_blank');
        }
    });
});