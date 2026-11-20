const FILTERS = [
  { value: "all", label: "All" },
  { value: "active", label: "Active" },
  { value: "completed", label: "Completed" },
];

export default function FilterTabs({ currentFilter, counts, onChange, onClearCompleted, hasCompleted }) {
  return (
    <div className="list-toolbar">
      <div className="filter-tabs" role="group" aria-label="Filter tasks">
        {FILTERS.map((filter) => {
          const active = currentFilter === filter.value;
          return (
            <button
              key={filter.value}
              className={`filter-button${active ? " active" : ""}`}
              type="button"
              aria-pressed={active}
              onClick={() => onChange(filter.value)}
            >
              {filter.label} <span>{counts[filter.value]}</span>
            </button>
          );
        })}
      </div>
      <button
        className="clear-button"
        type="button"
        onClick={onClearCompleted}
        disabled={!hasCompleted}
      >
        Clear completed
      </button>
    </div>
  );
}