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


        <div>
            <tree :tree-data="tree"></tree>
        </div>

    </div>
</template>

<script>
    // export default {
    //     mounted() {
    //         console.log('Component mounted.')
    //     }
    // }

    import Tree from './Tree';

    export default {
        data: () => ({
            tree: {
                label: 'A cool folder',
                children: [
                    {
                        label: 'A cool sub-folder 1',
                        children: [
                            { label: 'A cool sub-sub-folder 1',
                                children: [
                                    { label: 'newwww', }
                                ]
                            },
                            { label: 'A cool sub-sub-folder 2' }
                        ]
                    },
                    { label: 'This one is not that cool' }
                ]
            }
        }),
        components: {
            Tree
        }
    };
</script>
