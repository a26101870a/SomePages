let iconPassword = document.getElementById('iconPassword');
let children = document.getElementById('iconPassword').getElementsByTagName('i');
let input = document.getElementById('input');
let visible = false;

children[1].setAttribute('style', 'display: none;');

function changeVisibleState() {
    if (!visible) {
        children[0].setAttribute('style', 'display: none;');
        children[1].setAttribute('style', 'display: inline;');
        input.type = "text";
        visible = true;
    } else {
        children[0].setAttribute('style', 'display: inline;');
        children[1].setAttribute('style', 'display: none;');
        input.type = "password";
        visible = false;
    }

}