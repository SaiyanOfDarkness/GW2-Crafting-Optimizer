export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    let targetUrl = url.searchParams.get("url");
    
    // 1. IF a 'url' parameter is passed, act as the CORS proxy!
    if (targetUrl) {
      let response = await fetch(targetUrl, {
        method: request.method,
        headers: request.headers,
      });

      let newHeaders = new Headers(response.headers);
      newHeaders.set("Access-Control-Allow-Origin", "*");
      newHeaders.set("Access-Control-Allow-Methods", "GET, HEAD, POST, OPTIONS");
      newHeaders.set("Access-Control-Allow-Headers", "*");

      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: newHeaders
      });
    }

    // 2. OTHERWISE: Fallback and serve your index.html/JSON data files normally
    return env.ASSETS.fetch(request);
  },
};