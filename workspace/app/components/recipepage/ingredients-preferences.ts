"use server";

let i = 4;

export async function getDefaultServings() {
  return i;
}

export async function saveDefaultServings(newServings: number) {
  console.log("NEW SERVINGS", i);
  i = newServings;
}
