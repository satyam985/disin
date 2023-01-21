import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";

const NodalOfficer = () => {
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
                <table class="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th colspan="2" scope="col">
                        CONTACT DETAILS OF NODAL OFFICER
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Name of the Unit</th>
                      <th>
                        Mahamana Pandit Madan Mohan Malaviya Cancer Centre,
                        Varanasi
                      </th>
                    </tr>
                    <tr>
                      <th scope="row">Name</th>
                      <th>Mr. Madho Singh</th>
                    </tr>
                    <tr>
                      <th scope="row">Designation</th>
                      <th>Chief Administrative Officer</th>
                    </tr>
                    <tr>
                      <th scope="row">Contact Address (Office)</th>
                      <td>
                        DNT Block, 5th Floor, Mahamana Pandit Madan Mohan
                        Malaviya Cancer Centre, Sunder Bagiya, BHU Campus,
                        Varanasi, Uttar Pradesh 221005
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Contact Address (Residence)</th>
                      <td>
                        Flat No. 303,Block B, Residential Complex, Mahamana
                        Pandit Madan Mohan Malaviya Cancer Centre, Sunder
                        Bagiya, BHU Campus, Varanasi, Uttar Pradesh 221005
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Telephone Nos.</th>
                      <td>
                        Office: 0542-2517699 Intercom: 1115 Mobile: 9013311971
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Email</th>
                      <td>cao@mpmmcc.tmc.gov.in</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default NodalOfficer;
