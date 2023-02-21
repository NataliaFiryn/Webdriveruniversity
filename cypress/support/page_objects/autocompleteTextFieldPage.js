export class AutocompleteTextFieldPage{
textField = '#myInput[type="text"]'
elementsOnAutocompleteList = '#myInputautocomplete-list strong'
submitButton = '#submit-button[type="submit"]'

typeTextandChcekAutocompleteList(inputText){
    cy.get(onAutocompleteTextFieldPage.textField).click().type(inputText)
    cy.get(onAutocompleteTextFieldPage.elementsOnAutocompleteList).should('contain', inputText)
}
chooseElementfromAutocompleteList(eqOfElement){
    cy.get(onAutocompleteTextFieldPage.elementsOnAutocompleteList).eq(eqOfElement).click()
}
submitFoodItem(){
    cy.get(onAutocompleteTextFieldPage.submitButton).click()
}

}
export const onAutocompleteTextFieldPage = new AutocompleteTextFieldPage()