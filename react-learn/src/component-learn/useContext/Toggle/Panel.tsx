// import { useContext } from "react";
// import { ThemeContext } from "./Context";

export default function ({ title, children }: { title: any; children: any }) {
//   const theme = useContext(ThemeContext);
//   const className = "panel-"+ theme

  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
