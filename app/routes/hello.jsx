import { Link } from "@remix-run/react";

export default function Hello() {
  return (
    <div className="text-2xl">
      <Link to="../page1" className="underline text-blue-400">Page1</Link>
    </div>
  );
}
