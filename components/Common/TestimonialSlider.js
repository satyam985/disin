import React from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  items: 1,
  loop: true,
  margin: 0,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  navText: [
    "<i class='icofont-simple-left'></i>",
    "<i class='icofont-simple-right'></i>",
  ],
};

const TestimonialSlider = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);
  return (
    <div className="pt-5">
      <div className="container">
        {display ? (
          <OwlCarousel
            className="feedback-slider owl-carousel owl-theme"
            {...options}
          >
            <div className="feedback-item shadow p-3 mb-4 bg-white rounded">
              <div className="client-img">
                <img
                  className="rounded-circle"
                  src="/images/MPMMCC_Director.jpg"
                  alt="MPMMCC Director"
                />
                <h3>Dr. Satyajit Pradhan</h3>
                <h6>Director MPMMCC</h6>
              </div>
              <p>
                Uttar Pradesh, with nearly 20 crore population, is the most
                populous state in the country.
              </p>
            </div>

            <div className="feedback-item shadow p-3 mb-4 bg-white rounded">
              <div className="client-img">
                <img
                  className="rounded-circle"
                  src="/images/TMC_Director.jpg"
                  alt="TMC Director"
                />
                <h3>Dr. Rajendra Badwe</h3>
                <h6>Director TMC</h6>
              </div>
              <p>
                I take over as Dr K.A. Dinshaw superannuates after an
                illustrious career of 13 years.
              </p>
            </div>
          </OwlCarousel>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default TestimonialSlider;
