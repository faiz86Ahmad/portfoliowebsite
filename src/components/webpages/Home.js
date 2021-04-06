import React from 'react';
import Hero from "../hero/index"

import Specializing from "../specialising/index";
import Expert from "../Experties/index";
import LProject from '../LatestProject/index';
import Qualification from '../qualification/index';
import Testimonials from '../Testimonials/index';
import Footer from '../Footer/index';



const Home = () => {
    return (
        <div>
        <Hero />
     <Specializing />
     <Expert />
     <LProject/>
     <Qualification />
     <Testimonials />
     <Footer />
        
        </div>
    )
}

export default Home;
