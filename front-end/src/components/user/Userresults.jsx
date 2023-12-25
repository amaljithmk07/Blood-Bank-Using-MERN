import React, { useEffect, useState } from "react";
import "./Userresults.css";
import axios from "axios";

const Userresults = () => {
  const [results, setresults] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:2222/api/user/view")
      .then((data) => {
        console.log(data.data.data);
        setresults(data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="userresults-container">
      <div className="userresults-body">
        <div className="userresults-heading">RESULTS</div>
        <div className="userresults-table-body">
          <table className="userresults-table">
            <tbody>
              <tr>
                <th />
                <th>FULL NAME </th>
                <th>BLOOD GROUP</th>
                <th>GENDER</th>
                <th>DATE OF BIRTH</th>
                <th>PHONE NUMBER</th>
                <th>ADDRESS</th>
                <th />
              </tr>
              {results.map((data) => (
                <tr>
                  <td>
                    <img
                      src={`/upload/${data.image}`}
                      alt=""
                      className="userresults-img"
                    />
                  </td>
                  <td>{data.full_name}</td>
                  <td
                    style={{
                      color: "rgb(173, 35, 35)",
                      fontWeight: 700,
                      fontSize: 14,
                    }}
                  >
                    {data.blood_group}
                  </td>
                  <td>{data.gender}</td>
                  <td>{data.date_of_birth}</td>
                  <td>{data.phone_number}</td>
                  <td>{data.address}</td>
                  <td>
                    <img src="/eye.png" alt="" id="view" />
                    <img src="/trash.png" alt="" id="delete" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Userresults;
