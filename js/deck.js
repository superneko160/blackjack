'use strict';

/**
 * トランプ（山札）作成
 * @returns {array} 山札
 */
function makeDeck() {
    const deck = [];

    // カードを作成し、山札に追加
    for (let i = 1; i <= 13; i++) {
        for (const suit of SUITS) {
            const card = {};
            card.suit = suit;
            card.number = i;
            card.image = `images/${suit}/${suit}${i}.png`;
            deck.push(card);
        }
    }

    return deck;
}

/**
 * 山札をシャッフル
 * @param {array} deck 山札
 * @returns {array} 山札
 */
function shuffleDeck(deck) {

    for (const [index, _] of deck.entries()) {
        const tmpIndex = Math.floor(Math.random() * deck.length);  // ランダムなインデックス
        const tmpNum = deck[index];  // 現在の要素を一時的に保存
        deck[index] = deck[tmpIndex];  // 現在の要素とランダムな要素を交換
        deck[tmpIndex] = tmpNum;  // 一時的に保存した要素をランダムな位置に配置
    }

    return deck;
}
