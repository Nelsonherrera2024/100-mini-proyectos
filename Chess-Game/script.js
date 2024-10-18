html,
body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    font-family: sans-serif;
}

div * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

#turn {
    max-width: 451px;
    max-height: 30px;
    width: 100%;
    height: 100%;
    position: relative;
    float: right;
    border-radius: 5px;
    border: 1px solid rgb(0, 0, 0);
    border-style: inset;
    text-align: center;
    padding: 5px 0 0 0;
    background: #fff;
    transition: .85s linear;
}

.turnhighlight {
    background: #5cb85c !important;
    color: #fff;
}

#game {
    max-width: 504px;
    max-height: 504px;
    width: 100%;
    height: 100%;
    position: relative;
    margin: 20px auto;
}

.cellprefix {
    width: 100%;
    height: 100%;
    max-width: 50px;
    max-height: 50px;
    float: left;
    margin: 3px;
    padding: 15px 0 0 20px;
}

.gamecell {
    border: 1px solid #000;
    width: 100%;
    height: 100%;
    max-width: 50px;
    max-height: 50px;
    float: left;
    margin: 3px;
    transition: all 0.5s ease-in-out;
    border-radius: 5px;
    font-size: 30pt;
    padding: 0 0 0 6px;
    cursor: pointer;
    z-index: 1;
}

.grey {
    background: rgba(128, 128, 128, 0.801);
}

.green {
    background: rgb(65, 161, 73) !important;
}

.neonblue_txt {
    animation: neonBlueText 1.5s ease-in-out infinite alternate;
}

.neonorange_txt {
    animation: neonOrangeText 1.5s ease-in-out infinite alternate;
}

.neongreen_txt {
    animation: neonGreenText 1.5s ease-in-out infinite alternate;
}

/* --- N E O N    T E X T --- */
@keyframes neonBlueText {
    from {
        text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #228dff,
            0 0 70px #228dff, 0 0 80px #228dff, 0 0 100px #228dff, 0 0 150px #228dff;
    }

    to {
        text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #228dff,
            0 0 35px #228dff, 0 0 40px #228dff, 0 0 50px #228dff, 0 0 75px #228dff;
    }
}

@keyframes neonOrangeText {
    from {
        text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff9900,
            0 0 70px #ff9900, 0 0 80px #ff9900, 0 0 100px #ff9900, 0 0 150px #ff9900;
    }

    to {
        text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff9900,
            0 0 35px #ff9900, 0 0 40px #ff9900, 0 0 50px #ff9900, 0 0 75px #ff9900;
    }
}

@keyframes neonGreenText {
    from {
        text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #b6ff00,
            0 0 70px #b6ff00, 0 0 80px #b6ff00, 0 0 100px #b6ff00, 0 0 150px #b6ff00;
    }

    to {
        text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #b6ff00,
            0 0 35px #b6ff00, 0 0 40px #b6ff00, 0 0 50px #b6ff00, 0 0 75px #b6ff00;
    }
}

/* --- N E O N --- */

/* animation: neon 1.5s ease-in-out infinite alternate; */

@keyframes neonBlue {
    from {
        box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #228dff,
            0 0 70px #228dff, 0 0 80px #228dff, 0 0 100px #228dff, 0 0 150px #228dff;
    }

    to {
        box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #228dff,
            0 0 35px #228dff, 0 0 40px #228dff, 0 0 50px #228dff, 0 0 75px #228dff;
    }
}

.shake-little {
    display: inline-block;
    transform-origin: center center;
}

.shake-freeze,
.shake-constant.shake-constant--hover:hover,
.shake-trigger:hover .shake-constant.shake-constant--hover {
    animation-play-state: paused;
}

.shake-freeze:hover,
.shake-trigger:hover .shake-freeze,
.shake-little:hover,
.shake-trigger:hover .shake-little {
    animation-play-state: running;
}

