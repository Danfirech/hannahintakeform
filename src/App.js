import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { send } from "emailjs-com";
import Swal from "sweetalert2";
import Logo from "../src/media/3Dark.png";

const Container = styled.div`
  height: 3000px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efeee8;

  .logo {
    height: 250px;
    width: 500px;

    @media screen and (max-width: 768px) {
      height: 100px;
      width: 250px;
    }
  }
`;

const Middle = styled.div`
  height: 4000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 500px;

  .header {
    font-size: 50px;
  }

  .box {
    resize: none;
    background-color: #f9f8f4;
    font-size: 20px;
    height: 30px;
    width: 550px;
    border: solid #461652 2px;
    border-radius: 5px;

    @media screen and (max-width: 768px) {
      width: 90%;
    }
  }

  .box2 {
    height: 30px;
    width: 30px;
    @media screen and (max-width: 768px) {
      width: 50px;
      height: 50px;
    }
  }

  .padding {
    padding-top: 20px;
    font-size: 25px;
    margin-bottom: 10px;
    color: #461652;
  }

  .paddingwidthin {
    padding-top: 20px;
    font-size: 25px;
    width: 55%;
    color: #461652;
    text-align: center;
    margin-bottom: 10px;
    @media screen and (max-width: 668px) {
      width: 90%;
    }
  }

  .iftext {
    font-size: 45px;
    font-weight: bold;
    padding-top: 40px;
  }

  .howmany {
    padding-top: 20px;
    font-size: 25px;
    margin-bottom: 10px;
    color: #461652;
    @media screen and (max-width: 668px) {
      width: 90%;
      text-align: center;
    }
  }

  .button {
    height: 60px;
    width: 300px;
    margin-top: 50px;
    background-color: #461652;
    font-size: 20px;
    border-radius: 5px;
    color: white;
  }
`;

const Intake = () => {
  const [toSend, setToSend] = useState({
    to_name: "",
    email: "",
    review: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_6v9fhdf", "template_wj50lmx", toSend, "7q9MfiCBclwT8mRdb")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Container>
        <form onSubmit={onSubmit}>
          <Middle>
            <img className="logo" src={Logo} alt="Logo" />
            <h2 className="header">Intake Form</h2>
            <h3 className="padding">Full Name:</h3>
            <textarea
              className="box"
              type="text"
              name="full_name"
              value={toSend.full_name}
              onChange={handleChange}
            />
            <h3 className="padding">Date Of Birth:</h3>
            <textarea
              className="box"
              type="text"
              name="date_of_birth"
              value={toSend.date_of_birth}
              onChange={handleChange}
            />
            <h3 className="padding">Phone Number:</h3>
            <textarea
              className="box"
              type="text"
              name="phone_number"
              value={toSend.phone_number}
              onChange={handleChange}
            />
            <h3 className="padding">Address:</h3>
            <textarea
              className="box"
              type="text"
              name="address"
              value={toSend.address}
              onChange={handleChange}
            />
            <h3 className="padding">Email Address:</h3>
            <textarea
              className="box"
              type="text"
              name="email_address"
              value={toSend.email_address}
              onChange={handleChange}
            />
            <h3 className="padding">Insurance:</h3>
            <textarea
              className="box"
              type="text"
              name="insurance"
              value={toSend.insurance}
              onChange={handleChange}
            />

            {/* Multiple Choice Section */}
            <h3 className="padding">
              Type Of Care you are looking for:<br></br>
            </h3>
            <h3 className="padding">
              Prenatal and Birth:<br></br>
            </h3>
            <label>
              <input
                className="box2"
                type="checkbox"
                name="prenatal_and_birth"
                value=" <=== Type Of Care Needed"
                onChange={handleChange}
              />
            </label>
            <h3 className="padding">
              GYN:<br></br>
            </h3>
            <label>
              <input
                className="box2"
                type="checkbox"
                name="gyn"
                value="<=== Type Of Care Needed"
                onChange={handleChange}
              />
            </label>
            <h3 className="padding">
              Preconception:<br></br>
            </h3>
            <label>
              <input
                className="box2"
                type="checkbox"
                name="preconception"
                value="<=== Type Of Care Needed"
                onChange={handleChange}
              />
            </label>
            <h3 className="padding">
              Other:<br></br>
            </h3>
            <label for="other">
              <input
                className="box2"
                type="checkbox"
                name="other"
                value="<=== Type Of Care Needed"
                onChange={handleChange}
              />
            </label>
            {/* Multiple Choice Section End */}
            <h3 className="paddingwidthin">
              If Other: please give description of the services you are looking
              for:
            </h3>
            <textarea
              className="box"
              type="text"
              name="care_other"
              value={toSend.care_other}
              onChange={handleChange}
            />

            {/* IF PREGNANT SECTION */}
            <h3 className="iftext">If Pregnant:</h3>
            <h3 className="padding">Last Menstrual Period:</h3>
            <textarea
              className="box"
              type="text"
              name="last_menstrual_period"
              value={toSend.last_menstrual_period}
              onChange={handleChange}
            />
            <h3 className="padding"> Estimated Due Date:</h3>
            <textarea
              className="box"
              type="text"
              name="estimated_due_date"
              value={toSend.estimated_due_date}
              onChange={handleChange}
            />
            <h3 className="howmany">
              How many times have you been pregnant before:
            </h3>
            <textarea
              className="box"
              type="text"
              name="times_pregnant"
              value={toSend.times_pregnant}
              onChange={handleChange}
            />
            <h3 className="howmany">
              How many children do you have, and how old are they:
            </h3>
            <textarea
              className="box"
              type="text"
              name="how_many_children"
              value={toSend.how_many_children}
              onChange={handleChange}
            />
            <h3 className="paddingwidthin">
              Previous pregnancy experiences: (Hypertension, Gestational
              Diabetes, Loss, etc):
            </h3>
            <textarea
              className="box"
              type="text"
              name="previous_pregnancy"
              value={toSend.previous_pregnancy}
              onChange={handleChange}
            />
            <h3 className="paddingwidthin">
              Previous birth experiences: (Location, length of pregnancy,
              Vaginal, C-Section, VBAC, Induction):
            </h3>
            <textarea
              className="box"
              type="text"
              name="previous_details"
              value={toSend.previous_details}
              onChange={handleChange}
            />
            {/* IF PREGNANT SECTION END */}
            {/* IF GYN SECTION */}
            <h3 className="iftext">If GYN:</h3>
            <h3 className="padding">Annual GYN Visit:</h3>
            <textarea
              className="box"
              type="text"
              name="gyn_visit"
              value={toSend.gyn_visit}
              onChange={handleChange}
            />
            <h3 className="padding">Problem Visit:</h3>
            <textarea
              className="box"
              type="text"
              name="problem_visit"
              value={toSend.problem_visit}
              onChange={handleChange}
            />
            {/* IF GYN SECTION END */}
            <h3 className="padding">Refered By:</h3>
            <textarea
              className="box"
              type="text"
              name="refered_by"
              value={toSend.refered_by}
              onChange={handleChange}
            />
            <h3 className="padding">Additional Comments:</h3>
            <textarea
              className="box"
              type="text"
              name="aditional_comments"
              value={toSend.aditional_comments}
              onChange={handleChange}
            />
            <div>
              <button
                className="button"
                onClick={() => success()}
                type="submit"
              >
                Submit
              </button>
            </div>
          </Middle>
        </form>
      </Container>
    </>
  );
};

function success() {
  Swal.fire("Thank You!", "Your Form Has Been Submited!", "success").then(
    function () {
      window.location.reload();
    }
  );
}

export default Intake;
