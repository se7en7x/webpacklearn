import _ from 'lodash';
import './style.css';
import Print from './print';
import Print1 from './print1';
import Print2 from './print2';
// import Print3 from './print3';





function component() {
  var element = document.createElement('div');
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.onclick = Print.bind(null, 'Hello webpack!');
    element.onclick = Print1.bind(null, 'Hello webpack!');
    element.onclick = Print2.bind(null, 'Hello webpack!');
    //     element.onclick = Print3.bind(null, 'Hello webpack!');


  element.classList.add('hello');

  console.log("asdasdssss");
  return element;
}

document.body.appendChild(component());