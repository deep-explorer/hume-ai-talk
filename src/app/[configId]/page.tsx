import ClientComponent from "@/components/ClientComponent";
import { SituationDescription } from "@/components/situation/SituationDescription";
import { fetchAccessToken } from "@humeai/voice";

export default async function Page() {
  const accessToken = await fetchAccessToken({
    apiKey: String(process.env.HUME_API_KEY),
    clientSecret: String(process.env.HUME_CLIENT_SECRET),
  });

  if (!accessToken) {
    throw new Error();
  }

  return (
    <>
      <ClientComponent accessToken={accessToken} />
      <div className="fixed bottom-28 left-8">
        <SituationDescription />
      </div>
    </>
  );
}
