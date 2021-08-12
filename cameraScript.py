import keyboard
import time
from serial import Serial
arduino = Serial('COM3', 115200, timeout=.1)
time.sleep(1) #give the connection a second to settle

i = 0

while True:

    run = input("Press enter to run the script!")

    if run.find("esc") != -1:
      exit()

    nrOfPhotosS = input("Insert the number of pictures you want taken: ")

    nrOfPhotos = int(nrOfPhotosS)


    counter = 0

    time.sleep(2)

    perStepCounter = nrOfPhotos

    incrementH = 360/perStepCounter

    arduino.write(str(" psc-"+str(perStepCounter)+" ").encode('utf-8'))
    running = True
    while running:
        data = arduino.readline()
        if data:
            print ((str(data).replace("b'", "")).replace("\\r\\n'", ""))
            
        if "OK" in str(data):
            keyboard.press('t')

        if "Horizontal Finished" in str(data): 
            running = False
    
   