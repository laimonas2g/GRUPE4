// /src/utils/api.js

export async function fetchInvoiceFromAPI() {
  const response = await fetch('https://in3.dev/inv/');
  const data = await response.json();
  return data;
}