import "./StatsCards.css";

export default function StatsCards() {
    const stats = [
        { title: "Total Slots", value: 12, icon: "bi-grid-fill", color: "primary" },
        { title: "Occupied", value: 10, icon: "bi-car-front", color: "danger" },
        { title: "Available", value: 2, icon: "bi-check-circle", color: "success" },
        { title: "Revenue Today", value: "$720", icon: "bi-cash-stack", color: "warning" }
    ];
return (
    <div className="row">
        {stats.map((s) => (
            <div className="col-md-3 mb-3 statscards" key={s.title}>
                <div className="card shadow-sm p-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h6>{s.title}</h6>
                            <h4 className="fw-bold">{s.value}</h4>
                        </div>
                        <i className={`bi ${s.icon} text-${s.color} fs-3`}></i>
                    </div>
                </div>
            </div>
        ))}
    </div>
);}