
import './App.css';
import { Menu } from 'lucide-react';
import { AccordionDemo } from './components/AccordionDemo';
import Header from './components/Header';

import ServiceAnim1 from './components/ServiceAnim1';
import ServiceAnim2 from './components/ServiceAnim2';
import ServiceAnim3 from './components/ServiceAnim3';



function App() {

  return (
    <>
      <Header />
      <section className='-mt-[60rem] about-section'>

        <ServiceAnim1 />

        <div className=" ">
          <ServiceAnim2 />

        </div>

        <div className="  mb-24  ">
          <ServiceAnim3 />

        </div>




      </section>
      <main >


        <section className=" relative pt-24 pb-48">
          <h2 className="text-[#e35270] text-center  text-4xl font-semibold uppercase">services</h2>


          <div className="flex items-center justify-center">
            <AccordionDemo />
          </div>
          <div className="flex flex-col items-center justify-center relative mt-36">

            <div className="border-[1px] border-solid border-[#e35270] w-[36rem] absolute"></div>

          </div>
        </section>


        <section className="pt-48 contact-section relative" id="contact-section">

          <div className="contact-title">

            <h2 className="contact text-[#e35270] text-4xl font-semibold uppercase ">Reach new heights</h2>



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
        <div className=" px-48   text-center pt-24 pb-6 ">


          <div className="flex justify-between gap-28">
            <div className="flex flex-col">
              <h2 className="text-[#ffd0dc] text-4xl font-semibold text-nowrap">PIXIE MGMT</h2>
              <p className="text-[#ffd0dc] xl:text-2xl text-[1.2rem]">Copyright © 2024 Pixie MGMT</p>
            </div>
            <div className="flex flex-col">
              <h5 className="text-[#ffd0dc]  text-3xl  font-semibold mb-4 text-nowrap">Follow On</h5>
              <a className="text-[#ffd0dc] text-2xl" href="">Instagram</a>
              <a className="text-[#ffd0dc] text-2xl my-3" href="">Twitter</a>
              <a className="text-[#ffd0dc] text-2xl" href="mailto:">Email</a>
            </div>
          </div>

        </div>
      </main>



    </>
  );
}

export default App;
