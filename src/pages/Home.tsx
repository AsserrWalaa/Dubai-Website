// bootstrap imposrts
import { Card } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Clock } from "react-bootstrap-icons";
import WhatsappButton from "../assets/whtasapp.png";
import Call from "../assets/call.png";

// styles
import "../style/Home.css";
import "../style/global.css";

// components imports
import Hero from "../components/HeroSection";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

// our service imports
import star from "../assets/star.png";

// our work section imports
import ourWork from "../assets/our work.png";
import bathroom from "../assets/bathroom.png";

// how it works imports
import howWorks from "../assets/how works.png";

// offers section imports
import layout from "../assets/window.jpeg";
import offer2 from "../assets/offer2.jpeg";
import offer3 from "../assets/offer3.jpeg";

// clients says section imports
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import says from "../assets/says.png";
// swiper imports
import { Swiper, SwiperSlide } from "swiper/react";

//client offers
const offers = [
  {
    title: "Room layout and furnishing",
    description:
      "Includes complete sterilization of all rooms with quality assurance",
    validUntil: "Valid until December 31st",
    image: layout, // Replace `layout` with the actual image import
  },

  {
    title: "Room layout and furnishing",
    description:
      "Includes complete sterilization of all rooms with quality assurance",
    validUntil: "Valid until December 31st",
    image: offer2, // Duplicate for demo purposes
  },
  {
    title: "Room layout and furnishing",
    description:
      "Includes complete sterilization of all rooms with quality assurance",
    validUntil: "Valid until December 31st",
    image: offer3, // Duplicate for demo purposes
  },
  {
    title: "Room layout and furnishing",
    description:
      "Includes complete sterilization of all rooms with quality assurance",
    validUntil: "Valid until December 31st",
    image: bathroom, // Duplicate for demo purposes
  },
];
// end

// start clients
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
// end clients

