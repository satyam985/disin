import React from "react";
import TopHeader from "../../components/_App/TopHeader";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/_App/Footer";

const ClinicalResearchSecretariat = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="Clinical Research Secretariat"
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
                <h2>CLINICAL RESEARCH SECRETARIAT</h2>
                <p>
                  Clinical Research Secretariat (CRS) of HBCH, Varanasi was
                  officially inaugurated by Dr. R.A. Badwe, Director, Tata
                  Memorial Centre on 01st October 2021. The CRS offers a wide
                  range of services from collection, maintenance, quality
                  control & analysis of data to design & execution of
                  prospective trials of importance to the institute and nation.
                </p>
                <p>
                  Currently, the CRS Department at MPMMCC/HBCH is staffed with
                  trained manpower and has a well-developed infrastructure to
                  run and support various clinical trials conducted by the
                  investigators in MPMMCC & HBCH.
                </p>
                <p>
                  CRS Department is actively engaged in the conduct of BIRAC CTN
                  Project which is related to establishing Clinical Trial
                  Network units across the National Cancer Grid to promote
                  multicentric collaborative research in the field of drug and
                  device development. In addition to this, CRS also supported
                  the multicentric project such as GRID Oncology: Remaking
                  Cancer Care in India” in collaboration with King’s College
                  London.
                </p>
                <p>
                  CRS has supported over 100 research studies which includes
                  retrospective, prospective studies from clinic and randomized
                  clinical trials. A large number of the studies have been
                  either presented or published in peer reviewed journals.
                </p>
                <p>
                  <strong>CRS Staff:</strong> Mr. Bhavesh P. Bandekar,
                  Scientific Officer (CRC)
                </p>
                <h5>Contact us:</h5>
                <p>
                  Clinical Research Secretariat, 1st Floor, DNT Block,<br></br>
                  Mahamana Pandit Madan Mohan Malaviya Cancer Centre<br></br>
                  Varanasi- 221005 (Uttar Pradesh).<br></br>
                  Phone No.: 0542-2517699 Extn: 1161 / 1162
                </p>
                <p>
                LIST OF ONGOING PROJECTS AT HBCH/MPMMCC, VARANASI   <strong><a className="outline-none bg-transparent text-primary" href="https://tmc.gov.in/tmh/PDF/varanasi/List%20of%20Ongoing%20Projects.pdf" target="_blank">Plese Click here to know more...</a></strong>
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

export default ClinicalResearchSecretariat;
