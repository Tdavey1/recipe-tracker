import React from 'react';

class Navbar extends React.Component {
  state = {
    display: false
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <a className="navbar-item" id="logo" href="google.com">
            <img alt="logo" src="https://www.freepnglogos.com/uploads/logo-3d-png/3d-company-logos-design-logo-online-2.png" />
          </a>
          <a className={"navbar-item navbar-option" + (this.state.display ? " show" : "")} href="google.com">Home</a>
          <a className={"navbar-item navbar-option" + (this.state.display ? " show" : "")} href="google.com">Pancake</a>
          <a className={"navbar-item navbar-option" + (this.state.display ? " show" : "")} href="google.com">Duck</a>
          <a className={"navbar-item navbar-option" + (this.state.display ? " show" : "")} href="google.com">Trampoline</a>
          <a className={"navbar-item" + (this.state.display ? " active-hamburger" : "")} id="hamburger" href="google.com" onClick={() => this.setState({ display: !this.state.display })}>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </a>
        </nav >
        <div className="navbar-buffer"></div>
      </div>
    )

  }
}

export default Navbar;
