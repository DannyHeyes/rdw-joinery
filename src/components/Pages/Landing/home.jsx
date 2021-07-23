import React from 'react';
import ServicesCard from '../../common/cards/cards';
import { ScrollToTopOnMount } from '../../../App';
import history from './../../../history';

import { FaHammer } from 'react-icons/fa';

import { homeWrapper, heroSection, heroImage, servicesSection,serviceCardDiv, imageSection, imgOne, imgTwo, ctaSection } from './home.module.scss';
import CtaButton from '../../common/buttons/buttons';

const services = ["loft boarding", "storage", "decking", "kitchens", "doors", "furniture", "sheds", "& much more!"]


const Home = () => {
    return ( 
    <div className={homeWrapper}>
    <ScrollToTopOnMount/>

      <section className={heroSection}>
          <h1>
            Premium craftsmanship at competitive prices 
          </h1>

          <div className={heroImage}></div>

          <h2>
            Our passion for joinery is the driving force behind each and every solution, making them truly unique
          </h2>
      </section>

      <section className={servicesSection}>
        <h3>
           We offer the following services: 
        </h3>

        <div className={serviceCardDiv}>
            {services.map((service, index) => (
                <ServicesCard key={index}>
                    <FaHammer/>
                    <p>
                        {service}
                    </p>
                </ServicesCard>
            ))}
        </div>
        
      </section>

      <section className={imageSection}>
        
        <div className={imgOne}></div>
        <div className={imgTwo}></div>

      </section>

      <section className={ctaSection}>

        <h4>
            Get in touch today to arrange your quote
        </h4>

        <form onClick={() => history.push('/contact')}>
          <CtaButton >
            arrange a quote
          </CtaButton>
        </form>
        
      </section>
          
      
    </div>
     );
}
 
export default Home;