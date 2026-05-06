import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UserDashboard() {
    const navigate = useNavigate();

    const [user] = useState({
        name: "Vinayaka",
        email: "vinayaka@email.com"
    });

    const [trips, setTrips] = useState([]);

    useEffect(() => {
        // Dummy data (later connect backend)
        setTimeout(() => {
            setTrips([
                {
                    id: 1,
                    from: "Bangalore",
                    to: "Delhi",
                    date: "2026-05-20",
                    price: 4500,
                    airline: "IndiGo"
                },
                {
                    id: 2,
                    from: "Mumbai",
                    to: "Chennai",
                    date: "2026-04-10",
                    price: 3200,
                    airline: "Air India"
                }
            ]);
        }, 500);
    }, []);

    return (
        <div style={{
            padding: '60px 0',
            minHeight: '100vh',
            background: 'linear-gradient(to bottom, #0b0e14, #1e293b)'
        }}>
            <div className="container">

                {/* HEADER */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '50px',
                    animation: 'fadeInDown 0.8s ease-out'
                }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>
                            Welcome, {user.name} 👋
                        </h2>
                        <p style={{ color: 'var(--text-muted)' }}>{user.email}</p>
                    </div>

                    <button
                        className="glass"
                        style={{ padding: '12px 24px', borderRadius: '12px', cursor: 'pointer' }}
                        onClick={() => navigate('/')}
                    >
                        🔍 Search Flights
                    </button>
                </div>

                {/* STATS */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '25px',
                    marginBottom: '40px'
                }}>
                    {[
                        { label: "Total Trips", value: trips.length },
                        { label: "Upcoming", value: trips.length },
                        { label: "Saved", value: 0 }
                    ].map((item, i) => (
                        <div key={i} className="glass" style={{
                            padding: '25px',
                            borderRadius: '16px',
                            textAlign: 'center',
                            animation: `fadeInUp 0.6s ease ${i * 0.1}s both`
                        }}>
                            <h3 style={{ fontSize: '2rem', fontWeight: '800' }}>{item.value}</h3>
                            <p style={{ color: 'var(--text-muted)' }}>{item.label}</p>
                        </div>
                    ))}
                </div>

                {/* TRIPS */}
                <div className="glass" style={{
                    padding: '30px',
                    borderRadius: '16px',
                    animation: 'fadeInUp 0.8s ease-out'
                }}>
                    <h3 style={{ marginBottom: '25px', fontSize: '1.5rem' }}>My Trips ✈️</h3>

                    {trips.length === 0 ? (
                        <p style={{ color: 'var(--text-muted)' }}>No trips booked yet.</p>
                    ) : (
                        <div style={{ display: 'grid', gap: '20px' }}>
                            {trips.map((trip, index) => (
                                <div key={trip.id}
                                    style={{
                                        padding: '20px',
                                        border: '1px solid var(--border)',
                                        borderRadius: '12px',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        transition: '0.3s',
                                        animation: `fadeInUp 0.5s ease ${index * 0.1}s both`
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.borderColor = 'var(--primary)';
                                        e.currentTarget.style.transform = 'scale(1.01)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.borderColor = 'var(--border)';
                                        e.currentTarget.style.transform = 'scale(1)';
                                    }}
                                >
                                    <div>
                                        <h4 style={{ fontWeight: '700' }}>
                                            {trip.from} → {trip.to}
                                        </h4>
                                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                                            {trip.airline} • {trip.date}
                                        </p>
                                    </div>

                                    <div style={{ textAlign: 'right' }}>
                                        <p style={{ fontWeight: '800', color: 'var(--accent)' }}>
                                            ₹{trip.price}
                                        </p>
                                        <button
                                            className="btn-primary"
                                            style={{ marginTop: '8px', padding: '8px 16px', borderRadius: '20px' }}
                                            onClick={() => navigate('/booking', { state: { trip } })}
                                        >
                                            View
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* LOGOUT */}
                <div style={{ marginTop: '40px', textAlign: 'center' }}>
                    <button
                        className="glass"
                        style={{ padding: '12px 30px', borderRadius: '50px' }}
                    >
                        Logout
                    </button>
                </div>

            </div>
        </div>
    );
}