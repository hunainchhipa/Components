import React from "react";
import { useNavigate } from "react-router-dom";
import PieChart from "./Charts/PieChart";
import ColumnChart from "./Charts/ColumnChart";
import LineChart from "./Charts/LineChart";
import Line_Column_AreaChart from "./Charts/Line_Column_AreaChart";
import TimelineChart from "./Charts/TimelineChart";
import DonutChart from "./Charts/DonutChart";

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
              <div className="card-body">
                <div className="d-flex flex-column justify-content-between align-items-center h-100">
                  <PieChart />
                  <div className="text-center mt-2">
                    <h3 className="text-secondary">Pie Chart</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="card h-100">
              <div className="card-body">
                <ColumnChart />
                <div className="text-center mt-2">
                  <h3 className="text-secondary">Column Chart</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 mt-4">
            <div className="card h-100">
              <div className="card-body">
                <LineChart />
                <div className="text-center mt-2">
                  <h3 className="text-secondary">Line Chart</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-4">
            <div className="card h-100">
              <div className="card-body">
                <Line_Column_AreaChart />
                <div className="text-center mt-2">
                  <h3 className="text-secondary">Line, Column & Area Chart</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 mt-4">
            <div className="card h-100">
              <div className="card-body">
                <TimelineChart />
                <div className="text-center mt-2">
                  <h3 className="text-secondary">Timeline Chart</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-4">
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex flex-column justify-content-between align-items-center h-100">
                  <DonutChart />
                  <div className="text-center mt-2">
                    <h3 className="text-secondary">Donut Chart</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Charts;
