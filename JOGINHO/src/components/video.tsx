import video_galaxia from '../assets/video_galaxia.mp4';

const BackgroundVideo = () => {
    return (
        <video autoPlay loop muted style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: -1
        }}>
            <source src={video_galaxia} type="video/mp4" />
        </video>
    )
}

export default BackgroundVideo;