import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface NetworkVizProps {
  scenarioId: string;
}

const NetworkViz: React.FC<NetworkVizProps> = ({ scenarioId }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = svgRef.current.clientWidth;
    const height = svgRef.current.clientHeight;
    
    // Clear previous
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3.select(svgRef.current)
      .attr("viewBox", [0, 0, width, height]);

    // Data Generation based on Scenario
    let nodes: any[] = [];
    let links: any[] = [];

    if (scenarioId === 'baseline') {
        // Single node, linear
        nodes = [{ id: "Input" }, { id: "LLM" }, { id: "Output" }];
        links = [
            { source: "Input", target: "LLM" },
            { source: "LLM", target: "Output" }
        ];
    } else if (scenarioId === 'swarm') {
        // Decentralized cluster
        nodes = Array.from({ length: 15 }, (_, i) => ({ id: `Agent-${i}`, group: 1 }));
        // Random connections
        for (let i = 0; i < 15; i++) {
            links.push({ source: `Agent-${i}`, target: `Agent-${(i + 1) % 15}` });
            if (Math.random() > 0.5) links.push({ source: `Agent-${i}`, target: `Agent-${(i + 3) % 15}` });
        }
    } else if (scenarioId === 'savant') {
        // Hierarchical / Hub and Spoke with Meta Layer
        const core = ["Meta-Controller", "Architect", "Critic", "Optimizer", "Synthesizer"];
        const workers = Array.from({ length: 10 }, (_, i) => `Subprocess-${i}`);
        
        nodes = [
            ...core.map(id => ({ id, group: 2, radius: 15 })),
            ...workers.map(id => ({ id, group: 3, radius: 5 }))
        ];

        // Fully connect core
        for(let i=0; i<core.length; i++) {
            for(let j=i+1; j<core.length; j++) {
                links.push({ source: core[i], target: core[j], value: 2 });
            }
        }
        // Connect workers to core randomly
        workers.forEach((w, i) => {
            links.push({ source: w, target: core[i % core.length] });
        });
    }

    const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id((d: any) => d.id).distance(scenarioId === 'savant' ? 80 : 50))
      .force("charge", d3.forceManyBody().strength(-200))
      .force("center", d3.forceCenter(width / 2, height / 2));

    const link = svg.append("g")
      .attr("stroke", scenarioId === 'savant' ? "#a855f7" : (scenarioId === 'swarm' ? "#38bdf8" : "#94a3b8"))
      .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke-width", (d: any) => Math.sqrt(d.value || 1));

    const node = svg.append("g")
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5)
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("r", (d: any) => d.radius || 5)
      .attr("fill", (d: any) => {
          if (d.group === 2) return "#a855f7"; // Savant Core
          if (d.group === 3) return "#e879f9"; // Savant Worker
          if (scenarioId === 'swarm') return "#38bdf8";
          return "#94a3b8";
      })
      .call(drag(simulation) as any);

    node.append("title")
      .text((d: any) => d.id);

    simulation.on("tick", () => {
      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);

      node
        .attr("cx", (d: any) => d.x)
        .attr("cy", (d: any) => d.y);
    });

    function drag(simulation: any) {
      function dragstarted(event: any) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
      }

      function dragged(event: any) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
      }

      function dragended(event: any) {
        if (!event.active) simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
      }

      return d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
    }

    return () => {
        simulation.stop();
    };
  }, [scenarioId]);

  return (
    <svg ref={svgRef} className="w-full h-full" style={{ minHeight: '400px' }}></svg>
  );
};

export default NetworkViz;
