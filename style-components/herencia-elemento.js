import {css}from 'lit';
import {SuperElemento } from './superElemento.js';

export class HerenciaElemento extends SuperElemento {
    
    static styles= [
    
    super.styles,
    css` button{color:red;}`
    
    ];
}

