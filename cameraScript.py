import keyboard
import time
from serial import Serial
arduino = Serial('COM4', 115200, timeout=.1)
time.sleep(1) #give the connection a second to settle

i = 0
run = False

while True:

    run = input("Press enter to run the script!")

    if run.find("esc") != -1:
      exit()

    nrOfPhotosS = input("Insert the number of pictures you want taken: ")
    vStepsS = input("Insert the number of vertical steps included: ")

    vStartS = input("Insert the bottom limit for the camera in deg: ")
    while int(vStartS)>90 or int(vStartS)<0 :
        vStartS = input("Insert the correct bottom limit for the camera in deg: ")

    vEndS = input("Insert the top limit for the camera in deg: ")
    while int(vEndS)>90 or int(vEndS)<0 or int(vEndS) < int(vStartS) :
        vEnd = input("Insert the correct top limit for the camera in deg: ")

    nrOfPhotos = int(nrOfPhotosS)
    vSteps = int(vStepsS)
    vStart = int(vStartS)
    vEnd = int(vEndS)

    photosPerVert = nrOfPhotos // vSteps   

    diff = nrOfPhotos - (photosPerVert * vSteps) 

    incrementV = (vEnd-vStart) / (vSteps - 1)

    counter = 0

    for i in range(vSteps) :
        arduino.write(str(" vert-"+str(int( vStart + i*incrementV))+" ").encode('utf-8'))
        reading = True
        while reading:
            data = arduino.readline()
            if data:
                print (data)
            if "degrees" in str(data):
                reading = False
                time.sleep(3)

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
                print (data)
                
            if "OK" in str(data):
              keyboard.press('space')

            if "Horizontal Finished" in str(data):
                running = False
                run = input("Press enter to continue with a new vertical step!")

        # for j in range(perStepCounter) :
        #     print ("Turntable at " + str(int(horizPos)) + " degrees")
        #     keyboard.press('space')
        #     counter+=1
        #     print (str(counter) + "picture(s) taken")
        #     horizPos+=incrementH
        #     time.sleep(float(interval)) #move turntable

        #move camera up and down
    
   