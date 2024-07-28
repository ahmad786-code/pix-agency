
import './App.css';
import { Menu } from 'lucide-react';
import { AccordionDemo } from './components/AccordionDemo';
import Header from './components/Header';

import ServiceAnim1 from './components/ServiceAnim1';
import ServiceAnim2 from './components/ServiceAnim2';
import ServiceAnim3 from './components/ServiceAnim3';
 
import Slice2 from './assests/Slice2.png';
import Slice3 from './assests/Slice3.png';
import Slice4 from './assests/Slice4.png';
import Slice5 from './assests/Slice5.png';
import Slice6 from './assests/Slice6.png';


function App() {

  return (
    <>
      <Header />
      <section className='-mt-[40rem] about-section relative '>
      <img src={Slice4} alt="" className='absolute top-[16rem] w-[70px]  right-0 z-[1000] '/>
      <img src={Slice5} alt="" className='absolute top-[32rem] w-[70px]  right-0 z-[1000] '/>
        <ServiceAnim1 />

        
          <ServiceAnim2 /> 

         

        <div className=" -pb-[0.5rem] about-service">
          <ServiceAnim3 />

        </div>




      </section>
      <main  >


        <section className="  pt-96 h-5 pb-[45rem] relative">
          <img src={Slice2} alt="" className='absolute top-20 left-40 '/>
          <h2 className="text-[#FFF] text-center  text-4xl font-semibold uppercase">services</h2>
          <div className="flex items-center justify-center z-50  ">
            <AccordionDemo />
          </div>

        </section>
        <div className="flex flex-col items-center justify-center relative -mt-10">

          <div className="border-[1px] border-solid border-[#fff] w-[36rem] absolute"></div>
          <img src={Slice3} alt="" className='absolute -top-24 left-[12rem] '/>
        </div>

        <section className="pt-[12rem] contact-section relative " id="contact-section">

          <div className="contact-title">

            <h2 className="contact text-[#FFF] text-4xl font-semibold uppercase ">Reach new heights</h2>



          </div>


          <form className="contact" >
            <div className="input-group">
              <input type="text" placeholder="Name *" />
              <input type="text" placeholder="Email *" />
            </div>
            <div className="input-group">
              <input type="text" placeholder="Phone" />
              <input type="text" placeholder="OnlyFans" />
            </div>
            <div className="input-group">
              <input type="text" placeholder="Instagram" />
              <input type="text" placeholder="TikTok" />
            </div>
            <div className="input-group">
              <input type="text" placeholder="Twitter" />
              <input type="text" placeholder="Message" />
            </div>
            <input type="button" value="Send" />
          </form>


        </section>
        <div className=" px-48   text-center pt-24 pb-6 footer">


          <div className="flex justify-between gap-28 ">
            <div className="flex flex-col">
              <h2 className="text-[#fff] text-4xl font-semibold text-nowrap">PIXIE MGMT</h2>
              <p className="text-[#fff] xl:text-2xl text-[1.2rem]">Copyright © 2024 Pixie MGMT</p>
            </div>
            <div className="flex flex-col">
              <h5 className="text-[#fff]  text-3xl  font-semibold mb-4 text-nowrap">Follow On</h5>
              <a className="text-[#fff] text-2xl" href="">Instagram</a>
              <a className="text-[#fff] text-2xl my-3" href="">Twitter</a>
              <a className="text-[#fff] text-2xl" href="mailto:">Email</a>
            </div>
          </div>

        </div>
      </main>



    </>
  );
}

export default App;
