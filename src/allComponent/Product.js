import React, { Component } from 'react';

class Product extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="product-card">
              <a className="product-item" href="http://facebook.com">
              <div className="mt-4 product-img" style={{float: 'left'}}>
                <div className="card">
                 <img className="card-img-top" src={this.props.linkanh} alt="Card image cap" />
                  <div className="card-body" style={{maxWidth: '100%'}}>
                    <h2 className="card-text">{this.props.douong}</h2>
                  </div>
                </div>
              </div>
            </a>
            </div>
        );
    }
}

export default Product;