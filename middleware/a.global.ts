export default defineNuxtRouteMiddleware((to, from) => {

    console.log(to);
    console.log(from);

    const logon = useCookie('logon')
    const state = useCookie('state')
    
    logon.value = logon.value
    state.value = state.value
    
    if (from.params.id !== logon.value && to.params.id ) {
        return navigateTo('/') 
    }    
    if (to.params.id !== logon.value ) {
        logon.value = null
        state.value = null
    }    
})
