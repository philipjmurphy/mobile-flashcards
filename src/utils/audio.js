let soundCache = {}

export async function loadSound(name, soundUri) {
  let sound = new Expo.Audio.Sound()
  soundCache[name] = sound
  try {
    await sound.loadAsync({
      uri: soundUri
    });
  } catch (error) {
    console.log('ERROR: ' + error)
  }
}

export async function playSound(name) {
  try {
    var sound = soundCache[name]
    sound.setPositionAsync(0)
    sound.playAsync()
  } catch (error) {
    console.log('ERROR: ' + error)
  }
}
