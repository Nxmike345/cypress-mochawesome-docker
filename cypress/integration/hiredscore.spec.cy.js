import {Main} from './pageObjects/main'

describe('HiredScore Cypress', () => {
  const main = new Main();

  it('Navigate to "Crunchbase"', () => {
    main.navigateToPage();
  })

  it('Search category "People"', () => {   
    main.searchForCategory('People');  
  })

  it('Type "Hiredscore" in "Current organization" field', () => {   
   main.setCurrentOrganizationFilter('Hiredscore');      
  })

  it('In the dropdown results, click on the first result', () => {   
    main.clickOnResultsInPeopleFilter(0);     
  })

  it('In the table results, click "Athena Karp" and verify that url matches "https://www.crunchbase.com/person/athena-karp"', () => {   
    main.clickOnPeopleResultsByFullName('Athena Karp') ; 
    cy.url().should('include', 'https://www.crunchbase.com/person/athena-karp'); 
  })
}) 