// data/papers.ts
import { Paper } from "./types";

export const papers: Paper[] = [
  {
    id: "1",
    slug: "hematwin-digital-twin-human-blood",
    title: "HemaTwin: Artificial Intelligence Based Molecular Digital Twin of Human Blood",
    category: "Computational Biology",
    date: "2026",
    abstract: "Blood is a complex biological system composed of cellular elements, plasma proteins, metabolites, gases, and transient foreign agents such as pathogens. While clinical hematology characterizes blood primarily through cellular and biochemical assays, recent advances in structural biology and artificial intelligence enable molecular-level representation of blood components. In this work, we present a comprehensive framework for cataloging, storing, and comparing blood constituents using established biological databases and AlphaFold 3-based structural prediction. By integrating proteomics, genomics, metabolomics, and pathogen sequence data with three-dimensional structural repositories such as the Protein Data Bank (PDB), we propose a unified digital architecture for constructing a molecular digital twin of human blood. This framework facilitates standardized storage, structural comparison, and computational analysis of blood components for applications in diagnostics, systems biology, and drug discovery.",
    abstractPreview: "Blood is a complex biological system composed of cellular elements, plasma proteins, metabolites, gases, and transient foreign agents. We present a comprehensive framework for cataloging, storing, and comparing blood constituents using AlphaFold 3-based structural prediction...",
    pdfUrl: "/papers/hematwin-digital-twin-human-blood.pdf",
    authors: ["Dinesh Appavoo", "Olivia Levine"],
    status: "published"
  },
  {
    id: "2",
    slug: "hyperx-ffsc-engine-design",
    title: "A Comprehensive Design Journey: HyperX Full-Flow Staged Combustion Engine from Concept to 3D Model",
    category: "Aerospace Engineering",
    date: "2026",
    abstract: "This paper presents a comprehensive design journey for developing a Full-Flow Staged Combustion (FFSC) rocket engine from fundamental concepts to detailed 3D modeling. The FFSC cycle represents one of the most efficient rocket engine architectures, utilizing both fuel-rich and oxidizer-rich preburners to drive turbopumps while achieving optimal propellant combustion. We detail the complete engineering process including thermodynamic cycle analysis, turbopump design, combustion chamber optimization, nozzle geometry, cooling system architecture, and structural integration. The resulting HyperX engine design demonstrates the feasibility of FFSC implementation with modern computational tools and 3D modeling techniques, providing a reference architecture for next-generation reusable launch vehicles.",
    abstractPreview: "This paper presents a comprehensive design journey for developing a Full-Flow Staged Combustion (FFSC) rocket engine from fundamental concepts to detailed 3D modeling. The FFSC cycle represents one of the most efficient rocket engine architectures...",
    pdfUrl: "/papers/hyperx-ffsc-engine-design-from-scratch.pdf",
    authors: ["Dinesh Appavoo"],
    status: "published"
  },
  {
    id: "3",
    slug: "howti-gateway-closed-loop-payments",
    title: "Howti Gateway: A Closed-Loop Instant Payment System for In-Store Retail Transactions",
    category: "Financial Technology",
    date: "2026",
    abstract: "Traditional in-store payment processing through card networks faces significant challenges including high interchange fees (2-4%), settlement delays of 1-2 days, complex integration processes, and security vulnerabilities. This paper presents Howti Gateway, a novel payment system architecture that combines a specialized point-of-sale terminal device with a mobile banking application to enable instant settlements within a closed-loop payment ecosystem. The system reduces interchange fees to 1.6-1.9%, eliminates settlement delays through real-time fund transfers between accounts maintained within the same banking partner, and implements enhanced security through two-factor authentication. We describe the system architecture, payment protocol, economic advantages, and discuss future extensions including integration with FedNow for open-loop instant payments. Our analysis demonstrates that closed-loop payment systems can significantly reduce transaction costs while improving settlement speed and security for retail merchants and consumers.",
    abstractPreview: "Traditional in-store payment processing faces significant challenges including high interchange fees and settlement delays. This paper presents Howti Gateway, a novel closed-loop payment system that reduces fees to 1.6-1.9% and enables instant settlements...",
    pdfUrl: "/papers/howti-hybrid-open-banking.pdf",
    authors: ["Dinesh Appavoo"],
    status: "published"
  },
  
  // Papers in progress - add when ready
  /*
  {
    id: "4",
    slug: "upcoming-paper-1",
    title: "Upcoming Paper Title 1",
    category: "Aerospace Engineering",
    date: "2025",
    abstract: "Brief description of upcoming research paper.",
    abstractPreview: "Brief preview...",
    authors: ["Dinesh Appavoo"],
    status: "in-progress"
  },
  */
];

// Helper functions
export const getPublishedPapers = () => papers.filter(p => p.status === "published");
export const getInProgressPapers = () => papers.filter(p => p.status === "in-progress");
export const getPaperBySlug = (slug: string) => papers.find(p => p.slug === slug);