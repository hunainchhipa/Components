import React from "react";
import { useNavigate } from "react-router-dom";
import workspace1 from "./workspace1.avif";
import workspace2 from "./workspace2.jpg";

const workspaces = [
  {
    id: 1,
    name: "Workspace 1",
    image: workspace1,
    description: "Description for Workspace 1",
  },
  {
    id: 2,
    name: "Workspace 2",
    image: workspace2,
    description: "Description for Workspace 2",
  },
  // Add more workspaces here
];

const WorkspaceList = () => {
  const navigate = useNavigate();

  const navigateToWorkspace = (id) => {
    navigate(`/workspace/${id}`);
  };

  return (
    <section className="workspace-list-section py-16 bg-white">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Workspaces</h2>
      <div className="workspace-grid container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {workspaces.map((workspace) => (
          <div
            key={workspace.id}
            className="workspace-card bg-gray-100 p-6 rounded-lg shadow-md cursor-pointer"
            onClick={() => navigateToWorkspace(workspace.id)}
          >
            <img
              src={workspace.image}
              alt={workspace.name}
              className="rounded-lg w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{workspace.name}</h3>
            <p className="text-gray-700">{workspace.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkspaceList;
