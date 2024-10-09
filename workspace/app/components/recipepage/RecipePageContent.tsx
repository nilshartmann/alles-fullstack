import { RecipeBanner } from "./RecipeBanner.tsx";
import { CookingTime } from "./CookingTime.tsx";
import { Instructions } from "./Instructions.tsx";
import { DetailedRecipeDto } from "../api-types.ts";
import { Sidebar } from "@/app/components/Sidebar.tsx";
import { H2 } from "@/app/components/Heading.tsx";
import ConfigurableIngredientsSection from "@/app/components/recipepage/ConfigurableIngredientsSection.tsx";
import { getDefaultServings } from "@/app/components/recipepage/ingredients-preferences.ts";
import FeedbackListLoader from "@/app/components/recipepage/FeedbackListLoader.tsx";
import { Suspense } from "react";
import LoadingIndicator from "@/app/components/LoadingIndicator.tsx";

type RecipePageContentProps = {
  recipe: DetailedRecipeDto;
};

export default async function RecipePageContent({
  recipe,
}: RecipePageContentProps) {
  const defaultServings = await getDefaultServings();
  return (
    <div>
      <RecipeBanner recipe={recipe} />
      <div className={"container mx-auto mb-8 mt-8 md:flex md:space-x-12"}>
        <div className={"md:w-2/3"}>
          <CookingTime
            cookTime={recipe.cookTime}
            preparationTime={recipe.preparationTime}
          />
          {/*

          // todo: Austauschen gegen ConfigurableIngredientsSection
          //  - oben: defaultServings aus "Datenbank" laden

          */}
          <ConfigurableIngredientsSection
            ingredients={recipe.ingredients}
            defaultServings={defaultServings}
          />
          <Instructions recipe={recipe} />
        </div>
        <div className={"md:w-1/3"}>
          <Sidebar>
            {/*
            - todo:
              - FeedbackListLoader einbauen
              - Verzögern des Ladens in 'demo_config'
              - In FeedbackListLoader Laden der Daten zeigen
              - Suspense
            */}
            <H2>Feedback</H2>
            <Suspense fallback={<LoadingIndicator />}>
              <FeedbackListLoader recipeId={recipe.id} />
            </Suspense>
          </Sidebar>
        </div>
      </div>
    </div>
  );
}
