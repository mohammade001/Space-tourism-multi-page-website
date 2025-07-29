export async function dataDestinations() {
  try {
    const data = await fetch(`http://space-tourism-multi-page-website.vercel.app/api/dataDestination`);
    if (!data.ok) {
      throw new Error("error in result api");
    }
    return data.json();
  } catch {
    throw new Error("error in api");
  }
}
export async function dataCrew() {
  try {
    const data = await fetch(`http://space-tourism-multi-page-website.vercel.app/api/dataCrew`);
    if (!data.ok) {
      throw new Error("error in result api");
    }
    return data.json();
  } catch {
    throw new Error("error in api");
  }
}
