import { useEffect, useRef } from "react";
import { CONCEPTS, CONCEPT_RELATIONSHIPS } from "@/data/concepts";

interface ConceptNetworkProps {
  selectedConcept?: string;
  onConceptClick?: (conceptId: string) => void;
}

export function ConceptNetwork({ selectedConcept, onConceptClick }: ConceptNetworkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const rect = canvas.parentElement?.getBoundingClientRect();
    if (!rect) return;

    canvas.width = rect.width;
    canvas.height = rect.height;

    // Calculate positions using force-directed layout
    const concepts = Object.values(CONCEPTS);
    const nodeRadius = 40;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(canvas.width, canvas.height) / 3;

    // Position nodes in a circle
    const positions: Record<string, { x: number; y: number }> = {};
    concepts.forEach((concept, index) => {
      const angle = (index / concepts.length) * Math.PI * 2;
      positions[concept.id] = {
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle),
      };
    });

    // Draw connections
    ctx.strokeStyle = "rgba(0, 217, 255, 0.2)";
    ctx.lineWidth = 1;

    CONCEPT_RELATIONSHIPS.forEach((rel) => {
      const from = positions[rel.from];
      const to = positions[rel.to];
      // Defensive: only draw if both endpoints exist
      if (from && to && rel.from && rel.to) {
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.stroke();
      }
    });

    // Draw nodes
    concepts.forEach((concept) => {
      // Defensive: validate concept data
      if (!concept || !concept.id || !concept.name) return;
      
      const pos = positions[concept.id];
      if (!pos) return;

      const isSelected = concept.id === selectedConcept;
      const color = isSelected ? "#00D9FF" : "#4B5563";
      const radius = isSelected ? 50 : 40;

      // Node circle
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2);
      ctx.fill();

      // Node border
      ctx.strokeStyle = isSelected ? "#00D9FF" : "rgba(0, 217, 255, 0.5)";
      ctx.lineWidth = isSelected ? 3 : 2;
      ctx.stroke();

      // Node label
      ctx.fillStyle = "#FFFFFF";
      ctx.font = isSelected ? "bold 12px sans-serif" : "11px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // Truncate text if needed
      const text = concept.name.length > 12 ? concept.name.substring(0, 10) + "..." : concept.name;
      ctx.fillText(text, pos.x, pos.y);
    });

    // Draw center label
    ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
    ctx.font = "14px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Concept Network", centerX, centerY);
  }, [selectedConcept]);

  return (
    <div className="w-full h-96 bg-background/50 rounded-lg border border-border overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-pointer"
        onClick={(e) => {
          if (!canvasRef.current || !onConceptClick) return;

          const rect = canvasRef.current.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          const concepts = Object.values(CONCEPTS);
          const centerX = canvasRef.current.width / 2;
          const centerY = canvasRef.current.height / 2;
          const radius = Math.min(canvasRef.current.width, canvasRef.current.height) / 3;

          concepts.forEach((concept, index) => {
            // Defensive: validate concept
            if (!concept || !concept.id) return;
            
            const angle = (index / concepts.length) * Math.PI * 2;
            const nodeX = centerX + radius * Math.cos(angle);
            const nodeY = centerY + radius * Math.sin(angle);
            const distance = Math.sqrt((x - nodeX) ** 2 + (y - nodeY) ** 2);

            if (distance < 50) {
              onConceptClick(concept.id);
            }
          });
        }}
      />
    </div>
  );
}
