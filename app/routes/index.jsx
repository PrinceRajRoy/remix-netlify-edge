import { Link } from "@remix-run/react";

export const headers = () => ({
  'Cache-Control': "max-age=100",
});

export default function Index() {
  return (
    <div className="text-2xl">
      <Link to="page1" className="underline text-blue-400">Page1</Link>
    </div>
  );
}