@keyframes shake-little {
    2% {
        transform: translate(1px, 0px) rotate(0.5deg);
    }

    4% {
        transform: translate(1px, 0px) rotate(0.5deg);
    }

    6% {
        transform: translate(1px, 1px) rotate(0.5deg);
    }

    8% {
        transform: translate(0px, 0px) rotate(0.5deg);
    }

    10% {
        transform: translate(1px, 0px) rotate(0.5deg);
    }

    12% {
        transform: translate(0px, 0px) rotate(0.5deg);
    }

    14% {
        transform: translate(1px, 1px) rotate(0.5deg);
    }

    16% {
        transform: translate(0px, 1px) rotate(0.5deg);
    }

    18% {
        transform: translate(1px, 0px) rotate(0.5deg);
    }

    20% {
        transform: translate(0px, 1px) rotate(0.5deg);
    }

    22% {
        transform: translate(0px, 0px) rotate(0.5deg);
    }

    24% {
        transform: translate(0px, 0px) rotate(0.5deg);
    }

    26% {
        transform: translate(1px, 1px) rotate(0.5deg);
    }

    28% {
        transform: translate(0px, 1px) rotate(0.5deg);
    }

    30% {
        transform: translate(0px, 0px) rotate(0.5deg);
    }

    32% {
        transform: translate(1px, 1px) rotate(0.5deg);
    }

    34% {
        transform: translate(0px, 1px) rotate(0.5deg);
    }

    36% {
        transform: translate(0px, 1px) rotate(0.5deg);
    }

    38% {
        transform: translate(0px, 0px) rotate(0.5deg);
    }

    40% {
        transform: translate(1px, 0px) rotate(0.5deg);
    }

    42% {
        transform: translate(0px, 1px) rotate(0.5deg);
    }

    44% {
        transform: translate(0px, 0px) rotate(0.5deg);
    }

    46% {
        transform: translate(1px, 0px) rotate(0.5deg);
    }

    48% {
        transform: translate(0px, 0px) rotate(0.5deg);
    }

    50% {
        transform: translate(1px, 1px) rotate(0.5deg);
    }

    52% {
        transform: translate(0px, 1px) rotate(0.5deg);
    }

    54% {
        transform: translate(0px, 1px) rotate(0.5deg);
    }

    56% {
        transform: translate(0px, 0px) rotate(0.5deg);
    }

    58% {
        transform: translate(1px, 0px) rotate(0.5deg);
    }

    60% {
        transform: translate(0px, 1px) rotate(0.5deg);
    }

    62% {
        transform: translate(0px, 0px) rotate(0.5deg);
    }

    64% {
        transform: translate(1px, 0px) rotate(0.5deg);
    }

    66% {
        transform: translate(0px, 0px) rotate(0.5deg);
    }

    68% {
        transform: translate(1px, 1px) rotate(0.5deg);
    }

    70% {
        transform: translate(0px, 1px) rotate(0.5deg);
    }

    72% {
        transform: translate(0px, 0px) rotate(0.5deg);
    }

    74% {
        transform: translate(1px, 0px) rotate(0.5deg);
    }

    76% {
        transform: translate(0px, 0px) rotate(0.5deg);
    }

    78% {
        transform: translate(1px, 1px) rotate(0.5deg);
    }

    80% {
        transform: translate(0px, 1px) rotate(0.5deg);
    }

    82% {
        transform: translate(0px, 0px) rotate(0.5deg);
    }

    84% {
        transform: translate(0px, 0px) rotate(0.5deg);
    }

    86% {
        transform: translate(1px, 1px) rotate(0.5deg);
    }

    88% {
        transform: translate(0px, 1px) rotate(0.5deg);
    }

    90% {
        transform: translate(0px, 0px) rotate(0.5deg);
    }

    92% {
        transform: translate(0px, 0px) rotate(0.5deg);
    }

    94% {
        transform: translate(1px, 1px) rotate(0.5deg);
    }

    96% {
        transform: translate(0px, 1px) rotate(0.5deg);
    }

    98% {
        transform: translate(0px, 0px) rotate(0.5deg);
    }
}

@keyframes shake-constant {
    0% {
        transform: translate(0, 0);
    }

    25% {
        transform: translate(-1px, 0);
    }

    50% {
        transform: translate(1px, 0);
    }

    75% {
        transform: translate(-1px, 0);
    }

    100% {
        transform: translate(0, 0);
    }
}

.shake-constant {
    display: inline-block;
    animation: shake-constant 0.5s infinite linear;
}

/* -- Override -- */
.animate:hover {
    animation: neonBlue 1.5s ease-in-out infinite alternate;
}

                    
       


