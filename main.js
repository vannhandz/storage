const food = [
  {
    id: 1,
    name: "Vi Cá Mập",
    image: "./img/vi_ca.jpg",
    price: "250 $",
    quantity: "99",
  },

  {
    id: 2,
    name: "Bò Kobe",
    image: "./img/bo_kobe.jpg",
    price: "380 $",
    quantity: "99",
  },

  {
    id: 3,
    name: "Cua Hoàng Đế",
    image: "./img/cua.jpg",
    price: "300 $",
    quantity: "99",
  },

  {
    id: 4,
    name: "Trứng Cá Tầm Caviar",
    image: "./img/trung_ca.jpg",
    price: "400 $",
    quantity: "99",
  },
];
const drink = [
  {
    id: 1,
    name: "Billionaire Vodka",
    image: "./img/voka.jpg",
    price: "250 $",
    quantity: "99",
  },

  {
    id: 2,
    name: "Isabella’s Islay ",
    image: "./img/isa.jpg",
    price: "390 $",
    quantity: "99",
  },

  {
    id: 3,
    name: "The Eye of the Dragon",
    image: "./img/dragon.jpg",
    price: "300 $",
    quantity: "99",
  },

  {
    id: 4,
    name: "Tequila Ley",
    image: "./img/ley.jpg",
    price: "400 $",
    quantity: "99",
  },
];

function loadfood(){
  prdfood=JSON.parse(localStorage.getItem('listfood')) || []; 
}
function loaddrink(){
  prdfood=JSON.parse(localStorage.getItem('listdrink'));
}
function Food() {
  var html = "";
  for (i in food) {
    html + "<tr>";
    html += "<td>" + food[i].id + "</td>";
    html += "<td>" + food[i].name + "</td>";
    html +=
      "<td><img src=" + food[i].image + " style=height:50px;width:50px></td>";
    html += "<td>" + food[i].price + "</td>";
    html += "<td>" + food[i].quantity + "</td>";
    html += "<td><button class='edit-btn' onclick='editProductFood(" + i + ")'>Edit</button></td>";
    html += "<td><button class='delete-btn' onclick='confirmDeleteFromFood(" + i + ")'>Delete</button></td>";
    html += "<td><button class='detail-btn' onclick='DetailProductFood(" + i + ")'>Detail</button></td>";
    html += "</tr>";  
    document.getElementById("tbl").innerHTML = html;
    
  }

  return html;

}

function Drink() {
  var html = "";
  for (i in drink) {
    // var data =JSON.parse(JSON.stringify(drink[i]));
    html + "<tr>";
    html += "<td>" + drink[i].id + "</td>";
    html += "<td>" + drink[i].name + "</td>";
    html +=
      "<td><img src=" + drink[i].image + " style=height:50px;width:50px></td>";
    html += "<td>" + drink[i].price + "</td>";
    html += "<td>" + drink[i].quantity + "</td>";
    html += "<td><button class='edit-btn' onclick='editProductDrink(" + i + ")'>Edit</button></td>";
    html += "<td><button class='delete-btn' onclick='confirmDeleteFromDrink(" + i + ")'>Delete</button></td>";
    html += "<td><button class='detail-btn' onclick='DetailProductDrink(" + i + ")'>Detail</button></td>";
    html += "</tr>";
    document.getElementById("tbl").innerHTML = html;
  }

  return html;

}

function create() {
  var ID = document.getElementById("id").value;
  var Name = document.getElementById("name").value;
  var Image = document.getElementById("img").value;
  var Price = document.getElementById("price").value;
  var Quantity = document.getElementById("quantity").value;
  var Select = document.getElementById("Select").value;
  var Detail = document.getElementById("detail").value;

  var newProduct = {
    id: ID,
    name: Name,
    image: Image,
    price: Price,
    quantity: Quantity,
    detail:Detail,
  };

  if (Select === "food") {
    food.push(newProduct);
    localStorage.setItem("listfood", JSON.stringify(food));
    // window.location.reload();
    Food();
  } else if (Select === "drink") {
    drink.push(newProduct);
    localStorage.setItem("listdrink", JSON.stringify(drink));
    // window.location.reload();
    Drink();
  }

  document.getElementById("id").value = "";
  document.getElementById("name").value = "";
  document.getElementById("img").value = "";
  document.getElementById("price").value = "";
  document.getElementById("quantity").value = "";
  document.getElementById("detail").value = "";

  show(Select === "food" ? arr : drink);
}

