import{main} from './main.js';
import { ListElement } from './list-element.js';
import { ColorList } from './color-list.js';
window.customElements.define('template-bind',main);
window.customElements.define('list-element',ListElement);
window.customElements.define('color-list',ColorList);
