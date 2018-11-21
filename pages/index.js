import React, { Component } from 'react';
import propTypes from 'prop-types';
import { } from 'antd';
import IndexPage from '../src/routes/index/IndexPage';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() { }
  componentWillReceiveProps(nextProps) { }
  render() {
    return (
      <IndexPage />
    );
  }
}
HomePage.propTypes = {};
HomePage.defaultProps = {};
export default HomePage;
