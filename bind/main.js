import { LitElement, html } from "lit";

export class TemplateBind extends LitElement{
     constructor(){
        super();
        this.prop1= 'text binding';
        this.prop2= 'mydiv';
        this.prop3= true;
        this.prop4= 'pie';
        
    }

    static properties={
      
            prop1:{type:String},
            prop2:{type:String},
            prop3:{type:Boolean},
            prop4:{type:String}
        };
    

    render(){
        return html `
        <div>${this.prop1}</div>

        <div id="${this.prop2}">Attribute binding</div>
        <div>
            Boolean Attribute binding
            <input type="text" ?disabled="${this.prop3}"/>
        </div>

        <div>
        Propietes binding
            <input type="text" .value="${this.prop4}"/>
        </div>

        <div>
            Event handler binding
            <button @click="${this.clickHandler}">Click</button>
        </div>
        `;
    }
    clickHandler(e){
        console.log(e.target);
    }
   

}
