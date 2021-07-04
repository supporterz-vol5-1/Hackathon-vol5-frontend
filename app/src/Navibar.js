import React, { setState } from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import { Form, FormControl } from "react-bootstrap";

const options = { register: 1, "change account": 2 };
class Navibar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      option: 1,
    };
  }
  handleinput = (e) => {
    this.setState({ username: e.target.value });
  };

  handletoggleinput = (e) => {
    console.log(options[e.target.value]);
    this.setState({ option: options[e.target.value] });
  };

  push_data = () => {
    console.log(this.state);
  };
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>コーディング時間</Navbar.Brand>
        <Button variant="secondary">graph</Button>
        <Form inline>
          <FormControl
            type="text"
            placeholder="account name"
            className="mr-sm-2"
            onChange={this.handleinput}
          />
          <Form.Control as="select" size="sm" onChange={this.handletoggleinput}>
            <option>register</option>
            <option>change account</option>
          </Form.Control>
          <Button variant="secondary" type="button" onClick={this.push_data}>
            submit
          </Button>
        </Form>
      </Navbar>
    );
  }
}

export default Navibar;
