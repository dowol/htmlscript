import {JSDOM} from 'jsdom';

const {document} = new JSDOM('<p>Hello, world!</p>')?.window;

console.log(document.body);
