export default defineNuxtRouteMiddleware((to, from) => {
    const state = useCookie('state')
    if (state.value === '0') {
        return abortNavigation()
    }
    // In a real app you would probably not redirect every route to `/`
    // however it is important to check `to.path` before redirecting or you
    // might get an infinite redirect loop
    
})
