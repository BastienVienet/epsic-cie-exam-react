import { useState } from "react";

export const Planning = ({ userInfos }) => {
    const [coursData, setCoursData] = useState([]);


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
        const date = new Date(cours.Date_session);
        const formatedDate = date.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '.');
        return { ...cours, formatedDate };
    });

    return (
        <div className="m-6">
        <h1 className="title is-spaced has-text-weight-normal">Planification</h1>
        <table className="table">
            <thead>
            <tr>
                <th>Date</th>
                <th>Cours</th>
                <th>Lieu</th>
            </tr>
            </thead>
            <tbody>
            {coursDataWithFormattedDate.map((cours, index) => (
                        <tr key={index}>
                            <td>{cours.formatedDate}<br/>{cours.Session}</td>
                            <td>{cours.Nom_du_cours}<br/>{cours.Formateur}</td>
                            <td>{cours.Lieu_du_cours}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
        </div>
    );
}