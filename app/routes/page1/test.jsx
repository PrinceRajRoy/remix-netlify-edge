import { useLoaderData } from "@remix-run/react";

export const headers = () => ({
  'Cache-Control': "max-age=10, must-revalidate",
});

export const loader = async () => {
  return {
    data: {
      content: 'Page Test'
    }
  };
};

export default function PageTestRoute() {
  const { data } = useLoaderData();

  return (
    <div>
      {data?.content}
    </div>
  )
}

export function ErrorBoundary({ error }) {
  return (
    <div>
      Error Occurred
    </div>
  )
}