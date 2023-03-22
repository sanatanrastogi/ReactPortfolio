import React from 'react'

const EduCard = ({ eduData }) => {
    // console.log(eduData);
    return (
        <>
            {
                eduData.map((curElem) => {
                    return (
                        <>
                            <div className="col-12 col-md-4 my-2" key={curElem.id}>
                                <div>
                                    <h3>{curElem.name}</h3>
                                </div>
                                <div>{curElem.collage}<br />
                                    Year : {curElem.year}<br />
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </>
    );
};
export default EduCard;