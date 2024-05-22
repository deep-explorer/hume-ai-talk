import { Situation } from "@/components/home/Situation";

export default async function Page() {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-3xl font-bold text-center">
        Select a social situation
      </h2>
      <Situation />
    </div>
  );
}
