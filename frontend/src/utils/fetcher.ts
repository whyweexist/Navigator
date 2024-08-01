const fetcher = (url: string) =>
  fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, s-maxage=10, stale-while-revalidate=59",
    },
  }).then((res) => res.json());

export default fetcher;
