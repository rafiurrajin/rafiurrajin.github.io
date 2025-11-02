import pandas as pd
import shelve as sh
c=input("What is the class name?")
df = pd.read_csv('input.csv',index_col=0)
df['total'] = df.sum(axis=1)
ranks=df.rank(ascending=False,method='min')

with sh.open('test') as t:
    for s in df.index:
        with open(f"out/{s}.txt","w") as f:
            for e in df.columns:
                f.write(f"[{df.loc[s,e]},{int(ranks.loc[s,e])}];")
            n=0
            if s in t:
                n = t[s]
            f.write(str(n))
