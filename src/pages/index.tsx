import React from 'react';
import { Link } from 'umi'

export default () => {
  return (
    <div>
      <h1>hello umi!!!</h1>
      <h1><Link to='/users'>跳转到users页面</Link></h1>
    </div>
  );
}
