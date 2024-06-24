import { LitElement, html } from "lit-element";

export class ListElement extends LitElement{
    static get properties(){
        return{
            items:{type:Array}
        };
    }
    render() {
        return html`
        <ul>
            ${this.items.map(item => html`<li>${item}</li>`)}
        </ul>
        
        `;
    }

}
