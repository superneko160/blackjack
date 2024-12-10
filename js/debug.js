'use strict';

/**
 * 手札を表示
 * @param {array} hand 手札
 * @return {void}
 */
function printHand(hand) {
    for (const card of hand) {
        console.log(card.number);
    }
}

/**
 * すべてのプレイヤの手札を表示
 * @param {array} hands
 */
function printHands(hands) {
    for (const who in hands) {
        console.log(who);
        printHand(hands[who]);
    }
}
