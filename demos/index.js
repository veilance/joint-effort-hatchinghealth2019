$('#start-session').on('click', function() {
    console.log('start-session: clicked');
    $('#main-screen').addClass('screen-inactive');
    $('#excerise-screen').removeClass('screen-inactive');
});