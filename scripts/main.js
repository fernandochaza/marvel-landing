import { renderCharacters } from "./renderCharacters.js";
import { orderItems } from "./orderItems.js";

// Simulate HTTP Response
const httpResponse = {
  "status": "success",
  "data": [
    {
      "name": "Iron Man",
      "description": "Tony Stark, an industrialist and genius inventor, builds a powered suit of armor and becomes the superhero Iron Man.",
      "universe": "Marvel Universe",
      "release_date": "1963-03-01",
      "image": "https://example.com/ironman.jpg"
    },
    {
      "name": "Spider-Man",
      "description": "Peter Parker, a high school student, gains spider-like abilities and becomes the crime-fighting superhero known as Spider-Man.",
      "universe": "Marvel Universe",
      "release_date": "1962-08-01",
      "image": "https://example.com/spiderman.jpg"
    },
    {
      "name": "Captain America",
      "description": "Steve Rogers, a frail young man, is transformed into the super-soldier Captain America and fights against the forces of evil.",
      "universe": "Marvel Universe",
      "release_date": "1941-03-01",
      "image": "https://example.com/captainamerica.jpg"
    },
    {
      "name": "Thor",
      "description": "Thor Odinson, the Asgardian god of thunder, wields the enchanted hammer Mjolnir and defends Earth and Asgard from various threats.",
      "universe": "Marvel Universe",
      "release_date": "1962-08-01",
      "image": "https://example.com/thor.jpg"
    },
    {
      "name": "Hulk",
      "description": "Dr. Bruce Banner, a physicist, is exposed to gamma radiation and transforms into the giant, green-skinned monster known as the Hulk when enraged or agitated.",
      "universe": "Marvel Universe",
      "release_date": "1962-05-01",
      "image": "https://example.com/hulk.jpg"
    },
    {
      "name": "Wolverine",
      "description": "Logan, also known as Wolverine, possesses accelerated healing powers, retractable claws, and animal-like senses, making him a formidable mutant and member of the X-Men.",
      "universe": "Marvel Universe",
      "release_date": "1974-10-01",
      "image": "https://example.com/wolverine.jpg"
    },
    {
      "name": "Black Panther",
      "description": "T'Challa, the king of the fictional African nation of Wakanda, assumes the mantle of the Black Panther, a highly skilled warrior and protector of Wakanda.",
      "universe": "Marvel Universe",
      "release_date": "1966-07-01",
      "image": "https://example.com/blackpanther.jpg"
    },
    {
      "name": "Black Widow",
      "description": "Natasha Romanoff, a highly trained spy and assassin, becomes a member of the Avengers and fights alongside Earth's mightiest heroes.",
      "universe": "Marvel Universe",
      "release_date": "1964-04-01",
      "image": "https://example.com/blackwidow.jpg"
    },
    {
      "name": "Doctor Strange",
      "description": "Dr. Stephen Strange, a brilliant but arrogant surgeon, becomes the Sorcerer Supreme and protects the Earth from mystical threats using his magical abilities.",
      "universe": "Marvel Universe",
      "release_date": "1963-07-01",
      "image": "https://example.com/doctorstrange.jpg"
    },
    {
      "name": "Deadpool",
      "description": "Wade Wilson, a wisecracking mercenary, gains accelerated healing powers and adopts the alter ego Deadpool, known for his humor and breaking the fourth wall.",
      "universe": "Marvel Universe",
      "release_date": "1991-02-01",
      "image": "https://example.com/deadpool.jpg"
    },
    {
      "name": "Storm",
      "description": "Ororo Munroe, also known as Storm, is a mutant with the ability to control the weather, serving as a powerful member of the X-Men and a former queen of Wakanda.",
      "universe": "Marvel Universe",
      "release_date": "1975-05-01",
      "image": "https://example.com/storm.jpg"
    },
    {
      "name": "Daredevil",
      "description": "Matt Murdock, a blind lawyer, develops enhanced senses and uses his martial arts skills to fight crime as the vigilante known as Daredevil in Hell's Kitchen.",
      "universe": "Marvel Universe",
      "release_date": "1964-04-01",
      "image": "https://example.com/daredevil.jpg"
    },
    {
      "name": "Jean Grey",
      "description": "Jean Grey, a mutant with telepathic and telekinetic powers, becomes the host of the powerful cosmic entity known as the Phoenix Force.",
      "universe": "Marvel Universe",
      "release_date": "1963-09-01",
      "image": "https://example.com/jeangrey.jpg"
    },
    {
      "name": "Ant-Man",
      "description": "Scott Lang, a skilled thief, gains the ability to shrink in scale but increase in strength when wearing the Ant-Man suit.",
      "universe": "Marvel Universe",
      "release_date": "1962-01-01",
      "image": "https://example.com/antman.jpg"
    }
  ]
}

// Simulate getting data from an API request
const characters = httpResponse.data;

// Render the characters cards at runtime
renderCharacters(characters);


// Select the order by button and add an event listener
const orderButton = document.querySelector(".order-by-button");
orderButton.addEventListener("click", () => {

  // Get the choosen order
  const selectedOrder = document.getElementById("order-by").value;

  // Clean the cards section
  cleanHtml(".characters-cards");

  // Order the characters cards by the selected order
  orderItems(characters, selectedOrder);

  // Re-render the characters
  renderCharacters(characters);
});


/**
 * Remove the inner content of an element given its class name
 * @param {*} className A string representing the class name of the element (e.g. ".card-section")
 */
function cleanHtml(className) {
  const element = document.querySelector(className);
  element.innerHTML = "";
}