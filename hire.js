// Hire Webflow Success Animation
$('.form-hire-2').submit(()=>{
	setTimeout(()=>{
    	$('.form-success-trigger').click();
  },100);
});

// Hire Webflow Limit
$('.form-hire-2').bind("keypress", function (e) {
    if (e.keyCode == 13) {
        return false;
    }
});

// Hire TinyMCE Editor
tinymce.init({
  selector: '#mytextarea',
  height: 430,
  menubar: false,
  language: 'ru',
  plugins: [
    'advlist autolink lists link image charmap print preview anchor',
    'searchreplace visualblocks code fullscreen',
    'insertdatetime media table paste code help wordcount'
  ],
  toolbar: 'undo redo | formatselect | ' +
  'bold italic backcolor | alignleft aligncenter ' +
  'alignright alignjustify | bullist numlist outdent indent | ' +
  'removeformat | help',
  content_css: '//www.tiny.cloud/css/codepen.min.css'

});

// Hire Algolia Autocomplete Search
var client = algoliasearch('QRUWZXCNFY','f558cbcc6ed4952a04cfbf8f13c646fc')
var index  = client.initIndex('udlnk')
var myAutocomplete = autocomplete('#search-input', {hint: false}, [
      {
        source: $.fn.autocomplete.sources.hits(index, { hitsPerPage: 5 }),
        displayKey: 'CompanyName',
        templates: {
          suggestion: function(suggestion) {
            var sugTemplate = "<img class='company-search' src='"+ suggestion.logoURL +"'/>" + suggestion._highlightResult.CompanyName.value
       return sugTemplate;
          }
        }
      }
    ]).on('autocomplete:selected', function(event, suggestion, dataset) {
      console.log(suggestion, dataset);
      $('#website')[0].value = suggestion.website;
      $('#website').prop('disabled', true);
      $('#people')[0].value = suggestion.people;
      $('#people').prop('disabled', true);
      $('#city')[0].value = suggestion.city;
      $('#city').prop('disabled', true);

      $('#reset-form').click(function(){
      $('#website, #city, #people').prop('disabled', false);});
    });

  document.querySelector(".reset-form").addEventListener("click", function() {
  document.querySelector(".aa-input").focus();
  this.classList.add("hide");
  myAutocomplete.autocomplete.setVal("");
});

document.querySelector("#search-input").addEventListener("keyup", function() {
var searchbox = document.querySelector(".aa-input");
var reset = document.querySelector(".reset-form");
if (searchbox.value.length === 0){
  reset.classList.add("hide");
} else {
  reset.classList.remove('hide');
}
});

// Hire Multi Step Form Init
var Webflow = Webflow || [];
Webflow.push(function () {
  let msfData = new MSF({
    formID: "form-hire-2",
    nextButtonID: "msf-next",
    backButtonID: "msf-back",
    nextButtonText: "Далее",
    submitButtonText: "Отправить",
      warningClass: "warning",
  });
  msfController.init(msfData);
});

// Hire HTTP/HTTPS/TG
$(function(){
         $('#testURL, #jobURL, #website').on('blur', function(){
           var string = $(this).val();
           if (!string.match(/^https?:/) && string.length) {
             string = "http://" + string;
              $(this).val(string)
           }
         });
});

$(function(){
         $('#telegram').on('blur', function(){
           var string = $(this).val();
           if (!string.match(/^https?:/) && string.length) {
             string = "https://t.me/" + string;
              $(this).val(string)
           }
         });
});
