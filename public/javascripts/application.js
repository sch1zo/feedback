$(function () {

  //language_switcher
  $('#language_switcher select').change(function () {
    this.form.submit();
  });
  $('#language_switcher input').hide();
  
// Sheets Search
  // Search form.
  $('#sheets_search').submit(function () {
    $.get(this.action, $(this).serialize(), null, 'script');
    return false;
  });
  
  //yeah thats realy heavy on requests and only works on the input felds
  $('#sheets_search input').keyup(function () {
    $.get($('#sheets_search').attr('action'),  $('#sheets_search').serialize(), null, 'script');
    return false;
  });
  $("#sheets_search input[type='radio']").change(function () {
    $.get($('#sheets_search').attr('action'),  $('#sheets_search').serialize(), null, 'script');
    return false;
  });
  $("#sheets_search select").change(function () {
    $.get($('#sheets_search').attr('action'),  $('#sheets_search').serialize(), null, 'script');
    return false;
  });


  //paginatation
  //$('.pagination a').live('click', 
  //  function () {
  //    $.getScript(this.href);
  //    return false;
  //  }
  //);

// user search
  // ajax scopes
  //$('#roles li a').live('click',
  //  function (e) {
  //    $.getScript(this.href);
  //    return false;
  //  }
  //);
  //$('#users_search').submit(function () {
  //  $.get(this.action, $(this).serialize(), null, 'script');
  //  return false;
  //});
  //
  ////yeah thats realy heavy on requests and only works on the input felds
  //$('#users_search input').keyup(function () {
  //  $.get($('#users_search').attr('action'),  $('#users_search').serialize(), null, 'script');
  //  return false;
  //});

});

