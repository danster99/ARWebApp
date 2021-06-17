
  String currentWord; 


#define STEPPER_PIN_1 18
#define STEPPER_PIN_2 19
#define STEPPER_PIN_3 21
#define STEPPER_PIN_4 22
int step_number = 0;


void setup() {
  Serial.begin(115200); // use the same baud-rate as the python side
  pinMode(STEPPER_PIN_1, OUTPUT);
  pinMode(STEPPER_PIN_2, OUTPUT);
  pinMode(STEPPER_PIN_3, OUTPUT);
  pinMode(STEPPER_PIN_4, OUTPUT);
}
void loop() {
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
    float pos = 0;
    float increment = 360/float(nrOfPhotos);
    for( int i=0; i< nrOfPhotos; i++)
    {
      delay(500);
      Serial.println("OK");
      delay(2000);
      Serial.println("Moving turntable to position " + String(pos) + " degrees!"); 
      delay(500);
      int steps = (2048/nrOfPhotos)*3;
      pos+=increment;
      MoveTurntable(steps);
    }
    Serial.println("Horizontal Finished");
    currentWord.clear();
    nrOfPhotos = -1;
  }



  if(currentWord == "vert-")
  {
    bool read = true;
    String vAngleS;
    while(read)
    {
      if(Serial.available() > 0) 
      {
        char data = Serial.read();
        if(data<'0' || data > '9')  
        {
          vAngle = vAngleS.toInt();
          read = false;
        }
        else
        {
          vAngleS+=data;
        }
      }
    }
  }

  if(vAngle >= 0)
  {
    Serial.print("Moving camera to " + String(vAngle) + " degrees!");
    currentWord.clear();
    vAngle = -1;
    delay(1000);
  }
}



void MoveTurntable(int steps)
{
  for( int i=0;i<=steps;i++)
  {
    OneStep(false);
    delay(3);
  }
}

void OneStep(bool dir){
    if(dir){
switch(step_number){
  case 0:
  digitalWrite(STEPPER_PIN_1, HIGH);
  digitalWrite(STEPPER_PIN_2, LOW);
  digitalWrite(STEPPER_PIN_3, LOW);
  digitalWrite(STEPPER_PIN_4, LOW);
  break;
  case 1:
  digitalWrite(STEPPER_PIN_1, LOW);
  digitalWrite(STEPPER_PIN_2, HIGH);
  digitalWrite(STEPPER_PIN_3, LOW);
  digitalWrite(STEPPER_PIN_4, LOW);
  break;
  case 2:
  digitalWrite(STEPPER_PIN_1, LOW);
  digitalWrite(STEPPER_PIN_2, LOW);
  digitalWrite(STEPPER_PIN_3, HIGH);
  digitalWrite(STEPPER_PIN_4, LOW);
  break;
  case 3:
  digitalWrite(STEPPER_PIN_1, LOW);
  digitalWrite(STEPPER_PIN_2, LOW);
  digitalWrite(STEPPER_PIN_3, LOW);
  digitalWrite(STEPPER_PIN_4, HIGH);
  break;
} 
  }else{
    switch(step_number){
  case 0:
  digitalWrite(STEPPER_PIN_1, LOW);
  digitalWrite(STEPPER_PIN_2, LOW);
  digitalWrite(STEPPER_PIN_3, LOW);
  digitalWrite(STEPPER_PIN_4, HIGH);
  break;
  case 1:
  digitalWrite(STEPPER_PIN_1, LOW);
  digitalWrite(STEPPER_PIN_2, LOW);
  digitalWrite(STEPPER_PIN_3, HIGH);
  digitalWrite(STEPPER_PIN_4, LOW);
  break;
  case 2:
  digitalWrite(STEPPER_PIN_1, LOW);
  digitalWrite(STEPPER_PIN_2, HIGH);
  digitalWrite(STEPPER_PIN_3, LOW);
  digitalWrite(STEPPER_PIN_4, LOW);
  break;
  case 3:
  digitalWrite(STEPPER_PIN_1, HIGH);
  digitalWrite(STEPPER_PIN_2, LOW);
  digitalWrite(STEPPER_PIN_3, LOW);
  digitalWrite(STEPPER_PIN_4, LOW);
 
  
} 
  }
step_number++;
  if(step_number > 3){
    step_number = 0;
  }
}
