# import the opencv library
import cv2
import base64
  
# define a video capture object
vid = cv2.VideoCapture(0)
  
while(True):
      
    ret, frame = vid.read()                     # get frame from webcam
    res, frame = cv2.imencode('.jpg', frame)    # from image to binary buffer
    data = base64.b64encode(frame)              # convert to base64 format
      
    # the 'q' button is set as the
    # quitting button you may use any
    # desired button of your choice
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
  
# After the loop release the cap object
vid.release()
# Destroy all the windows
cv2.destroyAllWindows()