import React from 'react';
import './App.css';

const sendMail = async (values) => {
  const response = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });
  if (response.status !== 200) throw Error(body);
  const body = await response.json();
  return body;
};

class App extends React.Component {

  state = {
    email: '',
    password: ''
  }

  handleSubmit(e) {
    e.preventDefault();
    sendMail(this.state).then((body) => {
      if (body.email)
        alert("According to the server, your email was : " + body.email);
    })
  }

  render() {
    return (
      <div className="App" >
        <form id="contact-form" onSubmit={(e) => this.handleSubmit(e)} method="POST">
          <div className="form-group">
            <label>Email address</label>
            <input value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} type="email" className="form-control" id="email" aria-describedby="emailHelp" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} type="password" name="password" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }

}

export default App;
