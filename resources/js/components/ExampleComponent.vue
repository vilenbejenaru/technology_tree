<template>
    <div class="container">
        <div>
            <TreeChart :json="treeData" />
        </div>

         <div class="popup" ref="popup_wrapper">
             <div class="popup-wrapper">
                 <h1> {{ nameElement }} </h1>
<!--                <div>-->
<!--                    <h2> Книги:</h2>-->
<!--                    HTML and CSS: Design and Build Websites-->
<!--                </div>-->
                 <div>
                    <h2> Видео:</h2>
                     <div v-for="item in infoTechnologyVideo" class="video_link">
                         <a :href="item.link" target="_blank"> {{ item.name_link }} </a>
                     </div>
                </div>
             </div>
         </div>
    </div>
</template>

<script>
    import TreeChart from "vue-tree-chart";
    export default {
        components: {
            TreeChart
        },

        data() {
            return {
            nameElement: null,
            infoTechnologyVideo: null,
            treeData:
            {
                name: 'Frontend',
                image_url: "./images/frontend.jpg",
                class: ["rootNode"],
                children: [
                {
                    name: 'HTML',
                    image_url: "./images/html.svg",
                },
                {
                    name: 'CSS',
                    image_url: "./images/css.svg",
                    children: [
                        {
                            name: 'Preprocessors',
                            image_url: "./images/preproccesor.jpg"
                        },
                        {
                            name: 'Frameworks',
                            image_url: "./images/framework.jpg"
                        },
                        {
                            name: 'Methodology',
                            image_url: "./images/methodology.jpg"
                        }
                    ]
                },
                {
                    name: 'JS',
                    image_url: "./images/js.svg",
                },
                {
                    name: 'Tools',
                    image_url: "./images/tools.svg",
                },
                {
                    name: 'Testing',
                    image_url: "./images/test.svg",
                },
                {
                    name: 'Optimization',
                    image_url: "./images/optimization.svg",
                },
                {
                    name: 'Work',
                    image_url: "./images/work.svg",
                }
            ]
            }
            }

        },
        mounted() {
            // this.loadInfo()
            document.querySelector('body').addEventListener('click', e => {
                if(e.target.closest('.node')) {
                    console.log(e.target.closest('.node').querySelector('.name').textContent)
                    const nameTechnology = e.target.closest('.node').querySelector('.name').textContent.toLowerCase();
                    this.nameElement =  e.target.closest('.node').querySelector('.name').textContent;
                    document.querySelector('.popup').style.display = 'flex';
                    this.loadInfo(nameTechnology);
                }
            })

            // Закрытие модального окна вне области
            let vm = this;
            document.addEventListener('click', function (item) {
                if(item.target === vm.$refs['popup_wrapper']) {
                    document.querySelector('.popup').style.display = 'none';
                }
            })
        },
        methods: {
            loadInfo(nameTechnology) {

                axios.get(`/technology/${nameTechnology}/export`)
                .then(res => {
                    this.infoTechnologyVideo = res.data[0].video;
                    console.log(this.infoTechnologyVideo)



                    // console.log(this.infoTechnology)
                    // console.log(res.data[0].video)
                    // console.log(JSON.parse(res.data[0].video).name)
                    // console.log(res.data[0])


                    // let bb = this.infoTechnology [0].video
                    // const countries = [];
                    // for (let population in bb) {
                    //     if (populations.hasOwnProperty(population)) {
                    //         countries.push(population)
                    //     }
                    // }
                    // console.log(countries)
                })
            }
        }

    }


    // let a = {
    //     ss: 2,
    //     bb: {
    //         ccc: 3
    //     }
    // }

</script>

<style lang="scss">
.node .person .avat img {
    object-fit: cover;
}

.node {
    cursor: pointer;
}

.popup {
    display: none;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgb(72 72 76 / 68%);
    z-index: 500;
    overflow: auto;
}

.popup-wrapper {
    background: white;
    padding: 100px;
    border-radius: 10%;
}

.video_link {
    font-size: 20px;
    margin: 20px 0px
}

</style>
