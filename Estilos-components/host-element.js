import {html,css,LitElement} from 'lit';

export class HostElement extends LitElement{

    static styles=css `
    /*selecciona el host*/
    :host{
    display:block;
    background-color:azure;
    }
    /*Selecciona el host elemento en el hidden*/

    :host([hidden]){
    display:none;
    }
    /*Seleciona el host del elemento y le asigna una clase "blue" */
    :host(.blue){
    background-color: aliceblue;
    color:blue; 
    
    }
    p{
    font-family:fantasy; 
    }
    
    `;
    render(){
        return html `
        <p>Lorem ipsum dolor sit,amet consectetur.....</p>
        `;
    }

}
