# import the opencv library
import cv2
import base64
import socketio 
  
# define a video capture object
vid = cv2.VideoCapture(0)

# Define Socketio client
sio = socketio.Client()
sio.connect('http://localhost:3000') # TODO: Make server dynamic to config file
  
while(True):
      
    ret, frame = vid.read()                     # get frame from webcam
    res, frame = cv2.imencode('.jpg', frame)    # from image to binary buffer
    data = base64.b64encode(frame)              # convert to base64 format

    # Send data to Websocket
    sio.emit('video-capture', data)

    # the 'q' button is set as the
    # quitting button you may use any
    # desired button of your choice
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
  
# After the loop release the cap object
vid.release()
# Destroy all the windows
cv2.destroyAllWindows()
# Disconnect Websocket connection
sio.disconnect()