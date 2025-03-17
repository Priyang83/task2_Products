const cartArray=[];
products.sort(function sortName(a, b) {
    if (a.title < b.title) {
        return -1;
    }
    else return 1;
});
const cart_Product=[];
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
                <button onclick="addCart('${val.id}')">Add To Cart</button>
              </footer>
            </article> ` ;
    });

    document.getElementById("products").innerHTML = temp_Array.join("");
}

const companies=products.reduce(function(pre,val){
    if(pre.includes(val.company)==false)
    {
        pre.push(val.company);
    }
    return pre;
},[]);
companies.unshift("All");
const company_Array = companies.map(function (val) {
    
    return ` <button class="company-btn"
    onClick="companyFilter('${val}') "
    >${val}
    </button> `;
});

document.getElementById("companies").innerHTML = company_Array.join("");

function companyFilter(c) {
    const temp = products.filter(function myFilter(val) {
        return c == val.company||c=="All";
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

function addCart(i){
    const item=cartArray.find(function(val){
        return val.id== i;
    });
    if(item){
        item.qty+=1;
    }
    else{
        const newItem=products.find(function(val){
            return val.id== i;
        });
        newItem.qty=1;
        cartArray.push(newItem);
    }
    const cartCount=cartArray.length;
    document.getElementById("cart_count").innerHTML=cartCount;
}

function checkout(){
    const chkout=cartArray.reduce(function(pre,val){
        return pre + val.qty * val.price;
    },0);
    document.getElementById("checkout_val").innerHTML=chkout;
}
displayProduct(products);