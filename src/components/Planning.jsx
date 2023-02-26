import { faBuilding } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

export const Planning = ({ userInfos }) => {
    const [coursData, setCoursData] = useState([])


    const fetchCours = async () => {

        const response = await fetch('http://15.188.53.208:8080/utgGETPlanningCours/1',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: JSON.stringify({ level: userInfos.level, id: userInfos.num_personne })
        })
        
        const data =  await response.json()
        setCoursData(data)
    }

    fetchCours()
    const coursDataWithFormattedDate = coursData.map((cours) => {
        const date = new Date(cours.Date_session)
        const formatedDate = date.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '.')
        return { ...cours, formatedDate }
    })

    return (
        <div className="m-6">
          <h1 className="title is-spaced has-text-weight-normal">Planification</h1>
          <div className="columns is-multiline">
            {coursDataWithFormattedDate.map((cours, index) => (
              <div key={index} className="column is-full">
                <div className="card">
                  <header className="card-header">
                    <p className="card-header-title">{cours.formatedDate} - {cours.Session}</p>
                    <button className="card-header-icon" aria-label="more options">
                      <span className="icon">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                      </span>
                    </button>
                  </header>
                  <div className="card-content">
                    <div className="content">
                      <p>{cours.Nom_du_cours}</p>
                      <p>{cours.Formateur}</p>
                    </div>
                  </div>
                  <footer className="card-footer">
                    <a href="https://www.google.com/maps/place${}" className="card-footer-item">{cours.Lieu_du_cours}<FontAwesomeIcon icon={faBuilding} /></a>
                  </footer>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
      
}