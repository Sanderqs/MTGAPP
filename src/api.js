const base_url = "https://api.scryfall.com/";

export const searchCardURL = (card_name) =>
  `${base_url}cards/named?exact=${card_name}`;

export const cardNamesURL = () => `${base_url}catalog/card-names`;

export const rulingsURL = (card_id) => `${base_url}cards/${card_id}/rulings`;
