import { Link, Outlet } from "@remix-run/react";

export default function Page1() {
  return (
    <div>
      <header>
        <h1>
          <Link to="." className="underline text-blue-400">Page1</Link>
        </h1>
        <h1>
          <Link to="test" className="underline text-blue-400">Test</Link>
        </h1>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}