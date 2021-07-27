import React from 'react';
import ServicesCard from '../../common/cards/cards';
import { ScrollToTopOnMount } from '../../../App';
import history from './../../../history';

import { FaHammer } from 'react-icons/fa';

import { homeWrapper, heroSection, heroImage, servicesSection,serviceCardDiv, imageSection, imgOne, imgTwo, ctaSection, reviewsSection, reviewWrapper, topDiv } from './home.module.scss';
import CtaButton from '../../common/buttons/buttons';
import { ReviewCard } from './../../common/cards/cards';
import { IconContext } from 'react-icons';
import {GoQuote} from 'react-icons/go';

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

      <section className={reviewsSection}>

              <h4>
                See what our customers have to say about our work:
              </h4>

              <div className={reviewWrapper}>

                <ReviewCard>
                  <div className={topDiv}>
                  <IconContext.Provider value={{ size: "25px", color: "grey" }}>
                    <GoQuote/>
                  </IconContext.Provider>
                    <h5>
                      Really good work, very flexible when weather was a problem. Lovely guy who I wouldn't hesitate to recommend
                    </h5>
                  </div>
                
                  <p>
                    Michelle Cox
                  </p>
                </ReviewCard>

                <ReviewCard>
                  <div className={topDiv}>
                  <IconContext.Provider value={{ size: "25px", color: "grey" }}>
                    <GoQuote/>
                  </IconContext.Provider>
                    <h5>
                      Highly recommended RDW joinery have worked on our house on multiple occasions and each time I've been more than happy with the end result.
                    </h5>
                    
                  </div>

                  <p>
                    Barbara Hill
                  </p>
                </ReviewCard>

                <ReviewCard>
                  <div className={topDiv}>
                  <IconContext.Provider value={{ size: "25px", color: "grey" }}>
                    <GoQuote/>
                  </IconContext.Provider>
                    <h5>
                      Superb service. Excellent value for money and very impressed with the final outcome.  
                      Contact details forwarded to friends and family already 
                    </h5>
                    
                  </div>

                  <p>
                    David Johnston
                  </p>
                </ReviewCard>

                <ReviewCard>
                  <div className={topDiv}>
                  <IconContext.Provider value={{ size: "25px", color: "grey" }}>
                    <GoQuote/>
                  </IconContext.Provider>
                    <h5>
                      The guys came today and did an amazing job at boarding the loft. Very professional and cleaned up after themselves.
                    </h5>
                  </div>
                  <p>
                    Jay Clark
                  </p>
                </ReviewCard>

              </div>

              
      </section>
          
      
    </div>
     );
}
 
export default Home;