export const apiCall = async (pagination: Object) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const raw = JSON.stringify(pagination);
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };
  try {
    const response = await fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data, "er567uhnm");
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const filterDuplicateRecords = (arr: any, prop: any) => {
  const uniqueMap = new Map();
  arr.forEach((item: any) => uniqueMap.set(item[prop], item));
  return Array.from(uniqueMap.values());
};
