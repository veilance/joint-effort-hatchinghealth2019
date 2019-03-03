import { ModelTrainingYielder } from "@tensorflow/tfjs-layers/dist/base_callbacks";

$('#start-session').on('click', function() {
    console.log('start-session: clicked');
    $('#main-screen').addClass('screen-inactive');
    $('#session-screen').removeClass('screen-inactive');

    $('#exercise-1').click(function() {
        console.log("Ex1 clicked");
        $('#myModal').style.display = "block";
    })
});

$('button.return-to-main').array.forEach((btn) => {
    btn.on('click', function() {
        $('#main-screen').removeClass('screen-inactive');
        $('#session-screen').addClass('screen-inactive');
    });
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
