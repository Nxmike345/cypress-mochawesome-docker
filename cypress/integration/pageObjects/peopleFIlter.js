export class PeopleFilter { 

    setCurrentOrganizationFilter(organizationName)
    {
        cy.get('input[placeholder="E.g. Lyft, Twitter, Box"]').should('be.visible').type(organizationName);  
    }  

    selectCurrentOrganizationResult(index)
    {
        cy.get('div[role="listbox"]').find('mat-option[role="option"]');
        cy.get('#mat-option-25 > .mat-option-text > .autocomplete-item > .entityInfo > :nth-child(1)').click()  
    }
} 