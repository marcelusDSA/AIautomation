package steps;

import org.junit.Assert;

import cucumber.api.java.en.Then;
import pagesClasses.HomePage;
import runner.WebDriverFactory;

public class HomePageSteps extends WebDriverFactory {
	
	@Then("^she should be logged in to the application$")
	public void she_should_be_logged_in_to_the_application() throws Throwable {
		
	    Assert.assertTrue(new HomePage(getCurrentDriver()).isSignOutLinkDisplayed());
	} 

}
