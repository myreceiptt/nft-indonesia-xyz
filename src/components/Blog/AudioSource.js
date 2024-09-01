export default function AudioSource({ yyy }) {
  return (
    <div>
      <audio className="w-full" controls>
        <source src={yyy} type="audio/mpeg" />
      </audio>
    </div>
  );
}
