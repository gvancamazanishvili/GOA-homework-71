# 3) დაწერეთ პროგრამა სახელწოდებით soil_moisture, სადაც მცენარე მხოლოდ მაშინ უნდა მოირწყას, როდესაც ნიადაგის ნესტიანობა იქნება 100-ზე მეტი.

solid_moisture = int(input("Enter soil moisture: "))

if solid_moisture > 100:
    print("მორწყვა სჭირდება")
else:
    print("მორწყვა არ სჭირდება")
