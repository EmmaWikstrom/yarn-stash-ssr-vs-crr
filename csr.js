console.log('CSR JS loaded');

const yarns = [
  {
    name: "Sunday",
    brand: "Sandnes",
    weight: "Fingering",
    skeins: 1,
    meters: 235,
    grams: 50,
    colorway: "Blush Pink",
    image: "./img/sunday-blush-pink.jpeg"
  },
  {
    name: "Ulysse",
    brand: "De Rerum Natura",
    weight: "Sport",
    skeins: 5,
    meters: 925,
    grams: 250,
    colorway: "Caramel",
    image: "./img/ulysse-caramel.webp"
  },
  {
    name: "Thoughtful",
    brand: "Fraya",
    weight: "Worsted",
    skeins: 7,
    meters: 1050,
    grams: 350,
    colorway: "Grey",
    image: "./img/thoughtful-grey.jpeg"
  }
];

const app = document.getElementById("app");

app.innerHTML = 
`<header class="site-header">
  <div class="container">
    <h1>Yarn stash</h1>
    <p>
      A curated overview of yarn currently in my stash.
    </p>
  </div>
</header>

  <main class="container">
    <section>
      <h2 class="summary-title">Totals</h2>
      <dl class="summary" id="summary">
        <div class="summary-item">
          <dt>Yarns</dt>
          <dd>-</dd>
        </div>

        <div class="summary-item">
          <dt>Weight</dt>
          <dd>-</dd>
        </div>

         <div class="summary-item">
          <dt>Length</dt>
          <dd>-</dd>
        </div>
      </dl>
    </section>

    <section>
      <h2>Stash</h2>
      <div class="stash" id="stash"></div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container">
      <p class="footer-text">Yarn Stash</p>
    </div>
  </footer>`;