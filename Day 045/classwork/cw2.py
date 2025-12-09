# 2) წინა დავალების ანალოგიურად შექმენით ფუნქცია და გადაეცით რიცხვების სია არგუმენტად. ამ შემთხვევაში ფუნქციის მიზანი იქნება, რომ სიიდან დააბრუნოს მხოლოდ დადებითი რიცხვები.

def positive_numbers (list):
    positives = []
    for i in list:
        if i > 0:
            positives.append(i)
    return(positives)

print (positive_numbers([13, -83, -783, 1378, 3]))


