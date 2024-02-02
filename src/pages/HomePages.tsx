import {Footer, Header} from "../components";
import Banner from "./viewHome/Banner.tsx";
import LiveAuctions from "./viewHome/Live-auctions.tsx";
import './Style.css'

const HomePages = () => {
    return (
        <div id='Home'>
            <Header/>
            <section>
                <Banner/>
            </section>
            <section>
                <LiveAuctions/>
            </section>
            <Footer/>
        </div>
    )
}

export default HomePages;