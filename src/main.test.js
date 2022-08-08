import {shipFactory} from './main.js';

test('hitArr is correct length', () => {
    expect(shipFactory(5).hitArr.length).toBe(5);
});

test('hit changes the correct position', () => {
    const ship = shipFactory(5);
    ship.hit(2);
    expect(ship.hitArr[2]).toBe(true);
});

test('hit doesnt change other positions', () => {
    const ship = shipFactory(5);
    ship.hit(2);
    expect(ship.hitArr[0]).toBe(false);
    expect(ship.hitArr[1]).toBe(false);
    expect(ship.hitArr[3]).toBe(false);
    expect(ship.hitArr[4]).toBe(false);
})

test('sunk returns true when all positions are hit', () => {
    const ship = shipFactory(5);
    ship.hit(0);
    ship.hit(1);
    ship.hit(2);
    ship.hit(3);
    ship.hit(4);
    expect(ship.isSunk()).toBe(true);
});

test('sunk doesnt return true when all positions arent hit', () => {
    const ship = shipFactory(5);
    ship.hit(0);
    ship.hit(1);
    ship.hit(3);
    ship.hit(4);
    expect(ship.isSunk()).toBe(false);
});