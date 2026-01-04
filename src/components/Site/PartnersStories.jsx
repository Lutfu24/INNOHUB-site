import { useEffect, useState, useRef } from "react";
import { getPartners } from "../../services/homeServices";
import { Link } from "react-router-dom";

/* =====================================================
   PREMIUM STRATEGY (FINAL POLISH)
   -----------------------------------------------------
   ✔ Scroll-snap retained (best UX)
   ✔ Vertical scrollbar COMPLETELY hidden
   ✔ Horizontal scrollbar hidden (all browsers)
   ✔ Cleaner spacing, calmer UI
   ✔ Fewer visual noises → more "luxury" feel
===================================================== */

/* =========================
   Utilities
========================= */
const hideScrollbar =
  "scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden";

const ScrollButton = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="hidden md:flex shrink-0 h-12 w-12 items-center justify-center rounded-full bg-white/90 backdrop-blur border border-slate-200 shadow-sm hover:shadow-md hover:border-cyan-400 transition"
  >
    <span className="text-2xl text-slate-600">{children}</span>
  </button>
);

/* =========================
   Partner Card (PREMIUM)
========================= */
const PartnerCard = ({ partner }) => (
  <div className="snap-start shrink-0 w-full h-40 rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200 shadow-sm flex items-center justify-center gap-5 px-6 hover:shadow-md transition">
    <Link to={partner.url}>
      <img
        src={partner.logo}
        alt={partner.name}
        className="max-h-12 max-w-[120px] object-contain opacity-90"
      />
    </Link>
    <Link to={partner.url}>
      <span className="text-slate-500 italic text-sm tracking-wide">
        {partner.name}
      </span>
    </Link>
  </div>
);

/* =========================
   Story Card (PREMIUM)
========================= */
const StoryCard = () => (
  <div className="snap-start shrink-0 w-full sm:w-[500px] h-52 rounded-3xl bg-white/85 backdrop-blur-xl border border-slate-200 p-7 shadow-sm relative hover:shadow-md transition">
    <span className="absolute -top-5 left-5 text-5xl font-serif text-cyan-200 rotate-180">
      ❝
    </span>
    <p className="text-slate-700 italic mt-6 leading-relaxed text-sm">
      Uğur hekayəsi mətni (placeholder)
    </p>
  </div>
);

/* =========================
   MAIN COMPONENT
========================= */
export default function PartnersAndStoriesOnly() {
  const [partners, setPartners] = useState([]);

  const partnerRef = useRef(null);
  const storyRef = useRef(null);

  useEffect(() => {
    (async () => {
      const data = await getPartners();
      setPartners(data || []);
    })();
  }, []);

  const scroll = (ref, dir = 1) => {
    if (!ref.current) return;
    ref.current.scrollBy({
      left: dir * ref.current.offsetWidth * 0.85,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cyan-100/40 to-transparent blur-3xl opacity-60" />

      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* ================= PARTNERS ================= */}
        <section className="mb-28">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 mb-10">
            Partnyorlar
          </h2>

          <div className="flex items-center gap-6">
            <ScrollButton onClick={() => scroll(partnerRef, -1)}>
              ‹
            </ScrollButton>

            <div
              ref={partnerRef}
              className={`flex gap-6 w-full overflow-x-auto snap-x snap-mandatory scroll-smooth ${hideScrollbar}`}
            >
              {partners.map((p, i) => (
                <PartnerCard key={i} partner={p} />
              ))}
            </div>

            <ScrollButton onClick={() => scroll(partnerRef, 1)}>›</ScrollButton>
          </div>
        </section>

        <div className="h-px bg-slate-200 mb-24" />

        {/* ================= STORIES ================= */}
        <section>
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
              Uğur hekayələri
            </h2>
            <p className="text-slate-500 mt-2 text-sm">
              Sən də uğur hekayəni yaz
            </p>
          </div>

          <div className="flex items-center gap-6">
            <ScrollButton onClick={() => scroll(storyRef, -1)}>‹</ScrollButton>

            <div
              ref={storyRef}
              className={`flex gap-6 w-full overflow-x-auto snap-x snap-mandatory scroll-smooth ${hideScrollbar}`}
            >
              {Array.from({ length: 4 }).map((_, i) => (
                <StoryCard key={i} />
              ))}
            </div>

            <ScrollButton onClick={() => scroll(storyRef, 1)}>›</ScrollButton>
          </div>
        </section>
      </div>
    </section>
  );
}
