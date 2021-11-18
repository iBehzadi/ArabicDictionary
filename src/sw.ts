/// <reference lib="webworker" />
import { precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { CacheFirst } from 'workbox-strategies';
import { registerRoute } from 'workbox-routing';

declare let self: ServiceWorkerGlobalScope;
cleanupOutdatedCaches();
precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING')
    self.skipWaiting();
})

registerRoute(
  ({ request }) => request.destination === 'audio',
  new CacheFirst({
    cacheName: 'audios',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  }),
);
