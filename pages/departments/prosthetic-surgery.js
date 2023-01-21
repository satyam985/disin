import React from "react";
// import TopHeader from '../components/_App/TopHeader';
import TopHeader from "../../components/_App/TopHeader";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import AppointmentFormTwo from "../../components/Common/AppointmentFormTwo";
import Footer from "../../components/_App/Footer";

const ProstheticSurgery = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="DEPARTMENT OF DENTAL AND PROSTHETIC SURGERY"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Departments"
        bgImage="page-title-five"
      />

      <div className="doctor-details-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="doctor-details-item doctor-details-left">
                <img src="/images/doctors/doctor3.jpg" alt="Doctor" />

                <div className="doctor-details-contact">
                  <h3>Contact info</h3>
                  <ul>
                    <li>
                      <i className="icofont-ui-call"></i>
                      Call: +07 554 332 322
                    </li>
                    <li>
                      <i className="icofont-ui-message"></i>
                      hello@disin.com
                    </li>
                    <li>
                      <i className="icofont-location-pin"></i>
                      4th Floor, 408 No Chamber
                    </li>
                  </ul>
                </div>

                <div className="doctor-details-work">
                  <h3>Working hours</h3>
                  <div className="appointment-item-two-right">
                    <div className="appointment-item-content">
                      <ul>
                        <li>
                          Monday <span>9:00 AM - 8:00 PM</span>
                        </li>
                        <li>
                          Tuesday <span>9:00 AM - 8:00 PM</span>
                        </li>
                        <li>
                          Wednesday <span>9:00 AM - 8:00 PM</span>
                        </li>
                        <li>
                          Sunday <span>9:00 AM - 8:00 PM</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="doctor-details-item">
                <div className="doctor-details-right">
                  <div className="doctor-details-biography">
                    <h3>DEPARTMENT OF DENTAL AND PROSTHETIC SURGERY</h3>
                    <p>
                      The Department provides various clinical services for
                      cancer patients:
                    </p>
                  </div>

                  <ul>
                    <li>
                      General dental services which include dental extractions,
                      restorations, sharp tooth filing to prevent trauma to the
                      oral soft tissues.
                    </li>
                    <li>
                      Pre-radiation check-up and proving fluoride gel
                      application and oral prophylaxis for prevention of
                      radiation induced caries and post radiated sensitivity.
                    </li>
                    <li>
                      Post radiation management of oral complications like
                      xerostomia, mucositis and ulceration. Medical and surgical
                      management of osteoradionecrosis (ORN).
                    </li>
                    <li>
                      Management of oral complications for pre- and
                      post-chemotherapy patients. Medical and surgical
                      management of medication related osteonecrosis of the jaw
                      (MRONJ).
                    </li>
                    <li>
                      Maxillofacial Prosthetic rehabilitation in pre and
                      post-surgical intervention cases which include intraoral
                      and extraoral prostheses. At present, the department has
                      managed to deliver, interim and definitive obturators,
                      guide flange prosthesis, complete denture, removable
                      partial denture, acrylic lip prosthesis, orbital
                      prosthesis, facial prosthesis and brachytherapy
                      applicators.
                    </li>
                    <li>
                      The department is in the process of starting intraoral
                      implant system for Head & Neck cancer patients.
                    </li>
                  </ul>

                  <div className="doctor-details-biography">
                    <h3>
                      Annual Dental Services provided from January 2021 to
                      December 2021:
                    </h3>

                    <ul>
                      <li>Consultation done in the Dental OPD: 2995</li>
                      <li>Number of teeth extraction done: 693</li>
                      <li>
                        Number of patients undergoing oral prophylaxis: 192
                      </li>
                      <li>
                        Number of patients undergoing Fluoride Gel Application
                        (FGA): 197
                      </li>
                      <li>Number of restorations done: 17</li>
                      <li>Number of obturators delivered: 50</li>
                      <li>Number of guide plane prostheses delivered: 63</li>
                      <li>
                        Total number of patients received miscellaneous
                        (Prostheses): 07
                      </li>
                    </ul>

                    <p></p>
                  </div>

                  <div className="doctor-details-biography">
                    <h3>Research:</h3>
                    <p>
                      <stong>Publication:</stong>One
                    </p>
                    <p>
                      Department is conducting a certified training Course in
                      “Dental and Maxillofacial OncoProsthodontics” for
                      Laboratory Technicians, to empower dental technicians to
                      deliver maxillofacial prosthetic services to the cancer
                      patients. This course is open throughout the year and
                      consists of six months’ training followed by six months’
                      internship from the date of joining. There is regular
                      academic presentation in the Department and participation
                      in the Institute academic programme. There has been
                      scientific presentation/lectures in other Institutes and
                      webinars.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProstheticSurgery;
