<template>
    <div>
        <h3>THIS IS LOGIN PAGE</h3>
        <router-link to="/home">HOME</router-link>
        <button type="button" @click="onCLickLoginAdmin">Login Admin</button>
    </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from 'vuex'
export default {
    name: "Login",
    props: [],
    data: () => ({}),
    components: {},
    computed: {
        ...mapGetters('auth', [
            'admin'
        ]),
        ...mapState('auth', [
            'admin'
        ]),
    },
    watch: {},
    methods: {
        ...mapActions('auth', [
            'loginAdmin'
        ]),
        ...mapMutations('auth', [
            'setAdmin'
        ]),
        onCLickLoginAdmin()
        {
            this.loginAdmin()
        }
    },
    mounted() {
    }
}
</script>

<style scoped>

</style>
