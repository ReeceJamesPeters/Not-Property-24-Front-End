import { LitElement, html } from 'lit';

import './components/ImageCard/image-card.js';

export class MainApp extends LitElement {
  render() {
    return html` <image-card></image-card> `;
  }
}
