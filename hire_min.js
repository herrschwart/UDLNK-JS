$(".form-hire-2").submit(()=>{setTimeout(()=>{$(".form-success-trigger").click()},100)}),$(".form-hire-2").bind("keypress",function(e){if(13==e.keyCode)return!1}),tinymce.init({selector:"#mytextarea",height:430,menubar:!1,language:"ru",plugins:["advlist autolink lists link image charmap print preview anchor","searchreplace visualblocks code fullscreen","insertdatetime media table paste code help wordcount"],toolbar:"undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",content_css:"//www.tiny.cloud/css/codepen.min.css"});var client=algoliasearch("QRUWZXCNFY","f558cbcc6ed4952a04cfbf8f13c646fc"),index=client.initIndex("udlnk"),myAutocomplete=autocomplete("#search-input",{hint:!1},[{source:$.fn.autocomplete.sources.hits(index,{hitsPerPage:5}),displayKey:"CompanyName",templates:{suggestion:function(e){return"<img class='company-search' src='"+e.logoURL+"'/>"+e._highlightResult.CompanyName.value}}}]).on("autocomplete:selected",function(e,t,i){console.log(t,i),$("#website")[0].value=t.website,$("#website").prop("disabled",!0),$("#people")[0].value=t.people,$("#people").prop("disabled",!0),$("#city")[0].value=t.city,$("#city").prop("disabled",!0),$("#reset-form").click(function(){$("#website, #city, #people").prop("disabled",!1)})});document.querySelector(".reset-form").addEventListener("click",function(){document.querySelector(".aa-input").focus(),this.classList.add("hide"),myAutocomplete.autocomplete.setVal("")}),document.querySelector("#search-input").addEventListener("keyup",function(){var e=document.querySelector(".aa-input"),t=document.querySelector(".reset-form");0===e.value.length?t.classList.add("hide"):t.classList.remove("hide")});var Webflow=Webflow||[];Webflow.push(function(){let e=new MSF({formID:"form-hire-2",nextButtonID:"msf-next",backButtonID:"msf-back",nextButtonText:"Далее",submitButtonText:"Отправить",warningClass:"warning"});msfController.init(e)}),$(function(){$("#testURL, #jobURL, #website").on("blur",function(){var e=$(this).val();!e.match(/^https?:/)&&e.length&&(e="http://"+e,$(this).val(e))})}),$(function(){$("#telegram").on("blur",function(){var e=$(this).val();!e.match(/^https?:/)&&e.length&&(e="https://teleg.run/"+e,$(this).val(e))})});
