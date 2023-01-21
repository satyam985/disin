import React from "react";
import Link from "next/link";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import OurExpertise from "../components/HomeTwo/OurExpertise";
import Services from "../components/HomeOne/Services";
import TestimonialSlider from "../components/Common/TestimonialSlider";
import LatestBlogPost from "../components/Common/LatestBlogPost";

const HBCHVaranasi = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="Homi Bhabha Cancer Hospital"
        pageSubtitle="Tata Memorial Centre"
        homePageUrl="/"
        homePageText="Home"
        activePageText="HBCH"
        bgImage="page-title-one"
      />

      <div className="about-area pt-100 pb-70">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-lg-6">
              <div className="row">
                <p>
                  HBCH, Varanasi is situated at Lahartara, near to Varanasi
                  Cantonment Railway Station. It is a three storey building with
                  distribution of various facilities as under:
                </p>
              </div>
              <div className="row">
                <table class="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Floor</th>
                      <th scope="col">Facilities</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Ground Floor</th>
                      <td>
                        Central Registration Office, Medical Social Service, Out
                        Patient Department, Radiation Oncology, Radiodiagnosis,
                        Nuclear Medicine, Pharmacy Dispensary, Emergency,
                        Daycare Wards, Isolation Ward.
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">First Floor</th>
                      <td>
                        Operation Theatres, Intensive Care Unit, Bone Marrow
                        Transplant Unit, Hematolymphoid Ward, In-patient Wards,
                        CSSD.
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Second Floor</th>
                      <td>
                        Diagnostic Laboratories, Transfusion Medicine Centre,
                        Administrative Offices, Inpatient wards, Patient Waiting
                        Areas.
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Annexe Areas</th>
                      <td>
                        Patient Waiting Canopy, Raeen Basera (Patient
                        Accommodation), Mortuary, Biomedical Waste Disposal
                        Area, Hazardous Chemical Storage Area, Playground.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-item about-right">
                <img src="/images/about-shape1.png" alt="About" />
                <h2>The Hospitals</h2>
                <p>
                  HBCH was commissioned on 1st May 2018 as a 179-bedded hospital
                  while the 352-bedded MPMMCC was commissioned on 19th February,
                  2019. Both HBCH and MPMMCC were formally inaugurated by
                  Hon’ble Prime Minister, Shri Narendra Modi Ji on 19th February
                  2019. The distance between HBCH, Varanasi and MPMMCC, Varanasi
                  is about 8 kilometers with driving time of 20 minutes. There
                  is very good road connectivity between the two hospitals. Both
                  HBCH and MPMMCC are working as complementary units under the
                  administrative control of Director, HBCH & MPMMCC.
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
                  hospitals, we are bringing comprehensive and very high-quality
                  cancer care at affordable costs to the doorsteps of patients
                  of Varanasi (Uttar Pradesh), its neighboring districts and
                  adjoining States.
                </p>
                {/* <p>
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
                </p> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h2>Services</h2>
              <ul>
                <li>
                  <Link href="/clinical-services" activeClassName="active">
                    <a className="nav-link">Clinical Services</a>
                  </Link>
                </li>
                <li>
                  <Link href="/diagnostic-services" activeClassName="active">
                    <a className="nav-link">Diagnostic Services</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ancillary-services" activeClassName="active">
                    <a className="nav-link">Ancillary Services</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 about-item about-right">
              <h2>Hospital Services</h2>
              <p>
                HBCH, Varanasi mainly caters to Paediatric Medical Oncology as
                well as Paediatric and Adult Haematolymphoid malignancy. In
                MPMMCC, solid tumour patients of various specialties i.e., Head
                & Neck, Thorax, Breast, Gastrointestinal, Gynaecology,
                Genitourinary, Neurosurgical, Bone & Soft Tissue Tumors, etc.
                are being treated. Diagnostic Imaging services, that include
                Radiodiagnosis and Nuclear Medicine, have state of the art
                diagnostic equipment and are fully functional at both the
                hospitals.
              </p>
              <p>
                Laboratory Medicine Services are fully functional and equipped
                with the latest technologies for specialized tests. In
                Laboratory Medicine, besides all routine diagnostic tests,
                Pathology laboratory performs immunohistochemistry and molecular
                diagnostic tests, Hematopathology laboratory performs flow
                cytometry and coagulation studies, Biochemistry laboratory
                performs immunoassays for tumor markers and therapeutic drug
                monitoring, while Microbiology department has focused activities
                towards Infection Control, COVID testing and proper management
                of Biomedical Waste in our hospitals. Transfusion Medicine
                Centers at both the hospitals are approved by the State and the
                Central Blood Bank Licensing Authorities and well equipped with
                the latest high end equipment. At HBCH, we have started Bone
                Marrow Transplant facility with a strong laboratory support that
                includes Hematopathology, Cytogenetics and HLA testing.
              </p>
              <p>
                In addition, we are running a Population Based Cancer Registry
                in the district of Varanasi covering a population of 4 million
                and also various screening programs for common cancers, e.g.,
                Head and Neck Cancer, Cervical Cancer, Breast Cancer and
                Gallbladder Cancer.
              </p>
            </div>
          </div>
          <div className="row">
          <h2 className="text-center mb-4">Major Equipment</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h3 className="mb-4">DEPARTMENT OF RADIATION ONCOLOGY</h3>
              <table class="table table-hover table-bordered mb-5">
                <thead>
                  <tr>
                    <th colSpan="2" scope="col">
                      Available Major Equipment
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>
                      Linear Accelerator (Linac)- Total 3- High End Varian
                      Truebeam (MPMMCC-2, HBCH-1) capable of delivering 3DCRT,
                      IMRT, IGRT, SBRT, SRT.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Bhabhatron (MPMMCC-1)- Rotational Telecobalt</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colspan="2">
                      High Dose Rate Brachytherapy- Cobalt based
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td colspan="2">CT Simulator (80 cm bore)</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td colspan="2">
                      An array of Radiation Dosimetry and QA equipment
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-6">
              <h3 className="mb-4">DEPARTMENT OF SURGERY(SURGICAL ONCOLOGY)</h3>
              <table class="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th colSpan="2" scope="col">
                      Available Major Equipment
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Laparoscopic Surgery Set: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td colspan="2">Headlight: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Laryngoscope with all blades: 15 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td colspan="2">High end suction machine: 16 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Infusion pump:40 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>Endoscope: 7 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td>Hopkins: 10 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">8</th>
                    <td colspan="2">Vessel sealing instrument: 5 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">9</th>
                    <td colspan="2">Colposcope: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">10</th>
                    <td colspan="2">Hysteroscope with set: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">11</th>
                    <td>Operating Microscopes: 4 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">12</th>
                    <td>Gamma Probe:1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">13</th>
                    <td>CO2 Laser: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">14</th>
                    <td colspan="2">C-Arm Machine: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">15</th>
                    <td colspan="2">Pulse Lavage System: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">16</th>
                    <td colspan="2">Stryker Saw System: 4 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">17</th>
                    <td>Midaz RX 8 Drill System: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">18</th>
                    <td>NSK Drill System: 5 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">19</th>
                    <td>Endotrainer: 5 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">20</th>
                    <td colspan="2">Sternum Saw: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">21</th>
                    <td colspan="2">Video- Mediastinoscope with set: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">22</th>
                    <td colspan="2">Microdebrider: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">23</th>
                    <td>
                      Cavitron Ultrasonic Surgical Aspirator (CUSA): 2 Nos.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">24</th>
                    <td>Synthesis Saw System: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">25</th>
                    <td>Pneumatic Saw System: 1 No.</td>
                  </tr>
                  <tr>
                    <th scope="row">26</th>
                    <td>Video-Laryngoscope (CMAC): 2 Nos</td>
                  </tr>
                  <tr>
                    <th scope="row">27</th>
                    <td>USG Machine: 2 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">28</th>
                    <td>Portable Doppler: 3 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">29</th>
                    <td>Operating Loupes: 3 Nos.</td>
                  </tr>
                  <tr>
                    <th scope="row">30</th>
                    <td>Tourniquet Machine: 5 Nos.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HBCHVaranasi;
