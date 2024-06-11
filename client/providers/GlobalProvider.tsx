import useAuthHandler from "@/service/useAuthHandler";

export default function GlobalProvider() {
  const { hasAuthToken } = useAuthHandler();

  return null;
}
