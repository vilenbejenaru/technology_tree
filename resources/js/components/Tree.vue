<template>
    <div class="container">
        <!--        <div class="row justify-content-center">-->
        <!--            <div class="col-md-8">-->
        <!--                <div class="card">-->
        <!--                    <div class="card-header">Example Component</div>-->

        <!--                    <div class="card-body">-->
        <!--                        I'm an example component.-->
        <!--                    </div>-->
        <!--                    <a href="/register">Регистрация</a>-->
        <!--                    <a href="/login">Логин</a>-->
        <!--                </div>-->
        <!--            </div>-->

        <!--            <div>-->
        <!--                asdasdas-->
        <!--                <div></div>-->
        <!--            </div>-->

        <!--        </div>-->


        <div class="tree">
            <ul class="tree-list">
                <node-tree :node="treeData"></node-tree>
            </ul>
        </div>

    </div>
</template>

<script>
// export default {
//     mounted() {
//         console.log('Component mounted.')
//     }
// }

import NodeTree from './NodeTree';

export default {
    props: {
        treeData: Object
    },
    components: {
        NodeTree
    }
};
</script>


<style>
.tree-list ul {
    margin: 6px 0;
    padding-left: 16px;
}
</style>
