oute.js
export async function GET() {
  const apiKey = process.env.WAKATIME_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: "API key not configured" }), {
      status: 500,
      headers: { "Content-Type":