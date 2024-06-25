import { LitElement, css, html} from "lit";

 export class SuperElemento extends LitElement{
    static styles= css`
    button{
        width: 300px;
        font-style: italic;
    }
    `;
    render(){
        return html `
        <h1>Herencia de estilos</h1>
        <button>Click</button>
        
        `;
    }

}