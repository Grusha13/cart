
  $(document).ready(function(){
  const formIds = ["#form_phone_1", "#form_phone_2", "#form_phone_3"];
    formIds.forEach(id => {
    const $input = $(id);
    if ($input.length) {
        window.intlTelInput($input[0], {
            initialCountry: "auto",
            separateDialCode: true,
            geoIpLookup: function (callback) { 
              $.get("https://ipapi.co/json", function (data) {
                callback(data.country_code);
              }).fail(function () {
                callback("in");
              });
            },
            loadUtils: "https://cdn.jsdelivr.net/npm/intl-tel-input@25.3.0/build/js/utils.js?1733756310855"
          });
        }
    });
});