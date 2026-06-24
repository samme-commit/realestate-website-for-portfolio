import { useRef, type MouseEvent } from "react";
import type { Agent } from "../../data/agents";
import "./AgentCard.css";

type AgentCardProps = {
  agent: Agent;
};

function AgentCard({ agent }: AgentCardProps) {
  const cardRef = useRef<HTMLElement | null>(null);

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <article
      ref={cardRef}
      className="agent-card"
      onMouseMove={handleMouseMove}
    >
      <img className="agent-card-image" src={agent.image} alt={agent.name} />

      <div className="agent-card-overlay" />
      <div className="agent-card-noise" />
      <div className="agent-card-shine" />

      <div className="agent-card-content">
        <div className="agent-card-top">
          <span>{agent.area}</span>
          <span>Mäklare</span>
        </div>

        <div className="agent-card-bottom">
          <p>{agent.title}</p>
          <h3>{agent.name}</h3>

          <div className="agent-contact">
            <a href={`tel:${agent.phone.replaceAll(" ", "")}`}>
              {agent.phone}
            </a>
            <a href={`mailto:${agent.email}`}>{agent.email}</a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default AgentCard;