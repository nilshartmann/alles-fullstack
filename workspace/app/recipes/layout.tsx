import { RecipesPageLayout } from "@/app/components/material/RecipesPageLayout.tsx";

export default function Layout({ children }: any) {
  // todo:
  //  - wie sieht jetzt ein Seitenwechsel aus? Netzwerk-Tab!
  //  - in RecipesPageLayout den Timer aktivieren
  return <RecipesPageLayout>{children}</RecipesPageLayout>;
}
