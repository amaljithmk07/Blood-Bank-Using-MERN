import React from "react";

const Userresultone = () => {
  return (
    <div>
      <div className="body">
        <a href="/api/blood/view">
          <h2>RESULTS</h2>
        </a>
        <table>
          <tbody>
            <tr>
              <th rowSpan={2}>
                <a href="/api/blood/view">
                  <img src="/upload/<%= data.image %>" alt="</>" />
                </a>
              </th>
              <th>FULL NAME </th>
              <th>BLOOD GROUP</th>
              <th>GENDER</th>
              <th>DATE OF BIRTH</th>
              <th>PHONE NUMBER</th>
              <th>ADDRESS</th>
              <th />
            </tr>
            <tr>
              <td>&lt;%= data.full_name %&gt;</td>
              <td
                style={{
                  color: "rgb(173, 35, 35)",
                  fontWeight: 700,
                  fontSize: 14,
                }}
              >
                &lt;%= data.blood_group %&gt;
              </td>
              <td>&lt;%= data.gender %&gt;</td>
              <td>&lt;%= data.date_of_birth %&gt;</td>
              <td>&lt;%= data.phone_number %&gt;</td>
              <td>&lt;%= data.address %&gt;</td>
              <td>
                <a href="/api/blood/list/<%= data._id %>">
                  {" "}
                  <i className="icon fa fa-edit" id="edit" />
                </a>
                <a href="/api/blood/delete/<%= data._id %>">
                  <i className="icon fa fa-trash" id="delete" />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
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

export default Userresultone;
