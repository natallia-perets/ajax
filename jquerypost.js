window.onload=function() {
$( "#purchase" ).submit(function( event ) {
 
  // Stop form from submitting normally
  event.preventDefault();
 
  // Get some values from elements on the page:
  var $form = $( this ),
    email = $form.find( "input[name='email']" ).val(),
    name = $form.find( "input[name='name']" ).val(),
    check = $form.find("input[name='agree']").val();

    if (email && name && check) {
     var msg= $form.serialize();
            $.ajax({
                type: "POST",
                url: $form.attr( "action" ),
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