import { precacheAndRoute,cleanupOutdatedCaches  } from 'workbox-precaching'
import { clientsClaim } from 'workbox-core'


cleanupOutdatedCaches ()
precacheAndRoute(self.__WB_MANIFEST)


  self.skipWaiting()
clientsClaim()