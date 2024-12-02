
let bagItems;
onLoad();

function onLoad(){
 let bagItemsStr = localStorage.getItem('bagItems');
 bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
 displayItemOnHomePage();
 displayBagIcon();
}

function addToBag(itemId){
  bagItems.push(itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  displayBagIcon();
}
function displayBagIcon(){
  let bagItemCountElememt = document.querySelector('.bag-item-count');
  if (bagItems.length >0){
    bagItemCountElememt.style.visibility = 'visible';
    bagItemCountElememt.innerText = bagItems.length;
  }else{
    bagItemCountElememt.style.visibility = 'hidden';
  }
}

function displayItemOnHomePage(){
  let itemsContainerElement = document.querySelector('.items-container')
  if(!itemsContainerElement){
    return;
  }
  let innerHtml = '';
  items.forEach(item => {
    innerHtml += `
    <div class="item-container">
      <img class="item-img" src="${item.image}" alt="item image">
      <div class="rating">
         ${item.rating.stars} ⭐ | ${item.rating.count}
     </div>
     <div class="comapny-name">${item.company}</div>
     <div class="item-name">${item.item_name}</div>
     <div class="price">
         <span class="current-price">${item.current_price}</span>
         <span class="original-price">${item.original_price}</span>
         <span class="discount">(${item.discount_percentage}% OFF)</span>
     </div>
     <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
    </div>`
  });
  
  itemsContainerElement.innerHTML = innerHtml;
}
