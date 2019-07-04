
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'

class SearchComponent extends React.Component {
  static propTypes = {
    suggestions: PropTypes.instanceOf(Array)
  };

  static defaultProps = {
    suggestions: []
  };

  constructor(props) {
    super(props);

    this.state = {

      userInput: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }


  onChange = e => {
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;

    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );


    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });
  };


  onClick = e => {
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText
    });
  };

  onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = this.state;

    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion]
      });
    }
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput
      }
    } = this;

    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul class="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              if (index === activeSuggestion) {
                className = "suggestion-active";
              }

              return (
                <li
                  className={className}
                  key={suggestion}
                  onClick={onClick}
                >
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div class="no-suggestions">
            <em>No suggestions, you're on your own!</em>
          </div>
        );
      }
    }

    return (


      <div>
        <div className="search-container">
          <p>Find buddies in your neighborhood</p>
        </div>
        <div className="search-box">


            {/* <input
              style={inputGroupStyle}
              type="text"
              onChange={onChange}
              onKeyDown={onKeyDown}
              value={userInput}
            />
            {suggestionsListComponent}
          </InputGroup> */}

<div class="input-group mb-3">
  <input 
  type="text" 
  onChange={onChange}
    onKeyDown={onKeyDown}
    value={userInput}
  class="form-control" placeholder="Zip Code" aria-label="Zip Code" aria-describedby="basic-addon2" />

  <div class="input-group-append">
    <button
  
     class="btn btn-outline-secondary" type="button">Search</button>
</div> 

</div>
              {suggestionsListComponent}

</div>
</div>
    );
  }
  

  handleClick() {
    this.props.history.push('/dogs');
  }

}
const inputGroupStyle = {
  width: '200px',
  margin: ' 0 auto',
  float: 'none'
}

export default withRouter(SearchComponent);


