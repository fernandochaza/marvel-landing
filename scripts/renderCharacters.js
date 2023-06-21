/**
 * Generate a card for each character in an object
 * @param {Object} Characters Object containing the characters information
 */
export function renderCharacters(charactersObject) {

  // Get the HTML section to render the characters
  const charactersSection = document.querySelector(".characters-cards");

  for (const character of charactersObject) {
    const name = character.name;
    const description = character.description;
    const releaseDate = character.release_date;
    const image = "./images/marvel-heroes.avif";

    const characterHTML = `<div class="character-card">
    <h3>${name}</h3>
    <p>${description}</p>
    <br>
    <p>Release Date: ${releaseDate}</p>
    <br>
    <img src=${image} alt="Marvel Heroes">
    </div>
    `
    charactersSection.innerHTML += characterHTML;
  };
};