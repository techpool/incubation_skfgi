var React = require('react');
var ReactDOM = require('react-dom');
const RaisedButton = require('material-ui/lib/raised-button');
const AppBar = require('material-ui/lib/app-bar');
const Popover = require('material-ui/lib/popover/popover');

const NavbarComponent = React.createClass({

  render: function() {
    return (
      <AppBar
        title="I N C U B T I O N"
        iconElementLeft={<p></p>}
        iconElementRight={
          <NavigationComponent />
        }
        />
    );
  }
});

var NavigationComponent = React.createClass({
  getInitialState: function() {
    return {activePopover: 'none'};
  },
  show(key, e) {
    this.setState({
      activePopover:key,
      anchorEl:e.currentTarget,
    });
  },

  closePopover(key) {
    if (this.state.activePopover !== key)
      return
    this.setState({
      activePopover:'none',
    });
  },

  loginCall: function (event) {

      var email = $('#email').val();
      var password = $('#password').val();
          $.ajax({
              url : '/login',
              data: ({email: email, password: password}),
              dataType: "json",
              method: 'POST',
              statusCode: {
                  401: function() {
                      alert( "Unauthorized" );
                  },
                  200: function () {
                      window.location = '/dashboard'
                  },
                  400: function () {
                      alert("Something went wrong. Try again after sometimg. Sorry. :/");
                  }
              },
              timeout: 5000
          });

  },
  divStyle: {
    'paddingTop': '17px',
    'paddingRight': '20px',
    'marginRight': '3px',
    'color': 'white',
    'textDecoration': 'inherit',
    'display': 'block',
    'float': 'left'
  },
  render: function() {
    return (
      <div id = "navItems" >
        <a href='#' style={this.divStyle} onClick={this.show.bind(this, "pop")}>Login</a>
        <a href='/register' style={this.divStyle}>Register</a>

        <Popover open={this.state.activePopover === 'pop'}
          anchorEl={this.state.anchorEl}
          anchorOrigin = {{"horizontal":"middle","vertical":"bottom"}}
          targetOrigin = {{"horizontal":"left","vertical":"top"}}
          onRequestClose={this.closePopover.bind(this, 'pop')} >
          <div style={{width: '300', height: '250', padding: '20'}}>
            <form className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" className="validate" />
                </div>
                <div className="input-field col s12">
                  <label htmlFor="password">Password</label>
                  <input id="password" type="password" className="validate" onkeypress={this.enterKeyHandle}/>
                </div>
                <div className="input-field col s12">
                  <RaisedButton primary={true} label="Choose an Image" onClick={this.loginCall}>
                  </RaisedButton>
                </div>
              </div>

            </form>
          </div>
        </Popover>
      </div>

    );
  }
});

var LoginButton = React.createClass({
  getInitialState: function() {
    return {activePopover: 'none'};
  },
  show(key, e) {
    this.setState({
      activePopover:key,
      anchorEl:e.currentTarget,
    });
  },

  closePopover(key) {
    if (this.state.activePopover !== key)
      return
    this.setState({
      activePopover:'none',
    });
  },
  render: function () {
    return(
      <div>
      <RaisedButton onClick={this.show.bind(this, "pop")} label="Click on me to show a popover" />

      <Popover open={this.state.activePopover === 'pop'}
        anchorEl={this.state.anchorEl}
        anchorOrigin = {{"horizontal":"middle","vertical":"bottom"}}
        targetOrigin = {{"horizontal":"left","vertical":"top"}}
        onRequestClose={this.closePopover.bind(this, 'pop')} >
        <div style={{padding: '20px'}}>

            <form class="col s12">
              <div class="row">
                <div class="input-field col s12">
                  <input id="email" type="email" class="validate" />
                  <label for="email">Email</label>
                </div>
              </div>
              <RaisedButton primary={true} label="Here is a button"/>
            </form>

        </div>
      </Popover>
      </div>
    );
  }
});

ReactDOM.render(
  <NavbarComponent />, document.getElementById('navbar')
);

ReactDOM.render(
  <LoginButton />, document.getElementById('test')
);
