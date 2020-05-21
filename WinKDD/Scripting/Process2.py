import os
import sys
import pandas as pd
import rapidminer

tmpFolder="/Users/nsoorma/Downloads/WinRapidMiner"


def rm_main(data):
    print('Hello, world!')
    #data.to_pickle(os.path.join(tmpFolder,"rapidminerdata"))
    # output can be found in Log View
    print(type(data))

    #your code goes here

    #for example:
    #data2 = pd.DataFrame([3,5,77,8])
    # run_process("//Local Repository/processes/preprocess", inputs=[data])
    print(data)

    # connect 2 output ports to see the results
    return data

if __name__=='__main__':
    data = pd.read_csv(os.path.join(tmpFolder,"WinMovieData.csv"))
    rm_main(data)

