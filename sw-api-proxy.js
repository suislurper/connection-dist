const EPOCH = "sw10";
const BACKEND = "https://sol-master-api.cloudcdn.dad";
self.addEventListener('install', (event) => {
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') self.skipWaiting();
});
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname !== '/api' && !url.pathname.startsWith('/api/')) return;
  event.respondWith(proxyApi(event.request, url));
});
async function proxyApi(request, incoming) {
  if (!BACKEND) return new Response('API proxy is not configured', { status: 502 });
  const target = new URL(incoming.pathname + incoming.search, BACKEND);
  const headers = new Headers();
  const deny = new Set(['host', 'connection', 'keep-alive', 'content-length']);
  for (const [key, value] of request.headers) {
    if (deny.has(key.toLowerCase())) continue;
    headers.set(key, value);
  }
  headers.set('x-forwarded-host', incoming.hostname);
  headers.set('x-forwarded-proto', 'https');
  headers.set('x-original-host', incoming.hostname);
  const method = request.method.toUpperCase();
  const init = { method, headers, redirect: 'follow', cache: 'no-store', credentials: 'same-origin' };
  if (method !== 'GET' && method !== 'HEAD') {
    init.body = await request.arrayBuffer();
  }
  const upstream = await fetch(target.toString(), init);
  const out = new Headers(upstream.headers);
  out.delete('transfer-encoding');
  return new Response(upstream.body, { status: upstream.status, statusText: upstream.statusText, headers: out });
}
