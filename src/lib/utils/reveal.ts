export function initReveal() {
  if (typeof window === "undefined") return () => {};

  const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
  if (!items.length) return () => {};

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      }
    },
    {
      threshold: 0,
      rootMargin: "0px 0px 15% 0px",
    }
  );

  items.forEach((el) => io.observe(el));

  return () => io.disconnect();
}
