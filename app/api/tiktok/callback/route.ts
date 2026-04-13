export async function GET() {
  return new Response(
    JSON.stringify({
      ok: true,
      message: "callback alive",
    }),
    { headers: { "Content-Type": "application/json" } }
  );
}
