// data/episodes.ts
import { Episode } from "./types";

export const episodes: Episode[] = [
  {
    slug: "episode-0-why-this-podcast-exists",
    episodeNumber: 0,
    title: "Why This Podcast Exists",
    description: "Before we talk about gravity, science, universe, and the future of humanity, I want to explain why this podcast exists at all. We explore long-term thinking, humanity's place in the universe, and our responsibility to the future.",
    duration: "12 min",
    date: "January 2025",
    coverEmoji: "🌍",
    // Update these URLs after uploading to podcast platforms
    spotifyEmbedUrl: "https://open.spotify.com/embed/episode/YOUR-EPISODE-ID",
    youtubeEmbedUrl: "https://www.youtube.com/embed/YOUR-VIDEO-ID",
    appleEmbedUrl: "https://podcasts.apple.com/podcast/YOUR-PODCAST-ID",
    transcript: [
      // INTRODUCTION
      {
        timestamp: "00:00",
        speaker: "Dinesh",
        text: "Hello, and welcome to Dinesh Appavoo's Civilization Beyond Gravity."
      },
      {
        timestamp: "00:05",
        speaker: "Dinesh",
        text: "Before we talk about gravity, science, universe, and the future of humanity, I want to take a moment to explain why this podcast exists at all."
      },
      {
        timestamp: "00:15",
        speaker: "Dinesh",
        text: "If you're listening right now, I want you to pause for just a second and ask yourself a simple question: Where do you think humanity is headed in the future — not tomorrow, not next year, but in 100 years, 1000 years from now."
      },
      {
        timestamp: "00:35",
        speaker: "Dinesh",
        text: "A lot of us do not have time to think at that scale. We have daily responsibilities, career, and other obligations. But outside all of that, we as humanity is a precious thing."
      },
      {
        timestamp: "00:50",
        speaker: "Dinesh",
        text: "We can communicate with each other, understand our own and others' feelings, fall in love. How amazing is that? Isn't it our job to protect this and make it exist longer in the universe?"
      },
      
      // UNIVERSE
      {
        timestamp: "01:10",
        speaker: "Dinesh",
        text: "This universe started 13.8 billion years ago, but modern humans evolved around 200–300 thousand years ago. Compared to the age of the universe, humanity is a tiny fraction."
      },
      {
        timestamp: "01:30",
        speaker: "Dinesh",
        text: "So humanity might be wiped out too — there is no permanent space in this universe unless we make that space. This is what this podcast is about."
      },
      
      // CIVILIZATION BEYOND GRAVITY MEANING
      {
        timestamp: "01:45",
        speaker: "Dinesh",
        text: "The title Civilization Beyond Gravity has two meanings. The first one is literal: Gravity represents Earth — our home planet. Moving beyond gravity means rockets, spaceflight, exploration, and eventually becoming a multi-planet species."
      },
      {
        timestamp: "02:10",
        speaker: "Dinesh",
        text: "But there is a second meaning to it, and it is as important as the first one. Gravity means limits — short-term thinking, fearful decisions, inertia. And we will talk about getting out of these limits and stay happy about the future."
      },
      
      // WHY AM I DOING THIS
      {
        timestamp: "02:35",
        speaker: "Dinesh",
        text: "I'm doing this podcast because I believe humanity needs more long-term thinking. I've spent years working across rockets, biology, healthcare, and systems — and in every domain, I see the same theme: our capabilities are exploding, but our wisdom isn't keeping up."
      },
      {
        timestamp: "03:00",
        speaker: "Dinesh",
        text: "This podcast is my attempt to create a space where we slow down, zoom out, and talk about the future with intention."
      },
      
      // POLITICS
      {
        timestamp: "03:15",
        speaker: "Dinesh",
        text: "This podcast will talk about political decisions. Because politics, at its core, is simply how societies make decisions at scale."
      },
      
      // A MOMENT FOR YOU
      {
        timestamp: "03:30",
        speaker: "Dinesh",
        text: "Before we go further, I want to make this interactive. Take a moment — just a few seconds — and think about this: What do you believe is the biggest threat to humanity in your lifetime?"
      },
      {
        timestamp: "03:50",
        speaker: "Dinesh",
        text: "You don't need to answer out loud. Just notice what comes to mind. That question will return many times in this series."
      },
      
      // WHO THIS PODCAST IS FOR
      {
        timestamp: "04:05",
        speaker: "Dinesh",
        text: "This podcast is for you if: you think deeply about the future, you care about humanity, you believe long-term thinking matters."
      },
      {
        timestamp: "04:20",
        speaker: "Dinesh",
        text: "You don't need a technical background. You don't need to agree with everything I say. You just need curiosity — and a willingness to think beyond the present moment."
      },
      
      // CLOSING
      {
        timestamp: "04:40",
        speaker: "Dinesh",
        text: "We are living in one of the most consequential periods in human history. For the first time, a species on Earth can understand its own challenges — and potentially do something about it."
      },
      {
        timestamp: "05:00",
        speaker: "Dinesh",
        text: "This podcast is a small attempt to explore that responsibility. Thank you for being here."
      },
      {
        timestamp: "05:10",
        speaker: "Dinesh",
        text: "In the upcoming episodes, we'll discuss more about foundational topics including: Survival and the Existential Crisis of the Human Race."
      },
      {
        timestamp: "05:25",
        speaker: "Dinesh",
        text: "I'm Dinesh Appavoo, this is Civilization Beyond Gravity."
      },
      {
        timestamp: "05:40",
        speaker: "Dinesh",
        text: "Visit dineshappavoo.com for the full transcript and upcoming episodes."
      }
    ],
    showNotes: [
      { text: "Full transcript", link: "https://dineshappavoo.com/podcast/episode-0-why-this-podcast-exists" },
      { text: "Hypersona - Rocket propulsion research", link: "https://hyperx.hypersona.space" },
      { text: "Bean - Digital blood twin technology", link: "https://bean.inc" },
    ]
  },
  
  // Episode 1 - Coming Soon
  {
    slug: "episode-1-survival-existential-crisis",
    episodeNumber: 1,
    title: "Survival and the Existential Crisis of the Human Race",
    description: "A deep exploration of the fundamental threats facing humanity and what we must do to ensure our long-term survival as a species.",
    duration: "TBD",
    date: "February 2025",
    coverEmoji: "⚠️",
    transcript: [
      // Add Episode 1 transcript when ready
    ],
    showNotes: [
      // Add Episode 1 show notes when ready
    ]
  },
  
  // Add more episodes here as you create them
];

// Helper functions
export const getEpisodeBySlug = (slug: string) => episodes.find(e => e.slug === slug);
export const getLatestEpisode = () => episodes[0]; // Assuming first is latest
export const getPublishedEpisodes = () => episodes.filter(e => e.transcript.length > 0);