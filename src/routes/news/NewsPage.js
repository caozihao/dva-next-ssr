import React, { Component } from 'react';
import { Input, Button } from 'antd';
import { connect } from 'dva';
import axios from 'axios';
// import './NewsPage.scss';

class NewsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsData: []
    };
  }
  componentDidMount() {
    // this.querySlotByCodeConfig();
    // this.querySlotByCodeConfig2();
    this.querySlotByCodeConfig();
  }

  componentWillReceiveProps(nextProps) { }

  querySlotByCodeConfig = () => {
    console.log('dispatch ->');
    this.props.dispatch({
      type: "news/querySlotByCodeConfig",
      payload: {}
    })
  }

  querySlotByCodeConfig2 = async () => {
    const querySlotByCodeConfig = {
      method: 'GET',
      url: '/monkeyApi/ad/slot/query_slot_by_code?adSlotCode=mo9.libra.news',
      headers: {
        'Client-Id': 503,
      }
    }

    const { data } = await axios(querySlotByCodeConfig)
    const newsData = data.data.entities.map((v) => {
      return <img key={v.imgUrl} style={{ width: 200 }} src={v.imgUrl} />
    })
    this.setState({ newsData })
  }

  render() {
    const { news } = this.props;
    const { newsData } = this.state;
    console.log('this.props ->', this.props);

    return (
      <div>
        <Button type="primary" onClick={this.querySlotByCodeConfig}>按钮</Button>
        <div>
          {news}
          {newsData}
        </div>
      </div>
    );
  }
}
NewsPage.propTypes = {};
NewsPage.defaultProps = {};

// function mapStateToProps(state) {
//   console.log('state->', state);
//   // return { ...state.news };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     querySlotByCodeConfig: params => dispatch({ type: 'news/querySlotByCodeConfig', payload: params }),
//   };
// }

export default connect()(NewsPage);
