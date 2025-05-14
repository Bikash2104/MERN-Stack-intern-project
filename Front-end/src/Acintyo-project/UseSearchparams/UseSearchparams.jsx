import { useSearchParams } from "react-router-dom";

export default function MyComponent() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Read query params
  const page = searchParams.get("page");

  // Update query params
  const updateQuery = () => {
    setSearchParams({ page: "2", search: "example" });
  };

  return (
    <div>
      <p>Current Page: {page}</p>
      <button onClick={updateQuery}>Go to Page 2</button>
    </div>
  );
}
