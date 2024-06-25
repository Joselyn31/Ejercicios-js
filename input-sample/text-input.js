import {html, LitElement} from 'lit';

export class TextInput extends LitElement{
    static properties={
        value:{type:String}
    };
    render(){
        return html `
        <p>
            <input type="text" .value="${this.value}" @input="${this.inputChange}">
        </p>
        
        `;
    }
    inputChange(e){
        this.value = e.target.value;
        this.dispatchEvent(new CustomEvent('change',{
            detail: this.value
        }));
    }
}
