import { LevelContext } from "./LevelContext";

export default function Section({
  level,
  children,
}: {
  level: any;
  children: any;
}) {
  return (
    <section className="p-3 border">
      <LevelContext value={level}>{children}</LevelContext>
    </section>
  );
}