const Home = () => (
  <>
    <Hero />
    {/* Our Service*/}
    <section className="container my-5">
      {/* our Services */}
      <div>
        <div className="text-center">
          <h1 className="text-dark p-5">our Services</h1>
          <p className="text-center fs-4 text-secondary">
            We provide comprehensive solutions tailored to meet your needs in
            hotels and furnished apartments. From professional cleaning to
            thorough sanitization, we ensure your spaces are pristine, safe, and
            welcoming. Our commitment is to deliver reliable, high-quality
            services that exceed expectations, allowing you to focus on what
            matters most. Let us take care of the details, so you can enjoy
            peace of mind.
          </p>
        </div>
        {/* pics */}
        <div className="gap-2 row justify-content-center align-items-center">
          <div className="home-claening d-flex ourServices col-lg-3 col-md-6 col-sm-12 rounded-3 position-relative">
            <div className="position-absolute top-0 end-0 text-white p-1 fw-bold rounded-end">
              <img src={star} alt="star" /> <span>4.8</span>
            </div>
            <h3 className="d-flex justify-content-center align-items-end mx-auto text-light mb-4">
              Home Cleaning
            </h3>
          </div>
          <div className="bathroom-claening d-flex ourServices col-lg-3 col-md-6 col-sm-12 rounded-3 position-relative">
            <div className="position-absolute top-0 end-0 text-white p-1 fw-bold rounded-end">
              <img src={star} alt="star" /> <span>4.8</span>
            </div>
            <h3 className="d-flex justify-content-center align-items-end mx-auto text-light mb-4">
              Bathroom Cleaning
            </h3>
          </div>
          <div className="kitchen-claening d-flex ourServices col-lg-3 col-md-6 col-sm-12 rounded-3 position-relative">
            <div className="position-absolute top-0 end-0 text-white p-1 fw-bold rounded-end">
              <img src={star} alt="star" /> <span>4.8</span>
            </div>
            <h3 className="d-flex justify-content-center align-items-end mx-auto text-light mb-4">
              Kitchen Cleaning
            </h3>
          </div>
          <div className="surface-claening d-flex ourServices col-lg-3 col-md-6 col-sm-12 rounded-3 position-relative">
            <div className="position-absolute top-0 end-0 text-white p-1 fw-bold rounded-end">
              <img src={star} alt="star" /> <span>4.8</span>
            </div>
            <h3 className="d-flex justify-content-center align-items-end mx-auto text-light mb-4">
              Surface Cleaning
            </h3>
          </div>
          <div className="window-claening d-flex ourServices col-lg-3 col-md-6 col-sm-12 rounded-3 position-relative">
            <div className="position-absolute top-0 end-0 text-white p-1 fw-bold rounded-end">
              <img src={star} alt="star" /> <span>4.8</span>
            </div>
            <h3 className="d-flex justify-content-center align-items-end mx-auto text-light mb-4">
              Window Cleaning
            </h3>
          </div>
          <div className="Upholstery d-flex ourServices col-lg-3 col-md-6 col-sm-12 rounded-3 position-relative">
            <div className="position-absolute top-0 end-0 text-white p-1 fw-bold rounded-end">
              <img src={star} alt="star" /> <span>4.8</span>
            </div>
            <h3 className="d-flex justify-content-center align-items-end mx-auto text-light mb-4">
              Upholstery Cleaning
            </h3>
          </div>
          <div className="roomLayout d-flex ourServices col-lg-3 col-md-6 col-sm-12 rounded-3 position-relative">
            <div className="position-absolute top-0 end-0 text-white p-1 fw-bold rounded-end">
              <img src={star} alt="star" /> <span>4.8</span>
            </div>
            <h3 className="d-flex justify-content-center align-items-end mx-auto text-light mb-4">
              Room Layout and Furnishing
            </h3>
          </div>
          <div className="perfuming d-flex ourServices col-lg-3 col-md-6 col-sm-12 rounded-3 position-relative">
            <div className="position-absolute top-0 end-0 text-white p-1 fw-bold rounded-end">
              <img src={star} alt="star" /> <span>4.8</span>
            </div>
            <h3 className="d-flex justify-content-center align-items-end mx-auto text-light mb-4">
              Apartment Perfuming
            </h3>
          </div>
        </div>
      </div>
    </section>
    {/* end of section */}
    {/* Our Work*/}
    <section className="container py-5">
      <h2 className="text-center pb-4">Our Work</h2>
      <p className="text-center fs-5 text-secondary">
        Explore some of our recent projects and see the quality of our work
        firsthand. Each image showcases the care and attention to detail that
        goes into every service we provide. We take pride in delivering results
        that not only meet but exceed expectations, ensuring every space we work
        on is treated with the utmost professionalism
      </p>
      <div className="container ">
        <img src={ourWork} alt="" className="w-100" />
      </div>
    </section>
    {/* how it works */}
    <div className="howWorks px-1 py-5">
      <img src={howWorks} alt="howWorks" className="w-100" />
    </div>

    {/* end of section */}
    {/* Our offers*/}
    {/* end of section */}
    <section className="container">
      <div>
        <h1 className="text-center">
          Our exclusive offers for hotel services and furnished apartments
        </h1>
      </div>
      <Swiper slidesPerView={1} className="my-5 swiperHome">
        {offers.map((offer, index) => (
          <SwiperSlide key={index}>
            <Card
              className="border-0 position-relative"
              style={{ width: "18rem" }}>
              <div
                className="position-absolute top-0 end-0 text-white p-1 fw-bold rounded-end"
                style={{ backgroundColor: "#F7712E" }}>
                Offer 10%
              </div>
              <Card.Img variant="top" src={offer.image} height={200} />
              <Card.Body>
                <Card.Title>{offer.title}</Card.Title>
                <Card.Text>{offer.description}</Card.Text>
                <Card.Text className="offer-text">
                  <Clock className="me-1" /> {offer.validUntil}
                </Card.Text>
                <div className="d-flex justify-content-center mt-3">
                  <Link to="booking">
                    <button
                      type="submit"
                      className="p-2 borderOrange bg-white rounded px-5 d-flex justify-content-center align-items-center w-100">
                      Book now
                    </button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
    {/* end of section */}
    {/* Client */}
    <section className="my-5 ms-3 me-4">
      <h1 className="text-center">What Our Client Say’s</h1>
      <div>
        <Swiper className="swiperClient gap-1 " slidesPerView={1}>
          {clientTestimonials.map((client, index) => (
            <SwiperSlide
              key={index}
              className={`${client.name
                .toLowerCase()
                .replace(" ", "")} position-relative`}>
              <div className="position-absolute ms-3">
                <img src={says} alt="says" width={50} />
              </div>
              <div className="client px-4 p-1 rounded-3 my-3">
                <p className="mt-5 pb-3">{client.testimonial}</p>
                <hr className="mx-auto" />
                <div className="d-flex align-items-center">
                  <img
                    src={client.image}
                    alt={`Client ${index + 1}`}
                    className="rounded-5 me-3"
                    width={30}
                  />
                  <div>
                    <h6 className="mb-1">{client.name}</h6>
                    <span className="text-warning">
                      {"★".repeat(client.rating)}
                      {"☆".repeat(5 - client.rating)}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="d-flex justify-content-center mt-5 ms-5">
          <Link to="customerReviews" className="w-25 mx-auto">
            <button className="text-dark fs-3 px-5 rounded-3 mx-auto bg-transparent borderOrange">
              View All
            </button>
          </Link>
        </div>
      </div>
    </section>
    {/* end of section */}
    {/* fixed buttons */}
    <div className="fixed-buttons">
      <button className="border-0 bg-transparent z-3">
        <img src={WhatsappButton} alt="" />
      </button>
      <button className="border-0 bg-transparent z-3">
        <img src={Call} alt="" />
      </button>
    </div>
    {/* footer */}
    <Footer />
  </>
);

export default Home;
