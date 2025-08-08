# 2) შექმენით ფუნქცია, სახელად - filter_negatives. ფუნქციას არგუმენტად სია უნდა გადასცეთ. მან კი პასუხად მხოლოდ უარყოფითი რიცხვები უნდა დააბრუნოს.

def filter_negatives(list):
    negatives = []
    for i in list:
        if i < 0:
            negatives.append(i)

    return negatives

print(filter_negatives([-87, 1278, -873, -734]))