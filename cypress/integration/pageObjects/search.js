export class Search { 
    advancedSearch(categoryName)
    {
        cy.get('button[aria-label="Advanced"]').click();
        cy.get('mat-nav-list[role="presentation"]').should('be.visible').contains(categoryName).click();  
    }    
} 