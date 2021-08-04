import React, { Component } from 'react';
import Product from './Product';
import data from './dulieu.json';

class Menu extends Component {
    render() {
    
        return (
            <div>
        <div className="row" style={{paddingBottom: '100px'}}>
          <div className="col-md-2" />
          <div className="col-md-8 " style={{textAlign: 'center'}}>
            {
                data.map((value, key) => {
                    if (key <= 5) {
                      return <Product tinId={value.id} linkanh={value.linkanh} douong = {value.douong}></Product>
                    }
                  }
                )
            }
          </div>
          <div className="col-md-2" />
        </div>
      </div>
        );
    }
}

export default Menu;