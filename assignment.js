let parent = document.getElementById("parent");
let data = document.getElementById("data");
let search = document.getElementById("search");
let btn = document.getElementById("btn");
let sum = document.getElementById("sum");

let products = [
  {
    id: 1,
    name: "samsung",
    image:
      "https://www.bhphotovideo.com/images/images2500x2500/lg_24lf452b_24_720p_led_hdtv_1248350.jpg",
    color: "red",
    price: 4000,
  },
  {
    id: 2,
    name: "lg",
    image:
      "https://www.bhphotovideo.com/images/images2500x2500/lg_24lf452b_24_720p_led_hdtv_1248350.jpg",
    color: "blue",
    price: 3000,
  },
  {
    id: 3,
    name: "Lava",
    image:
      "https://www.bhphotovideo.com/images/images2500x2500/lg_24lf452b_24_720p_led_hdtv_1248350.jpg",
    color: "brown",
    price: 2000,
  },
  {
    id: 4,
    name: "oneplus",
    image:
      "https://www.bhphotovideo.com/images/images2500x2500/lg_24lf452b_24_720p_led_hdtv_1248350.jpg",
    color: "cyan",
    price: 4000,
  },
  {
    id: 5,
    name: "heir",
    image:
      "https://www.bhphotovideo.com/images/images2500x2500/lg_24lf452b_24_720p_led_hdtv_1248350.jpg",
    color: "aquablue",
    price: 9000,
  },
  {
    id: 6,
    name: "ifb",
    image:
      "https://www.bhphotovideo.com/images/images2500x2500/lg_24lf452b_24_720p_led_hdtv_1248350.jpg",
    color: "orange",
    price: 6000,
  },
  {
    id: 7,
    name: "poco phones",
    image:
      "https://www.bhphotovideo.com/images/images2500x2500/lg_24lf452b_24_720p_led_hdtv_1248350.jpg",
    color: "blue",
    price: 15000,
  },
  {
    id: 8,
    name: "Xiomi",
    image:
      "https://www.bhphotovideo.com/images/images2500x2500/lg_24lf452b_24_720p_led_hdtv_1248350.jpg",
    color: "pink",
    price: 14000,
  },
  {
    id: 9,
    name: "epson",
    image:
      "https://www.bhphotovideo.com/images/images2500x2500/lg_24lf452b_24_720p_led_hdtv_1248350.jpg",
    color: "black",
    price: 44000,
  },
  {
    id: 10,
    name: "asus",
    image:
      "https://www.bhphotovideo.com/images/images2500x2500/lg_24lf452b_24_720p_led_hdtv_1248350.jpg",
    color: "offwhite",
    price: 46000,
  },
  {
    id: 11,
    name: "toshiba",
    image:
      "https://www.bhphotovideo.com/images/images2500x2500/lg_24lf452b_24_720p_led_hdtv_1248350.jpg",
    color: "yellow",
    price: 40600,
  },
  {
    id: 12,
    name: "dell",
    image:
      "https://www.bhphotovideo.com/images/images2500x2500/lg_24lf452b_24_720p_led_hdtv_1248350.jpg",
    color: "green",
    price: 40050,
  },
  {
    id: 13,
    name: "apple",
    image:
      "https://www.bhphotovideo.com/images/images2500x2500/lg_24lf452b_24_720p_led_hdtv_1248350.jpg",
    color: "yellow",
    price: 40300,
  },
  {
    id: 14,
    name: "lenevo",
    image:
      "https://www.bhphotovideo.com/images/images2500x2500/lg_24lf452b_24_720p_led_hdtv_1248350.jpg",
    color: "white",
    price: 20000,
  },
  {
    id: 15,
    name: "hp laptops",
    image:
      "https://www.bhphotovideo.com/images/images2500x2500/lg_24lf452b_24_720p_led_hdtv_1248350.jpg",
    color: "gray",
    price: 70000,
  },
];

// Function to initialize the product list and total price
function demo() {
  // Calculate total price for all products
  let totalPrice = products.reduce((acc, product) => acc + product.price, 0);

  // Render all products in the table
  products.map((product) => {
    data.innerHTML += `
      <div class="hello">
        <tr>
          <td>${product.id}</td>
          <td>${product.name}</td>
          <td><img src="${product.image}" width="100px" height="100px" alt="error"></td>
          <td>${product.color}</td>
          <td>${product.price}</td>
        </tr>
      </div>`;
  });

  // Display the total price
  sum.innerHTML = `<td>${totalPrice}</td>`;

  // Add event listener for the search button
  btn.addEventListener("click", () => {
    let inputValue = search.value.toLowerCase();

    // Filter products based on search input
    let filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(inputValue)
    );

    // Calculate total price for the filtered products
    let filteredTotal = filteredProducts.reduce(
      (acc, product) => acc + product.price,
      0
    );

    // Clear the data container and render filtered products
    data.innerHTML = "";
    filteredProducts.map((product) => {
      data.innerHTML += `
        <div class="hellos">
          <tr>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td><img src="${product.image}" width="100px" height="100px" alt="error"></td>
            <td>${product.color}</td>
            <td>${product.price}</td>
          </tr>
        </div>`;
    });

    // Display the filtered total price
    sum.innerHTML = `<td>${filteredTotal}</td>`;
  });
}

// Call the function to initialize the app
demo();
