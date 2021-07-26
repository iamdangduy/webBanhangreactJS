import React, { Component } from 'react';
import Product from './Product';
import data from './dulieu.json';

class Menu extends Component {
    render() {
        return (
            data.map((value, key) => (
              <Product linkanh = {value.linkanh} douong = {value.douong}></Product>
            ))
        );
    }
}

export default Menu;