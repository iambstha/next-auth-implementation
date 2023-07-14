from selenium import webdriver
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
opt = Options()
opt.add_argument("--headless")

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=opt)
driver.implicitly_wait(5)

# getUrl = input("Enter the url: ")
driver.get("https://next-auth-implementation-phi.vercel.app/")

try:
    isLoggedIn = driver = driver.find_element(by=By.XPATH, value="/html/body/div[2]/div[1]/div/span")
    print("The user is logged in.")
except:
    print("The logged in component is not found.")

try:
    isLoggedOut = driver.find_element(by=By.XPATH, value="/html/body/div[2]/span")
    print("The user is logged out.")
except:
    print("The logged out component is not found.")

print(a)