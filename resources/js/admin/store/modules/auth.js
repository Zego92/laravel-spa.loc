import axios from 'axios'

function initialState() {
    const isAuth = false;
    const admin = {}
    return{
        isAuth,
        admin
    }
}
const getters = {
    isAuth(state){
        return state.isAuth
    },
    admin(state){
        return state.admin
    },
}
const actions = {
    async loginAdmin(ctx, data)
    {
        return new Promise((resolve, reject) => {
            axios({
                url: '/api/login',
                method: 'POST',
                data: data,
            })
                .then((response) => {
                    ctx.commit('setAdmin', response.data)
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }
}
const mutations = {
    setIsAuth(state, isAuth)
    {
        state.isAuth = isAuth
    },
    setAdmin(state, admin)
    {
        state.admin = admin
    }
}

export default {
    namespaced: true,
    state: initialState,
    getters,
    actions,
    mutations
}
