export default function VideoSource({ xxx }) {
  return (
    <div>
      <video className="aspect-video w-full" controls preload="auto" loop>
        <source src={xxx} type="video/mp4" />
      </video>
    </div>
  );
}
