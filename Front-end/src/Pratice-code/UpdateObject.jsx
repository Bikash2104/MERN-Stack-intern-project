// import React from "react";
// import { useState } from "react";

// export default function UpdatePrice() {
//   const [products, setProducts] = useState([
//     { id: 1, name: "Laptop", price: 1000 },
//     { id: 2, name: "Mouse", price: 25 },
//   ]);

//   const updatePrice = (id, newPrice) => {
//     setProducts((prev) =>
//       prev.map((p) => (p.id === id ? { ...p, price: newPrice } : p))
//     );
//   };

//   return (
//     <>
//       <button onClick={() => updatePrice(1, 900)}>Discount Laptop</button>
//       <ul>
//         {products.map((p) => (
//           <li key={p.id}>
//             {p.name}: ${p.price}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// import React, { useEffect, useRef, useState } from "react";

// export default function UpdatePrice() {
//   const [count, setCount] = useState(0);
//   const prevCountRef = useRef(0); // Holds previous value (no re-render)

//   useEffect(() => {
//     prevCountRef.current = count; // Store current count after render
//   }, [count]);

//   return (
//     <div>
//       <p>Current: {count}</p>
//       <p>Previous: {prevCountRef.current}</p>
//       <button onClick={() => setCount((c) => c + 1)}>Increment</button>
//     </div>
//   );
// }
import React, { useEffect, useRef, useState } from "react";

export default function UpdatePrice() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(1); // Start at 1 for initial render

  useEffect(() => {
    renderCount.current += 1;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Render count: {renderCount.current}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
}
