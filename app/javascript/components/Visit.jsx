import React, { useState } from 'react'
import VisitCard from './VisitCard'

function Visit({visit}) {
    return (
        <div>
            <div className="row">
                <div className="col s8">
                    <VisitCard visit={visit} />
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