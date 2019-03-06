import {bindPage} from './camera.js';

$('#start-session').on('click', function() {
    $('#main-screen').addClass('screen-inactive');
    $('#session-screen').removeClass('screen-inactive');
    bindPage();
    $('#main').show();
});

$('button.return-to-main').click(function() {
    $('#main-screen').removeClass('screen-inactive');
    $('#session-screen').addClass('screen-inactive');
    $('#main').hide();
    $('#main').attr('disabled', true);
});

/*
 * decrease the counter of the current active exercise by one
 * does not decrease below 0
 * @returns {int} the new count
 */
function exerciseCountDown() {
    let activeCounter = $('#session-screen .exercise-item.active .counter');
    let count = parseInt(activeCounter.text());
    count = count > 0 ? count - 1 : 0;
    activeCounter.text(count);
    return count;
}

/**
 * switches to the next exercise
 * @effects should highlight the new exercise
 * @returns
 *      id of the next exercise
 *      or null if no more exercise are lined up
 */
function exerciseSwitchNext() {
    let currExc = $('#session-screen .exercise-item.active');
    let nextExc = $('#session-screen .exercise-item.active + .exercise-item');

    if (nextExc.length == 0) {
        return null;
    }

    currExc.removeClass('active');
    nextExc.addClass('active');
    return nextExc.attr('id');
}
