// info: файл библиотеки с гитхаб; используется самостоятельно, стилизацияя минимальная.
// два других фаила дают возможность редактирования и настройки дерева

<template>
    <div>
        <TreeChart :json="treeData" />
    </div>
</template>

<script>
import TreeChart from "vue-tree-chart";
export default {
    components: {
        TreeChart,
    },
    data() {
        return {
            treeData: {
                name: "Frontenf",
                image_url: "https://static.refined-x.com/avat.jpg",
                class: ["rootNode"],
                children: [
                    {
                        name: "HTML",
                        image_url: "https://static.refined-x.com/avat1.jpg",
                    },
                    {
                        name: "Css",
                        image_url: "https://static.refined-x.com/avat2.jpg",
                        mate: [
                            {
                                name: "mate",
                                image_url:
                                    "https://static.refined-x.com/avat3.jpg",
                            },
                        ],
                        children: [
                            {
                                name: "grandchild",
                                image_url:
                                    "https://static.refined-x.com/avat.jpg",
                            },
                            {
                                name: "grandchild2",
                                image_url:
                                    "https://static.refined-x.com/avat1.jpg",
                            },
                            {
                                name: "grandchild3",
                                image_url:
                                    "https://static.refined-x.com/avat2.jpg",
                            },
                        ],
                    },
                    {
                        name: "JS",
                        image_url: "https://static.refined-x.com/avat.jpg",
                    },
                ],
            },
        };
    },
};
</script>

<style lang="scss" scoped></style>
