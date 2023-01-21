import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";

const PublicRelationsOfficer = () => {
  return (
    <>
      <TopHeader />

      <Navbar />
      <div className="text-center pt-4">
        <h1>Mahamana Pandit Madan Mohan Malaviya Cancer Centre, Varanasi</h1>
        <h4>A unit of Tata Memorial Centre, Mumbai</h4>
        <h6>
          (Grant-in-Aid Institute, Department of Atomic Energy, Government of
          India)
        </h6>
      </div>
      <div className="about-area pt-100 pb-70">
        <div className="container">
          <div className="row align-items-start">
            <div className="col">
              <div className="about-item about-right">
                <img src="/images/about-shape1.png" alt="About" />
                <h4 className="pb-3">Public Relations Officer:</h4>
                <p>Mr. Akhilesh Pandey</p>
                <p>E-mail id: pro@mpmmcc.tmc.gov.in</p>
                <p>Telephone :0542-2517699 Ext. 1119</p>
                <p>
                  Address: Ground Floor, RT Block, Mahamana Pandit Madan Mohan
                  Malaviya Cancer Centre, Sunder Bagiya, BHU Campus, Varanasi,
                  Uttar Pradesh 221005
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PublicRelationsOfficer;
