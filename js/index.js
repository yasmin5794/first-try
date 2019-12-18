
var productsContainer = [];
var inps = document.getElementsByClassName("form-control");

function addProduct()
{
var productName = document.getElementById("productNameInp").value ;
var productPrice = document.getElementById("productPriceInp").value;
var productCategory = document.getElementById("productCategoryInp").value;
var productCode = document.getElementById("productCodeInp").value;
var productDesc = document.getElementById("productDescInp").value;
var makanElDash = productCode.search("-");
var productCompany = productCode.slice(0 , makanElDash );
var productModle = productCode.slice(makanElDash+1 , productCode.length)

var product = 
{
    name: productName,
    price: productPrice,
    category: productCategory,
    company: productCompany, 
    desc:productDesc
}

productsContainer.push(product);

displayData();

clearForm();
}

function displayData()
{
var temp = "";
for(var i=0 ; i<productsContainer.length; i++)
{
    temp += "<tr><td>"+productsContainer[i].name+"</td><td>"+productsContainer[i].price+"</td><td>"+productsContainer[i].category+"</td><td>"+productsContainer[i].company+"</td><td>"+productsContainer[i].desc+"</td></tr>"
}

document.getElementById("tableBody").innerHTML =temp;
}

function clearForm()
{
    for( var i=0; i<inps.length; i++)
    {
        inps[i].value="";
    }
}