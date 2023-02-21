export class AjaxLoaderPage{
    clickMeButton = '#button1[type="button"]'
    loaderNotVisible = '#loader[style="display: none;"]'
    messegeTitle = '[class="modal-title"]'

    waitForPageToLoad(){
        cy.get(onAjaxLoaderPage.loaderNotVisible, { timeout: 7000 })
    }
    clickOnButtonClickMe(){
        cy.get(onAjaxLoaderPage.clickMeButton).click()
        cy.get(onAjaxLoaderPage.messegeTitle).should('contain', 'Well Done For Waiting....!!!')
    }
}
export const onAjaxLoaderPage = new AjaxLoaderPage()