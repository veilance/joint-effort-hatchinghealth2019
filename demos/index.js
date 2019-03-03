import { ModelTrainingYielder } from "@tensorflow/tfjs-layers/dist/base_callbacks";

$('#start-session').on('click', function() {
    console.log('start-session: clicked');
    $('#main-screen').addClass('screen-inactive');
    $('#excerise-screen').removeClass('screen-inactive');




    $('#exercise-1').click(function() {
        $('#myModal').style.display = "block";
    })
});