import React from 'react'

function VisitCard({visit}) {
  const date = new Date(visit.date.replace(/-/g, '\/'))
  const totalCharge = visit.total_charge ||= 0.00

  const owner = visit.owner
  const pet = visit.pet
  const animalName = visit.animal.name

  var dateOptions = {month: 'long', day: 'numeric',  year: 'numeric'};

  const moneyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div className="card">
        <div className="card-content">
        <h5>Visit Data</h5><br />
        <b>Date:&nbsp;&nbsp;</b>
          {date.toLocaleDateString('en-US', dateOptions)}<br /><br />
        <b>Pet:&nbsp;&nbsp;</b>
          <a href={`/pets/${pet.id}`}>{pet.name}</a><br /><br />
        <b>Animal:&nbsp;&nbsp;</b>
          {animalName}<br /><br />

        <b>Owner:&nbsp;&nbsp;</b>
          <a href={`/owners/${owner.id}`}>{`${owner.last_name}, ${owner.first_name}`}</a><br /><br />

        <b>Weight:&nbsp;&nbsp;</b>
          {visit.weight} lbs.<br /><br />

        <b>Total Charge:&nbsp;&nbsp;</b>
          {moneyFormatter.format(totalCharge)}<br /><br />
        </div>
    </div>
  )
}

export default VisitCard