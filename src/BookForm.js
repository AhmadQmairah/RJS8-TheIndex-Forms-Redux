import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "./store/actions/index";
class BookForm extends Component {
  state = {
    title: "",
    color: ""
  };

  textChangeHandler = event => {
    if (event.target == null) {
    }
    this.setState({ [event.target.name]: event.target.value });
  };
  submitBook = event => {
    event.preventDefault();
    this.props.postBook(this.state, this.props.author, this.props.closeModal);
  };
  render() {
    let errors = this.props.errors;
    return (
      <div className="mt-5 p-2">
        <form onSubmit={this.submitBook}>
          {!!errors.length && (
            <div className="alert alert-danger" role="alert">
              {errors.map(error => (
                <p key={error}>{error}</p>
              ))}
            </div>
          )}
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Title</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="title"
              value={this.state.title}
              onChange={this.textChangeHandler}
            />
          </div>
          <input
            type="text"
            name="color"
            list="colorlist"
            onChange={this.textChangeHandler}
          />
          <datalist name="color" id="colorlist" value={this.state.color}>
            <option value="red"></option>
            <option value="green"></option>
            <option value="blue"></option>
            <option value="white"></option>
          </datalist>
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    errors: state.rootErrors.errors,
    author: state.rootAuthor.author
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postBook: (book, author, closeModal) =>
      dispatch(actionCreators.postBook(book, author, closeModal)),
    resetErrors: () => dispatch(actionCreators.resetErrors())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookForm);
