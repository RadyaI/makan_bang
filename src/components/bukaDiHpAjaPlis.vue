<template>
    <div>

    </div>
</template>
<script>
import swal from 'sweetalert';
import bananacat from '../views/page/images/bananacat.png'

export default {
    data() {
        return {
            bananacat: bananacat
        }
    },
    mounted() {
        if (window.innerWidth > 535) {
            swal({
                icon: false,
                title: 'Buka di hp aja pliss',
                text: 'Desain yang buat ukuran laptop keatas belum jadii mhwmwh',
                button: 'Okeh'
            })
        }
    }
}
</script>
<style scoped>
*{
    font-family:Arial, Helvetica, sans-serif;
    font-weight: bolder;
}
</style>