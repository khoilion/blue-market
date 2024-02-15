// @ts-ignore
import Slider from "react-slick";
import './Style.css'
import {Col, Row} from "antd";
import { IoRocketOutline } from "react-icons/io5";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import {settingsBanner} from "../../utils/utils.tsx";

const Banner = () => {
    return (
        <div className='container'>
            <div id='slide-banner'>
                <Slider {...settingsBanner}>
                    <div className='content slide-up-animation'>
                        <div className='mx-1'>
                            <h2 className='heading mb-0'>Discover, find,</h2>
                            <h1 className='heading mb-style mb-0'>
                            <span className='tf-text s1'>
                                Sell extraordinary
                            </span>
                            </h1>
                            <h1 className='heading mb-0'>
                                Monster NFTs
                            </h1>
                            <p className='sub-heading'>
                                Marketplace for monster character cllections non fungible token NFTs
                            </p>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <div>
                                        <a href="#" className='sc-button-rocket'>
                                        <span>
                                            <IoRocketOutline size={20} className='me-2'/> Explore
                                        </span>
                                        </a>
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <a href="#" className='sc-button-rocket'>
                                    <span>
                                        <MdOutlineCreateNewFolder size={20} className='me-2'/> Create
                                    </span>
                                    </a>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className='content slide-up-animation'>
                        <div className='mx-1'>
                            <h2 className='heading mb-0'>Discover, find,</h2>
                            <h1 className='heading mb-style mb-0'>
                            <span className='tf-text s1'>
                                Sell extraordinary
                            </span>
                            </h1>
                            <h1 className='heading mb-0'>
                                Monster NFTs
                            </h1>
                            <p className='sub-heading'>
                                Marketplace for monster character cllections non fungible token NFTs
                            </p>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <div>
                                        <a href="#" className='sc-button-rocket'>
                                        <span>
                                            <IoRocketOutline size={20} className='me-2'/> Explore
                                        </span>
                                        </a>
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <a href="#" className='sc-button-rocket'>
                                    <span>
                                        <MdOutlineCreateNewFolder size={20} className='me-2'/> Create
                                    </span>
                                    </a>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Banner