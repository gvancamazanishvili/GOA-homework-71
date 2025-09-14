# განიხილეთ შემდეგი ამოცანა:
# https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/python

# და კარგად გაიაზრეთ მისი Solution-ი. ეცადეთ ალტერნატიული გზით ამოხსნათ ჩაშენებული ფუნქციების გამოყენების გარეშე.

def smash(words):
    res = ''
    for i in range(len(words)):
        if i != len(words) - 1:
            res = res + words[i] + " "
        else:
            res = res + words[i]
    return res



def smash(words):
    if len(words) == 0:
        return ""
    sentence = ""
    for i in range(len(words)):
        if i == 0:
            sentence = words [i]
        else:
            sentence = sentence + " " + words [i]
            
    return sentence




def smash(words):
    return " ".join(words)
    