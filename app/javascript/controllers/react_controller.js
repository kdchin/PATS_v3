import { Controller } from "@hotwired/stimulus"
import React from "react";
import {createRoot } from "react-dom/client"
import Visit from "../components/Visit";

// Connects to data-controller="react"
export default class extends Controller {
  connect() {
    console.log("React controller connected");
    const visit = document.getElementById('visits');
    const visitObj = JSON.parse(visit.getAttribute('data-visit'))
    const animalObj = JSON.parse(visit.getAttribute('data-animal'))
    const ownerObj = JSON.parse(visit.getAttribute('data-owner'))
    const petObj = JSON.parse(visit.getAttribute('data-pet'))
    createRoot(visit).render(<Visit visit={visitObj} owner={ownerObj} animal={animalObj} pet={petObj}/>);
  }
}
