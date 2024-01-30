import './Style.css'
import {Link} from "react-router-dom";
import {Col, Row} from "antd";
import {MdOutlineDoubleArrow} from 'react-icons/md';
import {FaDiscord, FaFacebook, FaTelegramPlane, FaTiktok, FaTwitter, FaYoutube} from 'react-icons/fa';

const Footer = () => {
    const footerData = {
        myAccount: ['Authors', 'Collection', 'Author Profile', 'Create Item'],
        resources: ['Help & Support', 'Live Auctions', 'Item Details', 'Activity'],
        company: ['Explore', 'Contact Us', 'Our Blog', 'FAQ'],
        socialMedia: [
            {icon: <FaTwitter size={25}/>, link: 'https://twitter.com'},
            {icon: <FaFacebook size={25}/>, link: 'https://facebook.com'},
            {icon: <FaTelegramPlane size={25}/>, link: 'https://twitter.com'},
            {icon: <FaYoutube size={25}/>, link: 'https://facebook.com'},
            {icon: <FaTiktok size={25}/>, link: 'https://twitter.com'},
            {icon: <FaDiscord size={25}/>, link: 'https://facebook.com'},
        ],
    };
    return (

        <div id='footer'>
            <div className='container'>
                <Row gutter={8}>
                    <Col lg={6} md={24} span={24}>
                        <div className='widget widget-logo'>
                            <div className='logo-footer'>
                                <Link to={"/"}>
                                    <img src="/public/img/logoFooter.png" alt=""/>
                                </Link>
                            </div>
                            <p className='sub-widget-logo'>
                                Lorem ipsum dolor sit amet,consectetur adipisicing elit. Quis non, fugit totam vel
                                laboriosam vitae.
                            </p>
                        </div>
                    </Col>
                    <Col lg={4} md={8} sm={10} span={10}>
                        <div className="footer-section">
                            <h5 className='title-widget'>My Account</h5>
                            <ul>
                                {footerData.myAccount.map((item) => (
                                    <li key={item}><a href="#">{item}</a></li>
                                ))}
                            </ul>
                        </div>
                    </Col>
                    <Col lg={4} md={8} sm={14} span={14}>
                        <div className="footer-section">
                            <h5 className='title-widget'>Resources</h5>
                            <ul>
                                {footerData.resources.map((item) => (
                                    <li key={item}><a href="#">{item}</a></li>
                                ))}
                            </ul>
                        </div>
                    </Col>
                    <Col lg={4} md={8} sm={10} span={10}>
                        <div className="footer-section">
                            <h5 className='title-widget'>Company</h5>
                            <ul>
                                {footerData.company.map((item) => (
                                    <li key={item}><a href="#">{item}</a></li>
                                ))}
                            </ul>
                        </div>
                    </Col>
                    <Col lg={6} md={12} sm={14} span={24}>
                        <div className="footer-section subscribe-us">
                            <h5 className='title-widget'>Subscribe Us</h5>
                            <form className='form--input'>
                                <input type="email" placeholder="zluffyz2002@yourgma.com"/>
                                <button type="submit"><MdOutlineDoubleArrow color={"#fff"}/></button>
                            </form>
                            <div className="social-media mg-t32">
                                <ul className='d-flex'>
                                    {footerData.socialMedia.map((media) => (
                                        <li key={media.link}>
                                            <a href="#">
                                                {media.icon}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Footer