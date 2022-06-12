import React, { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import swal from "sweetalert";
import "../style/main.css";

const UserForm = (props) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [arbInteger, setInteger] = useState("");
  const [date, setDate] = useState("");
  const [maritalStatus, setStatus] = useState();
  const [genderVal, setGender] = useState({ gender: "", another: "another" });

  const { gender } = genderVal;

  const handleChange = (e) => {
    e.persist();
    console.log(e.target.value);

    setGender((prevState) => ({
      ...prevState,
      gender: e.target.value,
    }));
  };

  const makeMessage = (data) => {
    setMessage(data);
    if (data.variant == "success") {
      swal("Thank You!", data.msg, data.variant).then(function () {
        window.location = "/result";
      });
    } else {
      swal("Oops!", data.msg, data.variant);
    }
  };
  const submitData = (e) => {
    e.preventDefault();
    if (!name) {
      makeMessage({ msg: "Please Fill Your Name", variant: "error" });
    } else if (!gender) {
      makeMessage({ msg: "Please Select Your Gender", variant: "error" });
    } else if (!maritalStatus) {
      makeMessage({ msg: "Please Select Marital Status", variant: "error" });
    } else if (!date) {
      makeMessage({ msg: "Please add your Date of Birth", variant: "error" });
    } else if (!arbInteger) {
      makeMessage({ msg: "Please add Arbitrary Integer ", variant: "error" });
    } else {
      var obj = {
        name: name,
        gender: gender,
        maritalStatus: maritalStatus,
        dob: date,
        arbInteger: arbInteger,
      };
      var tabsName = "";
      if (arbInteger % 15 == 0) {
        if (localStorage.getItem("fizzbuzz")) {
          var getData = localStorage.getItem("fizzbuzz");
          getData = JSON.parse(getData);
          getData.push(obj);
          localStorage.setItem("fizzbuzz", JSON.stringify(getData));
        } else {
          var fizzbuzz = [];
          fizzbuzz.push(obj);
          localStorage.setItem("fizzbuzz", JSON.stringify(fizzbuzz));
        }
        localStorage.setItem("tabsName", "third");
      } else if (arbInteger % 3 == 0) {
        if (localStorage.getItem("fizz")) {
          var getData = localStorage.getItem("fizz");
          getData = JSON.parse(getData);
          getData.push(obj);
          localStorage.setItem("fizz", JSON.stringify(getData));
        } else {
          var fizz = [];
          fizz.push(obj);
          localStorage.setItem("fizz", JSON.stringify(fizz));
        }
        localStorage.setItem("tabsName", "first");
      } else if (arbInteger % 5 == 0) {
        if (localStorage.getItem("buzz")) {
          var getData = localStorage.getItem("buzz");
          getData = JSON.parse(getData);
          getData.push(obj);
          localStorage.setItem("buzz", JSON.stringify(getData));
        } else {
          var buzz = [];
          buzz.push(obj);
          localStorage.setItem("buzz", JSON.stringify(buzz));
        }
        localStorage.setItem("tabsName", "second");
      } else {
        if (localStorage.getItem("other")) {
          var getData = localStorage.getItem("other");
          getData = JSON.parse(getData);
          getData.push(obj);
          localStorage.setItem("other", JSON.stringify(getData));
        } else {
          var other = [];
          other.push(obj);
          localStorage.setItem("other", JSON.stringify(other));
        }
        localStorage.setItem("tabsName", "fourth");
      }

      setName("");
      setMessage("");
      makeMessage({
        msg: "Success",
        variant: "success",
      });
    }
  };
  return (
    <main className="mainClass">
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }} className="my-3 text-center">
            <h2 className="formTitle">Welcome!</h2>
          </Col>
          <Col md={{ span: 8, offset: 2 }}>
            <Form className="userForm" onSubmit={submitData}>
              <Form.Group controlId="name" className="my-2">
                <Form.Label style={{ fontWeight: "bold", textAlign: "left" }}>
                  Name
                </Form.Label>
                <Form.Control
                  required
                  type="name"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="gender" className="my-3">
                <Form.Label style={{ fontWeight: "bold", textAlign: "left" }}>
                  Gender
                </Form.Label>
                <br></br>
                <Form.Check
                  inline
                  label="Woman"
                  name="gender"
                  type="radio"
                  value="Woman"
                  onChange={handleChange}
                  checked={gender === "Woman"}
                />
                <Form.Check
                  inline
                  label="Man"
                  name="gender"
                  type="radio"
                  value="Man"
                  onChange={handleChange}
                  checked={gender === "Man"}
                />
                <Form.Check
                  inline
                  label="Transgender"
                  name="gender"
                  type="radio"
                  value="Transgender"
                  onChange={handleChange}
                  checked={gender === "Transgender"}
                />
                <Form.Check
                  inline
                  label="Non-binary/non-conforming"
                  name="gender"
                  type="radio"
                  value="Non-binary/non-conforming"
                  onChange={handleChange}
                  checked={gender === "Non-binary/non-conforming"}
                />
                <Form.Check
                  inline
                  label="Prefer not to respond"
                  name="gender"
                  type="radio"
                  value="Prefer not to respond"
                  onChange={handleChange}
                  checked={gender === "Prefer not to respond"}
                />
              </Form.Group>
              <Form.Group controlId="maritalStatus" className="my-3">
                <Form.Label style={{ fontWeight: "bold", textAlign: "left" }}>
                  Marital Status
                </Form.Label>
                <Form.Control
                  as="select"
                  className="maritalStatus"
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option>Select Marital Status</option>
                  <option value="Married">Married</option>
                  <option value="Widowed">Widowed</option>
                  <option value="Separated">Separated</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Single">Single</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="BirthDate">
                <Form.Label style={{ fontWeight: "bold" }}>
                  Enter Date Of Birth
                </Form.Label>
                <Form.Control
                  type="date"
                  name="BirthDate"
                  placeholder="Enter Date of Birth"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="An Arbitrary Integer" className="my-3">
                <Form.Label style={{ fontWeight: "bold" }}>
                  An Arbitary Integer
                </Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="Enter Arbitary Integer"
                  value={arbInteger}
                  onChange={(e) => setInteger(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Col className="text-center">
                <Button
                  type="submit"
                  className="mt-2 primary customButton"
                  variant="primary"
                >
                  Submit
                </Button>
              </Col>
            </Form>
          </Col>
        </Row>
      </Container>
    </main>
  );
};
export default UserForm;
