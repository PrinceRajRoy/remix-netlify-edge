import { RemixServer } from "@remix-run/react";
import etag from "etag";
import { renderToString } from "react-dom/server";

export default function handleRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext
) {
  let markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );

  responseHeaders.set("Content-Type", "text/html");
  responseHeaders.set("ETag", etag(markup));
  responseHeaders.set('Cache-Control', 'max-age=10')

  if (request.headers.get('If-None-Match') === responseHeaders.get('ETag')) {
    return new Response("", { status: 304 })
  }

  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}

export let handleDataRequest = async (
  response,
  {
    request
  }) => {
  let body = await response.clone().text();

  if (request.method.toLowerCase() === 'get') {
    response.headers.set('etag', etag(body));

    if (request.headers.get('If-None-Match') === response.headers.get('Etag')) {
      return new Response("", { status: 304, headers: response })
    }
  }

  return response;
};
