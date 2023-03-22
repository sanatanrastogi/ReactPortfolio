import React from 'react';
import Exp from './expApi.js';
import ExpCard from './expCard.js';
const ExpDetail = () => {
    const [expData, setExpData] = React.useState(Exp);
  return (
    <>
        <ExpCard expData={expData} />
    </>
  )
};

export default ExpDetail;