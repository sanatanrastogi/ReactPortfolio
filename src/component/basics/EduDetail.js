import React, { useState } from 'react'
import Edu from './edu-detail-api.js';
import EduCard from "./EduCard.js";
const EduDetail = () => {
    const [eduData, setEduData] = useState();
  return (
    <>
//         <EduCard eduData={eduData || []} /> 
         <EduCard eduData={eduData} /> 
    </>
  )
}
export default EduDetail;