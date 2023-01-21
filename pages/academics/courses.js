import React from "react";
import TopHeader from "../../components/_App/TopHeader";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/_App/Footer";

const Courses = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="Courses"
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
                <h2>The Hospital</h2>
                <p>
                  Mahamana Pandit Madan Mohan Malaviya Cancer Centre (MPMMCC)
                  and Homi Bhabha Cancer Hospital (HBCH), Varanasi are the Units
                  of Tata Memorial Centre, Mumbai (Grant-in-Aid Institution of
                  Department of Atomic Energy, Government of India). Both MPMMCC
                  & HBCH were formally inaugurated by Hon’ble Prime Minister,
                  Shri Narendra Modi Ji on Tuesday, the 19th February 2019, in
                  the presence of the Hon’ble Governor of Uttar Pradesh, Shri
                  Ram Naik, Hon’ble Chief Minister of Uttar Pradesh, Shri Yogi
                  Adityanath; the Secretary, Department of Atomic Energy, Govt.
                  of India, Dr. K.N. Vyas; Head, Tata Trusts, Shri Ratan Tata;
                  Vice Chancellor (Banaras Hindu University), Mr. Rakesh
                  Bhatnagar; and, the Director Tata Memorial Centre, Dr. R.A.
                  Badwe. The Hon’ble Prime Minister also unveiled the book on
                  this inaugural occasion, "Where Light Enters The Earth" on the
                  Temples of Healing & Tributaries of Trust, curated by Ms.
                  Nishu Singh Goel.
                </p>
                <p>
                  MPMMCC has been named in the honor of Pandit Madan Mohan
                  Malaviya (1861-1946), an Indian educationalist, who strived to
                  promote modern education among Indians and eventually
                  co-founded the Banaras Hindu University (BHU) at Varanasi in
                  1916. He was the Vice Chancellor of the Banaras Hindu
                  University from 1919 to 1938.
                </p>
                <p>
                  HBCH, Varanasi is responsible for registering and running
                  academic programmes and both MPMMCC and HBCH, Varanasi are
                  responsible for running the cancer care services and also
                  running the various academic programs. The distance between
                  MPMMCC, Varanasi and HBCH, Varanasi is about 8 kilometers with
                  driving time of 20 minutes. There is very good road
                  connectivity between the two hospitals. Both MPMMCC and HBCH
                  are working as complementary units under the administrative
                  control of Director, HBCH & MPMMCC, Varanasi.
                </p>
                <p>
                  Our hospitals cater to the "cancer belt of India”, a
                  population of nearly 40 crore people living in the States of
                  Uttar Pradesh, Uttarakhand, Bihar, Jharkhand, Madhya Pradesh,
                  Chhattisgarh, etc. The area not only has the highest burden of
                  cancer cases but also is plagued with acute shortage of
                  trained manpower to deal with management of cancer. The
                  situation is going to worsen in the next couple of decades due
                  to rapid urbanization in these areas. Through our twin
                  hospitals, we are bringing comprehensive and high-quality
                  cancer care at affordable costs to the doorsteps of patients
                  of Varanasi (Uttar Pradesh), its neighboring districts and
                  adjoining States.
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

export default Courses;
