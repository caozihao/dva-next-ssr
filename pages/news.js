import React, { Component } from 'react';
import propTypes from 'prop-types';
import { } from 'antd';
import NewsPage from '../src/routes/news/NewsPage';

class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() { }
  componentWillReceiveProps(nextProps) { }
  render() {
    return (
      <NewsPage />
    );
  }
}
Data.propTypes = {};
Data.defaultProps = {};
export default Data;
