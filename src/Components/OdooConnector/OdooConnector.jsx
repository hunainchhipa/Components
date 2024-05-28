import React, { useState } from "react";
import WrappedButton from "../GlobalComponents/WrappedButton";
import axios from "axios";
import odoo_logo from "../../assets/images/odoo_logo.png";
import useSpeechToText from "../hooks/useSpeechToText";

const OdooConnector = () => {
  const [inputValue, setInputValue] = useState("");
  const { isListening, transcript, startListening, stopListening } =
    useSpeechToText({ continuous: true });
  console.log("transcript", transcript);

  const startStopListening = () => {
    isListening ? stopVoiceInput() : startListening();
  };

  const stopVoiceInput = () => {
    setInputValue(
      (prevVal) =>
        prevVal +
        (transcript.length ? (prevVal.length ? " " : "") + transcript : "")
    );
    stopListening();
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onClickSubmit = async () => {
    try {
      const response = await axios.post(
        "http://192.168.1.35:8069/api/so/llama_odoobot",
        {
          data: inputValue,
        }
      );
      const { quote_url } = response.data;
      window.open(quote_url, "_blank");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const onClickCancel = () => {
    setInputValue("");
  };

  return (
    <>
      <div className="d-flex gap-2 flex-column justify-content-center align-items-center vh-100">
        <img className="w-25" src={odoo_logo} />
        <div className="d-flex gap-2 w-50 mt-5">
          <input
            className="form-control form-control-lg"
            placeholder="Please enter the prompt to create sale order in odoo..."
            type="input"
            disabled={isListening}
            value={
              isListening
                ? inputValue +
                  (transcript.length
                    ? (inputValue.length ? " " : "") + transcript
                    : "")
                : inputValue
            }
            onChange={handleInputChange}
          />
          <button
            onClick={() => startStopListening()}
            className="btn btn-secondary"
          >
            {isListening ? "Stop Listening" : "Speak"}
          </button>
        </div>
        <div className="d-flex gap-2 mt-4">
          <WrappedButton
            className="btn btn-outline-secondary"
            onClick={onClickSubmit}
            hotkey={"d"}
          >
            Submit
          </WrappedButton>
          <WrappedButton
            className="btn btn-outline-secondary"
            onClick={onClickCancel}
            hotkey={"c"}
          >
            Cancel
          </WrappedButton>
        </div>
      </div>
    </>
  );
};

export default OdooConnector;
