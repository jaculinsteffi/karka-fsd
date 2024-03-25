$(document).ready(function() {
    let items = []; // Array to store items
  
    // Function to render items in table
    function renderItems() {
      $('#itemTable tbody').empty(); // Clear existing table rows
      items.forEach(function(item) {
        $('#itemTable tbody').append('<tr data-id="' + item.id + '"><td>' + item.id + '</td><td>' + item.name + '</td><td>' + item.description + '</td><td><button class="editBtn">Edit</button><button class="deleteBtn">Delete</button></td></tr>');
      });
    }
  
    // Add Item
    $('#addItemForm').submit(function(event) {
      event.preventDefault(); // Prevent form submission
      let name = $('#nameInput').val().trim();
      let description = $('#descriptionInput').val().trim();
      if (name !== '' && description !== '') {
        let newItem = {
          id: items.length + 1, // Generate unique ID (assuming no item will be deleted)
          name: name,
          description: description
        };
        items.push(newItem); // Add item to array
        renderItems(); // Render updated items in table
        $('#nameInput, #descriptionInput').val(''); // Clear input fields after adding item
      }
    });
  
    // Delete Item
    $('#itemTable').on('click', '.deleteBtn', function() {
      let itemId = $(this).closest('tr').data('id');
      items = items.filter(function(item) {
        return item.id !== itemId; // Remove item with matching ID
      });
      renderItems(); // Render updated items in table
    });
  
    // Edit Item
    $('#itemTable').on('click', '.editBtn', function() {
      let itemId = $(this).closest('tr').data('id');
      let item = items.find(function(item) {
        return item.id === itemId;
      });
      if (item) {
        let newName = prompt('Enter new name:', item.name);
        let newDescription = prompt('Enter new description:', item.description);
        if (newName !== null && newDescription !== null) {
          item.name = newName.trim();
          item.description = newDescription.trim();
          renderItems(); // Render updated items in table
        }
      }
    });
  });