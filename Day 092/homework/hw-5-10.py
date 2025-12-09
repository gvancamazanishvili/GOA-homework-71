# 6) https://www.codewars.com/kata/54edbc7200b811e956000556/train/python

def generate_shape(n):
    row = '+' * n
    square_rows = [row] * n
    return "\n".join(square_rows)


# 7) https://www.codewars.com/kata/54edbc7200b811e956000556/train/python

def open_or_senior(data):
    rslt = []
    for i in data:
        if i[0] >= 55 and i[1] > 7:
            rslt.append("Senior")
        else:
            rslt.append("Open")
            
    return rslt
    

# 8) https://www.codewars.com/kata/54edbc7200b811e956000556/train/python

def solution(text, ending):
    end = len(ending)
    if text[-end:] == ending:
        return True
    else:
        return False

# 9) https://www.codewars.com/kata/54edbc7200b811e956000556/train/python

def reverse_words(text):
    words = text.split(' ')
    reversed_words = [word[::-1] for word in words]
    return ' '.join(reversed_words)

# 10) https://www.codewars.com/kata/558dd9a1b3f79dc88e000001/train/python

def find_dup(arr):
    arr.sort()
    for i in range(1, len(arr)):
        if arr[i] == arr[ i - 1 ]:
            return i

