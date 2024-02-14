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


function filtercountry(data) {
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


 function countrystatus(id,vl) {

      page=$("#page").val();


//    var search = $('#searchkey').val()
    var status = $('#status').val()
    var url = $('#url').val()
    $.ajax({
      url: url,
      type: 'GET',
      data: {page:page,status:status,id:id,vl:vl,type:1},

      success: function(data) {

       $(".table-responsive").html(data.template)


      }
  });
  }


 function countrydelete() {

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




function filtergovernorate(data) {
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



 function governoratestatus(id,vl) {

      page=$("#page").val();


//    var search = $('#searchkey').val()
    var status = $('#status').val()
    var url = $('#url').val()
    $.ajax({
      url: url,
      type: 'GET',
      data: {page:page,status:status,id:id,vl:vl,type:1},

      success: function(data) {

       $(".table-responsive").html(data.template)


      }
  });
  }


 function governoratedelete() {

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






function filtercity(data) {
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



 function citystatus(id,vl) {

      page=$("#page").val();


//    var search = $('#searchkey').val()
    var status = $('#status').val()
    var url = $('#url').val()
    $.ajax({
      url: url,
      type: 'GET',
      data: {page:page,status:status,id:id,vl:vl,type:1},

      success: function(data) {

       $(".table-responsive").html(data.template)


      }
  });
  }


 function citydelete() {

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



function filterblock(data) {
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



 function blockstatus(id,vl) {

      page=$("#page").val();


//    var search = $('#searchkey').val()
    var status = $('#status').val()
    var url = $('#url').val()
    $.ajax({
      url: url,
      type: 'GET',
      data: {page:page,status:status,id:id,vl:vl,type:1},

      success: function(data) {

       $(".table-responsive").html(data.template)


      }
  });
  }


 function blockdelete() {

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





function filterstoretype(data) {
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



 function storetypestatus(id,vl) {

      page=$("#page").val();


//    var search = $('#searchkey').val()
    var status = $('#status').val()
    var url = $('#url').val()
    $.ajax({
      url: url,
      type: 'GET',
      data: {page:page,status:status,id:id,vl:vl,type:1},

      success: function(data) {

       $(".table-responsive").html(data.template)


      }
  });
  }


 function storetypedelete() {

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




function filterstore(data) {
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



 function storestatus(id,vl) {

      page=$("#page").val();


//    var search = $('#searchkey').val()
    var status = $('#status').val()
    var url = $('#url').val()
    $.ajax({
      url: url,
      type: 'GET',
      data: {page:page,status:status,id:id,vl:vl,type:1},

      success: function(data) {

       $(".table-responsive").html(data.template)


      }
  });
  }


 function storedelete() {

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






function getgovernorate(id){

$.ajax({
          url: '/superadmin/getgovernorate',
          type: 'GET',
          data: {'id':id},
          success: function(data) {
                $("#governorate").empty();
                 $("#governorate").append('<option value="">Select</option>');
                for(i=0;i<data.result.length;i++){
                    $("#governorate").append('<option value="'+data.result[i].id+'">'+data.result[i].eng_title+' / '+data.result[i].arb_title+'</option>');
                }

            }
        });


}


function getcity(id){

$.ajax({
          url: '/superadmin/getcity',
          type: 'GET',
          data: {'id':id},
          success: function(data) {
                $("#city").empty();
                 $("#city").append('<option value="">Select</option>');
                for(i=0;i<data.result.length;i++){
                    $("#city").append('<option value="'+data.result[i].id+'">'+data.result[i].eng_title+' / '+data.result[i].arb_title+'</option>');
                }

            }
        });


}

function getblock(id){

$.ajax({
          url: '/superadmin/getblock',
          type: 'GET',
          data: {'id':id},
          success: function(data) {
                $("#block").empty();
                 $("#block").append('<option value="">Select</option>');
                for(i=0;i<data.result.length;i++){
                    $("#block").append('<option value="'+data.result[i].id+'">'+data.result[i].eng_title+' / '+data.result[i].arb_title+'</option>');
                }

            }
        });


}
