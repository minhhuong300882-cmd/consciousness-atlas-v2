import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { AtlasLink, CrossLinkGroup } from "@/lib/atlasLinks";

interface CrossLinkSectionProps {
  groups: CrossLinkGroup[];
}

export function CrossLinkSection({ groups }: CrossLinkSectionProps) {
  const [, navigate] = useLocation();

  if (groups.length === 0) {
    return null;
  }

  return (
    <div className="space-y-8">
      {groups.map((group, idx) => (
        <div key={idx} className="space-y-4">
          <h3 className="text-xl font-bold text-cyan-400">{group.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {group.items.map((item) => (
              <CrossLinkCard key={item.id} item={item} onClick={() => navigate(item.path)} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

interface CrossLinkCardProps {
  item: AtlasLink;
  onClick: () => void;
}

function CrossLinkCard({ item, onClick }: CrossLinkCardProps) {
  const typeColors: Record<string, string> = {
    theory: "from-purple-500/20 to-pink-500/20 border-purple-500/30 hover:border-purple-500/60",
    concept: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30 hover:border-cyan-500/60",
    author: "from-green-500/20 to-emerald-500/20 border-green-500/30 hover:border-green-500/60",
    debate: "from-orange-500/20 to-red-500/20 border-orange-500/30 hover:border-orange-500/60",
    book: "from-yellow-500/20 to-amber-500/20 border-yellow-500/30 hover:border-yellow-500/60",
  };

  const typeBadgeColors: Record<string, string> = {
    theory: "bg-purple-500/20 text-purple-300",
    concept: "bg-cyan-500/20 text-cyan-300",
    author: "bg-green-500/20 text-green-300",
    debate: "bg-orange-500/20 text-orange-300",
    book: "bg-yellow-500/20 text-yellow-300",
  };

  const colorClass = typeColors[item.type] || typeColors.theory;
  const badgeClass = typeBadgeColors[item.type] || typeBadgeColors.theory;

  return (
    <Card
      className={`p-4 cursor-pointer transition-all duration-300 border bg-gradient-to-br ${colorClass}`}
      onClick={onClick}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-xs font-semibold px-2 py-1 rounded ${badgeClass}`}>
              {item.type}
            </span>
          </div>
          <h4 className="font-semibold text-foreground line-clamp-2">{item.title}</h4>
          {item.description && (
            <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{item.description}</p>
          )}
        </div>
        <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
      </div>
    </Card>
  );
}

// Compact version for sidebars
interface CompactCrossLinkProps {
  groups: CrossLinkGroup[];
  maxItems?: number;
}

export function CompactCrossLinks({ groups, maxItems = 3 }: CompactCrossLinkProps) {
  const [, navigate] = useLocation();

  if (groups.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      {groups.map((group, idx) => (
        <div key={idx} className="space-y-2">
          <h4 className="text-sm font-semibold text-cyan-400">{group.title}</h4>
          <div className="space-y-1">
            {group.items.slice(0, maxItems).map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                className="w-full justify-start text-sm text-muted-foreground hover:text-foreground h-auto py-1 px-2"
                onClick={() => navigate(item.path)}
              >
                <ChevronRight className="w-3 h-3 mr-2" />
                {item.title}
              </Button>
            ))}
            {group.items.length > maxItems && (
              <p className="text-xs text-muted-foreground px-2 py-1">
                +{group.items.length - maxItems} more
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
