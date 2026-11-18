// Service worker: visar notiser (även när fliken är i bakgrunden) och öppnar rätt sida vid klick.
// Steg 2 i produktion: ta emot Web Push från servern här ('push'-eventet).
self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()))

self.addEventListener('push', (event) => {
  const data = event.data ? event.data.json() : {}
  event.waitUntil(
    self.registration.showNotification(data.title || 'مجلة الفكر المسيحي', {
      body: data.body || '',
      icon: 'icon-192.png',
      badge: 'icon-192.png',
      data: { link: data.link || '#/member' },
      dir: 'rtl',
      lang: 'ar',
    }),
  )
})

self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  const link = (event.notification.data && event.notification.data.link) || '#/member'
  const url = new URL(self.registration.scope)
  url.hash = link.replace(/^#/, '')
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((list) => {
      for (const c of list) {
        if ('focus' in c) {
          c.navigate(url.href)
          return c.focus()
        }
      }
      return self.clients.openWindow(url.href)
    }),
  )
})
