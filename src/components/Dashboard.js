import React, { Component } from 'react';

import Month from './Month';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0;
  width: 75%;
  float: right;
  text-align: center;
`;

const Nav = styled.nav`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    li {
      display: inline-block;
      a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        color: #000;
      }
    }
  }
`;

class Dashboard extends Component {
  render() {
    const keys = Object.keys(this.props.flow);
    return (
      <Wrapper>
        <h1>Dashboard</h1>
        <Nav>
          <ul>
            <li>
              <a href=""> test</a>
            </li>
            <li>
              <a href="">test</a>
            </li>
            <li>
              <a href="">test</a>
            </li>
          </ul>
        </Nav>

        <div>
          {keys.map(key => (
            <Month month={this.props.flow[key]} />
          ))}
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
          aspernatur illo aperiam, possimus commodi, hic consequatur tenetur
          officia quos sit cum numquam autem officiis facere ut dolorum iure
          quidem porro.
        </p>
      </Wrapper>
    );
  }
}

export default Dashboard;
