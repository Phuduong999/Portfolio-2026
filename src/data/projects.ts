import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "eco-monitoring-platform",
    title: "Eco Monitoring Platform",
    shortDesc: "Real-time environmental data tracking & analysis system",
    fullDesc:
      "A comprehensive environmental monitoring platform that collects, processes, and visualizes real-time ecological data from IoT sensors. Built to support sustainability research and provide actionable insights for environmental decision-making.",
    thumbnail: "/images/projects/eco-thumb.jpg",
    images: ["/images/projects/eco-1.jpg", "/images/projects/eco-2.jpg"],
    techStack: ["React", "Node.js", "IoT", "AWS", "PostgreSQL"],
    category: "Eco & Sustainability",
    featured: true,
    color: "#10b981",
  },
  {
    slug: "ai-research-assistant",
    title: "AI Research Assistant",
    shortDesc: "ML-powered tool for scientific literature analysis",
    fullDesc:
      "An intelligent research assistant leveraging machine learning to analyze, summarize, and cross-reference scientific papers. Helps researchers identify patterns and connections across thousands of publications in seconds.",
    thumbnail: "/images/projects/ai-thumb.jpg",
    images: ["/images/projects/ai-1.jpg", "/images/projects/ai-2.jpg"],
    techStack: ["Python", "TensorFlow", "FastAPI", "React", "Neo4j"],
    category: "AI & Machine Learning",
    featured: true,
    color: "#8b5cf6",
  },
  {
    slug: "smart-agriculture-iot",
    title: "Smart Agriculture IoT",
    shortDesc: "Precision farming system with automated sensor networks",
    fullDesc:
      "An end-to-end precision agriculture solution combining IoT sensor networks, drone imaging, and predictive analytics to optimize crop yields and reduce resource waste. Deployed across multiple farms for real-world testing.",
    thumbnail: "/images/projects/agri-thumb.jpg",
    images: ["/images/projects/agri-1.jpg", "/images/projects/agri-2.jpg"],
    techStack: ["Arduino", "Python", "React Native", "Firebase", "TensorFlow Lite"],
    category: "IoT & Hardware",
    featured: true,
    color: "#f59e0b",
  },
  {
    slug: "biotech-data-pipeline",
    title: "Biotech Data Pipeline",
    shortDesc: "High-throughput genomic data processing platform",
    fullDesc:
      "A scalable data pipeline for processing and analyzing high-throughput genomic sequencing data. Supports multiple sequencing formats and integrates with existing bioinformatics tools for comprehensive genetic analysis.",
    thumbnail: "/images/projects/biotech-thumb.jpg",
    images: ["/images/projects/biotech-1.jpg", "/images/projects/biotech-2.jpg"],
    techStack: ["Python", "Apache Spark", "Docker", "AWS", "Nextflow"],
    category: "Biotech & Research",
    featured: true,
    color: "#ef4444",
  },
];
