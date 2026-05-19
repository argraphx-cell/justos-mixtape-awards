import { useState } from "react";

const winnersData: Record<string, { subtitle: string; venue: string; winners: { category: string; winner: string }[] }> = {
  "1997": {
    subtitle: "3rd Annual",
    venue: "NYC",
    winners: [
      { category: "DJ of the Year", winner: "DJ Clue" },
      { category: "Reggae", winner: "Kool Mike Ski" },
      { category: "Brucie B Award", winner: "Ron G" },
      { category: "Personality", winner: "DJ S&S" },
    ],
  },
  "1999": {
    subtitle: "4th Annual",
    venue: "NYC",
    winners: [
      { category: "DJ of the Year", winner: "DJ Screw" },
      { category: "Best Hip-Hop", winner: "DJ Kay Slay & Dazon" },
      { category: "Brucie B Award", winner: "DJ Doo Wop" },
    ],
  },
  "2001": {
    subtitle: "6th Annual",
    venue: "Apollo Theater NYC",
    winners: [
      { category: "Best DJ", winner: "DJ Kay Slay" },
      { category: "Best Artist", winner: "Jadakiss" },
      { category: "R&B", winner: "DJ Famous" },
      { category: "Female DJ", winner: "Lazy K" },
      { category: "Producer", winner: "Ron G" },
      { category: "Reggae", winner: "Bobby Konders" },
    ],
  },
  "2002": {
    subtitle: "7th Annual",
    venue: "Hammerstein Ballroom NYC",
    winners: [
      { category: "Best DJ", winner: "DJ Kay Slay" },
      { category: "Best Duo", winner: "Kay Slay & Whoo Kid" },
      { category: "Club DJ", winner: "DJ Mister Cee" },
      { category: "New DJ", winner: "DJ EFN" },
    ],
  },
  "2005": {
    subtitle: "9th Annual",
    venue: "NYC",
    winners: [
      { category: "Biggest Winner", winner: "DJ Green Lantern" },
      { category: "Artist of the Year", winner: "Papoose" },
      { category: "Best Underground", winner: "Papoose" },
    ],
  },
  "2006": {
    subtitle: "10th Annual",
    venue: "Apollo Theater NYC",
    winners: [
      { category: "Best DJ", winner: "DJ Drama" },
      { category: "Rookie", winner: "DJ Superstar Jay" },
      { category: "Radio Show", winner: "DJ Whoo Kid" },
      { category: "Lifetime Achievement", winner: "Steve Rifkind" },
    ],
  },
  "2008": {
    subtitle: "11th Annual",
    venue: "NYC",
    winners: [
      { category: "Kayslay Award", winner: "DJ Drama" },
      { category: "Mixtape of the Year", winner: "Gangsta Grillz" },
      { category: "East Coast DJ", winner: "Big Mike" },
      { category: "Radio DJ", winner: "DJ Envy" },
      { category: "Pioneer Award", winner: "Tony Touch" },
      { category: "Dirty South Artist", winner: "Lil Wayne" },
    ],
  },
};

const YEARS = ["1997", "1999", "2001", "2002", "2005", "2006", "2008"];

const MERCH = [
  { name: "Seal Logo Tee", price: "$38.00", tag: "Limited · Black/White" },
  { name: "DJ Of The Year Hoodie", price: "$68.00", tag: "Limited · Black" },
  { name: "Apollo '01 Commemorative Tee", price: "$42.00", tag: "Ceremony Series" },
];

const NAV_LINKS = ["Archive", "Shop", "Leadership", "About Justo"];
const FOOTER_NAV = ["Archive", "Winners", "Shop", "About Justo", "Press"];
const FOOTER_CONNECT = ["Instagram", "Twitter/X", "Submit Missing Info", "Contact"];

