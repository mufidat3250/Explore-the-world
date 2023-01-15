import Button from "../../attom/Button";
import NavBar from "../../organism/NavBar";
import Experience from "../../molecules/Experiences";
import Happenings from "../../molecules/Happenings";
import HeroSection from "../../molecules/HeroSection/HeroSection";
import Montauk from "../../molecules/MonTauk";
import Sliders from "../../molecules/Slider";
import "./HomePage.scss";
import { sliderImg } from "../../data";
import Footer from "../../organism/Footer";
import Contact from "../../organism/Contacts";
import { experience, secExperience} from "../../data";

const HomePage = () => {
  return (
    <div className="homePage">
      <NavBar />
      <main className="main-section">
        <HeroSection />
        <div className="mt-[5rem] w-[98%] mx-auto">
          <Sliders>
            {sliderImg.map((slider) => (
              <div className="h-[17rem]">
                <img src={slider} className="h-full w-full object-cover" />
              </div>
            ))}
          </Sliders>
        </div>

        <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row max-w-[85%] justify-between mx-auto my-20 md:my-[4.25rem]" id={'room'}>
          <div>
            <p className="md:text-[1.375rem]  max-w-[51rem]">
              <strong className="text-[#d77560]"> STAY</strong> Our 96-room
              boutique resort has both an innate and intimate sense of place
              that evokes the spirit of its natural, untouched landscape.
            </p>
          </div>
          <div className="w-[10rem] md:self-end">
            <Button title="OUR ROOMS" />
          </div>
        </div>
            <Montauk title="MONTAUK" bg="/public/images/montauk.jpg"/>
            <Happenings/>
            <Experience data={experience}/>

          <div>
            {/* <Quotations/> */}
            <div className="pt-8"><Montauk title="MONTAUK" bg="/images/grassmarram.jpg"/></div>
              <div className="md:max-w-[55%] lg:max-w-[47%] px-4 md:pl-12 text-[1.375rem] pt-[4.875rem] pb-[6.875rem] space-y-[2.0625rem] text-[#654b37]">
                <p>Named after the wild grass that grows on the sand dunes surrounding the property, <span className="border-[1px] border-[#654b37] py-[2px]">marram</span> takes cues from Montauk’s natural beauty with its light and muted color palette. The property provides access to the best of both worlds—the nature that makes Montauk so special and the cultural offerings that put it on the map.</p>
                <p className="">
                With so many ways to relax and reconnect, our team is here to help you curate a perfect stay. <em>We invite you to paddle out</em>.
                </p>
              </div>

              <Experience data={secExperience}/>
            <Contact/>
          <img src="/images/stones.webp" alt=""  className="h-[16rem] md:h-[23rem] mt-4 w-full object-cover"/>
          </div>
          <Footer/>
      </main>
    </div>
  );
};

export default HomePage;
