import {Search} from './search'
import {PeopleTab} from './peopleTab'

export class Main {

    search = new Search();
    peopleTab = new PeopleTab();

    navigateToPage() {
        cy.visit('http://www.crunchbase.com') 
    }

    searchForCategory(categoryName)
    {
      this.search.advancedSearch(categoryName);
    }

    setCurrentOrganizationFilter(stringToSearch)
    {
        this.peopleTab.setCurrentOrganizationFilter(stringToSearch);
    }

    clickOnResultsInPeopleFilter(index)
    { 
        this.peopleTab.selectCurrentOrganizationResult(0);
    }

    clickOnPeopleResultsByFullName(fullName)
    {
        this.peopleTab.clickOnResultsByFullName(fullName);
    }

} 