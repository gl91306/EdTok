import numpy as np
import moviepy.editor as mp
import os
import cv2

def extract_vid_and_audio(video_path, audio_path, temp_vid_path):
  """
  this function is the first function that is run when a video is inputted. It extracts the video and audio portions as seperate files.
  The audio is then stored in the appropriate folder defined by audio_path, and the video is saved temporarily for further processing.
  """

  video_clip = mp.VideoFileClip(video_path) # read video clip
  audio_clip = video_clip.audio # extract audio from video
  
  audio_clip.write_audiofile(audio_path) # write the two clips as seperate files
  video_clip.without_audio().write_videofile(temp_vid_path)

  video_clip.close()
  audio_clip.close()

classroom_name = "test_classroom" # replace classroom name and video name from the inputs from frontend
video_name = "test_video"
folder_path = f"{classroom_name}/{video_name}"

if os.path.exists(folder_path):
  print("classroom and video folder already instantiated")
else:
  os.makedirs(folder_path)

video_path = "video_handler/Download.mp4" # replace this with path to the raw video that is recieved as input from frontend
audio_path = f"{classroom_name}/{video_name}/audio.mp3"
temp_vid_path = f"{classroom_name}/{video_name}/temp_vid.mp4"
stored_vid_path = f"{classroom_name}/{video_name}/stored_vid.mp4"

extract_vid_and_audio(video_path, audio_path, temp_vid_path) # function call

def read_video_to_numpy(video_path):
  """
  This function is the second function that is run when a video is inputted. Right now, the audio is already stored in the
  correct folder, and we now have a video file with no audio. This function converts the video file into a numpy array.
  """
  clip = mp.VideoFileClip(video_path)
  fps = clip.fps
  frames = []
  for frame in clip.iter_frames():
    frames.append(frame[:,:,:3])  # Extract RGB channels only (discard alpha)
  clip.close()
  return np.array(frames), fps

video, fps = read_video_to_numpy(temp_vid_path) # function call
frames, height, width, channel = video.shape

ycbcr_video = np.empty_like(video)

# Convert each frame from RGB to YCbCr
for i in range(video.shape[0]):
    ycbcr_video[i] = cv2.cvtColor(video[i], cv2.COLOR_RGB2YCrCb)

def downsample_channel(channel, factor=4):
    """
    downsample a given channel by a factor of 4
    """
    h, w = channel.shape
    h = (h // factor) * factor
    w = (w // factor) * factor
    channel = channel[:h, :w]

    reshaped = channel.reshape(h // factor, factor, w // factor, factor)

    downsampled = reshaped.mean(axis=(1, 3))

    return downsampled

downsampled_y = np.stack([downsample_channel(ycbcr_video[i][:, :, 0]) for i in range(frames.shape[0])])
downsampled_cb = np.stack([downsample_channel(ycbcr_video[i][:, :, 1]) for i in range(frames.shape[0])])
downsampled_cr = np.stack([downsample_channel(ycbcr_video[i][:, :, 2]) for i in range(frames.shape[0])])

downsampled_ycbcr = np.dstack((downsampled_y, downsampled_cb, downsampled_cr), axis=-1)

rgb_video_array = np.empty([frames, (height//4)*4, (width//4)*4, channel])

for i in range(video.shape[0]):
    ycbcr_video[i] = cv2.cvtColor(video[i], cv2.COLOR_YCrCb2RGB)

os.remove(temp_vid_path)

def numpy_to_video(frames, output_path, fps=fps):
    """
    re-create a video as an mp4 file to store the downsampled video
    """
    height, width, _ = frames[0].shape
    video_clip = mp.ImageSequenceClip(list(frames), fps=fps)
    video_clip.without_audio().write_videofile(output_path)
    video_clip.close()

numpy_to_video(rgb_video_array, stored_vid_path)