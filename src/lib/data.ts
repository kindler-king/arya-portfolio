export const profile = {
  name: "Arya Sarkar",
  role: "Senior AI Engineer",
  headline: "My work powers AI products — not demos.",
  subhead:
    "Senior AI Engineer building production LLM systems, multi-agent platforms and intelligent software.",
  location: "Kolkata, India",
  email: "aryasarkarwork@gmail.com",
  links: {
    github: "https://github.com/kindler-king",
    linkedin: "https://www.linkedin.com/in/arya-sarkar-78831782/",
    scholar: "https://scholar.google.com/citations?user=vsyHmL0AAAAJ&hl=en",
    resume: "/Arya_Sarkar_Resume.pdf",
  },
  manifesto: [
    "I build AI products that survive production.",
    "I enjoy solving infrastructure problems more than talking about AI.",
    "My focus is systems, not hype.",
  ],
};

export type Project = {
  id: string;
  index: string;
  name: string;
  kind: string;
  problem: string;
  architecture: string;
  impact: string[];
  stack: string[];
  accent: string; // gold | violet | champagne
  url: string;
  linkLabel: string;
  image?: string;
  imagePos?: string; // object-position for the snapshot
};

export const projects: Project[] = [
  {
    id: "kognie",
    index: "01",
    name: "Kognie Graphic Studio",
    kind: "Production AI Platform",
    problem:
      "Studio-grade generation and editing — without juggling a dozen tools and models.",
    architecture:
      "Specialized agents (planner, prompt, generator, critic, editor) collaborate behind an orchestration layer with model routing and evaluation gates.",
    impact: [
      "Shipped 0 → 1 as founding engineer",
      "Multi-provider routing for quality & cost",
      "Agentic critique + refinement loop",
    ],
    stack: ["Multi-Agent", "Image Gen", "Model Routing", "FastAPI", "Python"],
    accent: "gold",
    url: "https://kognie.com",
    linkLabel: "kognie.com",
    image: "/snapshots/kognie-studio.jpg",
    imagePos: "center",
  },
  {
    id: "research-engine",
    index: "02",
    name: "Kognie Research Engine",
    kind: "Multi-Agent RAG for Document Intelligence",
    problem:
      "Enterprise knowledge bases are too large to read, too nuanced for keyword search. Answers needed citations, not vibes.",
    architecture:
      "Retrieval over a vector store feeds an agentic layer — planning, re-ranking, synthesis, evaluation — for grounded conversational search.",
    impact: [
      "Grounded QA across enterprise corpora",
      "Retrieval + re-ranking + evaluation pipeline",
      "Conversational search over private knowledge",
    ],
    stack: ["RAG", "Pinecone", "LangChain", "OpenAI", "PostgreSQL"],
    accent: "violet",
    url: "https://kognie.com/research",
    linkLabel: "kognie.com/research",
    image: "/snapshots/kognie-research.jpg",
    imagePos: "center top",
  },
  {
    id: "translation",
    index: "03",
    name: "Real-Time Speech Translation",
    kind: "Low-Latency Speech-to-Speech",
    problem:
      "Live technical talks needed translation that keeps up with the speaker — not a delayed transcript.",
    architecture:
      "Streaming inference with terminology-aware enhancement, tuned for scientific and educational content at conversational speed.",
    impact: [
      "3–4s latency, human-comparable quality",
      "Terminology-aware for technical lectures",
      "Real-time inference in production",
    ],
    stack: ["Streaming", "Low Latency", "Speech", "Python", "Inference"],
    accent: "champagne",
    url: "https://github.com/kindler-king",
    linkLabel: "github.com/kindler-king",
  },
];

export type TimelineNode = {
  period: string;
  role: string;
  org: string;
  note: string;
  kind: "work" | "research" | "award";
  featured?: boolean;
  tags?: string[];
};

