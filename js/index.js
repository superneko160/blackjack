'use strict';

const dealer_view_hand = document.getElementById('dealer_hand');
const player_view_hand = document.getElementById('player_hand');
const dealer_view_sumhand = document.getElementById('dealer_sum_hand');
const player_view_sumhand = document.getElementById('player_sum_hand');
const hit_button = document.getElementById('hit');
const stand_button = document.getElementById('stand');

const dealer_hand = [];  // ディーラの手札
const player_hand = [];  // プレイヤの手札

// シャッフルした山札を用意
const deck = shuffleDeck(makeDeck());

// プレイヤとディーラにカードを２枚ずつ配る（山札トップからドローしていく）
for (let i = 0; i < 2; i++) {
    // ディーラの手札追加
    let card = deck.pop();
    dealer_hand.push(card);
    insertCardView(dealer_view_hand, card);
    renderSumHand(dealer_view_sumhand, dealer_hand);
    // プレイヤの手札追加
    card = deck.pop();
    player_hand.push(card);
    insertCardView(player_view_hand, card);
    renderSumHand(player_view_sumhand, player_hand);
}

/* ======== ここまでゲーム準備 ======== */

// ヒット押下時
document.getElementById('hit').addEventListener('click', () => {
    const card = deck.pop();
    player_hand.push(card);
    insertCardView(player_view_hand, card);
    renderSumHand(player_view_sumhand, player_hand);

    if (checkBurst(player_hand)) {
        renderMessage('You Burst!: You Lose...');
        disabledButtons([hit_button, stand_button]);
    }
});

// スタンド押下時
document.getElementById('stand').addEventListener('click', () => {
    renderMessage(playStand(player_hand, dealer_hand, deck));
    disabledButtons([hit_button, stand_button]);
});
