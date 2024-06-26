import {html,css,LitElement} from 'lit';

export class SlotsElement extends LitElement {
    static styles= css`
    ::slotted(*){font-family:Roboto;}
    ::slotted(p){color:blue;}
    div ::slotted(*){color:red;}
    `;
    render(){
        return html`
        <slot></slot>
        <div><slot name="hi"></slot></div>
        
        `;
    }

}
