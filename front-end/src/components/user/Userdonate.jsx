import React, { useEffect, useState } from "react";
import "./Userdonate.css";

const Userdonate = () => {
  const [input, setinput] = useState("");
  const imageUpload = (e) => {
    console.log(e);
    const { name } = e.target;
    setinput({ ...input, [name]: e.target.files[0] });
  };
  console.log(input.image);
  return (
    <>
      <div className="userdonate-body">
        <div className="userdonate-content">
          <div className="userdonate-heading">DONOR &nbsp;DETAILS</div>
          <form
            action="/api/blood/add"
            method="post"
            encType="multipart/form-data"
            className="userdonate-form"
          >
            {" "}
            <div className="userdonate-uploadsubmit">
              <input
                type="file"
                name="image"
                id="file"
                hidden
                onChange={imageUpload}
              />
              <label htmlFor="file">
                {input.image == null ? (
                  <img src="/profile.png" alt="" id="userdonate-uploadimage" />
                ) : (
                  <img src={input.image} alt="" id="userdonate-uploadimage" />
                )}
              </label>
            </div>
            <div className="userdonate-inputs">
              <div className="userdonate-input-body">
                <div className="userdonate-inputfield">
                  Full Name
                  <input
                    type="text"
                    className="userdonate-input"
                    name="full_name"
                  />
                </div>
                <div className="userdonate-inputfield">
                  Date of Birth
                  <input
                    type="date"
                    className="userdonate-input"
                    name="date_of_birth"
                  />
                </div>
              </div>
              <div className="userdonate-input-body">
                <div className="userdonate-inputfield">
                  {" "}
                  Blood Group
                  <input
                    type="text"
                    className="userdonate-input"
                    name="blood_group"
                    style={{
                      fontWeight: 700,
                      color: "rgb(158, 0, 0)",
                      letterSpacing: 1,
                    }}
                  />
                </div>
                <div className="userdonate-inputfield">
                  {" "}
                  Phone Number
                  <br />
                  <input
                    type="tel"
                    className="userdonate-input"
                    name="phone_number"
                    minLength={3}
                    maxLength={10}
                  />
                </div>
              </div>
              <div className="userdonate-input-body">
                <div className="userdonate-inputfield">
                  Gender
                  <br />
                  <input
                    type="text"
                    className="userdonate-input"
                    name="gender"
                  />
                </div>
                <div className="userdonate-inputfield">
                  Address
                  <br />
                  <input
                    type="text"
                    className="userdonate-input"
                    name="address"
                  />
                </div>
              </div>
            </div>
            <div className="userdonate-uploadsubmit">
              <button type="submit" id="userdonate-btn">
                SUBMIT{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Userdonate;
