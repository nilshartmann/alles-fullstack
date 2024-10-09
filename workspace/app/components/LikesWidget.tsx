import { RecipeDto } from "@/app/components/api-types.ts";
import { twMerge } from "tailwind-merge";
import { saveLike } from "@/app/components/queries.ts";
import { revalidatePath } from "next/cache";

type LikesWidgetProps = {
  recipe: RecipeDto;
};

export function LikesWidget({ recipe }: LikesWidgetProps) {
  // todo: async Server-Function 'handleLikeSubmit' implementieren

  async function handleLikeSubmit() {
    "use server";
    await saveLike(recipe.id);
    revalidatePath("/recipes");
  }

  //  -> 'saveLike' aufrufen
  //  -> revalidatePath aufrufen
  //  -> Function als action verwenden

  return (
    <form action={handleLikeSubmit}>
      <button
        className={twMerge(
          "me-2 inline-block rounded border border-orange_2 bg-white p-2 text-[15px] text-orange_2 hover:cursor-pointer hover:bg-orange_2 hover:text-white",
        )}
      >
        <i className="fa-regular fa-heart mr-2"></i>
        {recipe.likes}
      </button>
    </form>
  );
}
