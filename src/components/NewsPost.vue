<template>
    <article class="post">
        <span class="date"> 6/7/2022 10:36 </span>
        <h2 class="title"> Hello, World! </h2>
        
        <section class="content">
            <div class="image-box">
                <div class="info"> image 1/1 </div>
                <div class="images">
                    <img class="image" alt="news" src="../assets/images/breaking_news.jpg"/>
                </div>
            </div>

            <p class="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Eum, saepe dolore porro ipsum maiores voluptates quo id rem. 
                Necessitatibus eligendi excepturi magnam accusantium assumenda possimus ducimus ut corporis, 
                inventore minus!
            </p>
        </section>

        <section class="footer">
            <div class="metadata">

            </div>

            <nav class="share-links">
            </nav>
        </section>
    </article>
</template>

<script>
    export default {
        name: 'NewsPost'
    }
</script>

<style lang="scss">
    $post-bg: hsl(345, 4%, 10%);
    $text-clr: white;
    $text-size: 1em;

    .post {
        color: $text-clr;
        background-color: $post-bg;
        position: relative;
        font-size: $text-size;
        padding: 1em;

        .date {
            position: absolute;
            right: 0.5em;
            top: 0.5em;
        }

        .title {
            margin: 0;
            text-align: center;
            font-size: 2em;
        }

        .content {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
        }

        .image-box {
            width: 50%;
            height: 40%;
            position: relative;

            .info {
                background-color: darken($post-bg, 2.2);
                padding: 0.2em 0;
                text-align: center;
                position: absolute;
                z-index: 1;
                width: 100%;
                opacity: 0.5;
            }

            .images {
                width: 100%;
                height: 100%;
                position: relative;
                background-color: darken($post-bg, 2);

                .image {
                    width: 100%;
                    height: 100%;
                }
            }

            .images::before {
                content: '<';
                position: absolute;
                background: linear-gradient(to right, darken($post-bg, 2), $post-bg);
                top: 0;
                left: 0;
                height: 100%;
                width: 2em;
                display: flex;
                justify-content: center;
                align-items: center;
                opacity: 0.2;
            }

            .images::after {
                content: '>';
                position: absolute;    
                background: linear-gradient(to left, darken($post-bg, 2), $post-bg);
                right: 0;
                top: 0;
                height: 100%;
                width: 2em;
                display: flex;
                justify-content: center;
                align-items: center;
                opacity: 0.2;
            }

            .images:hover .images::before {
                opacity: 1;
            }
        }
    }
</style>