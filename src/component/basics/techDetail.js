import React from 'react'
import TechCard from "./techCard.js";
import Tech from "./TechDetailApi.js";
const TechDetail = () => {
    const [techData, setTechData] = React.useState(Tech);
  return (
    <>
        <TechCard techData={techData} />
    </>
  )
}

export default TechDetail;