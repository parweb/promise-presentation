import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  margin: 10px;
  padding: 10px;

  display: grid;
  width: 500px;
  grid-template-areas:
    'header header header header header'
    'sidebar main main main main'
    'footer footer footer footer footer';
  grid-gap: 10px;
`;

const Header = styled.div`
  grid-area: header;
  height: 50px;
  line-height: 50px;
  background: #fffa;
  border-radius: 5px;
`;

const Sidebar = styled.div`
  grid-area: sidebar;
  border-radius: 5px;
  background: #fffa;
`;

const Content = styled.div`
  grid-area: main;
  border-radius: 5px;
  background: #fffa;
  height: 200px;
`;

const Footer = styled.div`
  grid-area: footer;
  height: 50px;
  line-height: 50px;
  background: #fffa;
  border-radius: 5px;
`;

const Loader = () => <div>loading ...</div>;

class SimpleInner extends React.Component {
  state = {
    products: [],
    loaders: [1],
    count: 0
  };

  constructor(props) {
    super(props);
    this.animate();
  }

  animate() {
    const waiter = setInterval(() => {
      this.setState({ loaders: [...this.state.loaders, this.state.loaders.length + 1] });
    }, 1000);

    const fullfilled = setTimeout(() => {
      this.setState({ products: [1, 2, 3], loaders: [] });
      clearInterval(waiter);
      clearTimeout(fullfilled);
    }, 5000);
  }

  render() {
    return (
      <div>
        <div key={10}>
          {this.state.products.length > 0 && (
            <Grid>
              <Header>Header</Header>
              <Sidebar>Sidebar</Sidebar>
              <Content>Content</Content>
              <Footer>Footer</Footer>
            </Grid>
          )}
        </div>
        <div key={20}>{this.state.loaders.map(i => <Loader key={i} />)}</div>
      </div>
    );
  }
}

export default class Simple extends React.Component {
  state = {
    count: 0
  };

  reload = () => {
    window.location.reload();
  };

  render() {
    return (
      <div onClick={this.reload}>
        <SimpleInner count={this.state.count} />
      </div>
    );
  }
}
