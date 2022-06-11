import React, { useState, useEffect } from "react";
import {
  Form,
  Button,
  Row,
  Col,
  Container,
  NavItem,
  Table,
} from "react-bootstrap";
import { Redirect, Link } from "react-router-dom";
import swal from "sweetalert";
import "../style/main.css";

const Result = (props) => {
  const [fizzData, setFizzData] = useState([]);
  const [buzzData, setBuzzData] = useState([]);
  const [fizzBuzzData, setFizzBuzzData] = useState([]);
  const [otherData, setOtherData] = useState([]);

  const fetchData = () => {
    // Get fizz data logic
    var getFizzData = localStorage.getItem("fizz");
    getFizzData = getFizzData ? JSON.parse(getFizzData) : [];
    setFizzData(getFizzData);
    console.log(getFizzData);

    // Get buzz data logic
    var getBuzzData = localStorage.getItem("buzz");
    getBuzzData = getBuzzData ? JSON.parse(getBuzzData) : [];
    setBuzzData(getBuzzData);

    // Get fizzbuzz data logic
    var getFizzBuzzData = localStorage.getItem("fizzbuzz");
    getFizzBuzzData = getFizzBuzzData ? JSON.parse(getFizzBuzzData) : [];
    setFizzBuzzData(getFizzBuzzData);

    // Get other data logic
    var getOtherData = localStorage.getItem("other");
    getOtherData = getOtherData ? JSON.parse(getOtherData) : [];
    setOtherData(getOtherData);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      {/* Fizz Data Group */}
      <Row>
        <Col md={{ span: 12, offset: 0 }} className="">
          <Link to="/" className="mt-2 default backBtn" variant="primary">
            Back
          </Link>
        </Col>
      </Row>
      <Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Marital Status</th>
              <th>Date of Birth</th>
              <th>Arbitary Integer</th>
            </tr>
          </thead>
          <tr className="text-center groupTitle">
            <td colspan="5">Fizz Data</td>
          </tr>
          <tbody>
            {fizzData.map((user) => (
              <tr>
                <td>{user.name}</td>
                <td>{user.gender}</td>
                <td>{user.maritalStatus}</td>
                <td>{user.dob}</td>
                <td>{user.arbInteger}</td>
              </tr>
            ))}
          </tbody>
          <tr className="text-center groupTitle">
            <td colspan="5">Buzz Data</td>
          </tr>
          <tbody>
            {buzzData.map((user) => (
              <tr>
                <td>{user.name}</td>
                <td>{user.gender}</td>
                <td>{user.maritalStatus}</td>
                <td>{user.dob}</td>
                <td>{user.arbInteger}</td>
              </tr>
            ))}
          </tbody>
          <tr className="text-center groupTitle">
            <td colspan="5">FizzBuzz Data</td>
          </tr>
          <tbody>
            {fizzBuzzData.map((user) => (
              <tr>
                <td>{user.name}</td>
                <td>{user.gender}</td>
                <td>{user.maritalStatus}</td>
                <td>{user.dob}</td>
                <td>{user.arbInteger}</td>
              </tr>
            ))}
          </tbody>
          <tr className="text-center groupTitle">
            <td colspan="5">Other Data</td>
          </tr>
          <tbody>
            {otherData.map((user) => (
              <tr>
                <td>{user.name}</td>
                <td>{user.gender}</td>
                <td>{user.maritalStatus}</td>
                <td>{user.dob}</td>
                <td>{user.arbInteger}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};
export default Result;
