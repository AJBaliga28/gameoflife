// import React, { Component } from "react";
// import "./GAME.css";

// const cell_size = 20;
// const HEIGHT = 800;
// const WIDTH = 800;
// let x, y;

// class Cell extends React.Component {
//     render() {
//         const { x, y } = this.props;
//         return (
//                 <div className="Cell"
//                     style={{ left: `${cell_size * x + 1}px`,
//                     top: `${cell_size * y + 1}px`, 
//                     width: `${cell_size - 1}px`, 
//                     height: `${cell_size - 1}px` 
//                 }} />
//         );
//     }
// }

// class GAME extends React.Component {

//     constructor() {
//         super();
//         this.rows = HEIGHT / cell_size;
//         this.cols = WIDTH / cell_size;
//         this.board = this.makeEmptyBoard();
//     };

//     state = { 
//         cells: [],
//         isRunning: false,
//         interval: 100
//     }


//     //Creating an empty board
//     makeEmptyBoard() {
//         let board = [];
//         for (y = 0; y < this.rows; y++) {
//             board[y] = [];
//             for (x = 0; x < this.cols; x++) {
//                 board[y][x] = false;
//             }
//         }
//         return board;
//     }


//     //To find the specific box selected
//     getElementOffset() {
//         const rect = this.boardRef.getBoundingClientRect();
//         const doc = document.documentElement;
//         return {
//             x: (rect.left + window.pageXOffset) - doc.clientLeft,
//             y: (rect.top + window.pageYOffset) - doc.clientTop,
//         };
//     }

//     //Creating the cells
//     makeCells() {
//         let cells = [];
//         for (y = 0; y < this.rows; y++) {
//             for (x = 0; x < this.cols; x++) {
//                 if (this.board[x][y]) {
//                     cells.push({ x, y });
//                 }
//             }
//         }
//         return cells;
//     }

//     //Function fro handling the clicks
//     handleClick = (event) => {
//         const elemOffset = this.getElementOffset();
//         const offsetX = event.clientX - elemOffset.x;
//         const offsetY = event.clientY - elemOffset.y;

//         x = Math.floor(offsetX / cell_size);
//         y = Math.floor(offsetY / cell_size);

//         if (x >= 0 && x <= this.cols && y >= 0 && y <= this.rows) {
//             this.board[y][x] = !this.board[y][x];
//         }
//         this.setState({ cells: this.makeCells() });
//     }

//     render() {
//         const {cells} = this.state;
//         return (
//             <div>
//                 <div className="Board"
//                     style={{ width: WIDTH, height: HEIGHT, backgroundSize: `${cell_size}px ${cell_size}px` }}
//                     onClick={this.handleClick}
//                     ref={(n) => { this.boardRef = n; }}>
//                     {cells.map(cell => (
//                         <Cell x={cell.x} y={cell.y} key={`${cell.x},${cell.y}`} />
//                     ))}
//                 </div>
//                 <div className="controls">
//                     Update every <input value={this.state.interval} 
//                     onChange={this.handleIntervalChange} /> msec
//                     {  isRunning ? 
//                         <button className="button" onClick={this.stopGame}> Stop </button> : 
//                         <button className="button" onClick={this.runGame}> Start </button> 
//                     }
//                 </div>
//             </div>
//         )
//     };

//     runGame = ()=>{
//         this.setState({isRunning: true});
//         this.runIteration();
//     }

//     stopGame = () => {
//         this.setState({isRunning: false});
//         if(this.timeoutHandler) {
//             window.clearTimeout(this.timeoutHandler);
//             this.timeoutHandler = null;
//         }
//     }

//     handleIntervalChange = (event) => {
//         let newInterval = event.target.value;
//         this.setState({interval: newInterval});
//     }

//     runIteration(){
//         console.log("Running Iteration");
//         let newBoard = this.makeEmptyBoard();
//         this.board = newBoard;
//         this.setState({ cells: this.makeCells() });
//         this.timeoutHandler = window.setTimeout(() => {
//             this.runIteration();
//         }, this.state.interval);
//     }

//     calculateNeighbors(board, x, y){
//         let neighbors = 0;
//         const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
//         for (let i = 0; i < dirs.length; i++) {
//             const dir = dirs[i];
//             let y1 = y + dir[0];
//             let x1 = x + dir[1];

//             if (x1 >= 0 && x1 < this.cols && y1 >= 0 && y1 < this.rows && board[y1][x1]) {
//                 neighbors++;
//             }
//         }

//         return neighbors;
//     }

// }

// export default GAME;




import React from 'react';
import './Game.css';


const CELL_SIZE = 20;
const WIDTH = 800;
const HEIGHT = 600;


class Cell extends React.Component {

