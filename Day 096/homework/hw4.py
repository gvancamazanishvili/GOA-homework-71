# 4)https://www.codewars.com/kata/52449b062fb80683ec000024

def generate_hashtag(s):
    new_s = s.split()
    res = []

    for i in new_s:
        if i != "":
            res2 = i[0].upper() + i[1:].lower()
            res.append(res2)
    final_res = "#" + "".join(res)
    return final_res if 1 < len(final_res) <= 140 else False