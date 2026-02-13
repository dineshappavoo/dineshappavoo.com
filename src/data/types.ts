// data/types.ts
// Type definitions for all content

export interface Paper {
  id: string;
  slug: string;
  title: string;
  category: "Aerospace Engineering" | "Computational Biology" | "Financial Technology" | "Other";
  date: string;
  abstract: string;
  abstractPreview?: string;  // Short preview for listing page (2-3 sentences)
  content?: string;  // Full paper content in HTML or markdown
  pdfUrl?: string;   // Link to PDF file
  authors?: string[];
  status: "published" | "in-progress";
}

export interface Patent {
  id: string;
  number: string;
  title: string;
  description: string;
  year: string;
  url?: string; // Optional - only for granted/published utility patents
  type: "US Patent" | "US Patent Application" | "Provisional Patent Application" | "International Patent";
  status?: "Granted" | "Published" | "Filed" | "Pending"; // For better status display
  filedDate?: string; // For provisional patents
  applicationNumber?: string; // For provisional patents
  inventors?: string[]; // Optional: list of inventors
}

export interface Episode {
  slug: string;
  episodeNumber: number;
  title: string;
  description: string;
  duration: string;
  date: string;
  coverEmoji?: string;  // Emoji for cover art (e.g., "🚀")
  spotifyEmbedUrl?: string;
  youtubeEmbedUrl?: string;
  appleEmbedUrl?: string;
  transcript: TranscriptEntry[];
  showNotes?: ShowNote[];
}

export interface TranscriptEntry {
  timestamp: string;
  speaker: string;
  text: string;
}

export interface ShowNote {
  text: string;
  link?: string;
}