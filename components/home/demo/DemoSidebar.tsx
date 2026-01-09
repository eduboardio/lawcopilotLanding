// components/home/demo/DemoSidebar.tsx
"use client";
import { memo } from "react";
import { 
  LayoutDashboard, 
  Briefcase, 
  Bot, 
  FileText, 
  BookOpen,
  PanelLeftClose
} from "lucide-react";
import { Logo } from "@/components/logo";

export const DemoSidebar = memo(() => (
  <div className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
    {/* Header */}
    <div className="flex flex-col gap-3 p-4 pb-4 border-b border-sidebar-border/50">
      {/* Toggle Button */}
      <button className="flex items-center justify-start p-2 hover:bg-sidebar-accent rounded-lg transition-colors">
        <PanelLeftClose className="h-4 w-4 text-sidebar-foreground" />
      </button>

      {/* Logo and Brand */}
      <div className="flex flex-col items-center justify-center gap-2">
        <Logo />
        <h1 className="text-lg font-bold text-sidebar-foreground">
          Law Copilot
        </h1>
      </div>

      {/* New Chat Button */}
      <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors shadow-sm">
        <span>New Chat</span>
      </button>
    </div>

    {/* Content */}
    <div className="flex-1 overflow-y-auto">
      {/* Main Section */}
      <div className="p-2">
        <div className="px-3 py-2 text-xs font-semibold text-sidebar-foreground/60 uppercase tracking-wider">
          Main
        </div>
        <div className="space-y-0.5">
          {[
            { icon: LayoutDashboard, label: "Dashboard" },
            { icon: Briefcase, label: "Cases/Suits" },
            { icon: Bot, label: "Tasks" },
            { icon: FileText, label: "My Documents" },
            { icon: BookOpen, label: "Knowledge Base" },
          ].map((item, i) => (
            <button
              key={i}
              className="w-full flex items-center gap-3 px-3 py-2 text-sm text-sidebar-foreground hover:bg-sidebar-accent rounded-lg transition-colors"
            >
              <item.icon className="h-4 w-4 text-sidebar-foreground/70" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Chats Section */}
      <div className="p-2 mt-2">
        <div className="px-3 py-2 text-xs font-semibold text-sidebar-foreground/60 uppercase tracking-wider">
          Recent Chats
        </div>
        <div className="space-y-0.5">
          {[
            "Order VII Rule 11(a) Research",
            "Contract Review Analysis",
            "Legal Notice Draft",
            "Property Dispute Case"
          ].map((chat, i) => (
            <button
              key={i}
              className={`w-full text-left px-3 py-2 text-sm text-sidebar-foreground hover:bg-sidebar-accent rounded-lg transition-colors truncate ${
                i === 0 ? "bg-sidebar-accent" : ""
              }`}
            >
              <span className="font-medium truncate block">{chat}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Cases Section */}
      <div className="p-2 mt-2">
        <div className="px-3 py-2 text-xs font-semibold text-sidebar-foreground/60 uppercase tracking-wider">
          Recent Cases/Suits
        </div>
        <div className="space-y-0.5">
          {[
            "Corporate Acquisition Review",
            "AP Case - 1",
            "Litigation Guidance"
          ].map((caseItem, i) => (
            <button
              key={i}
              className="w-full text-left px-3 py-2 text-sm text-sidebar-foreground hover:bg-sidebar-accent rounded-lg transition-colors truncate"
            >
              <span className="font-medium truncate block">{caseItem}</span>
            </button>
          ))}
        </div>
      </div>
    </div>

    {/* Footer - User Section */}
    <div className="p-2 border-t border-sidebar-border/50">
      <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-sidebar-accent rounded-lg transition-colors">
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
          MN
        </div>
        <div className="flex-1 text-left min-w-0">
          <div className="text-sm font-medium text-sidebar-foreground truncate">
            Manikanta Nath
          </div>
          <div className="text-xs text-sidebar-foreground/60 truncate">
            user@example.com
          </div>
        </div>
      </button>
    </div>
  </div>
));

DemoSidebar.displayName = "DemoSidebar";