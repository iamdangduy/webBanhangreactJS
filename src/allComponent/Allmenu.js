import React, { Component } from 'react';
import Product from './Product';

class Allmenu extends Component {
    render() {
        return (
            <div>
        <div className="row" style={{paddingBottom: '100px'}}>
          <div className="col-md-2" />
          <div className="col-md-8 " style={{textAlign: 'center'}}>
            <div className="row">
              <Product linkanh="https://product.hstatic.net/1000075078/product/cold-brew-classic_0627eece2e014fa1aeacb724e954011d_master.jpg" douong="Cold Brew"/>
              <Product linkanh="https://product.hstatic.net/1000075078/product/tra-dao-cam-sapng_58268b7877cd4209b8fc3fa1d4909511_master.jpg" douong="Trà Đào Cam Sả"/>
              <Product linkanh="https://product.hstatic.net/1000075078/product/cafe-den-da_18234c186f2f44f0a2d7ec1ce0e58158_master.jpg" douong="Cà Phê Đen"/>
            </div>
            <div className="row">
              <Product linkanh="https://product.hstatic.net/1000075078/product/cold-brew-classic_0627eece2e014fa1aeacb724e954011d_master.jpg" douong="Cold Brew"/>
              <Product linkanh="https://product.hstatic.net/1000075078/product/tra-dao-cam-sapng_58268b7877cd4209b8fc3fa1d4909511_master.jpg" douong="Trà Đào Cam Sả"/>
              <Product linkanh="https://product.hstatic.net/1000075078/product/cafe-den-da_18234c186f2f44f0a2d7ec1ce0e58158_master.jpg" douong="Cà Phê Đen"/>
            </div>
            <div className="row">
              <Product linkanh="https://product.hstatic.net/1000075078/product/capu-nong_a2a47a422fa94e8194e9d4c4badba9d3_master.jpg" douong="Capuchino"/>
              <Product linkanh="https://kinhdoanhcafe.com/wp-content/uploads/2013/04/cach-pha-che-ca-phe-sua-de.jpg" douong="Cà Phê Nâu"/>
              <Product linkanh="https://static.wixstatic.com/media/b5b310_2a551a4429b949d9bc6e7bbe432e18a7~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_90,usm_0.66_1.00_0.01/b5b310_2a551a4429b949d9bc6e7bbe432e18a7~mv2.jpg" douong="Bạc Sỉu"/>
            </div>
            <div className="row">
              <Product linkanh="https://product.hstatic.net/1000075078/product/cold-brew-classic_0627eece2e014fa1aeacb724e954011d_master.jpg" douong="Cold Brew"/>
              <Product linkanh="https://product.hstatic.net/1000075078/product/tra-dao-cam-sapng_58268b7877cd4209b8fc3fa1d4909511_master.jpg" douong="Trà Đào Cam Sả"/>
              <Product linkanh="https://product.hstatic.net/1000075078/product/cafe-den-da_18234c186f2f44f0a2d7ec1ce0e58158_master.jpg" douong="Cà Phê Đen"/>
            </div>
          </div>
          <div className="col-md-2" />
        </div>
      </div>
        );
    }
}

export default Allmenu;