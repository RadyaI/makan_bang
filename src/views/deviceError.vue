<template>
    <div class="wrapper">
        <div class="cookieCard">
            <p class="cookieHeading">Kenapa Kamu Melihat Halaman Ini?</p>
            <p class="cookieDescription">Iyaaa, Karena device yang kamu gunakan sekarang ituuu punya ukuran lebar <span
                    style="font-weight: bolder; color: red;">{{ width }}</span>px dan tinggi <span style="color: red;">{{
                        height }}</span>px, <span style="color: yellow;">Lah Emangnya Kenapa?</span> Karenaa website ini tidak
                sepenuhnya responsive pada beberapa ukuran device, style website akan <span style="color: red;">hancur/tidak
                    bekerja</span>
                <br><br>
                <b style="color: yellow;">Kenapa bisa begitu???</b> yaa Apalagi karena yang buat website malas😂aaha <br>
                <span style="color: yellow;">Terus gimana? </span>Coba buka pake hp atau laptop ajaa
            </p>
            <div class="ho">
                <button v-on:click="protes">
                    <svg height="36px" width="36px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                        <rect fill="#fdd835" y="0" x="0" height="36" width="36"></rect>
                        <path
                            d="M38.67,42H11.52C11.27,40.62,11,38.57,11,36c0-5,0-11,0-11s1.44-7.39,3.22-9.59 c1.67-2.06,2.76-3.48,6.78-4.41c3-0.7,7.13-0.23,9,1c2.15,1.42,3.37,6.67,3.81,11.29c1.49-0.3,5.21,0.2,5.5,1.28 C40.89,30.29,39.48,38.31,38.67,42z"
                            fill="#e53935"></path>
                        <path
                            d="M39.02,42H11.99c-0.22-2.67-0.48-7.05-0.49-12.72c0.83,4.18,1.63,9.59,6.98,9.79 c3.48,0.12,8.27,0.55,9.83-2.45c1.57-3,3.72-8.95,3.51-15.62c-0.19-5.84-1.75-8.2-2.13-8.7c0.59,0.66,3.74,4.49,4.01,11.7 c0.03,0.83,0.06,1.72,0.08,2.66c4.21-0.15,5.93,1.5,6.07,2.35C40.68,33.85,39.8,38.9,39.02,42z"
                            fill="#b71c1c"></path>
                        <path
                            d="M35,27.17c0,3.67-0.28,11.2-0.42,14.83h-2C32.72,38.42,33,30.83,33,27.17 c0-5.54-1.46-12.65-3.55-14.02c-1.65-1.08-5.49-1.48-8.23-0.85c-3.62,0.83-4.57,1.99-6.14,3.92L15,16.32 c-1.31,1.6-2.59,6.92-3,8.96v10.8c0,2.58,0.28,4.61,0.54,5.92H10.5c-0.25-1.41-0.5-3.42-0.5-5.92l0.02-11.09 c0.15-0.77,1.55-7.63,3.43-9.94l0.08-0.09c1.65-2.03,2.96-3.63,7.25-4.61c3.28-0.76,7.67-0.25,9.77,1.13 C33.79,13.6,35,22.23,35,27.17z"
                            fill="#212121"></path>
                        <path
                            d="M17.165,17.283c5.217-0.055,9.391,0.283,9,6.011c-0.391,5.728-8.478,5.533-9.391,5.337 c-0.913-0.196-7.826-0.043-7.696-5.337C9.209,18,13.645,17.32,17.165,17.283z"
                            fill="#01579b"></path>
                        <path
                            d="M40.739,37.38c-0.28,1.99-0.69,3.53-1.22,4.62h-2.43c0.25-0.19,1.13-1.11,1.67-4.9 c0.57-4-0.23-11.79-0.93-12.78c-0.4-0.4-2.63-0.8-4.37-0.89l0.1-1.99c1.04,0.05,4.53,0.31,5.71,1.49 C40.689,24.36,41.289,33.53,40.739,37.38z"
                            fill="#212121"></path>
                        <path
                            d="M10.154,20.201c0.261,2.059-0.196,3.351,2.543,3.546s8.076,1.022,9.402-0.554 c1.326-1.576,1.75-4.365-0.891-5.267C19.336,17.287,12.959,16.251,10.154,20.201z"
                            fill="#81d4fa"></path>
                        <path
                            d="M17.615,29.677c-0.502,0-0.873-0.03-1.052-0.069c-0.086-0.019-0.236-0.035-0.434-0.06 c-5.344-0.679-8.053-2.784-8.052-6.255c0.001-2.698,1.17-7.238,8.986-7.32l0.181-0.002c3.444-0.038,6.414-0.068,8.272,1.818 c1.173,1.191,1.712,3,1.647,5.53c-0.044,1.688-0.785,3.147-2.144,4.217C22.785,29.296,19.388,29.677,17.615,29.677z M17.086,17.973 c-7.006,0.074-7.008,4.023-7.008,5.321c-0.001,3.109,3.598,3.926,6.305,4.27c0.273,0.035,0.48,0.063,0.601,0.089 c0.563,0.101,4.68,0.035,6.855-1.732c0.865-0.702,1.299-1.57,1.326-2.653c0.051-1.958-0.301-3.291-1.073-4.075 c-1.262-1.281-3.834-1.255-6.825-1.222L17.086,17.973z"
                            fill="#212121"></path>
                        <path
                            d="M15.078,19.043c1.957-0.326,5.122-0.529,4.435,1.304c-0.489,1.304-7.185,2.185-7.185,0.652 C12.328,19.467,15.078,19.043,15.078,19.043z"
                            fill="#e1f5fe"></path>
                    </svg>
                    <span class="now">sabar!</span>
                    <span class="play">Protes?</span>
                </button>
            </div>
        </div>

        <!-- coin -->
        <div class="coin">
            <div class="side heads">
                <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="100%" height="100%" version="1.1"
                    shape-rendering="geometricPrecision" text-rendering="geometricPrecision"
                    image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 4091.27 4091.73"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="Layer_x0020_1">
                        <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                        <g id="_1421344023328">
                            <path fill="#F7931A" fill-rule="nonzero"
                                d="M4030.06 2540.77c-273.24,1096.01 -1383.32,1763.02 -2479.46,1489.71 -1095.68,-273.24 -1762.69,-1383.39 -1489.33,-2479.31 273.12,-1096.13 1383.2,-1763.19 2479,-1489.95 1096.06,273.24 1763.03,1383.51 1489.76,2479.57l0.02 -0.02z">
                            </path>
                            <path fill="white" fill-rule="nonzero"
                                d="M2947.77 1754.38c40.72,-272.26 -166.56,-418.61 -450,-516.24l91.95 -368.8 -224.5 -55.94 -89.51 359.09c-59.02,-14.72 -119.63,-28.59 -179.87,-42.34l90.16 -361.46 -224.36 -55.94 -92 368.68c-48.84,-11.12 -96.81,-22.11 -143.35,-33.69l0.26 -1.16 -309.59 -77.31 -59.72 239.78c0,0 166.56,38.18 163.05,40.53 90.91,22.69 107.35,82.87 104.62,130.57l-104.74 420.15c6.26,1.59 14.38,3.89 23.34,7.49 -7.49,-1.86 -15.46,-3.89 -23.73,-5.87l-146.81 588.57c-11.11,27.62 -39.31,69.07 -102.87,53.33 2.25,3.26 -163.17,-40.72 -163.17,-40.72l-111.46 256.98 292.15 72.83c54.35,13.63 107.61,27.89 160.06,41.3l-92.9 373.03 224.24 55.94 92 -369.07c61.26,16.63 120.71,31.97 178.91,46.43l-91.69 367.33 224.51 55.94 92.89 -372.33c382.82,72.45 670.67,43.24 791.83,-303.02 97.63,-278.78 -4.86,-439.58 -206.26,-544.44 146.69,-33.83 257.18,-130.31 286.64,-329.61l-0.07 -0.05zm-512.93 719.26c-69.38,278.78 -538.76,128.08 -690.94,90.29l123.28 -494.2c152.17,37.99 640.17,113.17 567.67,403.91zm69.43 -723.3c-63.29,253.58 -453.96,124.75 -580.69,93.16l111.77 -448.21c126.73,31.59 534.85,90.55 468.94,355.05l-0.02 0z">
                            </path>
                        </g>
                    </g>
                </svg>
            </div>
            <div class="side tails">
                <svg xmlns="http://www.w3.org/2000/svg" class="svg_back" xml:space="preserve" width="100%" height="100%"
                    version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"
                    image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 4091.27 4091.73"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="Layer_x0020_1">
                        <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                        <g id="_1421344023328">
                            <path fill="#F7931A" fill-rule="nonzero"
                                d="M4030.06 2540.77c-273.24,1096.01 -1383.32,1763.02 -2479.46,1489.71 -1095.68,-273.24 -1762.69,-1383.39 -1489.33,-2479.31 273.12,-1096.13 1383.2,-1763.19 2479,-1489.95 1096.06,273.24 1763.03,1383.51 1489.76,2479.57l0.02 -0.02z">
                            </path>
                            <path fill="white" fill-rule="nonzero"
                                d="M2947.77 1754.38c40.72,-272.26 -166.56,-418.61 -450,-516.24l91.95 -368.8 -224.5 -55.94 -89.51 359.09c-59.02,-14.72 -119.63,-28.59 -179.87,-42.34l90.16 -361.46 -224.36 -55.94 -92 368.68c-48.84,-11.12 -96.81,-22.11 -143.35,-33.69l0.26 -1.16 -309.59 -77.31 -59.72 239.78c0,0 166.56,38.18 163.05,40.53 90.91,22.69 107.35,82.87 104.62,130.57l-104.74 420.15c6.26,1.59 14.38,3.89 23.34,7.49 -7.49,-1.86 -15.46,-3.89 -23.73,-5.87l-146.81 588.57c-11.11,27.62 -39.31,69.07 -102.87,53.33 2.25,3.26 -163.17,-40.72 -163.17,-40.72l-111.46 256.98 292.15 72.83c54.35,13.63 107.61,27.89 160.06,41.3l-92.9 373.03 224.24 55.94 92 -369.07c61.26,16.63 120.71,31.97 178.91,46.43l-91.69 367.33 224.51 55.94 92.89 -372.33c382.82,72.45 670.67,43.24 791.83,-303.02 97.63,-278.78 -4.86,-439.58 -206.26,-544.44 146.69,-33.83 257.18,-130.31 286.64,-329.61l-0.07 -0.05zm-512.93 719.26c-69.38,278.78 -538.76,128.08 -690.94,90.29l123.28 -494.2c152.17,37.99 640.17,113.17 567.67,403.91zm69.43 -723.3c-63.29,253.58 -453.96,124.75 -580.69,93.16l111.77 -448.21c126.73,31.59 534.85,90.55 468.94,355.05l-0.02 0z">
                            </path>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
        <!-- coin -->

    </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap');

