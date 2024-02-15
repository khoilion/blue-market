import './Style.css'
import {Col, Row} from "antd";
// @ts-ignore
import Slider from "react-slick";
import {settingsTopSeller} from "../../utils/utils.tsx";

const TopSeller = () => {
  const ListUserTopseller = [
    {
      avt: "/public/img/avtSeller.jpg",
      name: "Samson Frost",
      quantityToken: "205.43",
    },
    {
      avt: "/public/img/avtSeller.jpg",
      name: "Samson Frost",
      quantityToken: "205.43",
    },
    {
      avt: "/public/img/avtSeller.jpg",
      name: "Samson Frost",
      quantityToken: "205.43",
    },
    {
      avt: "/public/img/avtSeller.jpg",
      name: "Samson Frost",
      quantityToken: "205.43",
    },
    {
      avt: "/public/img/avtSeller.jpg",
      name: "Samson Frost",
      quantityToken: "205.43",
    },
    {
      avt: "/public/img/avtSeller.jpg",
      name: "Samson Frost",
      quantityToken: "205.43",
    },
    {
      avt: "/public/img/avtSeller.jpg",
      name: "Samson Frost",
      quantityToken: "205.43",
    },
    {
      avt: "/public/img/avtSeller.jpg",
      name: "Samson Frost",
      quantityToken: "205.43",
    },
    {
      avt: "/public/img/avtSeller.jpg",
      name: "Samson Frost",
      quantityToken: "205.43",
    },
    {
      avt: "/public/img/avtSeller.jpg",
      name: "Samson Frost",
      quantityToken: "205.43",
    },
    {
      avt: "/public/img/avtSeller.jpg",
      name: "Samson Frost",
      quantityToken: "205.43",
    },
    {
      avt: "/public/img/avtSeller.jpg",
      name: "Samson Frost",
      quantityToken: "205.43",
    },
  ]
  return (
    <div id='top-Seller'>
      <div className='container'>
        <Row gutter={16}>
          <Col span={24}>
            <h2 className='tf-title'>
              Top Seller
            </h2>
          </Col>
          <Col span={24}>
            <div className='swiper'>
              <div className="slider-container">
                <Slider {...settingsTopSeller}>
                  {ListUserTopseller.map((items, index) => (
                    <div key={index}>
                      <div className='sc-author-box '>
                        <div className='author-avatar'>
                          <img className='avatar' src={items.avt} alt=""/>
                        </div>
                        <div className='author-infor'>
                          <h5>
                            <a href="#">
                              {items.name}
                            </a>
                          </h5>
                          <span className='price'>
                          {items.quantityToken} ETH
                        </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default TopSeller