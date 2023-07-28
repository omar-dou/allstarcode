import os
root = os.getcwd()

for w in range(2,8):
    week = f"week{w}"
    os.chdir(root)
    os.makedirs(week)
    for d in range(1,6):
        day = f"day{d}"
        os.chdir(os.path.join(root, week))
        os.makedirs(day)
