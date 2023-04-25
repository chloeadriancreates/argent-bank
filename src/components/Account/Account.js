import "./Account.css";

export default function Account({type, id, balance}) {
    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank {type} (x{id})</h3>
                <p className="account-amount">${balance}</p>
                <p className="account-amount-description">
                    { type === "Credit Card" ? "Current Balance" : "Available Balance" }
                </p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </section>
    );
}