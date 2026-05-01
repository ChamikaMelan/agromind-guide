import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import {
  FileText, Download, FileCheck2, ExternalLink, Presentation,
  BookOpen, FileSearch,
} from "lucide-react";

export const Route = createFileRoute("/documents")({
  component: DocumentsPage,
});

const docs = [
  {
    icon: FileCheck2,
    label: "01",
    title: "Project Proposal",
    desc: "Initial research proposal covering problem statement, objectives, scope and proposed methodology submitted to the supervisory panel.",
    tag: "Proposal",
    color: "from-emerald-500 to-teal-500",
    link: "https://drive.google.com/drive/folders/1j4ifi9LyJ5G6ndPGMT4USfAlDqSFvjlA",
  },
  {
    icon: Presentation,
    label: "02",
    title: "Progress Presentation – 1",
    desc: "Mid-research review presentation covering datasets collected, baseline models built and preliminary experimental results.",
    tag: "Presentation",
    color: "from-blue-500 to-indigo-500",
    link: "https://drive.google.com/drive/folders/1LYtJl5s--CAW6u8zto1K5bph_HOQHg77",
  },
  {
    icon: BookOpen,
    label: "03",
    title: "Progress Presentation – 2",
    desc: "Late-stage update presentation covering the integrated platform, validation results and field testing outcomes.",
    tag: "Presentation",
    color: "from-violet-500 to-purple-500",
    link: "https://drive.google.com/drive/folders/1RmbBPYih8LlLpkl6HW-w5xCgZu0xuWve",
  },
  {
    icon: FileSearch,
    label: "04",
    title: "Research Paper",
    desc: "Peer-reviewed academic paper detailing the AI/ML methodology, experimental design, and quantitative evaluation of AgroMind.",
    tag: "Research",
    color: "from-orange-500 to-amber-500",
    link: "https://drive.google.com/drive/folders/1QWIFWwgvMbyjd2y6Vd46Wr3XzqTcV5pD",
  },
  {
    icon: FileText,
    label: "05",
    title: "Final Report & Presentation",
    desc: "Complete project write-up and final presentation with full methodology, results, discussion and conclusions.",
    tag: "Final",
    color: "from-rose-500 to-pink-500",
    link: "https://drive.google.com/drive/folders/1AXoKZ7o8qJNTpuqEd0dZiI-TAyG35LrS",
  },
];

function DocumentsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Project Documents"
        title="Documents"
        description="Official documentation submitted across all milestones of the AgroMind research project."
      />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {docs.map((d, i) => (
              <div
                key={d.title}
                className="group bg-gradient-card border border-border rounded-2xl overflow-hidden hover-lift animate-fade-up flex flex-col"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {/* Coloured accent strip */}
                <div className={`h-2 bg-gradient-to-r ${d.color}`} />

                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${d.color} flex items-center justify-center shrink-0 shadow-soft`}
                    >
                      <d.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <span className="inline-block px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-wider uppercase mb-1">
                        {d.tag}
                      </span>
                      <h3 className="font-bold text-base leading-snug">{d.title}</h3>
                    </div>
                    <span className="text-3xl font-black text-muted-foreground/20 leading-none shrink-0">
                      {d.label}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                    {d.desc}
                  </p>

                  <div className="flex gap-3 flex-wrap">
                    <a
                      href={d.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold whitespace-nowrap hover:opacity-90 hover:shadow-glow transition-smooth"
                    >
                      <ExternalLink className="w-4 h-4 shrink-0" />
                      <span>View Document</span>
                    </a>
                    <a
                      href={d.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-primary/40 text-foreground bg-transparent text-sm font-semibold whitespace-nowrap hover:bg-primary hover:text-primary-foreground hover:border-primary transition-smooth"
                    >
                      <Download className="w-4 h-4 shrink-0" />
                      <span>Download</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
