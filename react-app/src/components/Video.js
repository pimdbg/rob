export default function Video({ data, ...props }) {
    return (
        <img 
            src={`data:image/jpeg;base64,${data}`} 
            height="500"
        />
    )
}