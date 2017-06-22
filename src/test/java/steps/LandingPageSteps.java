package steps;

import cucumber.api.java.en.When;
import pagesClasses.LandingPage;
import runner.WebDriverFactory;

public class LandingPageSteps extends WebDriverFactory{
	
	@When("^she chooses to sign up$")
	public void she_chooses_to_sign_up() throws Throwable {
	   new LandingPage(getCurrentDriver()).she_chooses_to_sign_up();
	}


}
