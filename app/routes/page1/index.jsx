import { useLoaderData } from "@remix-run/react";

export const headers = ({ loaderHeaders }) => {
  return {
    'Cache-Control': "max-age=5, must-revalidate",
  }
};

export const loader = () => {
  return {
    data: {
      content: 'Page Index1'
    }
  }
}

export default function PageIndexRoute() {
  const { data } = useLoaderData();

  return (
    <div>
      {data?.content}
    </div>
  )
}