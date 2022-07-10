<template>
    <nav class="nav-bar">
        <h1 class="nav-title"> My First Vue App </h1>
        <a class="nav-item" href="/"> Home </a>
        <a class="nav-item" href="/about"> About </a>
        <a class="nav-item" href="/blog"> Blog </a>
    </nav>
</template>

<script>
    export default {
        name: 'NavBar'
    }
</script>

<style lang="scss">
    $link-hover-clrs: (hsl(60, 100%, 50%), hsl(13, 100%, 50%), hsl(331, 100%, 50%), hsl(194, 100%, 50%), hsl(91, 100%, 50%));
    $link-size: 1.5em;
    $link-size-large: 2em;

    $nav-bg: hsl(345, 4%, 5%);
    $text-clr: white;

    .nav-bar {
        margin: 0;
        padding: 0.7rem;
        background-color: $nav-bg;
        position: relative;

        .nav-title {
            transition: 0.3s;
            margin: 0 0.5em;
            font-size: $link-size;
            color: $text-clr;
            overflow-x: hidden;
            position: absolute;
            text-decoration: none;
            right: 0; 
            top: 50%;
            transform: translate(0, -50%);
        }

        .nav-item {
            transition: 0.3s;
            margin: 0 0.5em;
            font-size: $link-size;
            color: $text-clr;
            overflow-x: hidden;
            position: relative;
            text-align: center;
            text-decoration: none;
        }

        .nav-item::after {
            transition: 0.3s;
            content: '';
            background-color: rgb(255, 255, 255);
            position: absolute;
            z-index: 1;
            top: 105%;
            left: calc(50% - 0.1ch);
            transform: translate(-50%, 0);
            width: 100%;
            height: 0.01em;
            // filter: blur(1px);
            opacity: 0;
        }

        .nav-item:hover {
            font-size: $link-size-large;
        }

        .nav-item:hover::after {
            opacity: 1;
        }

        @for $i from 1 to length($link-hover-clrs) {
            .nav-item:nth-child(#{$i}):hover {
                color: nth($link-hover-clrs, $i);
            }

            .nav-item:nth-child(#{$i})::after {
                background-color: nth($link-hover-clrs, $i);
            }
        }
    }
</style>