import React, { Component } from 'react';
import data from './dulieu.json';

class DetailsProduct extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
            {
                data.map((value, key) => {
                    if (this.props.match.params.id == value.id) {
                        return (
                            <div>
                                <img className="DetailsProduct" src={value.linkanh} alt="Douong"/>
                                <div style={{float: 'left', margin: '85px'}}>
                                    <h1>{value.douong}</h1>
                                </div>
                            </div>
                        )
                    }
                })
            }
            </>
        )
    }
}

export default DetailsProduct;