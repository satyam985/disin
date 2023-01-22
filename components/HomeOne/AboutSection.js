import React from 'react';
import Link from 'next/link';

const AboutSection = () => {
    return (
        <div className="about-area pt-100 pb-70">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-item">
                            <div className="about-left">
                                <img src="/images/home-one/MPMMMC.jpg" alt="Home Logo" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="about-item about-right">
                            <img src="/images/about-shape1.png" alt="Animation" />
                            <h2>Mahamana Pandit Madan Mohan Malaviya Cancer Centre, Varanasi.</h2>
                            <p>The priorities of a cancer patient remains the cancer treatment. There's a lot of shared decision-making that goes into this.We are being open and transparent with patients about our decisions.</p>
                            
                            <ul>
                                <li>
                                    <i className="icofont-check-circled"></i>
                                    Browse Our Website
                                </li>
                                <li>
                                    <i className="icofont-check-circled"></i>
                                    Choose Service
                                </li>
                                <li>
                                    <i className="icofont-check-circled"></i>
                                    Send Messege
                                </li>
                            </ul>

                            <Link href="/about">
                                <a>Know More</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;