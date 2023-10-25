type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

async function api(
  endpoint: string,
  method: HttpMethod,
  body?: any
): Promise<Response> {
  const headers = {
    "Content-Type": "application/json",
  };

  const config: RequestInit = {
    method,
    headers,
  };

  if (body && (method === "POST" || method === "PUT")) {
    config.body = JSON.stringify(body);
  }
  console.log(`${process.env.NEXT_PUBLIC_URL_API}/${endpoint}`);
  
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/${endpoint}`, config);
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response;
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
    throw error;
  }
}