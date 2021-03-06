$(function(){
  $('.change-devour').on('click',function(event){
    let id = $(this).data('id'),
        devoured = $(this).data('devoured'),
        devouredState = { devoured: !devoured };

    $.ajax('/api/burgers/' + id, {
      type: 'PUT',
      data: devouredState
    }).then( () => {
      console.log('Changed devoured to ' + devoured)
      location.reload();
    });
  });

  $('.burger-form').on('submit', function(event) {

    event.preventDefault();

    let newBurger = {
      name: $('#burger-name').val().trim(),
      // devoured: false
    }

    console.log(newBurger);

    $.ajax('/api/burgers', {
      type: 'POST',
      data: newBurger
    }).then(
      function() {
        console.log('Created new burger');
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function(event) {
    var id = $(this).data('id');

    // Send the DELETE request.
    $.ajax('/api/burgers/' + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log('Deleted burger', id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

})
