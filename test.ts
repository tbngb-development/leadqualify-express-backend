async function testVapiKey() {
  const token = "0f0db94f-924f-4097-af4d-e12b6ed8d4fc";

  console.log("Testing token:", token.slice(0, 10) + "...");
  console.log("Token length:", token.length);

  // Test with raw fetch — no SDK
  const response = await fetch("https://api.vapi.ai/assistant", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  console.log("Status:", response.status);
  console.log("Response:", JSON.stringify(data, null, 2));
}

testVapiKey();