openprojectApp
  .filter('historicalDateKind', function() {
    return function(object, dateOption) {
      if (!object.does_historical_differ()) return;

      var newDate = object[dateOption];
      var oldDate = object.historical()[dateOption];

      if (oldDate && newDate) {
        return (newDate < oldDate ? 'postponed' : 'preponed');
      }
      return "changed";
    };
  })

  // timelines
  .filter('getOptionColumn', function() {
    var map = {
      "type": "getTypeName",
      "status": "getStatusName",
      "responsible": "getResponsibleName",
      "assigned_to": "getAssignedName",
      "project": "getProjectName"
    };

    return function(object, option) {
      switch(option) {
        case 'start_date':
          return object.start_date;
        case 'due_date':
          return object.due_date;
        default:
          return object[map[option]]();
      }
    };
  })

  // work packages
  .filter('columnContent', function(){
    return function(object, option) {
      return object[option]; // TODO formatting by type
    };
  })

  .filter('columnNamedChildContent', function(){
     // TODO RS: This is just a temporary solution to display some text for child objects
    return function(object, option) {
      var p = object[option];
      switch(typeof(p)) {
        case 'string':
          return p;
        case 'object':
          return p['name'];
        default:
          return 'None';
      }
    };
  });