export default defineEventHandler(async (event) => {
    // Your code

    const url = (event.node.req.url as string).replace(/^\/api/, '')
    return await $fetch(url, {
        // Your code
    })
})