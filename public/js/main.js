$(document).ready(function(){
  $('.deleteUser').on('click', deleteUser);
});

function deleteUser()
{
  var confirmation = confirm('Are you sure?');
  if(confirmation){
    $.ajax({
      url: '/users/delete/'+$(this).data('id'),
      type: 'DELETE'
    }).done(function(response){
      window.location.replace('/');
    });
    window.location.replace('/');
    
  }else{
    return false;
  }
}
