import { LitElement, html, css } from 'lit';

const image = new URL('../../../assets/Property-Image.png', import.meta.url)
  .href;

export class ImageCard extends LitElement {
  static get properties() {
    return {
      price: { type: String },
      name: { type: String },
      address: { type: String },
    };
  }

  static get styles() {
    return css`
      .image-card {
        display: flex;
        flex-direction: column;
        width: 410.67px;
        height: 439px;
        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
      }
      .card-image {
        height: 279px;
      }
      .card-content {
        padding: 15px;
      }
      .card-price {
        font-weight: 700;
        font-size: 23px;
        line-height: 28px;
        color: #003f88;
      }
      .card-name {
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        color: #000000;
      }
      .card-adddress {
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        color: #697490;
      }
    `;
  }

  constructor() {
    super();
    this.price = 'R700 000';
    this.name = '2 Bed Apartment in Richmond';
    this.address = '8 Ss Richmond Place, 10 Park Road';
  }

  render() {
    return html`
      <article class="image-card">
        <img class="card-image" alt="" src=${image} />
        <section class="card-content">
          <p class="card-price">${this.price}</p>
          <p class="card-name">${this.name}</p>
          <p class="card-adddress">${this.address}</p>
        </section>
      </article>
    `;
  }
}