p {
    font-family: 'Ubuntu';
}

* {
    font-family: 'Ubuntu';
}

span {
    /* color: !important; */
    font-size: 15px;
}

.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-top: 30%; */
}

.cookieCard {
    width: fit-content;
    height: auto;
    background: linear-gradient(to right, rgb(13, 3, 49), rgb(56, 43, 103));
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    padding: 20px;
    position: relative;
    overflow: hidden;
    /* font-family: 'Ubuntu' !important; */
}

.cookieCard::before {
    width: 150px;
    height: 150px;
    content: "";
    background: linear-gradient(to right, rgb(142, 110, 255), rgb(208, 195, 255));
    position: absolute;
    z-index: 1;
    border-radius: 50%;
    right: -25%;
    top: -25%;
}

.cookieHeading {
    font-size: 1.5em;
    font-weight: 600;
    color: white;
    z-index: 2;
}

.cookieDescription {
    font-size: 0.9em;
    color: white;
    z-index: 2;
    font-weight: bolder;
    font-family: 'Ubuntu' !important;
}

.cookieDescription a {
    color: white
}

.acceptButton {
    padding: 11px 20px;
    background-color: #7b57ff;
    transition-duration: .2s;
    border: none;
    color: rgb(241, 241, 241);
    cursor: pointer;
    font-weight: 600;
    z-index: 2;
    border-radius: 0 10px 10px 0;
}

