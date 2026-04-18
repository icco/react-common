export function ErrorMessage({
  error,
  message,
}: {
  error: unknown;
  message: string;
}) {
  console.error(error);

  return <aside className="p-6 text-sm text-white bg-red-600">{message}</aside>;
}
