import { LevelContext } from "./LevelContext";
// import { ThemeContext } from "../Toggle/Context";
// import { useContext } from "react";
export default function Section({
  level,
  children,
}: {
  level: any;
  children: any;
}) {
  // const theme = useContext(ThemeContext);
  return (
    <section className="p-3 border">
      <LevelContext value={level}>{children}</LevelContext>
    </section>
  );
}
