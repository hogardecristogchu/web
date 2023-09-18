export default function imageLoader({ src, width, quality }) {
  return `https://hogardecristogchu.coop.ar/${src}?w=${width}?q=${
    quality || 75
  }`;
}
