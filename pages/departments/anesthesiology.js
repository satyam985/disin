import React from "react";
// import TopHeader from '../components/_App/TopHeader';
import TopHeader from "../../components/_App/TopHeader";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import AppointmentFormTwo from "../../components/Common/AppointmentFormTwo";
import Footer from "../../components/_App/Footer";

const Anesthesiology = () => {
    return (
        <>
            <TopHeader />

            <Navbar />

            <PageBanner
                pageTitle="Anesthesiology"
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
                                        <h3>DEPARTMENT OF ANESTHESIOLOGY</h3>
                                        <p>
                                            During the 2021 calendar year, the Department catered to
                                            clinical services in three locations: MPMMCC Varanasi,
                                            HBCH Varanasi, and also HBCH&RC Muzaffarpur (01/07/021 to
                                            31/12/2021).
                                        </p>
                                    </div>

                                    <div className="doctor-details-biography">
                                        <h3>Patient Service Data for 2021</h3>

                                        <table class="table table-hover table-bordered">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Anaesthesia Services</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    {/* <th scope="row">1</th> */}
                                                    <td>Major & Supramajor Operative Cases</td>
                                                    <td>MPMMCC and HBCH Varanasi: 3510 cases HBCH&RC Muzaffarpur: 180 cases</td>
                                                </tr>
                                                <tr>
                                                    {/* <th scope="row">2</th> */}
                                                    <td>Brachytherapy OT cases (under anaesthesia)</td>
                                                    <td>425 patients</td>
                                                </tr>
                                                <tr>
                                                    {/* <th scope="row">2</th> */}
                                                    <td>NORA (CT, MRI, Paediatric Radiotherapy )</td>
                                                    <td>331 patients</td>
                                                </tr>
                                                <tr>
                                                    {/* <th scope="row">2</th> */}
                                                    <td>PAC OPD Visits</td>
                                                    <td>7348 visits</td>
                                                </tr>
                                                <tr>
                                                    {/* <th scope="row">2</th> */}
                                                    <td>Recovery Room admissions</td>
                                                    <td>HBCH: 104 patients MPMMCC: 1981 patients</td>
                                                </tr>
                                            </tbody>
                                            <thead>
                                                <tr>
                                                    <th scope="col">Critical Care services</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    {/* <th scope="row">1</th> */}
                                                    <td>ICU admissions</td>
                                                    <td>HBCH: 209 patients MPMMCC: 1529 patients</td>
                                                </tr>
                                                <tr>
                                                    {/* <th scope="row">2</th> */}
                                                    <td>Dialysis</td>
                                                    <td>90 sessions (28 patients)</td>
                                                </tr>
                                            </tbody>
                                            <thead>
                                                <tr>
                                                    <th scope="col">Pain Services</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    {/* <th scope="row">1</th> */}
                                                    <td>Patients seen by Acute Pain Services</td>
                                                    <td>502 patients</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="doctor-details-biography">
                                        <h3>Significant Quality Achievements of the Department:</h3>
                                        <p>
                                            The Consultants and Senior Residents of department
                                            provided round the clock on-site services for the 28
                                            bedded COVID19 HDU (level 2 & level 3 care facility) at
                                            HBCH Varanasi between 3rd week of April 2021 and 3rd week
                                            of June 2021 (2nd wave of COVID 19 pandemic in 2021).
                                        </p>
                                        <p></p>
                                    </div>

                                    <div className="doctor-details-biography">
                                        <h3>Quality Indicators:</h3>
                                        <ul>
                                            <li>
                                                <h4>Acute Pain Service:</h4>
                                                <p>
                                                    Introduction and scaling up of routine USG guided
                                                    nerve blocks for acute postoperative pain, viz.
                                                    serratus anterior plane block, erector spinae plane
                                                    block, TAP block, sciatic nerve block, fascia iliaca
                                                    plane block, femoral nerve block, interscalene
                                                    brachial plexus block, suprascapular nerve block.
                                                    Thoracic epidural analgesia, intrathecal morphine
                                                    analgesia, IV Fentanyl PCA routinely used to suit the
                                                    particular needs of individual patients and surgical
                                                    procedures.
                                                </p>
                                            </li>
                                            <li>
                                                <h4>Anaesthesia:</h4>
                                                <p>
                                                    MPMMCC & HBCH Varanasi: 8 major OTs (6 days a week,
                                                    plus emergency cases), PAC OPD (General & Private, 5
                                                    days a week), NORA (3 days a week), Brachytherapy OT
                                                    (3 days a week), Acute Pain Service for all
                                                    in-patients.
                                                </p>
                                                <p>
                                                    HBCH & RC Muzaffarpur: 1 major OT plus PAC OPD run by
                                                    one Consultant on Special Deputation four days a week,
                                                    1st July to 31st December 2021.
                                                </p>
                                                <p>
                                                    Compliance of CVC insertion under USG guidance by
                                                    Consultants and Senior Residents have been achieved in
                                                    100% cases, to ensure patient safety.
                                                </p>
                                                <p>
                                                    USG guided arterial line insertion using in-plane
                                                    needle tip visualisation have been introduced and
                                                    practised to improve procedural success in the first
                                                    attempt.
                                                </p>
                                                <p>
                                                    Compliance of awake tracheal intubation by
                                                    video-bronchoscopy under topical anaesthesia of airway
                                                    in anticipated difficult airway achieved in 100% cases
                                                    by Consultants and Senior Residents.
                                                </p>
                                                <p>
                                                    Anaesthesia services for CRS with HIPEC have been
                                                    started and nil mortality among 8 cases in 2021.
                                                </p>
                                            </li>
                                            <li>
                                                <h4>Critical Care:</h4>
                                                <p>
                                                    <strong>MPMMCC Varanasi:</strong> 13 bedded ICU; 8
                                                    bedded postoperative recovery unit.
                                                </p>
                                                <p>
                                                    <strong>HBCH Varanasi:</strong> 6 bedded ICU for
                                                    Hemato-Oncology and Pediatric Oncology patients; 4
                                                    bedded postoperative recovery unit.
                                                </p>
                                                <p>
                                                    Compliance of CVC & dialysis line insertion under USG
                                                    guidance by Consultants and Senior Residents have been
                                                    achieved in 100% cases, to ensure patient safety.
                                                </p>
                                                <p>
                                                    Crude Mortality Rate of 5% (80 out of 1529) ICU
                                                    admissions at MPMMCC ICU – catering Surgical Oncology,
                                                    Medical Oncology, Radiation Oncology patients.
                                                </p>
                                                <p>
                                                    Crude Mortality Rate of 32% (65 out of 205 ICU
                                                    admissions) at HBCH ICU – catering Hemato-Oncology and
                                                    Paediatric Oncology patients.
                                                </p>
                                            </li>
                                            <li>
                                                <h4>Research:</h4>
                                                <p>
                                                    Two ongoing research projects initiated by consultants
                                                    in 2021.
                                                </p>
                                                <p>
                                                    Members of the Department serve on the Institutional
                                                    Ethics Committee and the Data and Safety Monitoring
                                                    Unit.
                                                </p>
                                            </li>
                                        </ul>
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

export default Anesthesiology;
