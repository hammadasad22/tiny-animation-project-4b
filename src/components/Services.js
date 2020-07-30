import React from 'react'
import './Service.css'
import useWebAnimations, { fadeIn } from "@wellyshen/use-web-animations";
import AOS from 'aos';
import 'aos/dist/aos.css';



function Services() {
    const { ref: service } = useWebAnimations({ ...fadeIn });
    AOS.init({
        offset: 200,
        duration: 1000
    });
    return (
        <div className="service">
            <div className="service-first" ref={service}>
                <h1>We look after your product</h1>
                <p>Trust is everything these days. And one of the crucial elements of trust is continuity. We will create a complete visual identity for your company: logo, color schemes, brand manuals, and design works. The whole shebang.</p>
            </div>
            <div className="service-second" data-aos="fade-right">
                <div>
                    <img src="https://i.ibb.co/f1GtDvd/undraw-progressive-app-m9ms.png" alt="undraw-progressive-app-m9ms" width="200px" heigh="150px" />
                    <h4>DESIGN AND UI/UX</h4>
                </div>
                <div>                    
                    <img src="https://i.ibb.co/sRwhqLn/undraw-development-ouy3-1.png" alt="undraw-development-ouy3-1" width="200px" heigh="150px" />
                    <h4>WEB DESIGN AND DEVELOPMENT</h4>
                </div>
                <div>                    
                    <img src="https://i.ibb.co/CJ16Qqr/undraw-our-solution-htvp.png" alt="undraw-our-solution-htvp" width="200px" heigh="150px" />
                    <h4>CUSTOM SOLUTIONS</h4>
                </div>
                <div>                    
                    <img src="https://i.ibb.co/m90hcd1/webshop.png" alt="undraw-our-solution-htvp" width="200px" heigh="150px" />
                    <h4>WEB SHOPS</h4>
                </div>
            </div>
        </div>
    )
}

export default Services
