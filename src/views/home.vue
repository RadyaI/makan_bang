<template>
    <div class="circle-top">
        <div class="circle1"></div>
        <div class="circle1"></div>
        <div class="circle1"></div>
    </div>
    <div class="title-home">
        <h2 class="hide-desktop">Mau <span style="color: #190482;">Makan</span> <span style="font-size: 38px;">Apa Hari
                Ini?</span></h2>
        <h2 class="hide-mobile">Mau <span style="cursor: pointer; color: #190482;" @click="makan">Makan</span> Apa <br> Hari
            Ini?</h2>
        <button class="button-makan" v-on:click="makan">Makan</button>
    </div>
    <div class="circle-bottom">
        <div class="circle-bottom-1"></div>
        <div class="circle-bottom-1"></div>
        <div class="circle-bottom-1"></div>
    </div>
</template>
<style scoped>
::root {
    --primary: #190482;
    --secondary: #C2D9FF;
}

/* stylenya bekerja dibawah 500px */
@media only screen and (max-width:500px) {

    /* MOBILE */
    .circle-top {
        /* border: 1px solid black; */
        width: fit-content;
        margin-top: 40px;
        margin-left: 10px;
    }
    .circle-bottom{
        /* border: 1px solid black; */
        width: fit-content;
        height: auto;
        margin-top: 30vh;
        margin-left: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .circle-bottom-1{
        border-radius: 50%;
        margin: 8px;
        width: 25px;
        height: 25px;
        background-color: #190482;
    }
    .circle1 {
        width: 25px;
        height: 25px;
        border: 1px solid #C2D9FF;
        background-color: #190482;
        margin: 8px;
        border-radius: 50%;
    }

    .title-home {
        /* border: 1px solid black; */
        font-weight: bolder;
        font-size: 30px;
        margin-top: 25%;
        margin-left: 10%;
        /* border: 1px solid black; */
        width: 300px;
        height: auto;
    }

    .hide-mobile {
        display: none;
    }

    .button-makan {
        cursor: pointer;
        text-transform: uppercase;
        font-weight: bolder;
        background-color: #190482;
        color: #C2D9FF;
        border-radius: 10px;
        border: none;
        margin-top: 30px;
        padding: 10px 20px;
        /* border: 1px solid black; */
    }
}

@media only screen and (min-width: 1200px) {

    /* DESKTOP */
    .hide-desktop {
        display: none;
    }

    .title-home {
        width: fit-content;
        height: auto;
        /* border: 2px solid black; */
        margin-left: 320px;
        margin-top: 125px;
        font-size: 60px;
    }

    .button-makan {
        border-radius: 10px;
        font-weight: bolder;
        text-transform: uppercase;
        font-size: 20px;
        background-color: #190482;
        color: #C2D9FF;
        border: none;
        cursor: pointer;
        padding: 10px 25px;
        transition: scale 0.5s;
    }

    .button-makan:hover {
        scale: 1.1;
        background-color: #C2D9FF;
        color: #190482;
        border: 1px solid black;
    }
}
</style>

<script>
import swal from 'sweetalert'
export default {
    name: 'app',
    data() {
        return {

        }
    },
    methods: {
        makan() {
            swal({
                icon: 'warning',
                title: 'Apa? Mau Makan?',
                buttons: ['Engga ah', 'Iya Mau'],
                dangerMode: true
            }).then(
                (makan) => {
                    if (makan) {
                        this.$router.push('/pilih-makan')
                    } else {
                        swal({
                            icon: 'warning',
                            title: 'Yaudah Balik Kerja 😂',
                            button: 'Yah'
                        }).then(
                            (kerja) => {
                                if (kerja) {
                                    window.open('https://indobot.co.id', '_blank')
                                }
                            }
                        )
                    }
                }
            )
        }
    }
}
</script>
