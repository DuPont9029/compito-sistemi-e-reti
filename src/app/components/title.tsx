export default function Title({ text }: { text: string }) {
  return (
    <div className="py-10">
        <h1 className="text-4xl font-bold text-center text-black dark:text-white">
        {text}
        </h1>
    </div>
  );
}   