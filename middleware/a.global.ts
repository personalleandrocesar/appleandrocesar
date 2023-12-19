export default defineNuxtRouteMiddleware((to, from) => {

    const logon = useCookie('logon')
    const state = useCookie('state')
    
    logon.value = logon.value
    state.value = state.value
    
    if (from.params.id !== logon.value && to.params.id ) {
        return navigateTo('/') 
    }

    
})
