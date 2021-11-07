export async function getSoundOfWord_API(urlAudio: string) {
  let sound = new Audio(urlAudio);
  sound.play();
}
