import { ReactNode } from "react";
import RecipesHeader from "../layout/RecipesHeader.tsx";

type RecipesPageLayoutProps = {
  children: ReactNode;
};

export function RecipesPageLayout({ children }: RecipesPageLayoutProps) {
  // todo:
  //  - Timer einschalten
  //  - was passiert beim Seitenwechsel?
  return (
    <>
      <RecipesHeader />
      {/*<RecipesHeader>{<Timer />}</RecipesHeader>*/}
      <main className={"flex-grow"}>{children}</main>
    </>
  );
}
