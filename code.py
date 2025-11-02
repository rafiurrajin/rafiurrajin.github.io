import shelve

x = input('Rolls pls').split(',')
with shelve.open('test') as db:
    for r in x:
        if r not in db:
            db[r]=0
        db[r]+=1