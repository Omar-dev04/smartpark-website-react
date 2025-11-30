import "./RecentEvents.css";   

export default function RecentEvents() {
    const events = [
        { plate: "ABC-1234", zone: "A1", time: "10:32 AM", type: "Entry" },
        { plate: "XZD-8821", zone: "B3", time: "10:20 AM", type: "Exit" },
        { plate: "LMN-1123", zone: "A2", time: "9:55 AM", type: "Entry" },
    ];
    return (
        <table className="custom-table">
            <thead>
                <tr>
                    <th>Plate</th>
                    <th>Zone</th>
                    <th>Time</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {events.map((e, i) => (
                <tr key={i} className={e.type === "Entry" ? "entry-row" : "exit-row"}>
                    <td>{e.plate}</td>
                    <td>{e.zone}</td>
                    <td>{e.time}</td>
                    <td>
                    <span className={`badge ${e.type === "Entry" ? "entry-badge" : "exit-badge"}`}>
                        {e.type}
                    </span>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    );
}