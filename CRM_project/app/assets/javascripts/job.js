function ready(){
  $('#job_purchase_date').datepicker({dateFormat: 'yy-mm-dd'});
  $('#job_scheduled_date').datepicker({dateFormat: 'yy-mm-dd'});
};

$(document).ready(ready);
$(document).on('page:load', ready);
