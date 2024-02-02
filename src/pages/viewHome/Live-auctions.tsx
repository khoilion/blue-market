import {Col, Flex, Row} from "antd";
import {Link} from "react-router-dom";
import './Style.css'
import Slider from "react-slick";
import {FaRegHeart} from "react-icons/fa6";
import {FaHotjar} from "react-icons/fa";

const LiveAuctions = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const ListAuctions = [
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
        <div id='market-section'>
            <div className='container'>
                <Row gutter={16}>
                    <Col span={24}>
                        <Flex align={"center"} justify={'space-between'}>
                            <h2 className='tf-title pb-20'>Live Auctions</h2>
                            <Link className='exp style2' to={"#"}>
                                EXPLORE MORE
                            </Link>
                        </Flex>
                    </Col>
                    <Col span={24}>
                        <Slider {...settings}>
                            {ListAuctions.map((items, index) => (
                                <div key={index}>

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
                                                        <img src="/public/img/arvata.jpg" alt=""/>
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
                                                <span>
                                                    Current Bid
                                                </span>
                                                    <h5>
                                                        4.89 ETH
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
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

export default LiveAuctions