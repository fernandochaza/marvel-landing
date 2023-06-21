
export function orderItems(items, orderBy) {

  if (orderBy === "release_date") {
    // Sort the characters array by release date
    characters.sort((a, b) => new Date(a[orderBy]) - new Date(b[orderBy]));
  }

  else {
    characters.sort((a, b) => a[orderBy] < b[orderBy] ? -1 : (a[orderBy] > b[orderBy] ? 1 : 0));
  }

};