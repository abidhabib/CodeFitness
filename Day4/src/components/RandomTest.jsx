import { useState } from "react";

const RandomTest = () => {
  console.log("🔁 Component Rendered");

  const [regular] = useState(() => {
    console.log("⚠️  useState(Math.random()) running");
    return Math.random();
  });

  const [lazyArrow] = useState(() => {
    console.log("✅ useState(() => Math.random()) running");
    return Math.random();
  });

  const [lazyFunction] = useState(() => {
    console.log("✅ useState(() => { return Math.random(); }) running");
    return Math.random();
  });

  return (
    <div>
      <h1>Regular: {regular}</h1>
      <h1>Lazy Arrow: {lazyArrow}</h1>
      <h1>Lazy Function: {lazyFunction}</h1>

      <button onClick={() => console.log("🔘 Force re-render by state change")}>
        Rerender
      </button>
    </div>
  );
};

export default RandomTest;
