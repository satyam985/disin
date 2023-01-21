import React from 'react';

const ContactInfo = () => {
    return (
        <div className="location-area pt-100 pb-70">
            <div className="container">
                <div className="row justify-content-center location-wrap">
                    <div className="col-sm-6 col-lg-4">
                        <div className="location-item">
                            <i className="icofont-location-pin"></i>
                            <h3>Location</h3>
                            <p>2Mahamana Pandit Madan Mohan Malaviya Cancer Centre, Sundar Bagiya, Near Nariya Gate, <br /> Banaras Hindu University Campus,
                                Varanasi (U.P.) - 221005 India.., </p>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <div className="location-item">
                            <i className="icofont-ui-message"></i>
                            <h3>Email</h3>
                            <p>ams@mpmmcc.tmc.gov.in</p>
                            {/* <p>emailexample@name.com</p> */}
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <div className="location-item">
                            <i className="icofont-ui-call"></i>
                            <h3>Phone</h3>
                            <p>+91-0542-2575032,35</p>
                            <p>+91-0542-2517699</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo;