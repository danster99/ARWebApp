import keyboard
import time
from serial import Serial
arduino = Serial('COM3', 115200, timeout=.1)
time.sleep(1) #give the connection a second to settle

i = 0
run = False

while True:

    run = input("Press enter to run the script!")

    if run.find("esc") != -1:
      exit()

    nrOfPhotosS = input("Insert the number of pictures you want taken: ")
    vStepsS = input("Insert the number of vertical steps included: ")

    # vStartS = input("Insert the bottom limit for the camera in deg: ")
    # while int(vStartS)>90 or int(vStartS)<0 :
    #     vStartS = input("Insert the correct bottom limit for the camera in deg: ")

    # vEndS = input("Insert the top limit for the camera in deg: ")
    # while int(vEndS)>90 or int(vEndS)<0 or int(vEndS) < int(vStartS) :
    #     vEnd = input("Insert the correct top limit for the camera in deg: ")

    # vEnd = int(vEndS)
    # vStart = int(vStartS)
    nrOfPhotos = int(nrOfPhotosS)
    vSteps = int(vStepsS)


    photosPerVert = nrOfPhotos // vSteps   

    diff = nrOfPhotos - (photosPerVert * vSteps) 


    counter = 0

    time.sleep(2)
    
    for i in range(vSteps) :
        if i == 0 :
            perStepCounter = photosPerVert + diff
        else:
            perStepCounter = photosPerVert

        incrementH = 360/perStepCounter
        horizPos = 0

        arduino.write(str(" psc-"+str(perStepCounter)+" ").encode('utf-8'))
        running = True
        while running:
            data = arduino.readline()
            if data:
                print ((str(data).replace("b'", "")).replace("\\r\\n'", ""))
                
            if "OK" in str(data):
              keyboard.press('space')

            if "Horizontal Finished" in str(data): 
                running = False
                run = input("Press enter to continue with a new vertical step!")
    
   