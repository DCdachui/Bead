// Cloudflare Workers 脚本 - 处理 SPA 路由
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // 先尝试获取原始请求的资源
    let response = await env.ASSETS.fetch(request);

    // 如果是 404 错误，且不是静态资源路径，返回 index.html（SPA 路由）
    if (response.status === 404 && !pathname.includes('.')) {
      const indexRequest = new Request(new URL('/index.html', request.url), request);
      response = await env.ASSETS.fetch(indexRequest);
    }

    return response;
  }
};

