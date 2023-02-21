export class dropdownCheckboxesRadiobuttonsPage{
    javaDropdownList = '.container .thumbnail #dropdowm-menu-1'
    eclipseDropdownList = '.container .thumbnail #dropdowm-menu-2'
    htmlDropdownList = '.container .thumbnail #dropdowm-menu-3'
    fruitDropdownList = '.container .thumbnail #fruit-selects'
    radioButtonsContainer = '.container .thumbnail #radio-buttons'
    checkBoxesContainer = '.container .thumbnail #checkboxes'
    selectedDisabledRadioButtons = '.container .thumbnail #radio-buttons-selected-disabled'

    //Dropdown Listy 
    selectOptionFirstDropdownList(itemName){
        cy.get(onDropdownCheckboxesRadiobuttonsPage.javaDropdownList).find('option').contains(itemName).then(dropdownItem =>{
            const itemValue = {
                "JAVA": "java",
                "C#": "c#",
                "Python": "python",
                "SQL": "sql"
            }
            cy.get(onDropdownCheckboxesRadiobuttonsPage.javaDropdownList).select(itemName)
            cy.wrap(dropdownItem).invoke('prop', 'selected').should('equal', true)
            cy.wrap(dropdownItem).should('contain', itemName)
            cy.wrap(dropdownItem).invoke('prop', 'value').should('contain', itemValue[itemName])
        })
    }
    selectOptionSecondDropdownList(itemName){
        cy.get(onDropdownCheckboxesRadiobuttonsPage.eclipseDropdownList).find('option').contains(itemName).then(dropdownItem =>{
            const itemValue = {
                "Eclipse": "eclipse",
                "Maven": "maven",
                "TestNG": "testng",
                "JUnit": "junit"
            }
            cy.get(onDropdownCheckboxesRadiobuttonsPage.eclipseDropdownList).select(itemName)
            cy.wrap(dropdownItem).invoke('prop', 'selected').should('equal', true)
            cy.wrap(dropdownItem).should('contain', itemName)
            cy.wrap(dropdownItem).invoke('prop', 'value').should('contain', itemValue[itemName])
        })
    }
    selectOptionThirdDropdownList(itemName){
        cy.get(onDropdownCheckboxesRadiobuttonsPage.htmlDropdownList).find('option').contains(itemName).then(dropdownItem =>{
            const itemValue = {
                "HTML": "html",
                "CSS": "css",
                "JavaScript": "javascript",
                "JQuery": "jquery"
            }
            cy.get(onDropdownCheckboxesRadiobuttonsPage.htmlDropdownList).select(itemName)
            cy.wrap(dropdownItem).invoke('prop', 'selected').should('equal', true)
            cy.wrap(dropdownItem).should('contain', itemName)
            cy.wrap(dropdownItem).invoke('prop', 'value').should('contain', itemValue[itemName])
        })
    }
    selectOptionFruitDropdownList(fruitName){
        cy.get(onDropdownCheckboxesRadiobuttonsPage.fruitDropdownList).find('option').contains(fruitName).then(fruit =>{
            const fruitValue = {
                "Apple": "apple",
                "Orange": "orange",
                "Pear": "pear",
                "Grape": "grape"
            }
            if (fruitName == 'Orange') {
                cy.wrap(fruit).invoke('prop', 'value').should('contain', fruitValue[fruitName])
                cy.wrap(fruit).invoke('prop', 'disabled').should('equal', true)
            } else {
                cy.get(onDropdownCheckboxesRadiobuttonsPage.fruitDropdownList).select(fruitName)
                cy.wrap(fruit).invoke('prop', 'selected').should('equal', true)
                cy.wrap(fruit).should('contain', fruitName)
                cy.wrap(fruit).invoke('prop', 'value').should('contain', fruitValue[fruitName])

            }
        })
    }
    checkNuberOfOptionsFirstDropdownList(number){
        cy.get(onDropdownCheckboxesRadiobuttonsPage.javaDropdownList).find('option').should('have.length', number)
    }
    checkNuberOfOptionsSecondDropdownList(number){
        cy.get(onDropdownCheckboxesRadiobuttonsPage.eclipseDropdownList).find('option').should('have.length', number)
    }
    checkNuberOfOptionsThirdDropdownList(number){
        cy.get(onDropdownCheckboxesRadiobuttonsPage.htmlDropdownList).find('option').should('have.length', number)
    }
    checkNuberOfOptionsFruitDropdownList(number){
        cy.get(onDropdownCheckboxesRadiobuttonsPage.fruitDropdownList).find('option').should('have.length', number)
    }
    // Check Boxy 
    checkAndUncheckCheckBox(checkboxName){
        cy.get(onDropdownCheckboxesRadiobuttonsPage.checkBoxesContainer).find('[value='+checkboxName+']').then(item => {
            if(checkboxName === 'option-3'){
                cy.wrap(item).click()
                cy.wrap(item).should('not.be.checked')
                cy.wrap(item).click()
                cy.wrap(item).should('be.checked')
            } else {
                cy.wrap(item).click()
                cy.wrap(item).should('be.checked')
                cy.wrap(item).click()
                cy.wrap(item).should('not.be.checked')
            }
        })
    }
    checkAllCheckboxes(){
        cy.get(onDropdownCheckboxesRadiobuttonsPage.checkBoxesContainer).find('[type="checkbox"]').each(checkBox => {
            if(!checkBox.is(':checked')){
                cy.wrap(checkBox).click({ force: true })
                cy.wrap(checkBox).should('be.checked')
            }
        })
    }
    uncheckSelectedCheckboxes(checkboxesArray){
        cy.get(onDropdownCheckboxesRadiobuttonsPage.checkBoxesContainer).find('label').then(checkBoxes => {
            cy.wrap(checkboxesArray).each(checkboxName => cy.wrap(checkBoxes).find('[value='+checkboxName+']').click({ force: true }).should('not.be.checked'))
        })
    }
    checkNuberOfCheckboxes(number){
        cy.get(onDropdownCheckboxesRadiobuttonsPage.checkBoxesContainer).find('input').should('have.length', number)
    }
    //Radio Buttony 
    clickRadioButton(buttonName){
        cy.get(onDropdownCheckboxesRadiobuttonsPage.radioButtonsContainer).find('[value='+buttonName+']').then(item => {
            cy.wrap(item).invoke('prop', 'checked').should('equal',false)
        cy.wrap(item).click()   
        cy.wrap(item).invoke('prop', 'checked').should('equal',true)
        })
    }
    checkNuberOfRadioButtons(number){
        cy.get(onDropdownCheckboxesRadiobuttonsPage.radioButtonsContainer).find('[type="radio"]').should('have.length', number)
    }
    clickVegetableRadiobuttons(buttonName){
        cy.get(onDropdownCheckboxesRadiobuttonsPage.selectedDisabledRadioButtons).find('[value='+buttonName+']').then(item => {
            if (buttonName === 'pumpkin'){ 
                cy.wrap(item).invoke('prop', 'checked').should('equal',true)
            } else {
                cy.wrap(item).invoke('prop', 'checked').should('equal',false)
            }
            if(buttonName === 'cabbage'){
                cy.wrap(item).invoke('prop', 'disabled').should('equal', true)
            } else {
                cy.wrap(item).click()   
                cy.wrap(item).invoke('prop', 'checked').should('equal',true)
            }   
        })
    }
    checkNuberOfOptionsVegetableRadioButtons(number){
        cy.get(onDropdownCheckboxesRadiobuttonsPage.selectedDisabledRadioButtons).find('[type="radio"]').should('have.length', number)
    }
}

export const onDropdownCheckboxesRadiobuttonsPage = new dropdownCheckboxesRadiobuttonsPage