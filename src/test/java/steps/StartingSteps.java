package steps;

import cucumber.api.java.en.Given;
import runner.WebDriverFactory;


public class StartingSteps extends WebDriverFactory{
	
	@Given("^the user is on landing page$")
	public void setup() throws Throwable {
		getCurrentDriver().get("http://accountsdemo.herokuapp.com");
	    getCurrentDriver().manage().window().maximize();
	}
}