export default function Home() {
  const [selectedYear, setSelectedYear] = useState("2001");
  const current = winnersData[selectedYear];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f0ede6]">

      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50 h-[54px] bg-[#0a0a0a] border-b border-[#1e1e1e] flex items-center px-6 gap-8">
        <span className="font-display text-brand-orange text-lg tracking-wider shrink-0">
          THE JUSTO'S MIXTAPE AWARDS
        </span>
        <div className="hidden md:flex flex-1 justify-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="font-body text-sm text-[#888888] hover:text-[#f0ede6] tracking-wider transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
        <button className="ml-auto bg-brand-orange text-white font-body text-sm tracking-widest px-4 py-1.5 shrink-0 hover:opacity-90 transition-opacity">
          SHOP NOW
        </button>
      </nav>

      {/* ── HERO ── */}
      <section className="px-6 py-28 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="font-mono text-xs text-[#888888] tracking-widest uppercase mb-6">
            Est. 1995 · New York City · The Mixtape Era
          </p>
          <h1 className="font-display leading-none mb-6">
            <span className="block text-[68px] sm:text-[80px] md:text-[90px] text-[#f0ede6] tracking-wider">THE JUSTO'S</span>
            <span className="block text-[68px] sm:text-[80px] md:text-[90px] text-brand-orange tracking-wider">MIXTAPE</span>
            <span className="block text-[68px] sm:text-[80px] md:text-[90px] text-[#f0ede6] tracking-wider">AWARDS</span>
          </h1>
          <p className="font-body text-[#888888] text-base leading-relaxed mb-8 max-w-lg">
            Founded by Orpheus 'Justo' Faison in 1995, these awards defined an era — legitimizing
            mixtape culture and honoring the DJs and artists who built hip-hop from the streets up.
            11 ceremonies. 13 years. Forever.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-brand-orange text-white font-body tracking-widest text-sm px-6 py-3 hover:opacity-90 transition-opacity">
              EXPLORE ARCHIVE
            </button>
            <button className="border border-[#1e1e1e] text-[#f0ede6] font-body tracking-widest text-sm px-6 py-3 hover:border-brand-orange transition-colors">
              SHOP MERCH
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="w-[280px] h-[280px] shrink-0 rounded-full bg-[#0d0d0d] border-2 border-dashed border-brand-orange flex items-center justify-center">
            <span className="font-mono text-[#888888] text-sm tracking-widest">Logo Asset</span>
          </div>
          <div className="text-center">
            <p className="font-mono text-xs text-[#888888] tracking-widest uppercase">In Memory Of</p>
            <p className="font-display text-2xl text-[#f0ede6] tracking-wider mt-1">
              Orpheus 'Justo' Faison
            </p>
            <p className="font-mono text-xs text-[#888888] tracking-widest uppercase mt-1">
              Founder · 1995–2005
            </p>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="border-y border-[#1e1e1e] bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            { number: "11", label: "Ceremonies" },
            { number: "13", label: "Years Active" },
            { number: "NYC", label: "Home Base" },
            { number: "∞", label: "The Legacy" },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center py-14 border-r border-[#1e1e1e] last:border-r-0"
            >
              <span className="font-display text-[44px] md:text-[56px] text-brand-orange leading-none">{stat.number}</span>
              <span className="font-mono text-xs text-[#888888] tracking-widest uppercase mt-2">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── WINNERS ARCHIVE ── */}
      <section className="px-6 py-28 max-w-7xl mx-auto">
        <h2 className="font-display text-4xl text-[#f0ede6] tracking-wider mb-8">Winners Archive</h2>
        <div className="flex flex-wrap gap-3 mb-8">
          {YEARS.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`relative font-mono text-sm tracking-widest px-4 pt-2 pb-3 border transition-colors ${
                selectedYear === year
                  ? "border-brand-orange text-brand-orange"
                  : "border-[#1e1e1e] text-[#888888] hover:border-brand-orange hover:text-[#f0ede6]"
              }`}
            >
              {year}
              {selectedYear === year && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-orange" />
              )}
            </button>
          ))}
        </div>
        <p className="font-mono text-xs text-[#888888] tracking-widest uppercase mb-6">
          {current.subtitle} · {current.venue}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {current.winners.map((w, i) => (
            <div key={i} className="bg-[#0d0d0d] border border-[#1e1e1e] p-5">
              <p className="font-mono text-xs text-brand-orange tracking-widest uppercase mb-2">
                {w.category}
              </p>
              <p className="font-body text-lg text-[#f0ede6]">{w.winner}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MERCH ── */}
      <section className="bg-[#0d0d0d] border-y border-[#1e1e1e] px-6 py-28">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl text-[#f0ede6] tracking-wider mb-10">
            Merch & Legacy Drops
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MERCH.map((item, i) => (
              <div key={i} className="border border-[#1e1e1e] bg-[#0a0a0a]">
                <div className="h-56 relative flex items-center justify-center bg-[#0d0d0d] border-b border-[#1e1e1e] overflow-hidden">
                  <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-brand-orange" />
                  <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-brand-orange" />
                  <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-brand-orange" />
                  <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-brand-orange" />
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-full border border-[#2a2a2a] flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full border border-[#222222] flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-brand-orange opacity-50" />
                      </div>
                    </div>
                    <span className="font-mono text-[10px] text-[#333333] tracking-[0.2em] uppercase">No Image</span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="font-body text-lg text-[#f0ede6] mb-1">{item.name}</p>
                  <p className="font-display text-2xl text-brand-orange">{item.price}</p>
                  <p className="font-mono text-xs text-[#888888] tracking-widest uppercase mt-2">{item.tag}</p>
                  <button className="mt-4 w-full border border-brand-orange text-brand-orange font-body text-sm tracking-widest py-2 hover:bg-brand-orange hover:text-white transition-colors">
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section className="px-6 py-28 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="font-display text-5xl text-[#f0ede6] tracking-wider leading-tight mb-6">
            THE TORCH WAS PASSED.
          </h2>
          <p className="font-body text-[#888888] leading-relaxed mb-8">
            After the tragic passing of founder Justo Faison in May 2005, the Awards lived on.
            DJ Slayer carries the legacy as Owner & Chair — recognized by the very legends who
            built the culture.
          </p>
          <blockquote className="border-l-4 border-brand-orange pl-5 mb-8">
            <p className="font-body text-[#f0ede6] italic leading-relaxed">
              "Standing between Kool Herc and Kool DJ Red Alert isn't just a photo — it's a
              statement of where these Awards stand in hip-hop history."
            </p>
          </blockquote>
          <div className="flex gap-4">
            {[
              { name: "Justo Faison", role: "Founder · In Memoriam" },
              { name: "DJ Slayer", role: "Owner & Chair" },
            ].map((person) => (
              <div key={person.name} className="bg-[#0d0d0d] border border-[#1e1e1e] p-4 flex-1">
                <div className="w-10 h-10 rounded-full bg-[#1e1e1e] mb-3" />
                <p className="font-body text-[#f0ede6] text-sm">{person.name}</p>
                <p className="font-mono text-xs text-[#888888] tracking-widest uppercase mt-1">
                  {person.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="border border-[#1e1e1e] bg-[#0d0d0d] aspect-[4/3] flex items-center justify-center mb-4">
            <span className="font-mono text-xs text-[#888888] tracking-widest">[ Photo Placeholder ]</span>
          </div>
          <p className="font-body text-[#f0ede6] text-sm text-center">
            Kool Herc · DJ Slayer · Kool DJ Red Alert
          </p>
          <p className="font-mono text-xs text-[#888888] tracking-widest uppercase text-center mt-1">
            Owner & Chair flanked by hip-hop's founding fathers
          </p>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="border-t border-[#1e1e1e] px-6 py-28 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-display text-5xl text-[#f0ede6] tracking-wider leading-tight mb-6">
            BEFORE STREAMING,<br />THERE WAS THE TAPE.
          </h2>
          <p className="font-body text-[#888888] leading-relaxed mb-8">
            In 1995, Orpheus 'Justo' Faison built infrastructure for the streets. A record
            executive at Nervous Records — home to Black Moon and Smif-N-Wessun — then Atlantic
            Records, where the roster included Aaliyah and Lil' Kim. He understood both sides of
            the industry and chose to build something for the side it ignored.
          </p>
          <button className="font-body text-sm tracking-widest text-brand-orange hover:opacity-75 transition-opacity">
            READ FULL STORY →
          </button>
        </div>

        <div>
          <div className="relative border border-[#1e1e1e] bg-[#0d0d0d] aspect-[4/3] flex items-center justify-center mb-4">
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-brand-orange" />
            <span className="font-mono text-xs text-[#888888] tracking-widest">[ Image Placeholder ]</span>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-brand-orange" />
          </div>
          <p className="font-mono text-xs text-[#888888] tracking-widest uppercase text-center">
            The ceremony tee · NYC 01.14.04
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[#1e1e1e] bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p className="font-display text-2xl text-brand-orange tracking-wider mb-2">
              THE JUSTO'S MIXTAPE AWARDS
            </p>
            <p className="font-mono text-xs text-[#888888] tracking-widest uppercase mb-4">
              Est. NYC 1995 · 11 Ceremonies · 1995–2008
            </p>
            <p className="font-body text-sm text-[#888888] leading-relaxed">
              In memory of Orpheus 'Justo' Faison. Carried forward by DJ Slayer.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs text-[#888888] tracking-widest uppercase mb-4">Navigate</p>
            <ul className="space-y-2">
              {FOOTER_NAV.map((link) => (
                <li key={link}>
                  <a href="#" className="font-body text-sm text-[#888888] hover:text-[#f0ede6] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs text-[#888888] tracking-widest uppercase mb-4">Connect</p>
            <ul className="space-y-2">
              {FOOTER_CONNECT.map((link) => (
                <li key={link}>
                  <a href="#" className="font-body text-sm text-[#888888] hover:text-[#f0ede6] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1e1e1e]">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="font-mono text-xs text-[#888888] tracking-widest">
              © The Justo's Mixtape Awards · All Rights Reserved
            </p>
            <p className="font-mono text-xs text-[#888888] tracking-widest">Est. NYC 1995</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