function editProductFood(index) {
  document.getElementById("editProductName").value = food[index].name;
  document.getElementById("editProductImage").value = food[index].image;
  document.getElementById("editProductPrice").value = food[index].price;
  document.getElementById("editProductQuantity").value = food[index].quantity;
  document.getElementById("editProductDetail").value = food[index].detail;
  document.getElementById("editFormFood").style.display = "block";
  document.getElementById("editIndexFood").value = index;
  document.getElementById("editFormDrink").style.display = "none";
}
function editProductDrink(index) {
  document.getElementById("editProductNameDrink").value = drink[index].name;
  document.getElementById("editProductImageDrink").value = drink[index].image;
  document.getElementById("editProductPriceDrink").value = drink[index].price;
  document.getElementById("editProductQuantityDrink").value = drink[index].quantity;
  document.getElementById("editProductDetailDrink").value = drink[index].detail;
  document.getElementById("editFormDrink").style.display = "block";
  document.getElementById("editIndexDrink").value = index;
  document.getElementById("editFormFood").style.display = "none";

} function updateProduct() {
  var newName = document.getElementById("editProductName").value;
  var newImage = document.getElementById("editProductImage").value;
  var newPrice = document.getElementById("editProductPrice").value;
  var newQuantity = document.getElementById("editProductQuantity").value;
  var newDetail = document.getElementById("editProductDetail").value;
  var indexToUpdate = parseInt(
    document.getElementById("editIndexFood").value
  );
  food[indexToUpdate].name = newName;
  food[indexToUpdate].image = newImage;
  food[indexToUpdate].price = newPrice;
  food[indexToUpdate].quantity = newQuantity;
  food[indexToUpdate].detail = newDetail;

  document.getElementById("editFormFood").style.display = "none";
  Food();
}
function updateProductDrink() {
  var newName = document.getElementById("editProductNameDrink").value;
  var newImage = document.getElementById("editProductImageDrink").value;
  var newPrice = document.getElementById("editProductPriceDrink").value;
  var newQuantity = document.getElementById("editProductQuantityDrink").value;
  var newDetail = document.getElementById("editProductDetailDrink").value;

  var indexToUpdate = parseInt(
    document.getElementById("editIndexDrink").value
  );
  drink[indexToUpdate].name = newName;
  drink[indexToUpdate].image = newImage;
  drink[indexToUpdate].price = newPrice;
  drink[indexToUpdate].quantity = newQuantity;
  drink[indexToUpdate].detail = newDetail;

  document.getElementById("editFormDrink").style.display = "none";
  Drink();
}
function DetailProductFood(
  

) {
  var product;

  product = food[index];

  // Tạo HTML hiển thị thông tin chi tiết sản phẩm
  var html = "<h2>CHI TIẾT SẢN PHẨM</h2>";

  html += "<p><strong>Image:</strong> <img src='" + product.image + "' style='height: 100px; width: 100px;'></p>";
  html += "<p><strong>Detail:</strong> " + product.detail + "</p>";

  // Hiển thị thông tin chi tiết trong một modal hoặc phần tử khác
  var modalElement = document.getElementById("modal");
  modalElement.innerHTML = html;
  modalElement.style.display = "block";
}
function DetailProductDrink(index) {
  var product;

  product = drink[index];

  // Tạo HTML hiển thị thông tin chi tiết sản phẩm
  var html = "<h2>CHI TIẾT SẢN PHẨM</h2>";

  html += "<p><strong>Image:</strong> <img src='" + product.image + "' style='height: 100px; width: 100px;'></p>";
  html += "<p><strong>Detail:</strong> " + product.detail + "</p>";

  // Hiển thị thông tin chi tiết trong một modal hoặc phần tử khác
  var modalElement = document.getElementById("modal");
  modalElement.innerHTML = html;
  modalElement.style.display = "block";
}
function confirmDeleteFromFood(index) {
  // Xác nhận việc xóa sản phẩm từ danh sách FOOD
  if (confirm("Confirm removal from FOOD list by ID: " + food[index].id + "?")) {
    // Xóa sản phẩm khỏi mảng 'food'
    food.splice(index, 1);
    // Cập nhật bảng sản phẩm Food
    Food();
  }
}
function confirmDeleteFromDrink(index) {
  if (confirm("Confirm removal from DRINK list by ID: " + drink[index].id + "?")) {
    drink.splice(index, 1);
    Drink();
  }
}


function search() {
  var keyword = document.getElementById("searchInput").value;
  searchProduct(keyword);
}

function searchProduct(keyword) {
  var searchResults = [];
  for (var i = 0; i < food.length; i++) {
    if (food[i].name.toLowerCase().includes(keyword.toLowerCase())) {
      searchResults.push(food[i]);
    }
  }
  for (var i = 0; i < drink.length; i++) {
    if (drink[i].name.toLowerCase().includes(keyword.toLowerCase())) {
      searchResults.push(drink[i]);
    }
  }
  displaySearchResults(searchResults);
}

function displaySearchResults(results) {
  var html = "";
  for (var i = 0; i < results.length; i++) {
    html += "<tr>";
    html += "<td>" + results[i].id + "</td>";
    html += "<td>" + results[i].name + "</td>";
    html += "<td><img src='" + results[i].image + "' style='height:50px;width:50px;'></td>";
    html += "<td>" + results[i].price + "</td>";
    html += "<td>" + results[i].quantity + "</td>";
    html += "<td><button class='edit-btn' onclick='editProduct(" + i + ")'>Edit</button></td>";
    html += "<td><button class='delete-btn' onclick='confirmDelete(" + i + ")'>Delete</button></td>";
    html += "<td><button class='detail-btn' onclick='editProduct(" + i + ")'>Detail</button></td>";
    html += "</tr>";
  }
  document.getElementById("tbl").innerHTML = html;
}
window.onload = function() {
  displayAllProducts();
};

function displayAllProducts() {
  loadfood(); // Load danh sách sản phẩm thức ăn từ localStorage
  var html = "";
  html += Food(); // Hiển thị danh sách sản phẩm thức ăn
  loaddrink(); // Load danh sách sản phẩm đồ uống từ localStorage
  html += Drink(); // Hiển thị danh sách sản phẩm đồ uống
  document.getElementById("tbl").innerHTML = html;
}