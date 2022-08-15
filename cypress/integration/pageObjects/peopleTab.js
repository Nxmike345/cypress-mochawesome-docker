import {PeopleFilter} from './peopleFIlter'
import {PeopleResults} from './peopleResults'

export class PeopleTab {     
    peopleFilter = new PeopleFilter();
    peopleResults = new PeopleResults();

    setCurrentOrganizationFilter(organizationName)
    {
        this.peopleFilter.setCurrentOrganizationFilter(organizationName);  
    }  

    selectCurrentOrganizationResult(index)
    {
        this.peopleFilter.selectCurrentOrganizationResult(index);
    }

    clickOnResultsByFullName(fullName)
    {
        this.peopleResults.clickOnFullName(fullName);
    }

} 