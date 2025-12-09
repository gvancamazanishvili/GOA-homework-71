# 5)https://www.codewars.com/kata/5264d2b162488dc400000001

def spin_words(sentence):
    res = sentence.split(' ')
    res2 = []
    for i in res:
        if len(i) >= 5:
            res2.append(i[::-1])
        else:
            res2.append(i)
            
    return " ".join(res2)