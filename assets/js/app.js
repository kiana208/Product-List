let products = [];

async function getData(testUrl) {
    const url = testUrl;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        products = json.products;
        generateProducts(products);
    } catch (error) {
        console.error(error.message);
    }
}

getData("https://dummyjson.com/products");

function generateProducts(products) {
    products.map((item) => {
        //create cards
        const productCard = `
            <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div class="card" style="width: 18rem;">
                    <img src="${item.thumbnail}" class="card-img-top" alt="${item.title}">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.description}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Category: ${item.category}</li>
                        <li class="list-group-item">Price: $${item.price}</li>
                    </ul>
                    <div class="card-body">
                        <a href="#" class="card-link text-decoration-none">Buy now</a>
                    </div>
                </div>
            </div>`;

        $(".products-container").append(productCard);
    });
}
