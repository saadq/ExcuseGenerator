(function() {

  var excuses = {
    '5 minutes': 
    [
      'Playing 2048 or seeing you 5 minutes earlier. Easiest decision in my life.',
      'I woke up late'
    ],
    '15 minutes': 
    [
      'I did not choose the late life, the late life chose me.',
      "I was entranced by Sam's lucious locks of hair."
    ],
    '30 minutes': 
    [
      "There was a traffic jam.", 
      'In this day and age, we should not need labels like "late".',
      "I was dreaming about a basketball game, and it went into overtime."
    ],
    '1 hour': 
    [
      'I got a flat tire',
      'Fuck day light savings.'
    ],
    '2 hours': 
    [
      'Such late, much sorry, pls no shout.',
      "I might be late, but I'm early according to Indian Standard Time."
    ],
    '8 hours': 
    [
      'Someone, ummm I mean something came up.',
      'I was too busy choosing between Anarchy and Democracy'
    ],
    '1 Day': 
    [
      "Wasn't there the beer festival today?",
      'My meth lab caught on fire.',
      'Im not going to come in anymore. I just got an email saying I could claim a portion of 100 million dollars from some prince in Africa.'
    ]

  };

  var timepicker = $('#timepicker');
  var times = _.keys(excuses);

  _.each(times, function(time) {
    timepicker.append('<option value="' + time + '">' + time + '</option>');
  });

$( "#timepicker" ).on('change', function() {
  var timePicked = $(this).val();
  var excusesForTime = excuses[timePicked];
  var excuse = _.sample(excusesForTime);
  $('#excuse-text').text(excuse);
});


})();
