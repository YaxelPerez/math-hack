import React from 'react';

const Workspace = props => (
  <div className="workspace">
    <div className="workspace-container">
      {props.children}
    </div>
    <style jsx>{`
.workspace {
  overflow-y: auto;
  width: 100%;
  height: 100%;
  flex-grow: 1;
  display: flex;
  background-color: #f8f9fa;
  z-index: -1;
}

.workspace-container {
  flex-grow: 1;
  margin: 0 auto;
  max-width: 1344px;
  padding: 32px;
  /*padding-left: 32px;
  padding-right: 32px;*/
}
    `}</style>
  </div>
);

const Toolbar = props => (
  <div className="toolbar">
    {props.children}
    <style jsx>{`
.toolbar {
    width: 100%;
    height: 100px;
    border-bottom: 1px solid #CECECE;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);
}
    `}</style>
  </div>
);

const StatusBar = props => (
  <div className="statusbar">
    {props.children}
    <style jsx>{`
.statusbar {
  width: 100%;
  border-top: 1px solid #CECECE;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);
  height: 24px;
}
    `}</style>
  </div>
);

class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="app">
        <Toolbar>
        </Toolbar>
        <Workspace>
          <p>test</p>
        </Workspace>
        <StatusBar>
        </StatusBar>
        <style jsx>{`
.app {
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
}
        `}</style>
      </div>
    )
  }
}

export default App;
