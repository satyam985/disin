import React from "react";
import TopHeader from "../../components/_App/TopHeader";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/_App/Footer";

const EthicsCommittee = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="INSTITUTIONAL ETHICS COMMITTEES (IEC)"
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
                <h2>INSTITUTIONAL ETHICS COMMITTEE (IEC)</h2>
                <p>
                  The Institutional Ethics Committee of Mahamana Pandit Madan
                  Mohan Malaviya Cancer Centre (MPMMCC) & Homi Bhabha Cancer
                  Hospital (HBCH), Varanasi hereafter referred to as “IEC” was
                  established to formalize and specify the Institution's
                  commitment to the promotion of high scientific and ethical
                  standards in patient care, professional education, clinical
                  research, and community interests.
                </p>
                <p>
                  Timely review of research proposals and the safeguarding of
                  high ethical standards formed the basis of the IEC review
                  process. These are essential for clinical research including
                  student research, investigator-initiated research, extramural,
                  intramural funded research and multi-centric multinational
                  research.
                </p>
                <p>
                  The IEC was established in September 2019. Since its
                  inception, IEC has held 23 full board meetings and reviewed
                  116 Investigator Initiated Projects till 31.12.2021, which
                  includes Biomedical Health Research and Clinical Research.
                </p>
                <p>
                  In addition to this, IEC has been registered with the National
                  Ethics Committee Registry for Biomedical and Health Research,
                  Department of Health Research, and received Provisional
                  approval on 7th July 2020 valid for 2 years.
                </p>
                <p>
                  IEC, MPMMCC & HBCH was also registered with Central Drugs
                  Standard Control Organisation (Now referred to as “The Central
                  Licencing Authority (CLA)” on 15th Jan 2021 vide registration
                  no. ECR/1501/Inst/UP/2021 is valid for 5 years.
                </p>
                <h3>Mandate of IEC:</h3>
                <p>
                  The IEC through its delegated sub-committees, functions
                  independently for maintaining a consistent scientific and
                  ethical framework for patient care and research, and for
                  integrating ethical values into practice, policy
                  relationships, and organizational activities.
                </p>
                <p>
                  The purpose of the IEC is to cultivate a pluralistic and
                  democratic exchange of scientific and ethical values and
                  concerns, and to critically analyze them while looking for
                  opportunities to enhance the scientific and ethical integrity
                  of the Institution.
                </p>
                <p>
                  The mandate of the IEC essentially is to promote patient care
                  through a scientific and ethical approach to research and
                  education.
                </p>
                <h3>Terms of Reference of IEC:</h3>
                <table class="table table-bordered table-hover">
                  {/* <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead> */}
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Ensure the highest scientific and ethical standards of research at MPMMCC & HBCH, Varanasi.</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Review and approve, proposals for clinical, basic or translational research projects (Intra and Extra mural) for scientific and ethical content</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Improve ethical standards and issue guidelines on ethical dilemmas related to patient care services</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>To function as a forum to advise the administration in case of any ethical issues that may arise from patients, families or public</td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>To maintain our leadership as a national standard of reference in all fields</td>
                    </tr>
                    <tr>
                      <th scope="row">6</th>
                      <td>To issue and periodically, update and revise SOP s and guidelines for effective functioning of IEC as and when necessary</td>
                    </tr>
                    <tr>
                      <th scope="row">7</th>
                      <td>Continuing education in clinical research bioethics and ethical aspects of clinical practice by seminars, workshops and interactive discussions for all categories of staff members including nursing and paramedical staff</td>
                    </tr>
                    <tr>
                      <th scope="row">8</th>
                      <td>To initiate and commission research studies on ethical aspects of practice in MPMMCC & HBCH, Varanasi.</td>
                    </tr>
                    <tr>
                        <th colspan="2">
                        The committee does not address or interfere in matters of administration, nor does the committee function as a grievance cell for staff members.
                        </th>
                    </tr>
                  </tbody>
                </table>
                <h3>
                Meeting Schedule:
                </h3>
                <p>
                IEC, MPMMCC & HBCH will meet on the last Friday of every month at 11.00 a.m. (unless otherwise notified) in the Meeting Room, 1st Floor, DNT Block, Mahamana Pandit Madan Mohan Malaviya Cancer Centre (MPMMCC). 
                </p>
                <h3>
                IEC processing fees (applicable for all pharmaceutical-sponsored studies)
                </h3>
                <ol>
                    <li>
                    Initial project submission - Rs. 40,000/- + applicable GST 
                    </li>
                    <li>
                    Protocol amendment /revision for ongoing studies - Rs. 10,000/- + applicable GST  
                    </li>
                </ol>
                <p>
                The fees may be paid online via NEFT transfers, as a cheque or demand draft drawn in favor of <stong>“Homi Bhabha Cancer Hospital, Varanasi.”</stong>
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

export default EthicsCommittee;
