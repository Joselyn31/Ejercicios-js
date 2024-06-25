import {html,css,LitElement} from 'lit';

import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';

export class DynamicStyle extends LitElement{
    constructor(){
        super();
        this.classes={mydiv:true,someclass:true};
        this.style={color:'green',fontFamily:'Roboto'};
    }
    static properties={
        classes:{type:Object},
        styles:{type:Object}
    };
    static styles=css`
    .mydiv {background-color:blue;}
    .someclass {border:1px solid red;}
    `;

    render(){
        return html`
        <h2>Estlos dinamicos</h2>
        <div class=${classMap(this.classes)} style=${styleMap(this.style)}>
            Some Content   
        </div>
        `;
    }
}