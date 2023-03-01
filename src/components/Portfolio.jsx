import {
  faAngleDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export const Portfolio = ({ userInfos }) => {
  const [coursData, setCoursData] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch("http://15.188.53.208:8080/utgGETNotes/0/null", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        level: userInfos.level,
        id: userInfos.num_personne,
      }),
    })
      .then((response) => response.json())
      .then((data) => setCoursData(data));
  }, [userInfos.level, userInfos.num_personne]);

  const coursDataWithFormattedDate = coursData
    .map((cours) => {
      const date = new Date(cours.Date_session);
      const formatedDate = date
        .toLocaleDateString("fr-FR", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })
        .replace(/\//g, ".");
      return { ...cours, formatedDate };
    })
    .filter((cours) =>
      filter
        ? cours.Nom_du_cours.toLowerCase().includes(filter.toLowerCase())
        : true
    );

  return (
    <div className="m-6">
      <h1 className="title is-spaced has-text-weight-normal">Portfolio</h1>
      <div className="columns is-centered">
        <div className="column is-half">
          <p className="control has-icons-left">
            <input
              className="input"
              type="text"
              placeholder="Search"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
          </p>
        </div>
      </div>
      <div className="columns is-multiline">
        {coursDataWithFormattedDate.map((cours, index) => (
          <div key={index} className="column is-full">
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">
                  {cours.formatedDate} - {cours.Session}
                </p>
                <button
                  className="card-header-icon"
                  aria-label="more options"
                  onClick={() => {
                    const cardContent =
                      document.getElementsByClassName("card-content")[index];
                    if (cardContent.classList.contains("is-hidden")) {
                      cardContent.classList.remove("is-hidden");
                    } else {
                      cardContent.classList.add("is-hidden");
                    }
                  }}
                >
                  <FontAwesomeIcon icon={faAngleDown} />
                </button>
              </header>
              <div className="card-content is-hidden">
                <div className="content">
                  <p>{cours.Nom_du_cours}</p>
                  <p>{cours.Formateur}</p>
                </div>
              </div>
              <footer className="card-footer">
                <div className="card-footer-item has-text-weight-bold">
                  {cours.Note}
                </div>
              </footer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
