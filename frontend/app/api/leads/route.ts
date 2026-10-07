export async function POST(request: Request) {
  const formData = await request.formData();

  const lead = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  };

  const webhookUrl = process.env.LEAD_WEBHOOK || "";
  if (!webhookUrl) {
    return Response.json(
      { success: false, error: "LEAD_WEBHOOK is not configured" },
      { status: 500 },
    );
  }
  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(lead),
    });

    if (!response.ok) {
      return Response.json(
        {
          success: false,
          error: `n8n returned ${response.status}`,
        },
        { status: 502 },
      );
    }

    return Response.json({
      success: true,
      message: "Lead sent to n8n",
    });
  } catch (error) {
    console.error("n8n request failed:", error);

    return Response.json(
      {
        success: false,
        error: "Could not connect to n8n",
      },
      { status: 502 },
    );
  }
}
