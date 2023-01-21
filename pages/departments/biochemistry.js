import React from "react";
// import TopHeader from '../components/_App/TopHeader';
import TopHeader from "../../components/_App/TopHeader";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import AppointmentFormTwo from "../../components/Common/AppointmentFormTwo";
import Footer from "../../components/_App/Footer";

const Biochemistry = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="Biochemistry"
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
                          <h3>DEPARTMENT OF BIOCHEMISTRY</h3>
                          <p>
                            Clinical Biochemistry Laboratory at HBCH became
                            operational on the 1st May, 2018. Biochemistry
                            Laboratory has also been set up at MPMMCC, Varanasi
                            and has been functional since February 2019. Both
                            the laboratories are equipped with high-end and high
                            throughput state of art autoanalysers and have been
                            participating in internal and external quality
                            assurance schemes providing a very strong base to
                            support the reporting of patient results.
                          </p>
                          <p>
                            We have an extensive test menu of nearly 100+
                            assays. During the period 01.01.2021 to 31.12.2021,
                            the laboratory performed more than 8.5 lakhs Routine
                            Biochemistry tests on an average TAT of 3 hours and
                            for Emergency within 2 Hours. Along with routine
                            Biochemistry, the lab has performed more than 35000
                            Tumor Marker tests. Currently, the lab processes on
                            an average 600 samples each day, maintaining the
                            best TAT. The Department provides 24/7 laboratory
                            services. We have introduced Therapeutic Drug
                            Monitoring services by HPLC and also Myeloma test
                            services to our existing panel. We are further
                            working towards the establishment of metabolomics
                            lab. The laboratory has actively provided services
                            24/7 during the COVID pandemic.
                          </p>
                          <p>
                            The Laboratory is participating actively in 3
                            research projects. We await to be a NABL accredited
                            laboratory at the earliest possible.
                          </p>
                        </div>

                        <div className="doctor-details-biography">
                          <h3>Research & Educational activities:</h3>
                          <p>
                            The lab supports research and educational activities
                            for the development and growth of employees.
                          </p>
                          <ol>
                            <li>
                              Refresher training for staffs is being conducted
                              on regular basis for better knowledge and hands on
                              experience on the analyzer.
                            </li>
                            <li>
                              Seminars, in house discussions are conducted on a
                              weekly basis.
                            </li>
                            <li>
                              Various International & National Conference,
                              Workshops, CME attended and Paper presented by
                              staffs of Biochemistry Dept.
                            </li>
                            <li>
                              Journal clubs are conducted to enlighten everyone
                              in the areas of research.
                            </li>
                            <li>
                              Student classes, presentations and half yearly
                              exams conducted.
                            </li>
                          </ol>
                          <p></p>
                        </div>

                        <div className="doctor-details-biography">
                          <h3>Achievements:</h3>
                          <ol>
                            <li>
                              Participation in all EQAS programs for
                              Biochemistry and Tumour Markers with BIORAD.
                            </li>
                            <li>Documentations done as per NABL guidelines.</li>
                          </ol>
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

export default Biochemistry;
