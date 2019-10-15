/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-9ee9f4e2e438e5467cd8.js"
  },
  {
    "url": "styles.350de55c83b398e6194a.css"
  },
  {
    "url": "styles-d9b56fbbbdb3f0b7cbb2.js"
  },
  {
    "url": "app-1c92e6d940cde1fb1ea4.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-7142b210a80604c2700b.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "882d2d01de6029a1477190f7f37fd31c"
  },
  {
    "url": "google-fonts/s/firasans/v10/va9B4kDNxMZdWfMOD5VnLK3eRhf6.woff2",
    "revision": "2ecb426f85ffc1c53b677556210e629f"
  },
  {
    "url": "google-fonts/s/firasans/v10/va9B4kDNxMZdWfMOD5VnPKreRhf6.woff2",
    "revision": "b39aa336eef260975654fde0959de6fe"
  },
  {
    "url": "google-fonts/s/firasans/v10/va9B4kDNxMZdWfMOD5VnSKzeRhf6.woff2",
    "revision": "5a2c789b59571ce97f51f9c75600f49b"
  },
  {
    "url": "google-fonts/s/firasans/v10/va9B4kDNxMZdWfMOD5VnZKveRhf6.woff2",
    "revision": "d8bc03a60729f4b05b42e057e21eaed3"
  },
  {
    "url": "google-fonts/s/firasans/v10/va9C4kDNxMZdWfMOD5Vn9LjJYTI.woff2",
    "revision": "d67acf5dba25b4f92e3eadad20032199"
  },
  {
    "url": "google-fonts/s/firasans/v10/va9E4kDNxMZdWfMOD5Vvl4jL.woff2",
    "revision": "78773521b0ffe376bc7edd8ec2a591fb"
  },
  {
    "url": "google-fonts/s/poppins/v9/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2",
    "revision": "e535f7856b24153e0f3146e8f90a45c5"
  },
  {
    "url": "google-fonts/s/poppins/v9/pxiByp8kv8JHgFVrLDz8Z1xlFQ.woff2",
    "revision": "e8794816c5eaeaa9dd20a6d77ea3b272"
  },
  {
    "url": "google-fonts/s/poppins/v9/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2",
    "revision": "aa4405ed937295296cf8510f437628e0"
  },
  {
    "url": "google-fonts/s/poppins/v9/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2",
    "revision": "61e2d96d01a7eba5ea3ec1bad7e736a8"
  },
  {
    "url": "google-fonts/s/poppins/v9/pxiEyp8kv8JHgFVrJJfecg.woff2",
    "revision": "1a280523d375e9358d5229df34fc8e94"
  },
  {
    "url": "component---src-pages-404-tsx-0f49d94491e988dfdfd5.js"
  },
  {
    "url": "3-fc22ed0f97fbd5217a4b.js"
  },
  {
    "url": "1-8ce7e0c1831cccb8998c.js"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "d980c47019b98d97d84fd4e93ace1477"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "d7086e4c3819361cee281dbec7d81927"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, workbox.strategies.cacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, workbox.strategies.networkFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, workbox.strategies.staleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)
const WHITELIST_KEY = `custom-navigation-whitelist`

const navigationRoute = new workbox.routing.NavigationRoute(({ event }) => {
  const { pathname } = new URL(event.request.url)

  return idbKeyval.get(WHITELIST_KEY).then((customWhitelist = []) => {
    // Respond with the offline shell if we match the custom whitelist
    if (customWhitelist.includes(pathname)) {
      const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
      const cacheName = workbox.core.cacheNames.precache

      return caches.match(offlineShell, { cacheName }).then(cachedResponse => {
        if (cachedResponse) return cachedResponse

        console.error(
          `The offline shell (${offlineShell}) was not found ` +
            `while attempting to serve a response for ${pathname}`
        )

        return fetch(offlineShell).then(response => {
          if (response.ok) {
            return caches.open(cacheName).then(cache =>
              // Clone is needed because put() consumes the response body.
              cache.put(offlineShell, response.clone()).then(() => response)
            )
          } else {
            return fetch(event.request)
          }
        })
      })
    }

    return fetch(event.request)
  })
})

workbox.routing.registerRoute(navigationRoute)

let updatingWhitelist = null

function rawWhitelistPathnames(pathnames) {
  if (updatingWhitelist !== null) {
    // Prevent the whitelist from being updated twice at the same time
    return updatingWhitelist.then(() => rawWhitelistPathnames(pathnames))
  }

  updatingWhitelist = idbKeyval
    .get(WHITELIST_KEY)
    .then((customWhitelist = []) => {
      pathnames.forEach(pathname => {
        if (!customWhitelist.includes(pathname)) customWhitelist.push(pathname)
      })

      return idbKeyval.set(WHITELIST_KEY, customWhitelist)
    })
    .then(() => {
      updatingWhitelist = null
    })

  return updatingWhitelist
}

function rawResetWhitelist() {
  if (updatingWhitelist !== null) {
    return updatingWhitelist.then(() => rawResetWhitelist())
  }

  updatingWhitelist = idbKeyval.set(WHITELIST_KEY, []).then(() => {
    updatingWhitelist = null
  })

  return updatingWhitelist
}

const messageApi = {
  whitelistPathnames(event) {
    let { pathnames } = event.data

    pathnames = pathnames.map(({ pathname, includesPrefix }) => {
      if (!includesPrefix) {
        return `${pathname}`
      } else {
        return pathname
      }
    })

    event.waitUntil(rawWhitelistPathnames(pathnames))
  },

  resetWhitelist(event) {
    event.waitUntil(rawResetWhitelist())
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi } = event.data
  if (gatsbyApi) messageApi[gatsbyApi](event)
})
