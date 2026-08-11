import urllib.request
import ssl
from bs4 import BeautifulSoup
import re

url = "https://www.prowest.com/projects"
try:
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    html = urllib.request.urlopen(req, context=ctx).read()
    soup = BeautifulSoup(html, "html.parser")
    
    images = []
    for img in soup.find_all("img"):
        src = img.get("src")
        if src and ("http" in src or src.startswith("//")):
            if src.startswith("//"):
                src = "https:" + src
            if "logo" not in src.lower() and "icon" not in src.lower() and "svg" not in src.lower():
                images.append(src)
    
    styles = soup.find_all(style=True)
    for style in styles:
        s = style.get("style", "")
        if "background-image" in s:
            match = re.search(r"url\(['\"]?(.*?)['\"]?\)", s)
            if match:
                src = match.group(1)
                if src.startswith("//"):
                    src = "https:" + src
                if "http" in src and "logo" not in src.lower():
                    images.append(src)
            
    images = list(set(images))
    for i, img_url in enumerate(images):
        print(f"Image {i+1}: {img_url}")

except Exception as e:
    print("Error:", e)
