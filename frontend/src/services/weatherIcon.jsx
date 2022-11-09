function weatherIcon(data, folder) {
  return new URL(`../../public/${folder}/${data}.png`, import.meta.url).href;
}
export default weatherIcon;
