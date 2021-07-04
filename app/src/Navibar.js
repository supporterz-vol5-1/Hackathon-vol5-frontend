import React, { setState } from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import { Form, FormControl } from "react-bootstrap";

class Navibar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }
  handleinput = (e) => {
    this.setState({ username: e.target.value });
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
          <Form.Control as="select" size="sm">
            <option>register</option>
            <option>change account</option>
          </Form.Control>
          <Button variant="secondary" type="submit">
            submit
          </Button>
        </Form>
      </Navbar>
    );
  }
}

export default Navibar;
