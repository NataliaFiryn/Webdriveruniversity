export class FormContactUsPage{
firstNameField = '[name="first_name"]'
lastNameField = '[name="last_name"]'
emailField = '[name="email"]'
commentField = '[name="message"]'
submitButton = '#form_buttons [type="submit"]'
resetButton = '#form_buttons [type="reset"]'
errorMessageBody = 'body'
submitedMessegeBody = '#contact_reply'

    fillUpContactUsForm(firstName,lastName, email, comment){
        cy.get('form').then(form => {
            if (firstName !== null) cy.get(onFormContactUs.firstNameField).click().type(firstName)
            if (lastName !== null) cy.get(onFormContactUs.lastNameField).click().type(lastName)
            if (email !== null) cy.get(onFormContactUs.emailField).click().type(email)
            if (comment !== null) cy.get(onFormContactUs.commentField).click().type(comment)
          })
    }
    resetEnteredDataAndCheckContactUsForm(){
        cy.get(onFormContactUs.resetButton).click()
        cy.get('form').then(form => {
            cy.get(onFormContactUs.firstNameField).should('have.value', '')
            cy.get(onFormContactUs.lastNameField).should('have.value', '')
            cy.get(onFormContactUs.emailField).should('have.value', '')
            cy.get(onFormContactUs.commentField).should('have.value', '')
          })
        
    }
    submitForm(){
        cy.get(onFormContactUs.submitButton).click()
    }
    errorMessageAllFieldsRequired(){
        cy.get(onFormContactUs.errorMessageBody).should('contain', 'Error: all fields are required')
    }
    errorMessageInvalidEmail(){
        cy.get(onFormContactUs.errorMessageBody).should('contain', 'Error: Invalid email address')
    }
    messageFormSubmitedCorrect(){
        cy.get(onFormContactUs.submitedMessegeBody).should('contain', 'Thank You for your Message!')
    }
}
export const onFormContactUs = new FormContactUsPage