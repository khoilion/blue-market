import './Style.css'
import {Col, Flex, Row} from "antd";
import {Link} from "react-router-dom";
import {settings} from "../../utils/utils.tsx";
// @ts-ignore
import Slider from "react-slick";

const PopularCollection = () => {
  const ListBoxPopular = [
    {
      avt: "/public/img/avtPopular.jpg",
      title: "Creative Art Collection",
      CreatedBy: "Mason Woodward",
      imgLeft: "/public/img/boxLeftPopu.jpg",
      topImg: "/public/img/chickenPopul.jpg",
      topImg2: "/public/img/chickenPopul.jpg",
      bottomImg: "/public/img/img-collectionPopul.jpg",
    },
    {
      avt: "/public/img/avtPopular.jpg",
      title: "Creative Art Collection",
      CreatedBy: "Mason Woodward",
      imgLeft: "/public/img/boxLeftPopu.jpg",
      topImg: "/public/img/chickenPopul.jpg",
      topImg2: "/public/img/chickenPopul.jpg",
      bottomImg: "/public/img/img-collectionPopul.jpg",
    },
    {
      avt: "/public/img/avtPopular.jpg",
      title: "Creative Art Collection",
      CreatedBy: "Mason Woodward",
      imgLeft: "/public/img/boxLeftPopu.jpg",
      topImg: "/public/img/chickenPopul.jpg",
      topImg2: "/public/img/chickenPopul.jpg",
      bottomImg: "/public/img/img-collectionPopul.jpg",
    },
    {
      avt: "/public/img/avtPopular.jpg",
      title: "Creative Art Collection",
      CreatedBy: "Mason Woodward",
      imgLeft: "/public/img/boxLeftPopu.jpg",
      topImg: "/public/img/chickenPopul.jpg",
      topImg2: "/public/img/chickenPopul.jpg",
      bottomImg: "/public/img/img-collectionPopul.jpg",
    },
    {
      avt: "/public/img/avtPopular.jpg",
      title: "Creative Art Collection",
      CreatedBy: "Mason Woodward",
      imgLeft: "/public/img/boxLeftPopu.jpg",
      topImg: "/public/img/chickenPopul.jpg",
      topImg2: "/public/img/chickenPopul.jpg",
      bottomImg: "/public/img/img-collectionPopul.jpg",
    },
    {
      avt: "/public/img/avtPopular.jpg",
      title: "Creative Art Collection",
      CreatedBy: "Mason Woodward",
      imgLeft: "/public/img/boxLeftPopu.jpg",
      topImg: "/public/img/chickenPopul.jpg",
      topImg2: "/public/img/chickenPopul.jpg",
      bottomImg: "/public/img/img-collectionPopul.jpg",
    },
    {
      avt: "/public/img/avtPopular.jpg",
      title: "Creative Art Collection",
      CreatedBy: "Mason Woodward",
      imgLeft: "/public/img/boxLeftPopu.jpg",
      topImg: "/public/img/chickenPopul.jpg",
      topImg2: "/public/img/chickenPopul.jpg",
      bottomImg: "/public/img/img-collectionPopul.jpg",
    },
    {
      avt: "/public/img/avtPopular.jpg",
      title: "Creative Art Collection",
      CreatedBy: "Mason Woodward",
      imgLeft: "/public/img/boxLeftPopu.jpg",
      topImg: "/public/img/chickenPopul.jpg",
      topImg2: "/public/img/chickenPopul.jpg",
      bottomImg: "/public/img/img-collectionPopul.jpg",
    },
  ]
  return (
    <div id='Popular-Collection'>
      <div className='container'>
        <Row gutter={16}>
          <Col span={24}>
            <Flex align={"center"} justify={'space-between'} className='mb-5'>
              <h2 className='tf-title pb-20'>Popular Collection</h2>
              <Link className='exp style2' to={"#"}>
                EXPLORE MORE
              </Link>
            </Flex>
          </Col>
          <Col span={24}>
            <Slider {...settings}>
              {ListBoxPopular.map((items, index) => (
                <div key={index} className='px-1'>
                  <div  className='sc-card-product'>
                    <div className='card-bottom mb-4'>
                      <div className='author'>
                        <div className='sc-author-box style-2 pb-0'>
                          <div className='author-avatar'>
                            <img className='avatar' src={items.avt} alt=""/>
                          </div>
                        </div>
                      </div>
                      <div className='content'>
                        <h4>
                          {items.title}
                        </h4>
                        <div className='infor'>
                      <span>
                        Created by
                      </span>
                          <span className='name'>
                        {items.CreatedBy}
                      </span>
                        </div>
                      </div>
                    </div>
                    <a href="#">
                      <div className='media-images-collection'>
                        <div className='box-left'>
                          <img src={items.imgLeft} alt=""/>
                        </div>
                        <div className='box-right'>
                          <div className='top-img'>
                            <img src={items.topImg} alt=""/>
                            <img src={items.topImg2} alt=""/>
                          </div>
                          <div className='bottom-img'>
                            <img src={items.topImg2} alt=""/>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default PopularCollection