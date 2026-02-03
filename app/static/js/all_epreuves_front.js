document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const section = document.getElementById("epreuves-card");

  section.innerHTML = "";
  if (loader) loader.style.display = "block";

  fetch("/api/epreuves")
    .then((res) => res.json())
    .then((epreuves) => {
      if (loader) loader.style.display = "none";

      epreuves.forEach((epreuve) => {
        const card = document.createElement("div");
        card.className = "card";
        card.style.width = "width: 1000px;";
        card.innerHTML = `
            <a href="/epreuves-${encodeURIComponent(epreuve.nom_epreuve)}" class="event-card">
            ${epreuve.image_filename ? `<img src="/static/uploads/image/${epreuve.image_filename}" class="card-img-top" alt="">` : ""}
            <div class="event-content">
                <h5>${epreuve.nom_epreuve}</h5> 
                <p>Date de l'épreuve: ${epreuve.date_epreuve}</p>
            </div>                          
          </a>   
        `;
        section.appendChild(card);
      });
    })
    .catch((error) => console.error("Erreur :", error));
});

document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const section = document.getElementById("epreuves-card-home");

  section.innerHTML = "";
  if (loader) loader.style.display = "block";

  fetch("/api/home_epreuves")
    .then((res) => res.json())
    .then((epreuves) => {
      if (loader) loader.style.display = "none";

      epreuves.forEach((epreuve) => {
        const card = document.createElement("div");
        card.className = "card card-epreuve";
        card.style.width = "";
        card.innerHTML = `
        <a href="/epreuves-${encodeURIComponent(epreuve.nom_epreuve)}" class="event-card">
            ${epreuve.image_filename ? `<img src="/static/uploads/image/${epreuve.image_filename}" class="card-img-top" alt="">` : ""}
            <div class="event-content">
                <h5>${epreuve.nom_epreuve}</h5> 
                <p>Date de l'épreuve: ${epreuve.date_epreuve}</p>
            </div>                          
          </a>          
         
        `;
        section.appendChild(card);
      });
    })
    .catch((error) => console.error("Erreur :", error));
});
