import React from "react";
import TopHeader from "../../components/_App/TopHeader";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/_App/Footer";

const Mission = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="Mission & Vision"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About"
        bgImage="page-title-one"
      />

      <div className="about-area pt-100 pb-70">
        <div className="container">
          <div className="row align-items-start">
            <div className="col">
              <div className="about-item about-right">
                <img src="/images/about-shape1.png" alt="About" />
                <h2>MISSION</h2>
                <p>
                  To provide comprehensive cancer care to one and all, through
                  its motto of excellence in
                  <strong>service, education and research.</strong>
                </p>
                <h2>VISION</h2>
                <p>
                  To provide leadership in guiding the national policy and
                  strategy for cancer care by:
                </p>
                <ol>
                  <li>
                    Promoting outstanding services through evidence-based
                    practice of oncology.
                  </li>
                  <li>
                    Commitment of imparting education in cancer to students,
                    trainees, professionals, employees and the public.
                  </li>
                  <li>
                    Emphasizing on research that is affordable, innovative and
                    relevant to the needs of the country.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Mission;