export const timeline: TimelineNode[] = [
  {
    period: "2021 — Present",
    role: "Founding AI Engineer & Backend Lead",
    org: "Docunexus Inc.",
    note: "Lead AI and backend for Kognie — a multi-agent RAG research engine and a creative AI studio, both in production. Own the backend: APIs, agent orchestration, model routing, evaluation and observability. Built it 0 → 1 with a cross-functional team of 5.",
    kind: "work",
    featured: true,
    tags: ["0 → 1", "Team of 5", "Multi-agent", "Backend + AI"],
  },
  {
    period: "2025",
    role: "AI Research Fellow",
    org: "Picampus",
    note: "Low-latency speech-to-speech translation — 3–4s streaming, human-comparable quality.",
    kind: "research",
  },
  {
    period: "2024",
    role: "Summer Research Fellow (OSRE)",
    org: "OSPO · UC Santa Cruz",
    note: "Reproducibility in interactive data systems.",
    kind: "research",
  },
  {
    period: "2022 — 2023",
    role: "Managing & Research Fellow",
    org: "Engineering for Change",
    note: "Led 5 researchers toward the UN SDGs; shipped conversational AI for fintech and education.",
    kind: "research",
  },
  {
    period: "2021",
    role: "Summer Research Fellow",
    org: "MITACS · Waterloo",
    note: "Deep-learning ophthalmic diagnosis at the TEEL Lab.",
    kind: "research",
  },
];

export type SkillNode = {
  label: string;
  group: "core" | "orchestration" | "infra" | "data";
  detail: string;
};

export const skills: SkillNode[] = [
  { label: "Python", group: "core", detail: "The backbone — async services, pipelines, and the glue holding AI systems together." },
  { label: "FastAPI", group: "core", detail: "Production APIs and async processing for AI services." },
  { label: "Flask", group: "core", detail: "Lightweight Python services and internal tooling." },
  { label: "Laravel", group: "core", detail: "PHP backend for full-stack product work." },
  { label: "REST APIs", group: "core", detail: "Clean, versioned API design for AI services." },
  { label: "LLMs", group: "orchestration", detail: "Applied large language models — prompting, routing, evaluation and reliability in production." },
  { label: "RAG", group: "orchestration", detail: "Retrieval, re-ranking and grounded generation over private knowledge bases." },
  { label: "Multi-Agent", group: "orchestration", detail: "Agents that plan, use tools, critique and refine — orchestrated end to end." },
  { label: "LangChain", group: "orchestration", detail: "Chains, tools and retrievers for LLM applications." },
  { label: "LangGraph", group: "orchestration", detail: "Stateful agent graphs for durable multi-step workflows." },
  { label: "Prompt Engineering", group: "orchestration", detail: "Structured prompting and context design for reliable output." },
  { label: "Evaluation", group: "orchestration", detail: "Eval pipelines and tracing to keep AI output reliable and cost-efficient." },
  { label: "OpenAI", group: "orchestration", detail: "Frontier model APIs, used with routing and fallbacks." },
  { label: "Pinecone", group: "data", detail: "Vector search at scale for semantic retrieval and memory." },
  { label: "PostgreSQL", group: "data", detail: "Relational source of truth alongside vector and NoSQL stores." },
  { label: "NoSQL", group: "data", detail: "Document and key-value stores for flexible data." },
  { label: "AWS", group: "infra", detail: "Cloud infrastructure for distributed AI services." },
  { label: "GCP", group: "infra", detail: "Cloud compute and services alongside AWS." },
  { label: "Docker", group: "infra", detail: "Reproducible environments from prototype to production." },
  { label: "CI/CD", group: "infra", detail: "Automated build, test and deploy pipelines." },
  { label: "Linux", group: "infra", detail: "Where the services actually run." },
  { label: "Observability", group: "infra", detail: "Monitoring, tracing and debugging for distributed AI and agent workflows." },
];

export const skillGroups: { id: SkillNode["group"]; label: string }[] = [
  { id: "core", label: "Core & Backend" },
  { id: "orchestration", label: "AI & LLMs" },
  { id: "data", label: "Data & Retrieval" },
  { id: "infra", label: "Infrastructure" },
];

export const publications = [
  {
    year: "2024",
    title:
      "Imbalance-Aware Multimodal Attention-Enabled Latent Space Oversampling for Emotion Recognition",
    venue: "Springer",
  },
  {
    year: "2022",
    title: "COVID-19 Chest X-Ray Detection through Blending Ensemble of CNN Snapshots",
    venue: "Elsevier",
  },
  {
    year: "2022",
    title: "3D Human Action Recognition: Through the Researcher's Eyes",
    venue: "Elsevier",
  },
  {
    year: "2021",
    title:
      "Automated Detection and Diagnosis of Diabetic Retinopathy: A Comprehensive Survey",
    venue: "MDPI",
  },
];

export const awards = [
  { year: "2024", title: "Best Research Paper Award", venue: "CIPR — 6th International Conference" },
  { year: "2020", title: "Best Research Paper Award", venue: "OPTRONIX — 6th International Conference" },
  { year: "2019", title: "Best Startup Award", venue: "Chancellor's Award · UEM Kolkata" },
];
