<template>
    <div>
        <input type="text" class="search-food" @change="foodNotFound" v-model="searchFood"
            placeholder="Ga tau mau cari apa...">
        <div class="card-container">
            <img src="../views/page/images/bananacatcry.png" v-if="foodLength === 0" alt="">
            <div class="card" @click="detail(food)" v-for="food in foodFilter" :key="food.title">
                <div class="card-img"><img style="background-size: cover;" class="food-img"
                        :src="require(`../views/page/images/${food.img}`)" alt=""></div>
                <div class="card-info">
                    <p class="text-title food-title">{{ food.title }}</p>
                </div>
                <div class="line"></div>
                <div class="card-footer">
                    <span class="text-title price">{{ food.price }}</span>
                    <div class="card-button">
                        <i class="fa-regular fa-heart"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            searchFood: '',
            foodLength: '',
            testAja: {
                1: {
                    id: 1,
                    title: 'Mie Ayam',
                    price: 'Rp10.000 - Rp18.000',
                    img: 'miayam.png'
                },
                2: {
                    id: 2,
                    title: 'Nasi Padang',
                    price: 'Rp10.000 - Rp30.000',
                    img: 'nasipadang.png'
                },
                3: {
                    id: 3,
                    title: 'Ayam Geprek Manda',
                    price: 'Rp8.000 - Rp20.000',
                    img: 'manda.jpg'
                },
                4: {
                    id: 4,
                    title: 'Gado-gado',
                    price: 'Rp10.000 - Rp15.000',
                    img: 'gadogado.png'
                },
            },
            foodData: [
                {
                    id: 0,
                    title: 'Mie Ayam',
                    price: 'Rp10.000 - Rp18.000',
                    desc: 'Ini buat deskripsi tapi ga tau mau diisi apa',
                    img: 'miayam.png'
                },
                {
                    id: 1,
                    title: 'Nasi Padang',
                    price: 'Rp10.000 - Rp30.000',
                    desc: 'Ini buat deskripsi tapi ga tau mau diisi apa',
                    img: 'nasipadang.png'
                },
                {
                    id: 2,
                    title: 'Ayam Geprek Manda',
                    price: 'Rp8.000 - Rp20.000',
                    desc: 'Ini buat deskripsi tapi ga tau mau diisi apa',
                    img: 'manda.jpg'
                },
                {
                    id: 3,
                    title: 'Gado-gado',
                    price: 'Rp10.000 - Rp15.000',
                    desc: 'Ini buat deskripsi tapi ga tau mau diisi apa',
                    img: 'gadogado.png'
                },
            ],
        }
    },
    computed: {
        foodFilter() {
            let food = this.foodData
            if (this.searchFood) {
                food = food.filter(food => food.title.toLowerCase().toString().includes(this.searchFood.toLowerCase()))
            }
            return food
        },
    },
    watch: {
        foodFilter(howManyFood) {
            this.foodLength = howManyFood.length
            console.log(this.foodLength)
        }
    },
    methods: {
        detail(food) {
            let id = food.id
            let title = food.title
            console.log(`id: ${id}, title: ${title}`)
            let foodDataStore = JSON.stringify(this.foodData)
            localStorage.setItem('foodData', foodDataStore)
            this.$router.push(`/food/${id}/${title}`)
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

.search-food {
    margin-left: 30px;
    margin-top: 5px;
    margin-bottom: 4px;
    padding: 5px 10px;
    border-radius: 10px;
}

.card-container {
    width: 100%;
    height: auto;
    overflow-x: auto;
    overflow-y: scroll;
    display: flex;
    justify-content: start;

}

.card {
    width: 190px;
    height: 254px;
    padding: .8em;
    background: #C2D9FF;
    position: relative;
    overflow: visible;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    flex: 0 0 auto;
    margin: 10px;
}

.card-img {
    display: flex;
    justify-content: center;
    cursor: pointer;
}

.food-img {
    /* background-color:#7752FE; */
    width: 90%;
    height: 140px;
    border-radius: .5rem;
}

.card-info {
    padding-top: 10%;
}

svg {
    width: 20px;
    height: 20px;
}

.card-footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    /* border-top: 1px solid #ddd; */
}

/*Text*/
.text-title {
    font-weight: 900;
    font-size: 1.2em;
    /* line-height: 2; */
    color: #190482;
}

.food-title {
    white-space: nowrap;
    overflow: hidden;
    /* max-width: 11ch; */
    text-overflow: ellipsis;
}

.line {
    background-color: black;
    width: 80%;
    height: 1px;
    margin-top: 10px;
    opacity: .3;
}

.price {
    font-size: .9em;
}

/*Button*/
.card-button {
    border: 1px solid #252525;
    display: flex;
    padding: .3em;
    cursor: pointer;
    border-radius: 50px;
    transition: .3s ease-in-out;
}


.card-button:hover {
    border: 1px solid #ffcaa6;
    background-color: #ffcaa6;
}
</style>