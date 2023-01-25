export const Planning = () => {

    const day1 =
        {
            date: "11.01.2023",
            cours: "22-294-S4VG",
            nom: "CIE 294 - Réaliser le front-end d'une application Web Interactive",
            prof: "Executive Knowledge Flavio Pacifico",
            salle: "Micro Informatic Systems SA Salle Pepper",
            adresse: "En Chamard 41A",
            ville: "1442 Montagny près Yverdon"
        }

    const day2 =
        {
            date: "18.01.2023",
            cours: "22-294-S4VG",
            nom: "CIE 294 - Réaliser le front-end d'une application Web Interactive",
            prof: "Executive Knowledge Flavio Pacifico",
            salle: "Micro Informatic Systems SA Salle Pepper",
            adresse: "En Chamard 41A",
            ville: "1442 Montagny près Yverdon"
        }

    const day3 =
        {
            date: "25.01.2023",
            cours: "22-294-S4VG",
            nom: "CIE 294 - Réaliser le front-end d'une application Web Interactive",
            prof: "Executive Knowledge Flavio Pacifico",
            salle: "Micro Informatic Systems SA Salle Pepper",
            adresse: "En Chamard 41A",
            ville: "1442 Montagny près Yverdon"
        }

    return (
        <table className="table m-4">
            <thead>
            <tr>
                <th>Date</th>
                <th>Cours</th>
                <th>Lieu</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{day1.date}<br/>{day1.cours}</td>
                <td>{day1.nom}<br/>{day1.prof}</td>
                <td>{day1.salle}<br/>{day1.adresse}<br/>{day1.ville}</td>
            </tr>
            <tr className="is-selected">
                <td>{day2.date}<br/>{day2.cours}</td>
                <td>{day2.nom}<br/>{day2.prof}</td>
                <td>{day2.salle}<br/>{day2.adresse}<br/>{day2.ville}</td>
            </tr>
            <tr>
                <td>{day3.date}<br/>{day3.cours}</td>
                <td>{day3.nom}<br/>{day3.prof}</td>
                <td>{day3.salle}<br/>{day3.adresse}<br/>{day3.ville}</td>
            </tr>
            <tr>
            </tr>
            </tbody>
        </table>
    );
}