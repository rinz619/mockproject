  function restrictAlphabets(e){
       var x = e.which || e.keycode;
   	if((x>=48 && x<=57))
   		return true;
   	else
   		return false;
   }

 $("#message_div").fadeOut(3000);

function delete_modal(id){
    $("#hid").val(id);
    $("#modaldemo5").modal('show');
}


function usercountry(data) {
  var page = '1'
    if(data != 'None'){
      page=data
    }


//    var search = $('#searchkey').val()
    var status = $('#status').val()

    var url = $('#url').val()
    $.ajax({
      url: url,
      type: 'GET',
      data: {page:page,status:status},

      success: function(data) {

        $(".table-responsive").html(data.template)


      }
  });
  }



 function userdelete() {

      page=$("#page").val();
      id=$("#hid").val();


//    var search = $('#searchkey').val()
    var status = $('#status').val()
    var url = $('#url').val()
    $.ajax({
      url: url,
      type: 'GET',
      data: {page:page,status:status,id:id,type:2},

      success: function(data) {
        $("#modaldemo5").modal('hide');

       $(".table-responsive").html(data.template)


      }
  });
  }

