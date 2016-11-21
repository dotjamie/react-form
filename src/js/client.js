import React from 'react';
import ReactDOM from 'react-dom';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Col from 'react-bootstrap/lib/Col';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import Checkbox from 'react-bootstrap/lib/Checkbox';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      cityBorn: '',
      checked: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(key, event) {
    var obj = {}
    obj[key] = event.target.value
    this.setState(obj);
  }

  handleCheck(event) {
    this.setState({checked: event.target.checked});
  }

  handleSubmit(event) {
    console.log(this.state)
    event.preventDefault();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <pre>{ JSON.stringify(this.state) }</pre>
        <FormGroup controlId="formHorizontalFirstName" bsSize="large">
          <Col sm={6}>
            First Name
          <FormControl type="text" value={this.state.firstName} onChange={this.handleChange.bind(this, 'firstName')} />
          </Col>
          <Col sm={6}>
            Last Name
          <FormControl type="text" value={this.state.lastName} onChange={this.handleChange.bind(this, 'lastName')} />
          </Col>
        </FormGroup>
        <FormGroup bsSize="large">
          <Col sm={12}>
            What city were you born in?
            <FormControl type="text" value={this.state.cityBorn} onChange={this.handleChange.bind(this, 'cityBorn')} />
          </Col>
        </FormGroup>
        <Col sm={12}>
          <FormGroup>
            <Checkbox checked={this.state.checked} onChange={this.handleCheck}>
              I consent to participate in the study
            </Checkbox>
          </FormGroup>

          <Button type="submit" value="Submit" bsSize="large"> I understand and wish to continue with enrollment </Button>

        </Col>

      </Form>
    );
  }
}

ReactDOM.render(
  <SignUpForm />,
  document.getElementById('app')
)