.protesButton {
    border-radius: 10px 0 0 10px;
    padding: 11px 20px;
    background-color: orangered;
    transition-duration: .2s;
    border: none;
    color: rgb(241, 241, 241);
    cursor: pointer;
    font-weight: 600;
    z-index: 2;
}

.acceptButton:hover {
    background-color: #714aff;
    transition-duration: .2s;
}

/* coin */
.coin {
    font-size: 200px;
    width: 0.1em;
    height: 1em;
    background: linear-gradient(#faa504, #141001);
    margin: auto;
    position: absolute;
    /* top: 1; */
    left: 0;
    right: 0;
    bottom: 0;
    animation: rotate_4001510 7s infinite linear;
    transform-style: preserve-3d;
}

.coin .side,
.coin:before,
.coin:after {
    content: "";
    position: absolute;
    width: 1em;
    height: 1em;
    overflow: hidden;
    border-radius: 50%;
    right: -0.4em;
    text-align: center;
    line-height: 1;
    transform: rotateY(-90deg);
    -moz-backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.coin .tails,
.coin:after {
    left: -0.4em;
    transform: rotateY(90deg);
}

.coin:before,
.coin:after {
    background: linear-gradient(#faa504, #141001);
    backface-visibility: hidden;
    transform: rotateY(90deg);
}

.coin:after {
    transform: rotateY(-90deg);
}

@keyframes rotate_4001510 {
    100% {
        transform: rotateY(360deg);
    }
}

.svg_back {
    transform: scaleX(-1);
}

/* coin */

/* button */
button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 0 10px;
    color: white;
    text-shadow: 2px 2px rgb(116, 116, 116);
    text-transform: uppercase;
    border: solid 2px black;
    letter-spacing: 1px;
    font-weight: 600;
    font-size: 17px;
    background-color: hsl(49deg 98% 60%);
    border-radius: 50px;
    position: relative;
    overflow: hidden;
    transition: all .5s ease;
    cursor: pointer;
}

button:active {
    transform: scale(.9);
    transition: all 100ms ease;
}

button svg {
    transition: all .5s ease;
    z-index: 2;
}

.play {
    transition: all .5s ease;
    transition-delay: 300ms;
}

button:hover svg {
    transform: scale(3) translate(50%);
}

.now {
    position: absolute;
    left: 0;
    transform: translateX(-100%);
    transition: all .5s ease;
    z-index: 2;
}

button:hover .now {
    transform: translateX(10px);
    transition-delay: 300ms;
}

button:hover .play {
    transform: translateX(200%);
    transition-delay: 300ms;
}

/* button */
</style>
<script>
import swal from 'sweetalert';


export default {
    data() {
        return {
            width: window.innerWidth,
            height: window.innerHeight,
        }
    },
    methods: {
        yodah() {
            swal({
                icon: 'success',
                title: 'Okeee',
                button: false,
                timer: 900
            })
        },
        protes() {
            setTimeout(() => {
                swal({
                    title: 'HAHAHA',
                    button: false
                })
                setTimeout(() => {
                    window.open('https://instagram.com/r4dy.a', '_blank')
                }, 1500)
            }, 1000);
        }
    }
}
</script>