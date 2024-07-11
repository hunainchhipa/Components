import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "./Header";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { workspaceData } from "./demoData";
import CustomPopup from "./CustomPopup";
import MediaCard from "./MediaCard";

const WorkspaceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const workspace = workspaceData.find((ws) => ws.id === parseInt(id));
  const [startDate, setStartDate] = useState(new Date());
  const [timeRange, setTimeRange] = useState([9, 17]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Scroll to top on id change
    window.scrollTo(0, 0);
  }, [id]);

  if (!workspace) {
    return <p>Workspace not found</p>;
  }

  const handleTimeChange = (range) => {
    setTimeRange(range);
  };

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handlePayment = () => {
    alert("Payment successful!");
    closePopup();
  };

  const navigateToWorkspace = (id) => {
    navigate(`/workspace/${id}`);
  };

  const otherWorkspaces = workspaceData.filter(
    (otherWorkspace) => otherWorkspace.id !== workspace.id
  );

  return (
    <div>
      <Header />
      <div className="workspace-detail-container py-16">
        <div className="container mx-auto px-4">
          <div className="workspace-detail-header mb-8 mt-16">
            <h1 className="text-4xl font-bold">{workspace.name}</h1>
          </div>
          <div className="workspace-detail-content flex flex-col md:flex-row gap-8">
            <div className="workspace-detail-image w-full md:w-1/2">
              <img
                src={workspace.image}
                alt={workspace.name}
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
            <div className="workspace-detail-info w-full md:w-1/2">
              <p>{workspace.description}</p>
              <p>
                <strong>Rating:</strong> {workspace.rating}
              </p>
              <p>
                <strong>Price:</strong> {workspace.price}
              </p>
              <p>
                <strong>Facilities:</strong> {workspace.facilities}
              </p>
              <div className="booking-details mt-8">
                <h2 className="text-2xl font-bold mb-4">Book This Workspace</h2>
                <div className="date-time-container flex flex-col md:flex-row gap-4">
                  <div className="date-picker w-full">
                    <label>Select Date:</label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      className="w-full border border-gray-300 rounded-lg p-2"
                    />
                  </div>
                  <div className="time-slider w-full">
                    <label>Select Time Range:</label>
                    <Slider
                      range
                      min={0}
                      max={24}
                      defaultValue={timeRange}
                      onChange={handleTimeChange}
                      marks={{ 0: "00:00", 24: "24:00" }}
                      className="w-full"
                    />
                    <p className="pt-4">
                      From {timeRange[0]}:00 to {timeRange[1]}:00
                    </p>
                  </div>
                </div>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                  onClick={openPopup}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
        <CustomPopup show={showPopup} handleClose={closePopup}>
          <h2 className="text-xl font-bold mb-4">Payment</h2>
          <p>Amount: {workspace.price}</p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handlePayment}
          >
            Pay Now
          </button>
        </CustomPopup>
        <div className="other-workspaces-section py-16 bg-gray-100 mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Other Workspaces
          </h2>
          <div className="container mx-auto px-4">
            <div className="workspaces-grid grid grid-cols-1 md:grid-cols-3 gap-8">
              {otherWorkspaces.map((otherWorkspace) => (
                <MediaCard
                  key={otherWorkspace.id}
                  workspace={otherWorkspace}
                  onClick={() => navigateToWorkspace(otherWorkspace.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceDetail;
