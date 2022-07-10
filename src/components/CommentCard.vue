<template>
    <div class="card">
        <p class="date"> {{this.date}} </p>
        
        <section class="user-info">
            <img src="../assets/images/pfp.png" class="pfp" alt="user profile"/>
            <button class="crown" title="Verified user"> <font-awesome-icon icon="fa-solid fa-crown"/> </button>
            <h4 class="name"> {{this.userName}} </h4>
        </section>
        
        <section class="content">
            <h3 class="title"> {{this.title}} </h3>
            <p class="text"> {{this.text}} </p>

            <section class="score-sect">
                <button class="btn" :selected="this.vote_state == 'up' ? 'selected' : ''" @click="vote('up')"> <font-awesome-icon icon="fa-solid fa-angle-up"/> </button>
                <span class="score"> {{this.score_state}} </span>
                <button class="btn" :selected="this.vote_state == 'down' ? 'selected' : ''" @click="vote('down')"> <font-awesome-icon icon="fa-solid fa-angle-down"/> </button>
            </section>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'CommentCard',
        components: {
        },
        methods: {
            vote(type) {
                if(this.vote_state == type) {
                    if(this.vote_state == 'down')
                        this.score_state++;
                    else if(this.vote_state == 'up')
                        this.score_state--;

                    this.vote_state = 'none';
                    return;
                }

                if(type == 'down')
                    this.score_state -= this.vote_state === 'none' ? 1 : 2;
                else if(type == 'up')
                    this.score_state += this.vote_state === 'none' ? 1 : 2;

                this.vote_state = type;
            }
        },
        props: {
            pfp: String,
            userName: String,
            title: String,
            text: String,
            score: Number,
            date: String,
            voted: {
                validator(val) {
                    return ['up', 'down', 'none'].includes(val);
                }
            }
        },
        data() {
            return {
                vote_state: 'none',
                score_state: 0
            }
        },
        mounted() {
            this.vote_state = this.voted;
            this.score_state = this.score;
        }
    }
</script>

<style lang="scss"> 
    $crown-clr:  gold;
    $pfp-size: 10em;
    $card-clr: hsl(345, 4%, 10%);
    $text-clr: white;
    $text-size: 1em;
    $upvote-clr: hsl(91, 100%, 40%);
    $downvote-clr: hsl(5, 100%, 50%);

    .card {
        width: 100%;
        display: flex;
        color: $text-clr;
        font-size: $text-size;
        background-color: $card-clr;
        position: relative;
        // border: 1px solid white;

        .date {
            font-style: italic;
            position: absolute;
            margin: 0;
            padding: 0;
            right: 1em;
            top: 1em;
        }

        .user-info {
            padding: 1em;
            // background-color: red;
            background-color: darken($card-clr, 3);
            text-align: center;
            position: relative;

            .crown {
                background: none;
                border: 0;
                padding: 0;
                margin: 0;
                color: $crown-clr;
                position: absolute;
                left: 6%;
                top: 2%;
                transform: rotate(-38deg);
                font-size: calc(#{$pfp-size} / 4);
            }

            .pfp {
                border-radius: 50%;
                width: $pfp-size;
                height: $pfp-size;
                transition: 0.5s;
            }

            .pfp:hover {
                width: calc(#{$pfp-size} + 1em);
                height: calc(#{$pfp-size} + 1em);
            }

            .name {
                font-size: 1em;
                font-weight: 0;
                padding: 0;
                margin: 0;
            }
        }
        
        .content {
            padding: 0 1em;
            padding-right: 3.3em;

            .title {
                margin: 1em 0 0 0;
            }

            .text {
                word-wrap: break-word;
                word-break: break-all;
                margin: 0;
            }
        }

        .score-sect {
            background-color: darken($card-clr, 3);
            display: grid;
            grid-template-columns: 1fr;
            text-align: center;
            position: absolute;
            border-radius: 1em;
            right: 1em;
            top: 50%;
            transform: translate(0, -50%);
            overflow: hidden;
            width: 4ch;
            // top: 4em;

            .score {
                margin: 0.5em 0;
                font-size: 1.2em;
                max-width: 4ch;
            }

            .btn {
                border: none;
                background: hsl(0, 0%, 30%);
                font-size: 1.5em;
                // color: darken($text-clr, 30);
            }

            .btn:first-of-type {
                border-top-left-radius: 1em;
                border-top-right-radius: 1em;
            }

            .btn:last-of-type {
                border-bottom-left-radius: 1em;
                border-bottom-right-radius: 1em;
            }

            .btn:first-of-type[selected="selected"] {
                background: $upvote-clr;
            }

            .btn:last-of-type[selected="selected"] {
                background: $downvote-clr;
            }

            .btn:first-of-type:hover {
                background: $upvote-clr;
                opacity: 0.7;
            }

            .btn:last-of-type:hover {
                background: $downvote-clr;
                opacity: 0.7;
            }
        }
    }
</style>