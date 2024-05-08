export default defineEventHandler(async (event) => {
    event.respondWith(new Response('This should be the user info'))
})
