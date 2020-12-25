const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Promt user to select media stream, pass to video element, then it'll play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // Cath the errors here
        console.log('whoops, do you even know how to code?', error);
    }
}

button.addEventListener('click', async () => {
    // Disbale button
    button.disabled = true;
    // Start Pciture in Picture
    await videoElement.requestPictureInPicture();
    // Reset button
    button.disabled = false;
});

// On load
selectMediaStream();