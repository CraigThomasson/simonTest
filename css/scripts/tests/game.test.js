/**
 * @jest-environment jsdom
 */

const { game, newGame, showScore, addTurn } = require("../game");

// code allow test to run on index.html page
beforeAll(()=> {
    let fs = require("fs"); 
    let filecontents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(filecontents);
    document.close();
});
 
describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    test("currentgame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });
    test("playerMoves key exists", () => {
        expect("playerMoves" in game).toBe(true);
    });
    test("choices key exists", () => {
        expect("choices" in game).toBe(true);
    });
    test("choices contains correct ids", () => {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    });
});

describe("newGame works correctly", () => {
    beforeAll(() => {
        game.score = 42;
        game.playerMoves.push("42");
        game.currentGame.push("42");
        document.getElementById("score").innerText = "42"
        newGame();
    });
    test("should set game score to zero", () => {
        expect(game.score).toEqual(0);
    });
    test("should clear playerMoves array", () => {
         expect(game.playerMoves).toEqual([]);
    });
    test("should be one move in the computers game array", () => {
        expect(game.currentGame.length).toBe(1);
   });
    test("should display 0 for element with id of score", () => {
        expect(document.getElementById("score").innerText).toEqual(0);
    });
});