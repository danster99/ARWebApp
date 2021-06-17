
String currentWord; 

int step_number = 0;

#define dirPin 22
#define stepPin 21
#define stepsPerRev 2400
#define enabledPin 23



void setup() {
  Serial.begin(115200); // use the same baud-rate as the python side
  pinMode(stepPin, OUTPUT);
  pinMode(dirPin, OUTPUT);
  pinMode(enabledPin, OUTPUT);
}




void loop() {

  digitalWrite(dirPin, HIGH);
  digitalWrite(enabledPin, HIGH);
  
  int nrOfPhotos = 0;
  int vAngle = -1;
  if(Serial.available() > 0) {
    char data = Serial.read();
    char str[2];
    str[0] = data;
    str[1] = '\0';
    if(data == '\'' || data == ' ')
    {
      
      currentWord.clear();
    }
    else
    {
      currentWord += data;
    }
  }

  if(currentWord == "psc-")
  {
    bool read = true;
    String nrOfPhotosS;
    while(read)
    {
      if(Serial.available() > 0) 
      {
        char data = Serial.read();
        if(data<'0' || data > '9')  
        {
          read = false; 
          nrOfPhotos = nrOfPhotosS.toInt();
        }
        else
        {
          nrOfPhotosS+=data;
        }
      }
    }
  }

  if(nrOfPhotos > 0)
  {
    digitalWrite(enabledPin, LOW);
    float pos = 0;
    int increment = 360/nrOfPhotos;
    for( int i=0; i< nrOfPhotos; i++)
    {
      delay(200);
      Serial.println("OK");
      delay(1800);      
      pos+=increment;
      Serial.println("Moving turntable to position " + String(pos) + " degrees!"); 
      delay(500);
      MoveTurntable(increment);
    }
    Serial.println("Horizontal Finished");
    currentWord.clear();
    delay(1000);
    digitalWrite(enabledPin, HIGH);
    nrOfPhotos = -1;
  }
}



void MoveTurntable(int degreesPerPhoto)
{
   for (int i = 0; i < stepsFromDeg(degreesPerPhoto); i++) {
    // These four lines result in 1 step:
    digitalWrite(stepPin, HIGH);
    delayMicroseconds(200);
    digitalWrite(stepPin, LOW);
    delayMicroseconds(200);
  }
}

int stepsFromDeg(int deg)
{
  return (stepsPerRev*deg)/360;
}
