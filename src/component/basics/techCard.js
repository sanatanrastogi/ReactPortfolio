import React from 'react'

const TechCard = ({ techData }) => {
    return (
        <>
            {
                techData.map((curElem, idx) => {
                    return (

                            <div className="col-6 col-md-3 mt-5" key={idx} >
                                <div className="mb-md-0 mb-sm-0 mb-3" >
                                    <img className="rounded" src={curElem.imgPath} alt={curElem.altText} width="100px" height="100px" />
                                    <div className="text-center">
                                        {/* <span className="text-info">★</span>
                                        <span className="text-info">★</span>
                                        <span className="text-info">★</span> */}
					                    {[1,2,3,4,5].filter(row=> row <= curElem.star).map((row)=> <span className="text-info">★</span>)}
                                        {/* <input type="range" min="0" max="5" value={curElem.star} readOnly /> */}
                                    </div>
                                </div>
                            </div>

                    )
                })
            }
        </>
    )
}

export default TechCard;