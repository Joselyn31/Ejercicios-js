import {html,css,LitElement} from 'lit';
import { buttonStyles } from './buttonStyles.js';

export class SharingStyles extends LitElement {
    static properties=[
        buttonStyles,
        css`
        :host{
            display: block;
            border: 1px solid black;
        }
        `
    ]
    render(){
        return html `
        <button class="blue-button">Click</button>
        <button class="blue-button" disabled>No click</button>
        
        `;
    }

}