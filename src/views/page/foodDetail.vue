<template>
    <div>
        <div class="container">
            <div class="navbar">
                <div class="back"><i @click="back" class="fa-solid fa-arrow-left"></i></div>
            </div>
            <div class="food-area">
                <img :src="require(`./images/${foodImg.img}`)" alt="" class="food-img">
            </div>
            <div class="food-desc">
                <div class="title">
                    {{ foodData.title }}
                </div>
                <div class="center">
                    <div class="desc">{{ foodData.desc }}</div>
                </div>
                <div class="price">{{ foodData.price }}</div>
                <div class="center">
                    <div class="save"><i @click="sabar" class="fa-regular fa-bookmark"></i></div>
                    <button class="button" @click="sabar">Titip</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import swal from 'sweetalert'
import bananacat from '../page/images/bananacatcry.png'

export default {
    data() {
        return {
            foodData: {},
            foodImg: {
                img: JSON.parse(localStorage.getItem('foodData'))[this.$route.params.id].img
            }
        }
    },
    mounted() {
        this.getFood(this.$route.params.id)
    },
    methods: {
        sabar() {
            swal({
                icon: `${bananacat}`,
                title: 'Belum jadi...hehe',
                button: 'Wuuu'
            })
        },
        back() {
            this.$router.push('/home')
        },
        getFood(id) {
            let getFoodData = JSON.parse(localStorage.getItem('foodData'))
            console.log(getFoodData[id])
            this.foodData = getFoodData[id]
        }
    }
}
</script>

<style scoped>
::root {
    --primary: #190482;
    --secondary: #C2D9FF;
    --circle: #8E8FFA;
    --hmm: #7752FE;
}

.navbar {
    width: 100%;
    height: auto;
    /* border: 1px solid black; */
    position: fixed;
    top: 0;
}

.back {
    font-size: 30px;
    margin-top: 40px;
    margin-left: 35px;
    color: #190482;
}

.container {
    width: 100%;
    height: 100vh;
    background-color: #C2D9FF;
}

.food-area {
    /* border: 1px solid black; */
    width: 100%;
    height: 50vh;
    background-color: #C2D9FF;
    display: flex;
    justify-content: center;
    align-items: center;
}

.food-img {
    width: 60%;
    height: 60%;
    /* border: 1px solid black; */
    border-radius: 50%;
}

img {
    /* background-size: cover; */
    object-fit: cover;
    /* width: 170px; */
    /* height: 70px; */
    border-radius: 50%;
}

.food-desc {
    /* border: 1px solid red; */
    width: 100%;
    height: 50vh;
    background-color: #fafafa;
    border-radius: 50px 50px 0 0;
}

.title {
    /* border: 1px solid black; */
    text-align: center;
    font-weight: bolder;
    font-size: 30px;
    height: auto;
    width: 100%;
    padding-top: 20px;
}

.desc {
    max-width: 80ch;
    overflow: hidden;
    text-overflow: ellipsis;
    /* white-space: nowrap; */
    width: 90%;
    height: 100px;
    /* border: 1px solid red; */
    text-align: center;
    color: grey;
    margin-top: 10px;
}

.price {
    width: fit-content;
    height: auto;
    /* border: 1px solid black; */
    padding-top: 5px;
    padding-bottom: 10px;
    font-size: 30px;
    font-weight: bolder;
    margin-left: 20px;
    margin-top: 20px;
}

.button {
    background-color: #190482;
    color: #C2D9FF;
    font-weight: bolder;
    font-size: 20px;
    border-radius: 20px;
    padding: 5px 100px;
    border: none;
    margin-top: 10px;
}

.save {
    margin-top: 10px;
    margin-right: 30px;
    font-size: 25px;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 13px;
    background: linear-gradient(225deg, #ffffff, #e6e6e6);
    box-shadow: -5px 5px 10px #e8e8e8,
        5px -5px 10px #ffffff;
}

.center {
    display: flex;
    justify-content: center;
    height: a;
}
</style>