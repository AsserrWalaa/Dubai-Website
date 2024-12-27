import React from "react";
import "../../style/global.css";
import book from "../../assets/book.png";

// Define an array with the booking data
const bookings = [
  {
    id: "64327",
    service: "House Cleaning",
    date: "31 - 12 - 2024",
    time: "4 PM",
    price: "1500",
    address: "Downtown Dubai Appartment 501",
    status: "Compeleted",
  },
  {
    id: "64328",
    service: "Laundry Service",
    date: "01 - 01 - 2025",
    time: "10 AM",
    price: "800",
    address: "Palm Jumeirah Villa 120",
    status: "Compeleted",
  },
  {
    id: "64329",
    service: "Plumbing",
    date: "02 - 01 - 2025",
    time: "2 PM",
    price: "1200",
    address: "Burj Khalifa 405",
    status: "Compeleted",
  },
];

const Compeleted: React.FC = () => {
  return (
    <>
      {bookings.map((booking, index) => (
        <div
          key={index}
          className="borderOrange rounded-2 d-flex p-2 gap-3 w-100 my-3">
          <div>
            <img src={book} alt="booking image" height={325} />
          </div>
          <div className="d-flex h-auto my-auto w-100">
            <div>
              <h6 className="my-4">
                ID : <span className="text-secondary"> {booking.id}</span>
              </h6>
              <h6 className="my-4">
                Service :
                <span className="text-secondary"> {booking.service}</span>
              </h6>
              <h6 className="my-4">
                Date : <span className="text-secondary"> {booking.date}</span>
              </h6>
              <h6 className="my-4">
                Time : <span className="text-secondary"> {booking.time}</span>
              </h6>
              <h6 className="my-4">
                Price : <span className="text-secondary"> {booking.price}</span>
              </h6>
              <h6 className="my-4">
                Address :
                <span className="text-secondary"> {booking.address}</span>
              </h6>
              <h6 className="my-4">
                Status :
                <span className="text-secondary"> {booking.status}</span>
              </h6>
            </div>
            <button className="button  h-25 w-50 mt-auto rounded text-light px-1">
              Cancel Booking
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Compeleted;
