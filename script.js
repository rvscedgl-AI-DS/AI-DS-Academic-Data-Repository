const container = document.getElementById("dataset-container");

function renderDatasets(type = "classification") {
  container.innerHTML = "";

  datasets
    .filter(ds => ds.type === type)
    .forEach(ds => {
      const card = document.createElement("div");
      card.className = "dataset-card";

      let linksHTML = "";

      if (ds.files?.full) {
        linksHTML += `<a href="${ds.files.full}" target="_blank">Full CSV</a>`;
      }
      if (ds.files?.train) {
        linksHTML += `<a href="${ds.files.train}" target="_blank">Train</a>`;
      }
      if (ds.files?.test) {
        linksHTML += `<a href="${ds.files.test}" target="_blank">Test</a>`;
      }

      card.innerHTML = `
        <h3>${ds.name}</h3>
        <span class="tag">${ds.quality}</span>
        <p>${ds.description}</p>
        <div class="links">${linksHTML}</div>
      `;

      container.appendChild(card);
    });
}

// Default load
renderDatasets();
