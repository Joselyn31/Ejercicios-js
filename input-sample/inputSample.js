import {html, css, LitElement} from 'lit';

export class InputSample extends LitElement{
    constructor(){
        super();
        this.miDato='Valor de inicialización';
    }
    static properties={
        miDato:{type:String}
    };
    static styles= css`
    :host{
        display: block;
        padding: 25px;
        color:var(--input-sample-text-color, #000);
    }
    `;
    render(){
        return html`
        <p>Soy My element</p>
        <my-text-input .value=${this.miDato}
        @change="${this.inputCambiado}"></my-text-input>

        <p>El dato escrito es ${this.miDato}</p>
        <button @click=${this.resertTexto}>Borrar Texto</button>

        <div>
            <slot name="one"></slot>
            <slot name="two"></slot>
        </div>
        
        `;
    }
    inputCambiado(e){
        this.miDato=e.detail;
    }
    resertTexto(){
        this.miDato='';  
    }
}