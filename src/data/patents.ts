// data/patents.ts
import { Patent } from "./types";

export const patents: Patent[] = [
  // Utility Patent Application (Published - has public URL)
  {
    id: "1",
    number: "US-2024-0378581-A1",
    title: "Method and Apparatus for Handling of Refunds in Association with a Functionally Dynamic Card",
    description: "Method and apparatus for handling of refunds in association with a functionally dynamic card.",
    year: "2024",
    url: "https://patents.justia.com/patent/20240378581",
    type: "US Patent Application",
    status: "Published",
    inventors: ["Dinesh Appavoo"]
  },
  
  // Provisional Patent Application (Filed - NO public URL yet)
  {
    id: "2",
    number: "US 63/961,280",
    applicationNumber: "63/961,280",
    title: "Methods, Systems, Apparatuses, and Devices for Facilitating Performing a Payment Transaction for an Order",
    description: "Payment processing system and method for facilitating secure and efficient transaction processing in retail and e-commerce environments through integrated terminal devices and mobile banking applications.",
    year: "2026",
    filedDate: "January 15, 2026",
    type: "Provisional Patent Application",
    status: "Filed",
    inventors: ["Dinesh Appavoo"]
    // No URL - provisional patents are not publicly searchable until converted to utility patent
  },
  
  // Add more patents here as they're filed/granted
];

// Helper functions
export const getUtilityPatents = () => patents.filter(p => 
  p.type === "US Patent" || 
  p.type === "US Patent Application" || 
  p.type === "International Patent"
);

export const getProvisionalPatents = () => patents.filter(p => 
  p.type === "Provisional Patent Application"
);

export const getPatentById = (id: string) => patents.find(p => p.id === id);