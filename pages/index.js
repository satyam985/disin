import React from 'react';
import TopHeader from '../components/_App/TopHeader';
import Navbar from '../components/_App/Navbar';
import HeroSlider from '../components/HomeOne/HeroSlider';
import HomeStats from '../components/HomeOne/HomeStats';
import AboutSection from '../components/HomeOne/AboutSection';
import Services from '../components/HomeOne/Services';
import OurExpertise from '../components/HomeOne/OurExpertise';
import VideoIntro from '../components/Common/VideoIntro';
import OurDoctors from '../components/Common/OurDoctors';
import LatestBlogPost from '../components/Common/LatestBlogPost';
import NewsletterForm from '../components/Common/NewsletterForm';
import Footer from '../components/_App/Footer';
import TestimonialSlider from '../components/Common/TestimonialSlider';

const Index = () => {
    return (
        <>
            <TopHeader />

            <Navbar />

            <HeroSlider />
            

            <HomeStats />

            <TestimonialSlider />

            <AboutSection />

            <Services />

            <OurExpertise />

            <VideoIntro />

            {/* <OurDoctors />

            <LatestBlogPost />

            <NewsletterForm /> */}
            
            <Footer />
        </>
    )
}

export default Index;