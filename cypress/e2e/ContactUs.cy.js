import { onFonmContactUs } from "../support/page_objects/formContactUsPage"
import { navigateTo } from "../support/page_objects/navigationPage"

describe('Reset of entered data', () => {

  it('Reset of entered data', () => {
    
    navigateTo.contactUsPage()
    onFonmContactUs.fillUpContactUsFormWithValidData('Jane', 'Doe', 'JaneDoe1@example.com', 'Comment')

      cy.get('#form_buttons').find('[type="reset"]').click()

    cy.get('form').then(form => {
      cy.wrap(form).find('[name="first_name"]').should('have.value', '')
      cy.wrap(form).find('[name="last_name"]').should('have.value', '')
      cy.wrap(form).find('[name="email"]').should('have.value', '')
      cy.wrap(form).find('[name="message"]').should('have.value', '')
    })
  })
})

describe('Partial filling up of the form', () => {

beforeEach('open Contact Us page', () => {
  navigateTo.contactUsPage()
})

  it('Empty form', () => {
    
    cy.get('form').submit()
    cy.get('body').then(validationMessage => {
      cy.wrap(validationMessage).should('contain', 'Error: all fields are required')
      cy.wrap(validationMessage).should('contain', 'Error: Invalid email address')
    })
  })
  it('Field FirstName was not filled up', () => {
    cy.get('form').then(form => {
      cy.wrap(form).find('[name="last_name"]').click().type('Doe')
      cy.wrap(form).find('[name="email"]').click().type('Jane.Doe@example.com')
      cy.wrap(form).find('[name="message"]').click().type('Comment')
    })
    cy.get('form').submit()
    cy.get('body').should('contain', 'Error: all fields are required')
  })
  it('Field LastName was not filled up', () => {
    cy.get('form').then(form => {
      cy.wrap(form).find('[name="first_name"]').click().type('Jane')
      cy.wrap(form).find('[name="email"]').click().type('Jane.Doe@example.com')
      cy.wrap(form).find('[name="message"]').click().type('Comment')
    })
    cy.get('form').submit()
    cy.get('body').should('contain', 'Error: all fields are required')
  })
  it('Field Email was not filled up', () => {
    cy.get('form').then(form => {
      cy.wrap(form).find('[name="first_name"]').click().type('Jane')
      cy.wrap(form).find('[name="last_name"]').click().type('Doe')
      cy.wrap(form).find('[name="message"]').click().type('Comment')
    })
    cy.get('form').submit()
    cy.get('body').then(validationMessage => {
      cy.wrap(validationMessage).should('contain', 'Error: all fields are required')
      cy.wrap(validationMessage).should('contain', 'Error: Invalid email address')
    })
  })
  it('Field Comments was not filled up', () => {
    cy.get('form').then(form => {
      cy.wrap(form).find('[name="first_name"]').click().type('Jane')
      cy.wrap(form).find('[name="last_name"]').click().type('Doe')
      cy.wrap(form).find('[name="email"]').click().type('Jane.Doe@example.com')
    })
    cy.get('form').submit()
    cy.get('body').should('contain', 'Error: all fields are required')
  })
})

describe('Email Adress validation', () => {

  it('Invalid Email Adresses', () => {

    const invalidEmail = ['@example.com', 'JaneDoe', 'Jane.Doeexample.com', 'Jane.Doe@', 'Jane..Doeexample.com', 'Jane@Doe@111.222.333.44444']

    cy.wrap(invalidEmail).each(invalidEmail => {
      navigateTo.contactUsPage()
      cy.get('form').find('[name="first_name"]').click().type('Jane')
      cy.get('form').find('[name="last_name"]').click().type('Doe')
      cy.get('form').find('[name="email"]').click().type(invalidEmail)
      cy.get('form').find('[name="message"]').click().type('Comment')
      cy.get('form').submit()

      cy.get('body').should('contain', 'Error: Invalid email address')
    })
  })
})

describe('Happy path', () => {
  it('All fields filled up correct', () => {
    navigateTo.contactUsPage()
    onFonmContactUs.fillUpContactUsFormWithValidData('Aiden', 'Bishop', 'aiden.bishop@example.com', 'Lorem ipsum dolor sit amet.')
    cy.get('form').submit()
    cy.get('body').should('contain', 'Thank You for your Message!')
  })
})