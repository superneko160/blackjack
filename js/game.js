'use strict';

/**
 * スタンドを行う
 * @param {array} player_hand プレイヤーの手札
 * @param {array} dealer_hand ディーラーの手札
 * @param {array} deck 山札
 * @param {string} 結果（操作後の山札を返していないが最後なので不要）
 */
function playStand(player_hand, dealer_hand, deck) {
    // プレイヤーがスタンド時、ディーラーの手札合計値が17より小さい場合、17以上になるまでヒット
    while (sumHand(dealer_hand) < DEALER_HAND_LINE) {
        const card = deck.pop();
        dealer_hand.push(card);
        insertCardView(dealer_view_hand, card);
    }

    renderSumHand(dealer_view_sumhand, dealer_hand);

    // ディーラーがバーストしていないかチェック
    if (checkBurst(dealer_hand)) {
        return "Dearler Burst!: Yow win!"
    }

    // 最終的な手札の比較
    return compareHand(player_hand, dealer_hand);
}

/**
 * プレイヤーの手札の合計とディーラーの手札の合計を比較する
 * @param {array} player_hand プレイヤーの手札
 * @param {array} dealer_hand ディーラーの手札
 * @returns {string} 勝敗結果
 */
function compareHand(player_hand, dealer_hand) {

    const player_sum = sumHand(player_hand);
    const dealer_sum = sumHand(dealer_hand);

    if (player_sum > dealer_sum) {
        return `プレイヤ:${player_sum} ディーラ:${dealer_sum} You Win!`;
    }

    if (player_sum < dealer_sum) {
        return `プレイヤ:${player_sum} ディーラ:${dealer_sum} You Lose...`;
    }

    return `プレイヤ:${player_sum} ディーラ:${dealer_sum} draw`;
}

/**
 * バーストしていないか判定する
 * @param {array} hand 手札
 * @returns {boolean} バーストしているか
 */
function checkBurst(hand) {
    if (sumHand(hand) > BURST_LINE) {
        return true;
    }

    return false;
}

/**
 * 手札の合計値を返す
 * Aは 1 or 11 都合のいい数字として扱う
 * @param {array} hand 手札
 * @returns {number} 手札の合計値
 */
function sumHand(hand) {
    let sum = 0;

    for (const card of hand) {
        if (card.number === 11 || card.number === 12 || card.number === 13) {
            sum += 10;
        } else {
            sum += card.number;
        }
    }

    // 総合計が11点以下 かつ Aを1枚でも所持している場合、Aを+10として扱う
    // Aは11点扱いだが、すでに+1点されているので+10
    if (11 >= sum && isAceInHand(hand)) {
        sum += 10;
    }

    return sum;
}

/**
 * 手札のなかにAがあるか判定
 * @param {array} hand
 * @returns {boolean} Aの有無
 */
function isAceInHand(hand) {
    for (const card of hand) {
        if (card.number === 1) {
            return true;
        }
    }

    return false;
}
