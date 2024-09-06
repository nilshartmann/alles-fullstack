import { fetchRecipes } from "@/app/components/queries.ts";
import { RecipeList } from "@/app/components/recipelistpage/RecipeList.tsx";
import RecipeListPaginationBar from "@/app/components/recipelistpage/RecipeListPaginationBar.tsx";
import RecipeListNavBar from "@/app/components/recipelistpage/RecipeListNavBar.tsx";

type RecipesPageProps = {
  searchParams: Record<string, string>;
};

export default async function RecipesPage({ searchParams }: RecipesPageProps) {
  console.log("RENDERED AT", new Date().toISOString());
  const recipes = await fetchRecipes(searchParams.page, searchParams.orderBy);

  return (
    <div className={"container mx-auto"}>
      <RecipeListNavBar />
      <RecipeList recipes={recipes} />
      <RecipeListPaginationBar pageable={recipes} params={searchParams} />
    </div>
  );
}
