

 class eContact extends LitElement{
  

    static get properties(){
        return{
            nombre:{type:String},
            email:{type:String},
            verMas:{type:Boolean},
        }
    };
    constructor(){
        super();
        this.verMas=false;
    }

    render(){
        return html`
        <style>
            div{
                border:1px solid #ddd;
                padding:10px;
                border-radius:5px;
                display:inline-block;
            }
            h1{
                font-size:1.2rem;
                font-weight:normal
            }
        </style>
        <div>
            <h1>${this.nombre}</h1>
            <p><a  href="#" @click="${this.toggle}">Ver más</a></p>
            ${this.verMas?
                html`Email:${this.email}`:
                ''
            }
        </div>
        `;
    }
    toggle(e){
        e.preventDefault();
        this.verMas=!this.verMas;
    }

 }
 window.customElements.define('e-contact',eContact);