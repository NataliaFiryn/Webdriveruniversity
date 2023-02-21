import { onDropdownCheckboxesRadiobuttonsPage } from "../support/page_objects/dropdown_checkoxes_radiobuttonsPage"
import { navigateTo } from "../support/page_objects/navigationPage"

describe('Dropdown Menu(s)', () => {
    beforeEach('open Dropdown Menu(s), Checkboxe(s) & Radio Button(s) page', () => {
        navigateTo.dropdown_checkoxes_radiobuttonsPage()
      })

    it('First dropdown', () => {
        onDropdownCheckboxesRadiobuttonsPage.selectOptionFirstDropdownList('JAVA')
        onDropdownCheckboxesRadiobuttonsPage.selectOptionFirstDropdownList('C#')
        onDropdownCheckboxesRadiobuttonsPage.selectOptionFirstDropdownList('Python')
        onDropdownCheckboxesRadiobuttonsPage.selectOptionFirstDropdownList('SQL')
        onDropdownCheckboxesRadiobuttonsPage.checkNuberOfOptionsFirstDropdownList(4)
    })
    it('Second dropdown', () => {
        onDropdownCheckboxesRadiobuttonsPage.selectOptionSecondDropdownList('Eclipse')
        onDropdownCheckboxesRadiobuttonsPage.selectOptionSecondDropdownList('Maven')
        onDropdownCheckboxesRadiobuttonsPage.selectOptionSecondDropdownList('TestNG')
        onDropdownCheckboxesRadiobuttonsPage.selectOptionSecondDropdownList('JUnit')
        onDropdownCheckboxesRadiobuttonsPage.checkNuberOfOptionsSecondDropdownList(4)
    })  
    it('Third dropdown', () => {
        onDropdownCheckboxesRadiobuttonsPage.selectOptionThirdDropdownList('HTML')
        onDropdownCheckboxesRadiobuttonsPage.selectOptionThirdDropdownList('CSS')
        onDropdownCheckboxesRadiobuttonsPage.selectOptionThirdDropdownList('JavaScript')
        onDropdownCheckboxesRadiobuttonsPage.selectOptionThirdDropdownList('JQuery')
        onDropdownCheckboxesRadiobuttonsPage.checkNuberOfOptionsThirdDropdownList(4)
    })
})

describe('Checkboxe(s)', () => {
    beforeEach('open Dropdown Menu(s), Checkboxe(s) & Radio Button(s) page', () => {
        navigateTo.dropdown_checkoxes_radiobuttonsPage()
      })
    
    it("Chceck and uncheck each checkbox)", () => {
        onDropdownCheckboxesRadiobuttonsPage.checkAndUncheckCheckBox('option-1')
        onDropdownCheckboxesRadiobuttonsPage.checkAndUncheckCheckBox('option-2')
        onDropdownCheckboxesRadiobuttonsPage.checkAndUncheckCheckBox('option-3')
        onDropdownCheckboxesRadiobuttonsPage.checkAndUncheckCheckBox('option-4')
        onDropdownCheckboxesRadiobuttonsPage.checkNuberOfCheckboxes(4)
    })
    
    it('Check all checkboxe(s) and uncheck selected checkboxes', () => {
        onDropdownCheckboxesRadiobuttonsPage.checkAllCheckboxes()
        onDropdownCheckboxesRadiobuttonsPage.uncheckSelectedCheckboxes(['option-2','option-4'])
    })
})

describe('Radio Button(s)', () => {
    beforeEach('open Dropdown Menu(s), Checkboxe(s) & Radio Button(s) page', () => {
        navigateTo.dropdown_checkoxes_radiobuttonsPage()
      })

    it('Click and check every radio button', () => {
        onDropdownCheckboxesRadiobuttonsPage.clickRadioButton('green')
        onDropdownCheckboxesRadiobuttonsPage.clickRadioButton('blue')
        onDropdownCheckboxesRadiobuttonsPage.clickRadioButton('yellow')
        onDropdownCheckboxesRadiobuttonsPage.clickRadioButton('orange')
        onDropdownCheckboxesRadiobuttonsPage.clickRadioButton('purple')
        onDropdownCheckboxesRadiobuttonsPage.checkNuberOfRadioButtons(5)
    })
})

describe('Selected & Disabled', () => {
    beforeEach('open Dropdown Menu(s), Checkboxe(s) & Radio Button(s) page', () => {
        navigateTo.dropdown_checkoxes_radiobuttonsPage()
      })

    it('Vegetable Radio Buttons', () => {
        onDropdownCheckboxesRadiobuttonsPage.clickVegetableRadiobuttons('pumpkin')
        onDropdownCheckboxesRadiobuttonsPage.clickVegetableRadiobuttons('lettuce')
        onDropdownCheckboxesRadiobuttonsPage.clickVegetableRadiobuttons('cabbage')
        onDropdownCheckboxesRadiobuttonsPage.checkNuberOfOptionsVegetableRadioButtons(3)
    })
    
    it('Fruits dropdown', () => {
        onDropdownCheckboxesRadiobuttonsPage.selectOptionFruitDropdownList('Apple')
        onDropdownCheckboxesRadiobuttonsPage.selectOptionFruitDropdownList('Orange')
        onDropdownCheckboxesRadiobuttonsPage.selectOptionFruitDropdownList('Pear')
        onDropdownCheckboxesRadiobuttonsPage.selectOptionFruitDropdownList('Grape')
        onDropdownCheckboxesRadiobuttonsPage.checkNuberOfOptionsFruitDropdownList(4)
    })
})