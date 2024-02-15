import {Footer, Header} from "../components";
import Banner from "./viewHome/Banner.tsx";
import './Style.css'
import {LiveAuctions, PopularCollection, TodayPicks, TopSeller} from "./viewHome";

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
      <section>
        <TopSeller/>
      </section>
      <section>
        <TodayPicks/>
      </section>
      <section>
        <PopularCollection/>
      </section>
      <Footer/>
    </div>
  )
}

export default HomePages;