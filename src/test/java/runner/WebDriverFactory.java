package runner;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

import domain.PropertyReader;


public class WebDriverFactory {

	private static WebDriver instance;
	
	public static WebDriver getCurrentDriver() {
		if (instance == null) {
			String browser = new PropertyReader().readProperty("browser");
			if (browser.equals("chrome")) {
				instance = createChromeDriver();
			}
			else if (browser.equals("firefox")) {
				instance = createFirefoxDriver();
			}
			
			else System.out.println("Can't read browser type");
		}		
		return instance;
	}
	
	public static WebDriver createFirefoxDriver() {
		System.setProperty("webdriver.gecko.driver","drivers/geckodriver.exe");
	    DesiredCapabilities capabilities = DesiredCapabilities.firefox();
	    capabilities.setCapability("marionette", true);
	    WebDriver driver = new FirefoxDriver(capabilities);
	    instance = driver;
	    driver.manage().window().maximize();
	    
		return driver;
	}
	
	public static WebDriver createChromeDriver() {
		System.setProperty("webdriver.chrome.driver", "drivers/chromedriver.exe");		
		ChromeOptions options = new ChromeOptions();
		//options.addArguments("--incognito");//"--start-maximized", 
		options.addArguments("test-type");
		options.addArguments("start-maximized");
		options.addArguments("--js-flags=--expose-gc");  
		options.addArguments("--enable-precise-memory-info"); 
		options.addArguments("--disable-popup-blocking");
		options.addArguments("--disable-default-apps");
		options.addArguments("test-type=browser");
		options.addArguments("disable-infobars");
		WebDriver driver = new ChromeDriver(options);
		driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
		instance = driver;			
		return driver;
	}
}
