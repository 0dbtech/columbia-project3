import React from 'react';
import { DateTimeInput } from 'semantic-ui-calendar-react';
import { Form } from 'react-bootstrap';

class DateTimeForm extends React.Component {
    constructor(props) {
      super(props);
   
      this.handleChange = this.handleChange.bind(this);

      this.state = {
        date: '',
        time: '',
        dateTime: '',
        datesRange: ''
      };
    }

    // handleChange(val) {
    //     console.log(val)
    //   }
   
    handleChange = (event, value) => {
        console.log(value)
        console.log(event);
        // if (this.state.hasOwnProperty(name)) {
        //     this.setState({ [name]: value });
        // }
    }

    render() {
      console.log(this.state)
      return (
        <Form className="myCalendar">
          <DateTimeInput
            inline
            name="dateTime"
            placeholder="Date Time"
            value={this.state.dateTime}
            iconPosition="left"
            onChange={this.handleChange()}
          />
        </Form>
      );
    }
  }

  export default DateTimeForm;