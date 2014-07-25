window.onload=function() {

var $form = $("#purchase")

function validateRadio (radios)
{
    for (i = 0; i < radios.length; ++ i)
    {
        if (radios [i].checked) return true;
    }
    return false;
}

function validate(){
  var flag = false;
  var fields = $form[0].childNodes;
  for(i = 0; i < fields.length; i++){

    if( ($(fields[i]).is(":input") || ($(fields[i]).is("select"))) && fields[i].hasAttribute("name")){

      if($(fields[i]).is(":checkbox") && $(fields[i]).attr( "checked" )== false) {return false;}

      if($(fields[i]).is(":radio")) {
        if ($(fields[i]).attr( "checked" )){
          flag = true;
        }
      } 

      if(fields[i].value.trim().length == 0){
        return false;
      }
    }
  }
  if(flag){
    return true;
  }
}
$( "#buybutton" ).click(function( event ) {
 
  // Stop form from submitting normally
  event.preventDefault();
  if(validate())
  {
    var msg= $form.serialize();
            $.ajax({
                type: "POST",
                url: "http://localhost/",
                data: msg,
                cache: false,
                success: function (e) {
                    if(e){
                        alert(msg.name);
                        document.getElementById("name").value = "";
                        document.getElementById("email").value = "";
                        var el = document.getElementById("result");
                        el.innerHTML = "SUCCESS";
                    }
                },
                error: function(e) {
                  alert("some error");
                }

            });
   }
   else
   {
      var el = document.getElementById("result");
      el.innerHTML = "FAILED";
   }
});

};