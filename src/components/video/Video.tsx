export function Video(props) {
  const { image, src, controls } = props
  return (
    <div className="">
      <video
        // crossOrigin=""
        poster={image}
        {...controls}
      >
        <source data-src={src} type="video/mp4" />
      </video>
    </div>
  )
}
