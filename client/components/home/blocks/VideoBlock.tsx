export default function VideoBlock() {
  return (
    <section className="py-[100px] m-container relative h-[670px]">
      <iframe
        title="YouTube Video"
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      ></iframe>
    </section>
  )
}
