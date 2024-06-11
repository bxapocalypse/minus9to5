import video from '../videos/Minus9to5_1440x720_lbr.mp4'

const Video = () => {
  return (
    <div className="loop-container position-relative">
      <div>
        <video
          id="home-hero-video"
          className="img-fluid w-100"
          width="100%"
          controls
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}
export default Video
