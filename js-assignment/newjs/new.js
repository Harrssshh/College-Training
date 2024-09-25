
// 1. Create and Append Elements
function createAndAppendDiv() {
    const newDiv = document.createElement('div');
    newDiv.id = 'uniqueDiv';
    const text = document.createTextNode('This is a dynamically created div!');
    newDiv.appendChild(text);
    document.body.appendChild(newDiv);
  }
  
  // 2. Modify Existing Elements
  function changeParagraphBackground() {
    const paragraphs = document.getElementsByTagName('p');
    for (let i = 0; i < paragraphs.length; i++) {
      paragraphs[i].style.backgroundColor = 'blue';
    }
  }
  
  // 3. Form Input Validation
  function validateForm() {
    const nameInput = document.getElementById('name');
    const errorMessage = document.getElementById('error-message');
  
    document.getElementById('myForm').addEventListener('submit', function(event) {
      if (nameInput.value === '') {
        errorMessage.textContent = 'Name cannot be empty';
        event.preventDefault();
      }
    });
  }
  
  validateForm();  // Call validateForm on load
  
  // 4. Dynamic List Creation
  function addToList() {
    const itemInput = document.getElementById('itemInput');
    const ul = document.getElementById('itemList');
    
    const newItem = document.createElement('li');
    newItem.textContent = itemInput.value;
    
    ul.appendChild(newItem);
    
    itemInput.value = '';
  }
  
  // 5. Toggle Image Visibility
  function toggleImageVisibility() {
    const image = document.getElementById('myImage');
    if (image.style.display === 'none') {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  }