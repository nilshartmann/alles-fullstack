// todo:
//  1. "Controller-Funktionalität":
//     - Recipes laden mit fetchRecipes()
//     - Rendern mit <RecipeList recipes={recipes} />
//
//  2. Wo wird gerendert, wie sieht HTML aus?
//     - console.log("RENDERED AT", new Date().toISOString());
//
//  3. Was passiert beim Seitenwechsel?
//
//     type RecipesPageProps = {   searchParams: Record<string, string>; };
//
//     - <RecipeListNavBar />
//     - <RecipeListPaginationBar pageable={recipes} params={searchParams} />
//     - "Blättern" vs. "Open in New Tab"
//     - JAVASCRIPT AUSSCHALTEN!

import { fetchRecipes } from "@/app/components/queries.ts";
import { RecipeList } from "@/app/components/recipelistpage/RecipeList.tsx";
import RecipeListPaginationBar from "@/app/components/recipelistpage/RecipeListPaginationBar.tsx";
import RecipeListNavBar from "@/app/components/recipelistpage/RecipeListNavBar.tsx";

type RecipesPageProps = { searchParams: Record<string, string> };

export default async function RecipeListPage({
  searchParams,
}: RecipesPageProps) {
  console.log("RENDERED AT", new Date().toISOString());
  const recipes = await fetchRecipes(searchParams.page, searchParams.orderBy);

  return (
    <div className={"container mx-auto"}>
      <RecipeListPaginationBar pageable={recipes} params={searchParams} />
      <RecipeListNavBar />
      <RecipeList recipes={recipes} />
    </div>
  );
}
