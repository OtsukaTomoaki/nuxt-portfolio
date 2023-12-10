export default defineNuxtRouteMiddleware((to : any, from: any) => {
  if(to.path !== from.path && process.client) {
    window.scrollTo(0, 0)
  }
})