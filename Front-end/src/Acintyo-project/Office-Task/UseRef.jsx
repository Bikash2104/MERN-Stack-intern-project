// import { useState, useEffect, useRef } from "react";
// import ReactDOM from "react-dom/client";

// export default function UseRef() {
//   const [inputValue, setInputValue] = useState(0);
//   //   const count = useRef(0);

//   useEffect(() => {
//     count.current = count.current + 1;
//     setTimeout(() => {
//       setInputValue(inputValue + 1);
//     }, 2000);
//   });

//   return (
//     <>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       {/* <h1>Render Count: {count.current}</h1> */}
//       <h1>count:{inputValue}</h1>
//     </>
//   );
// }

// import { useState, useEffect, useRef } from "react";
// import ReactDOM from "react-dom/client";

// export default function UseRef() {
//   const [inputValue, setInputValue] = useState("");
//   const count = useRef(0);

//   useEffect(() => {
//     count.current = count.current + 1;
//   });

//   return (
//     <>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <h1>Render Count: {count.current}</h1>
//     </>
//   );
// }

// import { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";

// export default function useRef() {
//   const [inputValue, setInputValue] = useState(0);
//   const [count, setCount] = useState(0); // Using useState instead of useRef

//   useEffect(() => {
//     setCount((prevCount) => prevCount + 1); // Increments count on every render

//     const timer = setTimeout(() => {
//       setInputValue((prevValue) => prevValue + 1);
//     }, 2000);

//     return () => clearTimeout(timer); // Cleanup function to avoid memory leaks
//   }, []);

//   return (
//     <>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(Number(e.target.value))}
//       />
//       <h1>Render Count: {count}</h1>
//       <h1>Count: {inputValue}</h1>
//     </>
//   );
// }

import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

export default function UseRef() {
  const [inputValue, setInputValue] = useState(0);
  const renderCount = useRef(0); // useRef to track renders

  //   useEffect(() => {
  //     renderCount.current += 1; // Updates ref without triggering re-render

  //     const timer = setTimeout(() => {
  //       setInputValue((prevValue) => prevValue + 1);
  //     }, 2000);

  //     return () => clearTimeout(timer); // Cleanup to prevent memory leaks
  //   });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
      />
      <h1>Render Count: {renderCount.current}</h1>
      <h1>Count: {inputValue}</h1>
    </>
  );
}
