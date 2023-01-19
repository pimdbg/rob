export default function Video({ data, ...props }) {
    return (
        <img
            alt="video" 
            src={`data:image/jpeg;base64,${data}`} 
            height="400"
        />
    )
}