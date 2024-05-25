import React from "react";
import { useNavigate } from "react-router-dom";
import PieChart from "./Charts/PieChart";
import ColumnChart from "./Charts/ColumnChart";
import LineChart from "./Charts/LineChart";
import LineColumnAreaChart from "./Charts/LineColumnAreaChart";
import TimelineChart from "./Charts/TimelineChart";
import DonutChart from "./Charts/DonutChart";
import BubbleChart from "./Charts/BubbleChart";
import WrappedButton from "./GlobalComponents/WrappedButton";

const Charts = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container my-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h1 className="text-secondary fw-bold mb-0">Charts!</h1>
          <WrappedButton
            className="btn btn-outline-secondary"
            onClick={() => navigate("/")}
            hotkey="b"
          >
            Back
          </WrappedButton>
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
                <ColumnChart
                  y1Label={"Net Profit"}
                  y2Label={"Revenue"}
                  y1Data={[44, 55, 57, 56, 61, 58, 63, 60, 66]}
                  y2Data={[76, 85, 101, 98, 87, 105, 91, 114, 94]}
                  xData={[
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                  ]}
                  yTitle={"$ (thousands)"}
                />
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
                <LineColumnAreaChart />
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

          <div className="col-md-6 mt-4">
            <div className="card h-100">
              <div className="card-body">
                <BubbleChart />
                <div className="text-center mt-2">
                  <h3 className="text-secondary">Bubble Chart</h3>
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
