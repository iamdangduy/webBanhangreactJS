import React, { Component } from 'react';

class ChuyenDong extends Component {
    render() {
        return (
            <div className="row">
        <div className="col-md-12">
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
              <li data-target="#carouselExampleIndicators" data-slide-to={1} />
              <li data-target="#carouselExampleIndicators" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src="https://tainguyenpsd.com/worigin/2017/01/06/anh-bia-lien-minh-huyen-thoai-tuong-Yasuo586f42ee4bdde_a90cb0b3efdec644e3a2a315077d019f.jpg" alt="First slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="https://tainguyenpsd.com/worigin/2017/01/06/anh-bia-lien-minh-huyen-thoai-tuong-Yasuo586f42ee4bdde_a90cb0b3efdec644e3a2a315077d019f.jpg" alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="https://tainguyenpsd.com/worigin/2017/01/06/anh-bia-lien-minh-huyen-thoai-tuong-Yasuo586f42ee4bdde_a90cb0b3efdec644e3a2a315077d019f.jpg" alt="Third slide" />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
        );
    }
}

export default ChuyenDong;