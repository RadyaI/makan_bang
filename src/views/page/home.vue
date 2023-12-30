<template>
    <div>
        <div class="navbar">
            <div class="cart" @click="sabar"><i class="fa-solid fa-cart-shopping"></i></div>
            <div class="favorit" @click="sabar"><i class="fa-solid fa-heart"></i></div>
        </div>
        <div class="desc">
            <p class="text desc-text-1">Makan Bang</p>
            <p class="text desc-text-2">Makanan Yang Deket Aja</p>
            <input type="text" v-model="searchFood" class="search text" placeholder="Ga tau mau cari apa...">
        </div>
        <div class="food">
            <div class="food-card" @click="sabar" v-for="i in makanFilter" :key="i.title">
                <!-- <h2 v-if="makanFilter.length === 0">Wah ga ada kayanya</h2> -->
                <img :src="require(`./images/${i.img}`)" class="food-img" alt="">
                <div class="food-desc">
                    <p class="food-title">
                        {{ i.title }}
                    </p>
                    <i class="fa-solid fa-heart food-favorit"></i>
                </div>
                <p class="food-price">
                    {{ i.price }}
                </p>
            </div>
        </div>
        <div class="nyemil-text text" style="margin-top:10px ;">Nyemil</div>
        <div class="nyemil">
            <div class="nyemil-card" @click="sabar" v-for="i in nyemil" :key="i.title">
                <img :src="require(`./images/${i.img}`)" class="nyemil-img" alt="">
                <div class="nyemil-desc">
                    <p class="nyemil-title">
                        {{ i.title }}
                    </p>
                    <i class="fa-solid fa-heart nyemil-favorit"></i>
                </div>
                <p class="nyemil-price">{{ i.price }}</p>
            </div>
        </div>

        <div class="footer">
            <p>Made By Radya With Haha</p>
        </div>
        <hpajaplis></hpajaplis>
    </div>
</template>
<style scoped>
::root {
    --primary: #190482;
    --secondary: #C2D9FF;
    --circle: #8E8FFA;
    --hmm: #7752FE;
}

* {
    margin: 0;
    padding: 0;
}

.navbar {
    width: 100%;
    height: 100px;
    /* border: 1px solid black; */
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.cart,
.favorit {
    width: 50px;
    height: 50px;
    background-color: #C2D9FF;
    margin: 30px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #190482;
    cursor: pointer;
}

.desc {
    width: 100%;
    height: 120px;
    /* border: 1px solid black; */
}

.text {
    margin-left: 30px;
}

.desc-text-1 {
    margin-bottom: 8px;
    font-weight: bold;
}

.desc-text-2 {
    font-weight: bolder;
    font-size: 25px;
}

.search {
    margin-top: 15px;
    border: 1px solid #190482;
    padding: 7px 66px;
    border-radius: 10px;
    color: #190482;
}

.food {
    width: 100%;
    height: auto;
    margin-top: 15px;
    display: flex;
    overflow-x: auto;
    overflow-y: scroll
}

.food-card {
    flex: 0 0 auto;
    width: 180px;
    height: 230px;
    margin: 10px;
    background-color: #C2D9FF;
    border-radius: 10px;
}

.food-img {
    border-radius: 10px 10px 10px 10px;
    width: 87%;
    height: 68%;
    /* border: 1px solid black; */
    margin-left: 10px;
    margin-top: 10px;
    border: none;
}

.food-desc {
    margin-top: 10px;
    color: black;
    width: 100%;
    height: auto;
    /* border: 1px solid orange; */
    display: flex;
    justify-content: space-between;
}

.food-title {
    font-size: 11px;
    font-weight: bolder;
    margin-left: 5px;

}

.food-price {
    font-weight: bolder;
    font-size: 13px;
    margin-top: 5px;
    margin-left: 4px;
}

.food-favorit {
    margin-right: 12px;
}

.nyemil-text {
    font-weight: bolder;
    font-size: 25px;
}

.nyemil {
    margin-top: 10px;
    width: 100%;
    height: auto;
    display: flex;
    /* border: 1px solid black; */
    justify-content: start;
    overflow-x: auto;
    overflow-y: scroll;
}

.nyemil-card {
    flex: 0 0 auto;
    width: 180px;
    height: 230px;
    margin: 10px;
    background-color: #C2D9FF;
    border-radius: 10px;
}

.nyemil-img {
    border-radius: 10px 10px 10px 10px;
    width: 87%;
    height: 68%;
    /* border: 1px solid black; */
    margin-left: 10px;
    margin-top: 10px;
    border: none;
}

.nyemil-desc {
    margin-top: 10px;
    color: black;
    width: 100%;
    height: auto;
    /* border: 1px solid orange; */
    display: flex;
    justify-content: space-between;
}

.nyemil-title {
    font-size: 11px;
    font-weight: bolder;
    margin-left: 5px;
}

.nyemil-favorit {
    margin-right: 12px;
}

.nyemil-price {
    font-weight: bolder;
    font-size: 13px;
    margin-top: 5px;
    margin-left: 4px;
}

.footer {
    color: #C2D9FF;
    margin-top: 20px;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px 15px 0 0;
    background-color: #190482;
}

@media only screen and (min-height: 900px) {
    .footer{
        position: absolute;
        bottom: 0;
    }
}
</style>

<script>
import swal from 'sweetalert'
import bananacat from './images/bananacat.png'
import hpajaplis from '@/components/bukaDiHpAjaPlis.vue'

export default {
    name: 'app',
    components: {
        hpajaplis: hpajaplis
    },
    data() {
        return {
            searchFood: '',
            food: [
                {
                    title: 'Mie Ayam',
                    price: 'Rp10.000 - Rp18.000',
                    img: 'miayam.png'
                },
                {
                    title: 'Nasi Padang',
                    price: 'Rp10.000 - Rp30.000',
                    img: 'nasipadang.png'
                },
                {
                    title: 'Ayam Geprek Manda',
                    price: 'Rp8.000 - Rp20.000',
                    img: 'manda.jpg'
                },
                {
                    title: 'Gado-gado',
                    price: 'Rp10.000 - Rp15.000',
                    img: 'gadogado.png'
                },
            ],
            nyemil: [
                {
                    title: 'Cilok',
                    price: 'Rp.500',
                    img: 'cilok.png'
                },
                {
                    title: 'Donat',
                    price: 'Rp.2.500',
                    img: 'donat.png'
                }
            ],
            bananacat: bananacat,
        }
    },
    computed: {
        makanFilter() {
            let foodList = this.food
            if (this.searchFood) {
                foodList = foodList.filter(i => i.title.toLowerCase().toString().includes(this.searchFood.toLowerCase()))
            }
            return foodList
        }
    },
    methods: {
        sabar() {
            swal({
                icon: `${this.bananacat}`,
                title: 'Belum jadi ehhe',
                button: 'HUUU',
                // timer: 2000
            })
        }
    }
}
</script>