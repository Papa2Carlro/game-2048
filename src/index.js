// import _ from 'lodash';
import './scss/style.scss';
import printMe from "./js/print"

function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = printMe();

    return element;
}

document.body.appendChild(component());