    render() {
        const { x, y } = this.props;
        return (
            <div className="Cell" style={{
                left: `${CELL_SIZE * x + 1}px`,
                top: `${CELL_SIZE * y + 1}px`,
                width: `${CELL_SIZE - 1}px`,
                height: `${CELL_SIZE - 1}px`,
            }} />
        );
    }
}


class Game extends React.Component {

    constructor() {
        super();
        this.rows = HEIGHT / CELL_SIZE;
        this.cols = WIDTH / CELL_SIZE;

        this.board = this.makeEmptyBoard();
    }

    state = {
        cells: [],
        isRunning: false,
        interval: 100,
    }

    makeEmptyBoard() {
        let board = [];
        for (let y = 0; y < this.rows; y++) {
            board[y] = [];
            for (let x = 0; x < this.cols; x++) {
                board[y][x] = false;
            }
        }

        return board;
    }

    getElementOffset() {
        const rect = this.boardRef.getBoundingClientRect();
        const doc = document.documentElement;

        return {
            x: (rect.left + window.pageXOffset) - doc.clientLeft,
            y: (rect.top + window.pageYOffset) - doc.clientTop,
        };
    }

    makeCells() {
        let cells = [];
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                if (this.board[y][x]) {
                    cells.push({ x, y });
                }
            }
        }

        return cells;
    }

    handleClick = (event) => {

        const elemOffset = this.getElementOffset();
        const offsetX = event.clientX - elemOffset.x;
        const offsetY = event.clientY - elemOffset.y;
        
        const x = Math.floor(offsetX / CELL_SIZE);
        const y = Math.floor(offsetY / CELL_SIZE);

        if (x >= 0 && x <= this.cols && y >= 0 && y <= this.rows) {
            this.board[y][x] = !this.board[y][x];
        }

        this.setState({ cells: this.makeCells() });
    }

    runGame = () => {
        this.setState({ isRunning: true });
        this.runIteration();
    }

    stopGame = () => {
        this.setState({ isRunning: false });
        if (this.timeoutHandler) {
            window.clearTimeout(this.timeoutHandler);
            this.timeoutHandler = null;
        }
    }

    runIteration() {
        let newBoard = this.makeEmptyBoard();

        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                let neighbors = this.calculateNeighbors(this.board, x, y);
                if (this.board[y][x]) {
                    if (neighbors === 2 || neighbors === 3) {
                        newBoard[y][x] = true;
                    } else {
                        newBoard[y][x] = false;
                    }
                } else {
                    if (!this.board[y][x] && neighbors === 3) {
                        newBoard[y][x] = true;
                    }
                }
            }
        }

        this.board = newBoard;
        this.setState({ cells: this.makeCells() });

        this.timeoutHandler = window.setTimeout(() => {
            this.runIteration();
        }, this.state.interval);
    }

    /**
     * Calculate the number of neighbors at point (x, y)
     * @param {Array} board 
     * @param {int} x 
     * @param {int} y 
     */
    calculateNeighbors(board, x, y) {
        let neighbors = 0;
        const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
        for (let i = 0; i < dirs.length; i++) {
            const dir = dirs[i];
            let y1 = y + dir[0];
            let x1 = x + dir[1];

            if (x1 >= 0 && x1 < this.cols && y1 >= 0 && y1 < this.rows && board[y1][x1]) {
                neighbors++;
            }
        }

        return neighbors;
    }

    handleIntervalChange = (event) => {
        this.setState({ interval: event.target.value });
    }

    handleClear = () => {
        this.board = this.makeEmptyBoard();
        this.setState({ cells: this.makeCells() });
    }

    handleRandom = () => {
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                this.board[y][x] = (Math.random() >= 0.5);
            }
        }

        this.setState({ cells: this.makeCells() });
    }

    render() {
        const { cells, interval, isRunning } = this.state;
        return (
            <div>
                <div className="Board"
                    style={{ width: WIDTH, height: HEIGHT, backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`}}
                    onClick={this.handleClick}
                    ref={(n) => { this.boardRef = n; }}>

                    {cells.map(cell => (
                        <Cell x={cell.x} y={cell.y} key={`${cell.x},${cell.y}`}/>
                    ))}
                </div>
            
                <br />
                <br />
                    
                <div className="controls">
                    Update every <input value={this.state.interval} onChange={this.handleIntervalChange} /> msec
                    {isRunning ?
                        <button className="button" onClick={this.stopGame}>Stop</button> :
                        <button className="button" onClick={this.runGame}>Run</button>
                    }
                    <button className="button" onClick={this.handleRandom}>Random</button>
                    <button className="button" onClick={this.handleClear}>Clear</button>
                </div>
                <br />
                <br />
            </div>
        );
    }
}


export default Game;