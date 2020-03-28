import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Main extends Component {
  //state onde são colocadas as variáveis
  state = {
    products: [],
    productInfo: {},
    page: 1
  };

  //métodos de ciclo de vida do component
  componentDidMount() { //executa logo que o componente é exibido em tela
    this.loadProduct();
  };

  loadProduct = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`);

    const { docs, ...productInfo } = response.data;
    
    this.setState({
      products: docs,
      productInfo,
      page
    });
  };

  previousPage = () => {
    const { page, productInfo } = this.state;

    if ( page === 1 ) return;

    const pageNumber = page - 1;

    this.loadProduct(pageNumber);
  };

  nextPage = () => {
    const { page, productInfo } = this.state;

    if( page === productInfo.pages) return;

    const pageNumber = page + 1;

    this.loadProduct(pageNumber);
  };

  render() {
    const { products, productInfo, page } = this.state;

    return (
      <div className="product-list">
        { products.map( product => (
          <article key={product._id}>
            <strong>{product.title}</strong>
            <p>{product.description}</p>

            <Link to={`/products/${product._id}`}>Acessar</Link>
          </article>
        ))}
        <div className="actions">
          <button disabled={ page === 1 } onClick={this.previousPage}>Previous</button>
          <button disabled={ page === productInfo.pages } onClick={this.nextPage}>Next</button>
        </div>
      </div>
    )
  };
}