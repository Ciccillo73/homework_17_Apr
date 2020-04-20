document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const newItemForm = document.querySelector('#new-item-form');
  newItemForm.addEventListener('submit', handleNewItemFormSubmit);

  // const deleteButton = document.querySelector('#delete');
  // deleteButton.addEventListener('click', handleDeleteLastClick);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);

});


const handleNewItemFormSubmit = function(event) {
  event.preventDefault();

  const groceryManagerListItem = createGroceryManagerListItem(event.target);
  const groceryManagerList = document.querySelector('#grocery-manager');
  groceryManagerList.appendChild(groceryManagerListItem);

  event.target.reset();

}


const createGroceryManagerListItem = function(form) {
  const groceryManagerListItem = document.createElement('li');
  groceryManagerListItem.classList.add('grocery-manager-list-item')

  const productName = document.createElement('h2');
  productName.textContent = `Product: ${event.target.product.value}`;
  groceryManagerListItem.appendChild(productName);

  const expire = document.createElement('h3');
  expire.textContent = `Expire date: ${event.target.expire.value}`;
  groceryManagerListItem.appendChild(expire)

  const type = document.createElement('h3');
  type.textContent = `Category: ${event.target.type.value}`;
  groceryManagerListItem.appendChild(type);

  return groceryManagerListItem
 }

const handleDeleteAllClick = function(event){
  const groceryManager = document.querySelector('#grocery-manager');

  if(confirm('This action will delete all the records,are you sure?')) {
    groceryManager.innerHTML = '';
 }
};
const handleDeleteLastClick = function(event) {
  const newItemForm = document.querySelector('#new-item-form');
};
