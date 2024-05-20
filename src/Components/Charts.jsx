import React from "react";
import { useNavigate } from "react-router-dom";
import PieChart from "./Charts/PieChart";
import ColumnChart from "./Charts/ColumnChart";
import LineChart from "./Charts/LineChart";
import Line_Column_AreaChart from "./Charts/Line_Column_AreaChart";

const Charts = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container my-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h1 className="text-secondary fw-bold mb-0">Charts!</h1>
          <button
            className="btn btn-outline-secondary"
            onClick={() => navigate("/")}
          >
            Back
          </button>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-body d-flex justify-content-center align-items-center">
                <PieChart />
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="card h-100">
              <div className="card-body">
                <ColumnChart />
              </div>
            </div>
          </div>

          <div className="col-md-6 mt-4">
            <div className="card h-100">
              <div className="card-body">
                <LineChart />
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-4">
            <div className="card h-100">
              <div className="card-body">
                <Line_Column_AreaChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Charts;
