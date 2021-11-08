/// <reference lib="webworker" />

import { precacheAndRoute,cleanupOutdatedCaches  } from 'workbox-precaching'
import {CacheableResponsePlugin} from 'workbox-cacheable-response';
import {CacheFirst} from 'workbox-strategies';
import {ExpirationPlugin} from 'workbox-expiration';
import {registerRoute} from 'workbox-routing';

declare let self: ServiceWorkerGlobalScope

cleanupOutdatedCaches()
precacheAndRoute(self.__WB_MANIFEST)
registerRoute(
  ({request}) => request.destination === 'audio',
  new CacheFirst({
    cacheName: 'auido',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  }),
);

