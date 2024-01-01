export default defineNuxtRouteMiddleware((to, from) => {

    const logon = useCookie('logon')
    const state = useCookie('state')

    const local = 'Home'
    const home = useCookie('home')
    
    
    
    
    logon.value = logon.value
    state.value = state.value
    home.value = local
    // Se o próximo id de rota for diferente de logonCookie E ao mesmo tempo o id atual
    // if (from.params.id !== logon.value && to.params.id ) {
    //     return navigateTo('/') 
    // }
    // Se o próximo id de rota for diferente de logonCookie E ao mesmo tempo o id atual
    if ((from.params.id && to.params.id !== logon.value) || (logon.value && to.path === '/')) {
        return navigateTo(`/user/${logon.value}`)
    }
    // if (from.params.id === '/user/undefined' && !logon.value) {
    //     return navigateTo('/') 
    // }
    // se o id da rota atual for diferente de logonCookie ->    logonCookie será nulo!
    //     if (from.params !== logon.value ) {
    //         return navigateTo('/') 
    // }    
    // Se a rota(cheia) atual for igual a raiz E logonCookie diferente de nulo 
    // -> stateCookie será nulo!!
    // if (to.fullPath === '/' && logon.value !== null) {
    //     state.value = null
    // }







    // Se o próximo id de rota for diferente de logonCookie E ao mesmo tempo o id atual
    // se o id da rota atual for diferente de logonCookie -> logonCookie será nulo!
    // if (to.params.id !== logon.value ) {
    //     logon.value = null
    // }    
    // Se a rota(cheia) atual for igual a raiz E logonCookie diferente de nulo 
    // -> stateCookie será nulo!!
    // if (to.fullPath === '/' && logon.value !== null) {
    //     state.value = null
    // }    
})



