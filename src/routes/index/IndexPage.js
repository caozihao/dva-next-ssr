import React from 'react';
import { connect } from 'dva';
import './IndexPage.css';

function IndexPage() {
  return (
    <div className="IndexPage">
      <div className='normal'>
        <h1 className='title'>Yay! Welcome to dva!</h1>
        <div className='welcome' />
        <ul className='list'>
          <a href='/news' > 新闻</a>
        </ul>
      </div>
    </div>

  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
