import './Style.css'
import {Button, Col, Flex, Row} from "antd";
import {Link} from "react-router-dom";
import {FaRegHeart} from "react-icons/fa6";
import {FaHotjar} from "react-icons/fa";
import {TbShoppingCartFilled} from 'react-icons/tb';
import {IoReloadCircle} from 'react-icons/io5';

const TodayPicks = () => {
  const ListTodayPicks = [
    {
      imageAct: "/public/img/card-item.jpg",
      title: "Hamlet Contemplates Contemplates",
      avt: "/public/img/arvata.jpg",
      name: "SalvadorDali",
    },
    {
      imageAct: "/public/img/card-item.jpg",
      title: "Hamlet Contemplates Contemplates",
      avt: "/public/img/arvata.jpg",
      name: "SalvadorDali",
    },
    {
      imageAct: "/public/img/card-item.jpg",
      title: "Hamlet Contemplates Contemplates",
      avt: "/public/img/arvata.jpg",
      name: "SalvadorDali",
    },
    {
      imageAct: "/public/img/card-item.jpg",
      title: "Hamlet Contemplates Contemplates",
      avt: "/public/img/arvata.jpg",
      name: "SalvadorDali",
    },
    {
      imageAct: "/public/img/card-item.jpg",
      title: "Hamlet Contemplates Contemplates",
      avt: "/public/img/arvata.jpg",
      name: "SalvadorDali",
    },
    {
      imageAct: "/public/img/card-item.jpg",
      title: "Hamlet Contemplates Contemplates",
      avt: "/public/img/arvata.jpg",
      name: "SalvadorDali",
    },
    {
      imageAct: "/public/img/card-item.jpg",
      title: "Hamlet Contemplates Contemplates",
      avt: "/public/img/arvata.jpg",
      name: "SalvadorDali",
    },
  ]
  return (
    <div id='today-picks'>
      <div className='container'>
        <Row gutter={16}>
          <Col span={24}>
            <Flex align={"center"} justify={'space-between'}>
              <h2 className='tf-title pb-20'>Today's Picks</h2>
              <Link className='exp style2' to={"#"}>
                EXPLORE MORE
              </Link>
            </Flex>
          </Col>
          {ListTodayPicks.map((items, index) => (
            <Col key={index} xl={6} lg={8} md={12} sm={12} span={24}>
              <div className='sc-card-product'>
                <div className='card-media'>
                  <a href="#">
                    <img src={items.imageAct} alt=""/>
                  </a>
                  <a href="#" className='wishlist-button heart'>
                    <FaRegHeart/> <span className='number-like text-white ms-2'>100</span>
                  </a>
                  <div className='featured-countdown'>
                <span className='slogan me-2'>
                  <FaHotjar/>
                </span>
                    <span>
                    00:00:00:00
                  </span>
                  </div>
                </div>
                <div className='card-title'>
                  <h5>
                    <a href="#">
                      {items.title}
                    </a>
                  </h5>
                  <div className='tags'>
                    bsc
                  </div>
                </div>
                <div className='meta-info'>
                  <div className='author'>
                    <div className='d-flex align-items-center '>
                      <div className='avatar'>
                        <img src={items.avt} alt=""/>
                      </div>
                      <div className='info'>
                        <span>Creator</span>
                        <h6>
                          <a href="#">
                            {items.name}
                          </a>
                        </h6>
                      </div>
                    </div>
                    <div className='price'>
                      <span>Current Bid</span>
                      <h5>
                        4.89 ETH
                      </h5>
                    </div>
                  </div>
                </div>
                <div className='card-bottom'>
                  <Button className='sc-button-rocket'>
                  <span className='text-white'>
                    <Flex align={"center"}>
                      <TbShoppingCartFilled size={20} className='me-2'/> Place Bid
                    </Flex>
                  </span>
                  </Button>
                  <Link to={"#"} className='view-history reload'>
                    <Flex align={"center"}>
                      <IoReloadCircle size={20} color={"#fff"} className='me-1'/> View History
                    </Flex>
                  </Link>
                </div>
              </div>
            </Col>
          ))}
          <Col span={24} md={24}>
            <div className='text-center'>
              <div className='sc-button loadmore fl-button pri-3 w-50 m-auto'>
                <span>
                  Load More
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default TodayPicks