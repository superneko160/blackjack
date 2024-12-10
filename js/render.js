'use strict';

/**
 * カードをHTML上に追加
 * @param {HTMLElement} view HTML上の手札の領域
 * @param {Card} card カード
 */
function insertCardView(view, card) {
    // li要素作成
    const li = document.createElement('li');
    li.id = `${card.suit}${card.number}`;
    // img要素作成
    const img = document.createElement('img');
    img.src = `./images/${card.suit}/${card.suit}${card.number}.png`;
    img.alt = `${card.suit}${card.number}`;
    img.width = 100;
    img.height = 200;
    img.style.margin = '2px';
    // 要素追加
    view.appendChild(li);
    document.getElementById(`${card.suit}${card.number}`).appendChild(img);
}

/**
 * メッセージをHTML上に表示
 * @param {string} message
 */
function renderMessage(message) {
    setTimeout(() => {
        alert(message);
    }, 500);
}

/**
 * 手札の合計値をHTML上に表示
 * @param {HTMLElement} view HTML上の出力箇所
 * @param {array} hand 手札
 */
function renderSumHand(view, hand) {
    view.textContent = sumHand(hand);
}

/**
 * ボタンの無効化
 * @param {array<HTMLElement>} buttons HTML上のボタン
 */
function disabledButtons(buttons) {
    for (const button of buttons) {
        button.disabled = true;
    }
}
