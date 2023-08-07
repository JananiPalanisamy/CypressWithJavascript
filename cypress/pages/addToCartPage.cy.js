require('cypress-xpath');
class ProductsPage{

    retrieveTaxValueOfAProduct(productName)
    {
        cy.xpath(`//a[text()='${productName}']/following::p[@class='price'][1]//span`).invoke('text').then(data=>cy.log(data));
    }

}

export default ProductsPage;









// export class addToCartPage{

//     addToCartButton = "#button-cart"
//     alert = ".alert"

 

//     clickProduct(productName){
//         cy.contains(productName).click()
//     }

//     clickAddToCartButton(){
//         cy.get(this.addToCartButton).click()
//     }

//     getText(){
//         const text = cy.get(this.alert).invoke('text')
//         return text
    
//     }
// }