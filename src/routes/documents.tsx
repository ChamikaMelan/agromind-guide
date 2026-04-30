import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import { FileText, Download, CheckSquare, BookMarked, FileCheck2 } from "lucide-react";

export const Route = createFileRoute("/documents")({
  component: DocumentsPage,
});

const docs = [
  { icon: FileCheck2, title: "Project Charter", desc: "Scope, stakeholders and high-level objectives.", size: "PDF · 1.2 MB" },
  { icon: BookMarked, title: "Proposal Document", desc: "Detailed research proposal submitted to the supervisory panel.", size: "PDF · 3.4 MB" },
  { icon: FileText, title: "Final Report", desc: "Complete write-up of methodology, results and discussion.", size: "PDF · 6.8 MB" },
  { icon: CheckSquare, title: "Checklists", desc: "Submission and evaluation checklists for each milestone.", size: "PDF · 480 KB" },
];

function DocumentsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Project Documents"
        title="Documents"
        description="Official documentation submitted across the AgroMind research project."
      />

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 grid sm:grid-cols-2 gap-6">
          {docs.map((d, i) => (
            <div key={d.title} className="group bg-gradient-card border border-border rounded-2xl p-7 hover-lift animate-fade-up" style={{ animationDelay: `${i * 70}ms` }}>
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-gradient-hero transition-smooth">
                  <d.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-smooth" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{d.title}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{d.size}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-5">{d.desc}</p>
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 hover:shadow-glow transition-smooth">
                <Download className="w-4 h-4" /> Download
              </button>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
