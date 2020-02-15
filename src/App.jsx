import React from 'react';

class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <p>hello world</p>
        <style jsx>{`
          p { font-size: 20px; }
        `}</style>
      </div>
    )
  }
}

export default App;
