import {Footer, Header} from "../components";
import './Style.css'
import {Col, Row} from "antd";

const ConnectWallet = () => {
    const ListMenuWalletConnect = [
        {
            logo: "/public/img/mtm.png",
            title: "Meta Mask",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
        },
        {
            logo: "/public/img/bitski.png",
            title: "Bitski",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
        },
        {
            logo: "/public/img/fortmatic.png",
            title: "Fortmatic",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
        },
        {
            logo: "/public/img/walletCOnnect.png",
            title: "Wallet Connect",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
        },
        {
            logo: "/public/img/cointBase.png",
            title: "Coinbase Wallet",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
        },
        {
            logo: "/public/img/autherum.png",
            title: "Authereum",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
        },
        {
            logo: "/public/img/kaikas.png",
            title: "Kaikas",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
        },
        {
            logo: "/public/img/torus.png",
            title: "Torus",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
        },
    ]
    return (
        <div id='connect--wallet'>
            <Header/>
            <section className='flat-title-page inner'>
                <div className="container">
                    <div className='themesflat-container'>
                        <Row gutter={16} className='justify-content-center'>
                            <Col md={24}>
                                <div className='page-title-heading mg-bt-12'>
                                    <h1 className='heading text-center'>
                                        Connect Wallet
                                    </h1>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>
            <section className='tf-connect-wallet tf-section'>
                <div className='themesflat-container'>
                    <Row gutter={16}>
                        <Col span={24}>
                            <h2 className='tf-title-heading ct style-2 mg-bt-12'>
                                Connect Your Wallet
                            </h2>
                            <h5 className='sub-title ct style-1 pad-400'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos
                                quae quo ad iste ipsum officiis deleniti asperiores sit.
                            </h5>
                        </Col>
                        <Col span={24}>
                            <Row gutter={16}>
                                {ListMenuWalletConnect.map((items, index) => (
                                    <Col key={index} span={24} className='sc-box-icon-inner style-2'>
                                        <div className='sc-box-icon'>
                                            <div className='img'>
                                                <img src={items.logo} alt=""/>
                                            </div>
                                            <h4 className='heading-connect'>
                                                {items.title}
                                            </h4>
                                            <p className='content'>
                                                {items.description}
                                            </p>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default ConnectWallet