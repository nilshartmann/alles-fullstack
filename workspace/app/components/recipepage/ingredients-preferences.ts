"use server";

// Das ist Code, der auf dem SERVER (!) ausgeführt wird!
//

// das ist unsere "Datenbank":
const dbWithUserPreferences = {
  defaultServings: 4,
};

export async function getDefaultServings() {
  console.log("GetDefaultServings", dbWithUserPreferences.defaultServings);

  return dbWithUserPreferences.defaultServings;

  // todo: servings aus "Datenbank" lesen
}

export async function saveDefaultServings(newServings: number) {
  console.log("saveDefaultServings", newServings);

  dbWithUserPreferences.defaultServings = newServings;

  // todo: servings "speichern"
}
