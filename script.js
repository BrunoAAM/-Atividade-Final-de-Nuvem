
Parse.initialize(
  "qP6ipPFHfxV8MAwPuoULA1rX4oWTiDbWYCuOPduk",
  "tgBbLoy8XqRBnBXD00adeM4ilbJm29XSH5WzSbz7"
);
Parse.serverURL = "https://parseapi.back4app.com/";

// ------------------------------------------Filmes-----------------------------------------------//

// Cadastrar Filmes
async function createParseFilm() {

  let filme = new Parse.Object('Filmes');

  let lancamentoFilme = parseFloat(document.getElementById("lancamentoFilme").value)
  filme.set("nomeFilme", document.getElementById("nomeFilme").value);
  filme.set("lancamentoFilme", lancamentoFilme);
  filme.set("generoFilme", document.getElementById("generoFilme").value);
  try {

    filme = await filme.save();
    if (filme !== null) {

      alert(
        `New object created with success! ObjectId: ${filme.id
        }, ${filme.get("nome")}`
      );
    }
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
}

document.getElementById("createFilme").addEventListener("click", async function() {
  if (selectedFilm) {
    updateParseFilm();
  } else {
    createParseFilm();
  }
});


const Filmes = Parse.Object.extend("Filmes");
const query = new Parse.Query(Filmes);


query.find().then((filmes) => {
  const tbody = document.querySelector('.tableFilme');
  filmes.forEach((filme) => {
    console.log(filme.id)
    const tr = document.createElement("tr");
    tr.innerHTML = `
            <td>${filme.id}</td>
            <td>${filme.get("nomeFilme")}</td>
            <td>${filme.get("generoFilme")}</td>
             <td>${filme.get("lancamentoFilme")}</td>
            <td>
              <button onclick="editFilm('${filme.id}')">Editar</button>
           </td>
           <td>
             <button onclick="deleteFilm('${filme.id}')">Excluir</button>
           </td>

          `;
    tbody.appendChild(tr);
  });
});

// Excluir produto
async function deleteFilm(filmId) {
  const Filme = Parse.Object.extend("Filmes");
  const query = new Parse.Query(Filme);
  const filme = await query.get(filmId);
  await filme.destroy();
  alert("Filme excluído com sucesso!");
  location.reload();
}


let selectedFilm = null;
function editFilm(id) {
  const Produtos = Parse.Object.extend("Filmes");
  const query = new Parse.Query(Filmes);
  query.get(id).then((filme) => {
    document.getElementById("nomeFilme").value = filme.get("nomeFilme");
    document.getElementById("lancamentoFilme").value = filme.get("lancamentoFilme");
    document.getElementById("generoFilme").value = filme.get("generoFilme");
    document.getElementById("createFilme").textContent = "Atualizar";
    selectedFilm = filme.id;

  });
}

async function updateParseFilm() {
  if (selectedFilm) {
    const Filme = Parse.Object.extend("Filmes");
    const query = new Parse.Query(Filmes);
    let filme = await query.get(selectedFilm);

    let lancamentoFilme = parseFloat(document.getElementById("lancamentoFilme").value);
    filme.set("nomeFilme", document.getElementById("nomeFilme").value);
    filme.set("lancamentoFilme", lancamentoFilme);
    filme.set("generoFilme", document.getElementById("generoFilme").value);
    try {
      await filme.save();
      alert("Product updated successfully!");
      selectedFilm = null;
      location.reload()
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  }
}
// ------------------------------------------Series-----------------------------------------------//


// Cadastrar Series
async function createParseSerie() {

  let serie = new Parse.Object('Series');

  let lancamentoSerie = parseFloat(document.getElementById("lancamentoSerie").value)
  serie.set("nomeSerie", document.getElementById("nomeSerie").value);
  serie.set("lancamentoSerie", lancamentoSerie);
  serie.set("generoSerie", document.getElementById("generoSerie").value);
  try {

    serie = await serie.save();
    if (serie !== null) {

      alert(
        `New object created with success! ObjectId: ${serie.id
        }, ${serie.get("nome")}`
      );
    }
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
}

document.getElementById("createSerie").addEventListener("click", async function() {
  if (selectedSerie) {
    updateParseSerie();
  } else {
    createParseSerie();
  }
});


const Series = Parse.Object.extend("Series");
const querySerie = new Parse.Query(Series);


querySerie.find().then((series) => {
  const tbody = document.querySelector('.tableSeries');
  series.forEach((serie) => {
    console.log(serie.id)
    const tr = document.createElement("tr");
    tr.innerHTML = `
            <td>${serie.id}</td>
            <td>${serie.get("nomeSerie")}</td>
            <td>${serie.get("generoSerie")}</td>
            <td>${serie.get("lancamentoSerie")}</td>
            <td>
              <button onclick="editSerie('${serie.id}')">Editar</button>
           </td>
           <td>
             <button onclick="deleteSerie('${serie.id}')">Excluir</button>
           </td>

          `;
    tbody.appendChild(tr);
  });
});


async function deleteSerie(serieId) {
  const Serie = Parse.Object.extend("Series");
  const query = new Parse.Query(Serie);
  const serie = await query.get(serieId);
  await serie.destroy();
  alert("Filme excluído com sucesso!");
  location.reload();
}


let selectedSerie = null;
function editSerie(id) {
  const Series = Parse.Object.extend("Series");
  const querySerie = new Parse.Query(Series);
  querySerie.get(id).then((serie) => {
    document.getElementById("nomeSerie").value = serie.get("nomeSerie");
    document.getElementById("lancamentoSerie").value = serie.get("lancamentoSerie");
    document.getElementById("generoSerie").value = serie.get("generoSerie");
    document.getElementById("createSerie").textContent = "Atualizar";
    selectedSerie = serie.id;

  });
}

async function updateParseSerie() {
  if (selectedSerie) {
    const Serie = Parse.Object.extend("Series");
    const query = new Parse.Query(Serie);
    let serie = await query.get(selectedSerie);

    let lancamentoSerie = parseFloat(document.getElementById("lancamentoSerie").value);
    serie.set("nomeSerie", document.getElementById("nomeSerie").value);
    serie.set("lancamentoSerie", lancamentoSerie);
    serie.set("generoSerie", document.getElementById("generoSerie").value);
    try {
      await serie.save();
      alert("Serie updated successfully!");
      selectedSerie = null;
      location.reload()
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  }
}

// ------------------------------------------Novelas----------------------------------------------//


async function createParseNovela() {

  let novela = new Parse.Object('Novela');

  let lancamentoNovela = parseFloat(document.getElementById("lancamentoNovela").value)
  novela.set("nomeNovela", document.getElementById("nomeNovela").value);
  novela.set("lancamentoNovela", lancamentoNovela);
  novela.set("generoNovela", document.getElementById("generoNovela").value);
  try {

    novela = await novela.save();
    if (novela !== null) {

      alert(
        `New object created with success! ObjectId: ${novela.id
        }, ${novela.get("nome")}`
      );
    }
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
}

document.getElementById("createNovela").addEventListener("click", async function() {
  if (selectedNovela) {
    updateParseNovela();
  } else {
    createParseNovela();
  }
});


const Novela = Parse.Object.extend("Novela");
const queryNovela = new Parse.Query(Novela);


queryNovela.find().then((novelas) => {
  const tbody = document.querySelector('.tableNovelas');
  novelas.forEach((novela) => {
    console.log(novela.id)
    const tr = document.createElement("tr");
    tr.innerHTML = `
            <td>${novela.id}</td>
            <td>${novela.get("nomeNovela")}</td>
            <td>${novela.get("generoNovela")}</td>
            <td>${novela.get("lancamentoNovela")}</td>
            <td>
              <button onclick="editNovela('${novela.id}')">Editar</button>
           </td>
           <td>
             <button onclick="deleteNovela('${novela.id}')">Excluir</button>
           </td>

          `;
    tbody.appendChild(tr);
  });
});


async function deleteNovela(novelaId) {
  const Novela = Parse.Object.extend("Novela");
  const query = new Parse.Query(Novela);
  const novela = await query.get(novelaId);
  await novela.destroy();
  alert("Novela excluído com sucesso!");
  location.reload();
}


let selectedNovela = null;
function editNovela(id) {
  const Novela = Parse.Object.extend("Novela");
  const queryNovela = new Parse.Query(Novela);
  queryNovela.get(id).then((novela) => {
    document.getElementById("nomeNovela").value = novela.get("nomeNovela");
    document.getElementById("lancamentoNovela").value = novela.get("lancamentoNovela");
    document.getElementById("generoNovela").value = novela.get("generoNovela");
    document.getElementById("createNovela").textContent = "Atualizar";
    selectedNovela = novela.id;

  });
}

async function updateParseNovela() {
  if (selectedNovela) {
    const Novela = Parse.Object.extend("Novela");
    const query = new Parse.Query(Novela);
    let novela = await query.get(selectedNovela);

    let lancamentoNovela = parseFloat(document.getElementById("lancamentoNovela").value);
    novela.set("nomeNovela", document.getElementById("nomeNovela").value);
    novela.set("lancamentoNovela", lancamentoNovela);
    novela.set("generoNovela", document.getElementById("generoNovela").value);
    try {
      await novela.save();
      alert("Serie updated successfully!");
      selectedNovela = null;
      location.reload()
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  }
}


// ------------------------------------------Desenhos---------------------------------------------//


async function createParseDesenho() {

  let desenho = new Parse.Object('Desenho');

  let lancamentoDesenho = parseFloat(document.getElementById("lancamentoDesenho").value)
  desenho.set("nomeDesenho", document.getElementById("nomeDesenho").value);
  desenho.set("lancamentoDesenho", lancamentoDesenho);
  desenho.set("generoDesenho", document.getElementById("generoDesenho").value);
  try {

    desenho = await desenho.save();
    if (desenho !== null) {

      alert(
        `New object created with success! ObjectId: ${desenho.id
        }, ${desenho.get("nome")}`
      );
    }
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
}

document.getElementById("createDesenho").addEventListener("click", async function() {
  if (selectedDesenho) {
    updateParseDesenho();
  } else {
    createParseDesenho();
  }
});

const Desenho = Parse.Object.extend("Desenho");
const queryDesenho = new Parse.Query(Desenho);


queryDesenho.find().then((desenhos) => {
  const tbody = document.querySelector('.tableDesenhos');
  desenhos.forEach((desenho) => {
    console.log(desenho.id)
    const tr = document.createElement("tr");
    tr.innerHTML = `
            <td>${desenho.id}</td>
            <td>${desenho.get("nomeDesenho")}</td>
            <td>${desenho.get("generoDesenho")}</td>
           <td>${desenho.get("lancamentoDesenho")}</td>
            <td>
              <button onclick="editDesenho('${desenho.id}')">Editar</button>
           </td>
           <td>
             <button onclick="deleteDesenho('${desenho.id}')">Excluir</button>
           </td>

          `;
    tbody.appendChild(tr);
  });
});


async function deleteDesenho(desenhoId) {
  const Desenho = Parse.Object.extend("Desenho");
  const query = new Parse.Query(Desenho);
  const desenho = await query.get(desenhoId);
  await desenho.destroy();
  alert("Desenho excluído com sucesso!");
  location.reload();
}


let selectedDesenho = null;
function editDesenho(id) {
  const Desenho = Parse.Object.extend("Desenho");
  const queryDesenho = new Parse.Query(Desenho);
  queryDesenho.get(id).then((desenho) => {
    document.getElementById("nomeDesenho").value = desenho.get("nomeDesenho");
    document.getElementById("lancamentoDesenho").value = desenho.get("lancamentoDesenho");
    document.getElementById("generoDesenho").value = desenho.get("generoDesenho");
    document.getElementById("createDesenho").textContent = "Atualizar";
    selectedDesenho = desenho.id;

  });
}

async function updateParseDesenho() {
  if (selectedDesenho) {
    const Desenho = Parse.Object.extend("Desenho");
    const query = new Parse.Query(Desenho);
    let desenho = await query.get(selectedDesenho);

    let lancamentoDesenho = parseFloat(document.getElementById("lancamentoDesenho").value);
    desenho.set("nomeDesenho", document.getElementById("nomeDesenho").value);
    desenho.set("lancamentoDesenho", lancamentoDesenho);
    desenho.set("generoDesenho", document.getElementById("generoDesenho").value);
    try {
      await desenho.save();
      alert("Serie updated successfully!");
      selectedDesenho = null;
      location.reload()
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  }
}
