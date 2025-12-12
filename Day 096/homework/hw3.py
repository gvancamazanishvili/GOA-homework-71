# 3)https://www.codewars.com/kata/514a024011ea4fb54200004b

def domain_name(url):
    splt = url.split(".")
    if splt[0][:3] == "htt":
        if splt[0].split("//")[1] == "www":
            return splt[1]
        elif "https" in splt[0]:
            splt[0] = splt[0][8:]
        elif "http" in splt[0]:
            splt[0] = splt[0][7:]
        return splt[0]
    if splt[0][:3] == "www":
        return splt[1]
    return splt[0]