import React, { useState } from 'react'
import VisitCard from './VisitCard'

function Visit({visit, owner, animal, pet}) {
    return (
        <div>
            <div className="row">
                <div className="col s8">
                    <VisitCard visit={visit} owner={owner} animal={animal} pet={pet} />
                </div>
                <div className="col s4">
                </div>
            </div>
            <div className="row">
            </div>
        </div>
    )
}

export default Visit