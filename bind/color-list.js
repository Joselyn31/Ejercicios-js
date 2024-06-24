import { LitElement,html } from "lit";

import './list-element.js';

export class ColorList extends LitElement{
    static properties={
        
            colors:{type:Array}
        };
    
    constructor(){
        super();
        this.colors['Rojo','Verde','Amarillo','Azul'];
    }
    render(){
        return html`
        <list-element .items="${this.colors}"></list-element>
        `;
        
    }
}