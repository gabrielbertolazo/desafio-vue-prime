import type { UserType } from "@/types/users.type";

const BASE_URL = "https://jsonplaceholder.typicode.com/";
const API_KEY = import.meta.env.VITE_API_KEY;
const MIN_DELAY = 1000;

async function fetchUsers(): Promise<UserType[]> {
  const delayPromise = new Promise((resolve) => setTimeout(resolve, MIN_DELAY));
  const response = await fetch(`${BASE_URL}/users?limit=10`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "x-api-key": API_KEY,
    },
  });

  const [data] = await Promise.all([response, delayPromise]);
  if (!data.ok) throw new Error("Failed to fetch user list");
  return data.json();
}

export { fetchUsers };
