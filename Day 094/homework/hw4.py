# 4) https://www.codewars.com/kata/51f2b4448cadf20ed0000386/train/python

def remove_url_anchor(url):
    if "#" in url:
        return url[0:url.index("#")]
    else:
        return url