export default defineNuxtRouteMiddleware((to, from) => {

    const logon = useCookie('logon')
    const state = useCookie('state')
    
    logon.value = logon.value
    state.value = state.value
    // Se o próximo id de rota for diferente de logonCookie E ao mesmo tempo o id atual
    // if (from.params.id !== logon.value && to.params.id ) {
        //     return navigateTo('/') 
        // }
        // Se o próximo id de rota for diferente de logonCookie E ao mesmo tempo o id atual
        if (logon.value && to.fullPath === '/') {
            return navigateTo(`/user/${logon.value}`)
        }
        // se o id da rota atual for diferente de logonCookie -> logonCookie será nulo!
    //     if (from.params !== logon.value ) {
    //         return navigateTo('/') 
    // }    
    // Se a rota(cheia) atual for igual a raiz E logonCookie diferente de nulo 
    // -> stateCookie será nulo!!
    // if (to.fullPath === '/' && logon.value !== null) {
        //     state.value = null
        // }
        





        
        // Se o próximo id de rota for diferente de logonCookie E ao mesmo tempo o id atual
            // if (from.params.id !== logon.value && to.params.id ) {
            //     return navigateTo('/') 
            // }
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
    
    

