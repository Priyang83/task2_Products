products.sort(function sortName(a, b) {
    if (a.title < b.title) {
        return -1;
    }
    else return 1;
});

function displayProduct(p) {
    const temp_Array = p.map(function (val) {
        return ` <article class="product">
              <img
                src="images/sofa.jpg"
                class="product-img img"
                alt=""
              />
              <footer>
                <h5 class="product-name">${val.title}</h5>
                <span class="product-price">${val.price}</span>
              </footer>
            </article> ` ;
    });

    document.getElementById("products").innerHTML = temp_Array.join("");
}

const company_Array = products.map(function (val) {
    return ` <button class="company-btn"
    onClick="companyFilter('${val.company}') "
    >${val.company}
    </button> `;
});

document.getElementById("companies").innerHTML = company_Array.join("");

function companyFilter(c) {
    const temp = products.filter(function myFilter(val) {
        return c == val.company;
    });
    displayProduct(temp);
}

function sortdata(s) {
    products.sort(function (a, b) {
        if (s == "dsc") {
            return b.price - a.price;
        }
        else {
            return a.price - b.price;
        }
    });
    displayProduct(products);
}

displayProduct(products);