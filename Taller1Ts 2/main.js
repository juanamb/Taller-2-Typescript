import { series } from "./dataseries.js";
const seriesTbody = document.getElementById('series');
const avgSeas = document.getElementById("average-seasons");
const divE = document.getElementById("carded");
renderSeriesInTable(series);
avgSeas.innerHTML = `${getAverageSeasons(series)}`;
function renderSeriesInTable(series) {
    series.forEach(c => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td class="font-weight-bold">${c.id}</td>
                            <td style= "color:rgb(0, 150, 255)">${c.name}</td>
                            <td>${c.channel}</td>
                            <td>${c.seasons}</td>`;
        seriesTbody.appendChild(trElement);
        trElement.onclick = () => crearCard(c);
    });
}
function getAverageSeasons(seriee) {
    let totalSeason = 0;
    let seas = series.length;
    seriee.forEach(serie => {
        totalSeason = totalSeason + serie.seasons;
    });
    return "Seasons Average: " + totalSeason / seas;
}
function crearCard(c) {
    divE.innerHTML = `<div class="card" style="width: 18rem;">

    <div class="card-body">
    <img src=${c.img} class="card-img-top" alt="...">
    <h5 class="card-title">${c.name}</h5>
    <p class="card-text">${c.description}</p>
    <a href="${c.url}" class="card-link">${c.url}</a>
    </div>`;
}
