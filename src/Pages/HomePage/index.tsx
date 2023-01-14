import Button from "../../attom/Button";
import NavBar from "../../organism/NavBar";
import Experience from "../../molecules/Experiences";
import Happenings from "../../molecules/Happenings";
import HeroSection from "../../molecules/HeroSection/HeroSection";
import Montauk from "../../molecules/MonTauk";
import Sliders from "../../molecules/Slider";
import "./HomePage.scss";
import { sliderImg } from "../../data";


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

        <div className="flex max-w-[85%] justify-between mx-auto my-40">
          <div>
            <p className="text-[1.375rem]  max-w-[51rem]">
              <strong className="text-[#d77560]"> STAY</strong> Our 96-room
              boutique resort has both an innate and intimate sense of place
              that evokes the spirit of its natural, untouched landscape.
            </p>
          </div>
          <div className="w-[10rem] self-end">
            <Button title="OUR ROOMS" />
          </div>
        </div>
            <Montauk/>
            <Happenings/>
            <Experience/>
      </main>
    </div>
  );
};

export default HomePage;
