import React from "react";

const Userupdate = () => {
  return (
    <div>
      <div className="content">
        <div className="table">
          <h1>DONOR &nbsp;DETAILS</h1>
          <table>
            <form
              action="/api/blood/update/<%= data._id %>"
              method="post"
              encType="multipart/form-data"
            />
            <tbody>
              <tr></tr>
              <tr>
                <td colSpan={3} style={{ height: 60 }}>
                  <input
                    type="file"
                    name="image"
                    id="file"
                    hidden=""
                    defaultValue="<%= data.image %>"
                  />
                  <label htmlFor="file">
                    <img src="/images/profile.png" alt="" id="uploadimage" />
                  </label>
                </td>
              </tr>
              <tr>
                <td>
                  Full Name
                  <br />
                  <input
                    type="text"
                    className="input"
                    name="full_name"
                    defaultValue="<%= data.full_name %>"
                  />
                </td>
                <td>
                  Blood Group
                  <br />
                  <input
                    type="text"
                    className="input"
                    name="blood_group"
                    style={{
                      fontWeight: 700,
                      color: "rgb(158, 0, 0)",
                      letterSpacing: 1,
                    }}
                    defaultValue="<%= data.blood_group %>"
                  />
                </td>
                <td>
                  {" "}
                  Gender
                  <br />
                  <input
                    type="text"
                    className="input"
                    name="gender"
                    defaultValue="<%= data.gender %>"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  Date of Birth
                  <br />
                  <input
                    type="date"
                    className="input"
                    name="date_of_birth"
                    defaultValue="<%= data.date_of_birth %>"
                  />
                </td>
                <td>
                  Phone Number
                  <br />
                  <input
                    type="text"
                    className="input"
                    name="phone_number"
                    defaultValue="<%= data.phone_number %>"
                    minLength={3}
                    maxLength={10}
                  />
                </td>
                <td>
                  Address
                  <br />
                  <input
                    type="text"
                    className="input"
                    name="address"
                    defaultValue="<%= data.address %>"
                  />
                </td>
              </tr>
              <tr>
                <td colSpan={3}>
                  <input type="submit" defaultValue="Submit" id="btn" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="footer">
        <p>Follow us</p>
        <i className="fa fa-instagram" /> <i className="fa fa-twitter" />
        <i className="fa fa-youtube" /> <i className="fa fa-facebook" />
        <i className="fa fa-tiktok" />
        <i className="fa fa-linkedin" />
      </div>
    </div>
  );
};

export default Userupdate;
