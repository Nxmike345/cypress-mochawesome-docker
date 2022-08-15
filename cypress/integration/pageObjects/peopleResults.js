export class PeopleResults { 

    clickOnFullName(fullName)
    {
        cy.get(':nth-child(2) > .sticky-column-2 > .cb-absolute-to-cover > field-formatter > identifier-formatter.ng-star-inserted > .component--field-formatter > .identifier-image-and-label').click();        
    }     

}