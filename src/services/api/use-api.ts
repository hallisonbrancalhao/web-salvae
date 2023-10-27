type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export const apiRequest = async (
  endpoint: string,
  method: HttpMethod,
  body?: any
): Promise<Response> => {
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
  console.log(`${process.env.NEXT_PUBLIC_URL_BASE_AUTH}/${endpoint}`);

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL_BASE_AUTH}/${endpoint}`,
      config
    );
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response;
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
    throw error;
  }
};
