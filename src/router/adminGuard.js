import {
    store
} from '../../store'

export default (to, from, next) => {
    if (store.getters.user && store.getters.user.role == "admin") {
        next()
    } else {
        next('/')
    }
}