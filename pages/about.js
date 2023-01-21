import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import OurExpertise from "../components/HomeTwo/OurExpertise";
import Services from "../components/HomeOne/Services";
import TestimonialSlider from "../components/Common/TestimonialSlider";
import LatestBlogPost from "../components/Common/LatestBlogPost";
import Stats from '../components/HomeOne/Stats';

const About = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="About"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About"
        bgImage="page-title-one"
      />

<Stats />

      <div className="about-area pt-100 pb-70">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-lg-6">
              <div className="row about-item">
                <div className="about-left">
                  <img src="/images/about1.jpg" alt="About" />
                </div>
              </div>
              <div className="row mt-5 pt-2">
                <p>
                  MPMMCC has four different blocks with distribution of various
                  facilities as under:
                </p>
              </div>
              <div className="row">
                <table class="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Block</th>
                      <th scope="col">Facilities</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">IPD Block</th>
                      <td>
                        Ground +7 Floors: High Dependency Unit, High-Dose
                        Radionuclide Therapy Unit, In-patient Wards having
                        availability of General, Semi Private, Private and Suite
                        beds.
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">D&T Block</th>
                      <td>
                        Ground +5 Floors: Out Patient Department, Pharmacy
                        Dispensary, Emergency, Intensive Care Unit,
                        Radiodiagnosis, Daycare Wards, Administrative Offices.
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">RT Block</th>
                      <td>
                        Ground +4 Floors: Radiation Oncology, Medical Social
                        Service, Public Relations Office, Nuclear Medicine,
                        Diagnostic Laboratories, Transfusion Medicine Centre,
                        CSSD, Operation Theatres, Recovery Rooms.
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">PRC Block</th>
                      <td>Ground Floor: Patient Registration Centre</td>
                    </tr>
                    <tr>
                      <th scope="row">Annexe Areas</th>
                      <td>
                        Patient Facilitation Centre, Cafeteria, Biomedical
                        Waste, Dharamshala Building, Gents Hostel, Ladies
                        Hostel, Staff Quarters.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-item about-right">
                <img src="/images/about-shape1.png" alt="About" />
                <h2>About Our Hospital</h2>
                <p>
                  Uttar Pradesh, with nearly 20 crore population, is the most
                  populous state in the country. In India, the State of Uttar
                  Pradesh (UP) leads in cancer burden among all other Indian
                  States; almost 25 % of cancer patients in Tata Memorial
                  Hospital (TMH), Mumbai are from Uttar Pradesh. The state is
                  reported to have the maximum number of cancers and cancer
                  related deaths. It is estimated that Uttar Pradesh will have
                  about 1.5 lakh new cancer cases every year. However, there is
                  an acute shortfall of comprehensive cancer care facilities in
                  the state of Uttar Pradesh and adjoining areas. Thus, was the
                  need to have state-of-the-art cancer centres in Varanasi, UP.
                </p>
                <p>
                  For resolution of this problem, Parliamentary committee on
                  Science and Technology had entrusted Tata Memorial Centre,
                  Mumbai under the leadership of Prime Minister Office,
                  Government of India, to lead the effort to create adequate
                  infrastructure and trained work force in the field of
                  Oncology. To address the growing problem of cancer and lack of
                  adequately trained manpower, Tata Memorial Centre
                  (Grant-in-Aid Institution under Department of Atomic Energy,
                  Government of India) has established Homi Bhabha Cancer
                  Hospital (HBCH) and Mahamana Pandit Madan Mohan Malaviya
                  Cancer Centre (MPMMCC) at Varanasi with the aim to offer state
                  of the art patient care services, high quality education and
                  cutting-edge research in the region of Uttar Pradesh. These
                  cancer centres will also cater to the adjoining regions of
                  Madhya Pradesh, Jharkhand and Bihar.
                </p>
                <p>
                  Fifteen (15) acre of land within the 1360-acre campus of BHU
                  was donated to the Department of Atomic Energy (DAE),
                  Government of India (GOI) to construct a cancer hospital with
                  the latest and modern facilities. The construction cost was
                  borne by the Tata Trusts and the hospital is managed by the
                  Tata Memorial Centre (TMC), Mumbai.
                </p>
                <p>
                  The Memorandum of Understanding (MoU) for the establishment of
                  MPMMCC was made on 21st September 2017. The construction by
                  Tata Trust began in April 2018 and was completed in a record
                  time by end February 2019.
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

export default About;
