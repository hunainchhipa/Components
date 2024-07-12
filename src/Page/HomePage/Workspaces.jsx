import React from "react";
import { useNavigate } from "react-router-dom";
import workspace1 from "./workspace1.avif";
import workspace2 from "./workspace2.jpg";
import workspace3 from "./workspace3.jpg";
import MediaCard from "./MediaCard";

const workspaces = [
  {
    id: 1,
    name: "Workspace 1",
    image: workspace1,
    rating: 4.5,
    price: "$50/day",
    facilities: "High-speed Wi-Fi, Conference Rooms",
  },
  {
    id: 2,
    name: "Workspace 2",
    image: workspace2,
    rating: 4.7,
    price: "$60/day",
    facilities: "Cafeteria, Gym",
  },
  {
    id: 3,
    name: "Workspace 3",
    image: workspace3,
    rating: 4.3,
    price: "$40/day",
    facilities: "Parking, Lounge",
  },
];

const Workspaces = () => {
  const navigate = useNavigate();

  const navigateToWorkspace = (id) => {
    navigate(`/workspace/${id}`);
  };

  return (
    <section className="workspaces-section py-16 bg-gray-50">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Explore Our Workspaces
      </h2>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {workspaces.map((workspace) => (
          <MediaCard
            key={workspace.id}
            workspace={workspace}
            onClick={() => navigateToWorkspace(workspace.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default Workspaces;
