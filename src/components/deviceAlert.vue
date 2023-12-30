<template>
    <div>

    </div>
</template>

<script>
import swal from 'sweetalert'
export default {
    data() {
        return {

        }
    },
    mounted() {
        this.showAlert()
    },
    methods: {
        showAlert() {
            if (window.innerWidth > 1350) {
                swal({
                    icon: 'error',
                    title: 'Waduh, Style webnya tidak support device mu hehe',
                    button: 'Lah Kenapa?'
                }).then(
                    (next) => {
                        if (next) {
                            this.$router.push('/device-error')
                        }
                    }
                )
            }
        }
    }
}
</script>
