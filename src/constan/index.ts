export async function dataDestinations() {
  try {
    const data = await fetch(`http://localhost:8888/destinations`);
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
    const data = await fetch(`http://localhost:8888/crew`);
    if (!data.ok) {
      throw new Error("error in result api");
    }
    return data.json();
  } catch {
    throw new Error("error in api");
  }
}
