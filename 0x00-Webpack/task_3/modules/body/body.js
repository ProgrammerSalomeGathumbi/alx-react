import "./body.css";
import $ from 'jquery';
import _ from 'lodash';

$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');

let count = 0;
const updateCounter = () => {
   count =+ 1;
   $('#count').text(`${count} clicks on the button`);
};

$('#clickButton').on('click',_.debounce(updateCounter, 500));
