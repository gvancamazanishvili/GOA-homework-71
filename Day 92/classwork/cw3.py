# 3) https://www.codewars.com/kata/57eeb8cc5f79f6465a0015c1/train/python

def is_kiss(words):
    words_list = words.split()
    for i in words_list:
        if len(i) > len(words_list):
            return "Keep It Simple Stupid"
    
    return "Good work Joe!"