import React from "react";
import { Clock } from "react-bootstrap-icons";
import offerDetails from "../../assets/offersDetails.png";
import SecondaryNav from "../../components/SecondaryNav";
import { Link } from "react-router-dom";

// Client testimonials imports
import c1 from "../../assets/c1.png";
import c2 from "../../assets/c2.png";
import c3 from "../../assets/c3.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Testimonials Data
const clientTestimonials = [
  {
    name: "Alaa Ahmed",
    testimonial:
      "Exceptional service! The team was professional, thorough, and exceeded my expectations. Highly recommended!",
    rating: 4,
    image: c1,
  },
  {
    name: "Sarah Johnson",
    testimonial:
      "I’ve never seen our apartments this spotless. They pay attention to every detail and ensure everything is perfect.",
    rating: 5,
    image: c2,
  },
  {
    name: "Jacob Jones",
    testimonial:
      "Reliable and efficient. They made managing my properties so much easier with their excellent cleaning services.",
    rating: 5,
    image: c3,
  },
];

// Apartment Images Data

const OfferDetails: React.FC = () => {
  return (
    <>
      <SecondaryNav />
      {/* Apartment Sterilization Section */}
      <section>
        <Container>
          <Row className="my-5 py-5 gap-3 gap-lg-0">
            {/* Left Content Section */}
            <Col lg={6} xs={10} className="left">
              <h3 className="">Cleaning Rooms + Perfuming</h3>
              <h6 className="mt-3 service-text">
                Time:
                <span className="ms-2 text-secondary">1 Hour 30 Minute</span>
              </h6>
              <h6 className="mt-3 service-text">
                Days Available :
                <span className="ms-2 text-secondary">All Week</span>
              </h6>
              <div>
                <h5 className="offer-text ">
                  <Clock className="me-2 mb-1" />
                  Valid until December 31st
                </h5>
                <h5 className="mt-3">Description :</h5>
                <p className="text-secondary fw-bold">
                  The room cleaning and deodorizing package includes a set of
                  services aimed at maintaining the cleanliness and freshness of
                  rooms in hotels or furnished apartments. This package
                  typically includes:
                </p>
                <p className="text-secondary fw-bold">
                  1. Room Cleaning: Sweeping the floors, cleaning the furniture,
                  changing linens (such as sheets and towels), and cleaning
                  various surfaces
                </p>
                <p className="text-secondary fw-bold">
                  2. Disinfecting Surfaces: Using disinfectant materials to
                  eliminate germs and bacteria on surfaces such as door handles,
                  tables, and air conditioning units
                </p>
                <p className="text-secondary fw-bold">
                  3. Deodorizing Rooms: Spraying air fresheners or using scented
                  sprays to leave a refreshing fragrance in the room.
                </p>
                <p className="text-secondary fw-bold">
                  4. Proper Ventilation: Ensuring rooms are well-ventilated to
                  allow fresh air in.
                </p>
                <h5 className="my-2">Covered Areas by the Offers :</h5>
                <ul className="text-secondary">
                  <li className="my-3 fs-3">Bur Dubai</li>
                  <li className="my-3 fs-3">Deira</li>
                  <li className="my-3 fs-3">Dubai Marina</li>
                  <li className="my-3 fs-3">Meydan</li>
                  <li className="my-3 fs-3">Jebel Ali</li>
                  <li className="my-3 fs-3">International City</li>
                </ul>
              </div>
            </Col>
            {/* Right Section */}
            <Col lg={6} xs={10} className="right text-center ">
              <img
                src={offerDetails}
                alt="offerDetails"
                className="img-fluid"
              />
            </Col>
            {/* Right Image Section */}
          </Row>
        </Container>
      </section>

      {/* Customer Reviews Section */}
      <section className="container mb-5">
        <h3 className="d-flex justify-content-between align-items-center mt-5">
          Excerpts From Customers Reviews:
          <a href="#" className="text-dark text-decoration-underline fs-6">
            See All
          </a>
        </h3>
        {clientTestimonials.map((client, index) => (
          <div
            key={index}
            className="client-review px-4 p-1 rounded-3 my-3 border border pt-3">
            <div className="d-flex align-items-center">
              <img
                src={client.image}
                alt={`Client ${index + 1}`}
                className="rounded-5 me-3"
                width={30}
              />
              <div>
                <h6 className="mb-1">{client.name}</h6>
                <span className="text-warning mx-3 fs-4">
                  {"★".repeat(client.rating)}
                  {"☆".repeat(5 - client.rating)}
                </span>
              </div>
            </div>
            <p className="mt-2 pb-3">{client.testimonial}</p>
          </div>
        ))}
        <Link to="/booking">
          <button className="w-100 button py-2 rounded text-light fw-bold">
            Book Now
          </button>
        </Link>
      </section>
    </>
  );
};

export default OfferDetails;
