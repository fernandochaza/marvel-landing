/**
 * Order the elements inside an object
 * @param {*} items An object containing the elements to order
 * @param {*} orderBy The parameter to order the elements
 */
export function orderItems(items, orderBy) {

  // If the order is by release date
  if (orderBy === "release_date") {
    // Sort the characters array by release date
    items.sort((a, b) => new Date(a[orderBy]) - new Date(b[orderBy]));
  }

  // If the order is by name
  else {
    items.sort((a, b) => a[orderBy] < b[orderBy] ? -1 : (a[orderBy] > b[orderBy] ? 1 : 0));
  }
};