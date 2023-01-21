import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import Link from "next/link";

const Departments = () => {
    return (
        <>
            <TopHeader />

            <Navbar />

            <PageBanner
                pageTitle="Departments"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Departments"
                bgImage="page-title-one"
            />

            <div className="departments-area pt-100 pb-70">
                <div className="container">
                    <div className="row justify-content-center gy-4">
                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item h-100 d-flex flex-column align-items-center">
                                <i className="icofont-tooth"></i>
                                <h3>Anesthesiology</h3>
                                <p>
                                    During the 2021 calendar year, the Department catered to clinical services in three locations: MPMMCC Varanasi, HBCH Varanasi, and also HBCH&RC Muzaffarpur (01/07/021 to 31/12/2021).
                                </p>
                                <p className="flex-grow-1"></p>
                                <Link href="/departments/anesthesiology">
                                <button type="submit" className="btn btn-primary btn-drop mt-3">Read More</button>
                                    {/* <a>Read More</a> */}
                                </Link>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item h-100 d-flex flex-column align-items-center">
                                <i className="icofont-baby"></i>
                                <h3>Biochemistry</h3>
                                <p>
                                Clinical Biochemistry Laboratory at HBCH became operational on the 1st May, 2018.
                                </p>
                                <p className="flex-grow-1"></p>
                                <Link href="/departments/biochemistry">
                                     <button type="submit" className="btn btn-primary btn-drop mt-3">Read More</button>
                                    {/* <a>Read More</a> */}
                                </Link>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item h-100 d-flex flex-column align-items-center">
                                <i className="icofont-laboratory"></i>
                                <h3>Dental & Prosthetic Surgery</h3>
                                <p>
                                The Department provides various clinical services for cancer patients:
                                </p>
                                <p className="flex-grow-1"></p>
                                <Link href="/departments/prosthetic-surgery">
                                     <button type="submit" className="btn btn-primary btn-drop mt-3">Read More</button>
                                    {/* <a>Read More</a> */}
                                </Link>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item h-100 d-flex flex-column align-items-center">
                                <i className="icofont-icu"></i>
                                <h3>Dietetics</h3>
                                <p>
                                Nutrition is a basic human need and a prerequisite to a healthy life.
                                </p>
                                <p className="flex-grow-1"></p>
                                <Link href="/departments/dietetics">
                                     <button type="submit" className="btn btn-primary btn-drop mt-3">Read More</button>
                                    {/* <a>Read More</a> */}
                                </Link>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item h-100 d-flex flex-column align-items-center">
                                <i className="icofont-dna-alt-2"></i>
                                <h3>Medical Administration</h3>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Praesentium eaque omnis corporis, animi aspernatur tempora.
                                </p>
                                <p className="flex-grow-1"></p>
                                <p className="flex-grow-1"></p>
                                <Link href="/departments/medical-administration">
                                     <button type="submit" className="btn btn-primary btn-drop mt-3">Read More</button>
                                    {/* <a>Read More</a> */}
                                </Link>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item h-100 d-flex flex-column align-items-center">
                                <i className="icofont-surgeon"></i>
                                <h3>Medical Oncology</h3>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Praesentium eaque omnis corporis, animi aspernatur tempora.
                                </p>
                                <p className="flex-grow-1"></p>
                                <p className="flex-grow-1"></p>
                                <Link href="/departments/medical-oncology">
                                     <button type="submit" className="btn btn-primary btn-drop mt-3">Read More</button>
                                    {/* <a>Read More</a> */}
                                </Link>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item h-100 d-flex flex-column align-items-center">
                                <i className="icofont-xray"></i>
                                <h3>Medical Social Works</h3>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Praesentium eaque omnis corporis, animi aspernatur tempora.
                                </p>
                                <p className="flex-grow-1"></p>
                                <p className="flex-grow-1"></p>
                                <Link href="/departments/medical-social-works">
                                     <button type="submit" className="btn btn-primary btn-drop mt-3">Read More</button>
                                    {/* <a>Read More</a> */}
                                </Link>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item h-100 d-flex flex-column align-items-center">
                                <i className="icofont-blood-test"></i>
                                <h3>Microbiology</h3>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Praesentium eaque omnis corporis, animi aspernatur tempora.
                                </p>
                                <p className="flex-grow-1"></p>
                                <p className="flex-grow-1"></p>
                                <Link href="/departments/microbiology">
                                     <button type="submit" className="btn btn-primary btn-drop mt-3">Read More</button>
                                    {/* <a>Read More</a> */}
                                </Link>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item h-100 d-flex flex-column align-items-center">
                                <i className="icofont-ambulance-crescent"></i>
                                <h3>Nuclear Medicine</h3>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Praesentium eaque omnis corporis, animi aspernatur tempora.
                                </p>
                                <p className="flex-grow-1"></p>
                                <Link href="/departments/nuclear-medicine">
                                     <button type="submit" className="btn btn-primary btn-drop mt-3">Read More</button>
                                    {/* <a>Read More</a> */}
                                </Link>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item h-100 d-flex flex-column align-items-center">
                                <i className="icofont-baby"></i>
                                <h3>Occupational Therapy</h3>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Praesentium eaque omnis corporis, animi aspernatur tempora.
                                </p>
                                <p className="flex-grow-1"></p>
                                <Link href="/departments/occupational-therapy">
                                     <button type="submit" className="btn btn-primary btn-drop mt-3">Read More</button>
                                    {/* <a>Read More</a> */}
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item h-100 d-flex flex-column align-items-center">
                                <i className="icofont-baby"></i>
                                <h3>Onco-Pathology</h3>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Praesentium eaque omnis corporis, animi aspernatur tempora.
                                </p>
                                <p className="flex-grow-1"></p>
                                <Link href="/departments/onco-pathology">
                                     <button type="submit" className="btn btn-primary btn-drop mt-3">Read More</button>
                                    {/* <a>Read More</a> */}
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item h-100 d-flex flex-column align-items-center">
                                <i className="icofont-baby"></i>
                                <h3>Palliative Medicine</h3>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Praesentium eaque omnis corporis, animi aspernatur tempora.
                                </p>
                                <p className="flex-grow-1"></p>
                                <Link href="/departments/palliative-medicine">
                                     <button type="submit" className="btn btn-primary btn-drop mt-3">Read More</button>
                                    {/* <a>Read More</a> */}
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item h-100 d-flex flex-column align-items-center">
                                <i className="icofont-baby"></i>
                                <h3>Pediatric Oncology</h3>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Praesentium eaque omnis corporis, animi aspernatur tempora.
                                </p>
                                <p className="flex-grow-1"></p>
                                <Link href="/departments/pediatric-oncology">
                                     <button type="submit" className="btn btn-primary btn-drop mt-3">Read More</button>
                                    {/* <a>Read More</a> */}
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item h-100 d-flex flex-column align-items-center">
                                <i className="icofont-baby"></i>
                                <h3>Physiotherapy</h3>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Praesentium eaque omnis corporis, animi aspernatur tempora.
                                </p>
                                <p className="flex-grow-1"></p>
                                <Link href="/departments/physiotherapy">
                                     <button type="submit" className="btn btn-primary btn-drop mt-3">Read More</button>
                                    {/* <a>Read More</a> */}
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item h-100 d-flex flex-column align-items-center">
                                <i className="icofont-baby"></i>
                                <h3>Preventive Oncology</h3>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Praesentium eaque omnis corporis, animi aspernatur tempora.
                                </p>
                                <p className="flex-grow-1"></p>
                                <Link href="/departments/preventive-oncology">
                                     <button type="submit" className="btn btn-primary btn-drop mt-3">Read More</button>
                                    {/* <a>Read More</a> */}
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item h-100 d-flex flex-column align-items-center">
                                <i className="icofont-baby"></i>
                                <h3>Radiation Oncology</h3>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Praesentium eaque omnis corporis, animi aspernatur tempora.
                                </p>
                                <p className="flex-grow-1"></p>
                                <Link href="/departments/radiation-oncology">
                                     <button type="submit" className="btn btn-primary btn-drop mt-3">Read More</button>
                                    {/* <a>Read More</a> */}
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item h-100 d-flex flex-column align-items-center">
                                <i className="icofont-baby"></i>
                                <h3>Surgical Oncology</h3>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Praesentium eaque omnis corporis, animi aspernatur tempora.
                                </p>
                                <p className="flex-grow-1"></p>
                                <Link href="/departments/surgical-oncology">
                                     <button type="submit" className="btn btn-primary btn-drop mt-3">Read More</button>
                                    {/* <a>Read More</a> */}
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item h-100 d-flex flex-column align-items-center">
                                <i className="icofont-baby"></i>
                                <h3>Transfusion Medicine</h3>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Praesentium eaque omnis corporis, animi aspernatur tempora.
                                </p>
                                <p className="flex-grow-1"></p>
                                <Link href="/departments/transfusion-medicine">
                                     <button type="submit" className="btn btn-primary btn-drop mt-3">Read More</button>
                                    {/* <a>Read More</a> */}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Departments;
