import React from "react";

function Desc() {
    return (
        <div>
            <h1> Conway's Game of Life </h1>

            <p>    <h3> Rules </h3> <br />
                The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, live or dead (or populated and unpopulated, respectively). Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:
                <ol>
                    <li>Any live cell with fewer than two live neighbours dies, as if by underpopulation.</li>
                    <li>Any live cell with two or three live neighbours lives on to the next generation.</li>
                    <li>Any live cell with more than three live neighbours dies, as if by overpopulation.</li>
                    <li>Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</li>
                </ol>
                <br />
                These rules, which compare the behaviour of the automaton to real life, can be condensed into the following:
                <ol>
                    <li>Any live cell with two or three live neighbours survives.</li>
                    <li>Any dead cell with three live neighbours becomes a live cell.</li>
                    <li>All other live cells die in the next generation. Similarly, all other dead cells stay dead.</li>
                </ol>
                The initial pattern constitutes the seed of the system. <br />
                The first generation is created by applying the above rules simultaneously to every cell in the seed, live or dead; births and deaths occur simultaneously. <br />
                Each generation is a pure function of the preceding one. The rules continue to be applied repeatedly to create further generations.
                <br />
                Read more <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"> here </a> .
            </p>

            <p>
                <h3> Instructions to play: </h3>
                <ul>
                    <li>The Interval textfield is where you will enter the time interval in which you want to see the changing states.</li>
                    <li>Use the Random button to generate a random pattern on the Board.</li>
                    <li>The Run button starts the game.</li>
                    <li>The Stop button pauses the process so you can take a look at the patterns found.</li>
                    <li>The Clear button clears the Board and you can run the game anew.</li>
                </ul>
            </p>
            <br />
            <br />
        </div>
    )
}

export default Desc;