import "./style.css";

const content = document.querySelector("#content");

content.innerHTML = ` 
<section id="main"></section>
      <h2>Main Dishes</h2>
      <ul>
        <li>Salmon Pasta</li>
        <li>Grilled Chicken Sandwich</li>
        <li>Vegetable Stir-Fry</li>
      </ul>
    </section>
    <section id="desserts">
      <h2>Desserts</h2>
      <ul>
        <li>Chocolate Cake</li>
        <li>Red Velvet Cake</li>
        <li>Tiramisu</li>
      </ul>
    </section>
    <section id="drinks">
      <h2>Drinks</h2>
      <ul>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Water</li>
      </ul>
    </section>
`;

console.log("Connected");
