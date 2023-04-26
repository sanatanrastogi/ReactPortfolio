import React from 'react'

const ExpCard = ({ expData }) => {
    return (
        <>
            {
                expData.map((curElem, idx) => {
                    return (
                            <div className="col-12 col-md-4 my-2" key={idx}>
                                <div className="card shadow h-100">
                                    <div className="card-body">
                                        <div className="card-title">
                                            <h4>{curElem.name}</h4>
                                        </div>
                                        <div className="card-text">{curElem.detail}</div>
                                    </div>
                                    <a href={curElem.link} className="stretched-link"></a>
                                </div>
                            </div>
                        
                    );
                })
            }
        </>
    )
};

export default ExpCard;