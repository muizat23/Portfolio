import { useState } from "react";
import { Link } from "react-router-dom";

const PRESETS = [1000, 2000, 5000, 10000, 20000];

function formatNaira(amount) {
  return "₦" + Number(amount).toLocaleString();
}

function BoltIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13 2L4.09 12.96A1 1 0 0 0 5 14.5h5.5L11 22l8.91-10.96A1 1 0 0 0 19 9.5H13.5L13 2z" />
    </svg>
  );
}

export default function ElectricityPayment() {
  const [step, setStep] = useState("form"); // form | confirm | success
  const [meter, setMeter] = useState("");
  const [amount, setAmount] = useState("");
  const [custom, setCustom] = useState("");
  const [history, setHistory] = useState([]);
  const [error, setError] = useState("");

  const selectedAmount = amount || custom;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (meter.length < 6) { setError("Enter a valid meter number (min 6 digits)."); return; }
    if (!selectedAmount || Number(selectedAmount) < 100) { setError("Select or enter an amount (min ₦100)."); return; }
    setError("");
    setStep("confirm");
  };

  const handlePay = () => {
    const tx = {
      id: Date.now(),
      meter,
      amount: Number(selectedAmount),
      date: new Date().toLocaleString("en-GB", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" }),
      token: Math.random().toString(36).substring(2, 18).toUpperCase(),
    };
    setHistory((prev) => [tx, ...prev]);
    setStep("success");
  };

  const handleReset = () => {
    setStep("form");
    setMeter("");
    setAmount("");
    setCustom("");
    setError("");
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 py-8">
      <div className="max-w-md mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-2">
            <span className="text-yellow-400"><BoltIcon /></span>
            <h1 className="text-2xl font-bold text-white">Electricity Pay</h1>
          </div>
          <Link to="/" className="text-sm text-gray-400 hover:text-purple-400 transition border border-gray-700 hover:border-purple-500 px-4 py-2 rounded-full">
            ← Back
          </Link>
        </div>

        {/* Step: Form */}
        {step === "form" && (
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-6 text-white">Buy Electricity</h2>
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Meter Number */}
              <div>
                <label className="text-xs text-gray-500 mb-1.5 block">Meter Number</label>
                <input
                  type="text"
                  placeholder="e.g. 45012367890"
                  value={meter}
                  onChange={(e) => setMeter(e.target.value.replace(/\D/, ""))}
                  maxLength={13}
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-yellow-400 tracking-widest"
                />
              </div>

              {/* Preset Amounts */}
              <div>
                <label className="text-xs text-gray-500 mb-1.5 block">Select Amount</label>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  {PRESETS.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => { setAmount(String(p)); setCustom(""); }}
                      className={`py-2.5 rounded-xl text-sm font-medium border transition ${
                        amount === String(p)
                          ? "bg-yellow-400 text-gray-950 border-yellow-400"
                          : "bg-gray-800 border-gray-700 text-gray-300 hover:border-yellow-400 hover:text-yellow-400"
                      }`}
                    >
                      {formatNaira(p)}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => setAmount("")}
                    className={`py-2.5 rounded-xl text-sm font-medium border transition ${
                      !amount ? "bg-yellow-400 text-gray-950 border-yellow-400" : "bg-gray-800 border-gray-700 text-gray-300 hover:border-yellow-400"
                    }`}
                  >
                    Custom
                  </button>
                </div>

                {!amount && (
                  <input
                    type="number"
                    min="100"
                    placeholder="Enter custom amount"
                    value={custom}
                    onChange={(e) => setCustom(e.target.value)}
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-yellow-400"
                  />
                )}
              </div>

              {error && <p className="text-red-400 text-xs">{error}</p>}

              <button
                type="submit"
                className="w-full py-3 bg-yellow-400 hover:bg-yellow-300 text-gray-950 font-semibold rounded-xl transition"
              >
                Proceed to Pay
              </button>
            </form>
          </div>
        )}

        {/* Step: Confirm */}
        {step === "confirm" && (
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-6 text-white">Confirm Payment</h2>
            <div className="space-y-4 mb-8">
              {[
                { label: "Meter Number", value: meter },
                { label: "Amount", value: formatNaira(selectedAmount) },
                { label: "Service", value: "Prepaid Electricity" },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between text-sm border-b border-gray-800 pb-3">
                  <span className="text-gray-500">{label}</span>
                  <span className="text-white font-medium">{value}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              <button onClick={() => setStep("form")} className="flex-1 py-3 border border-gray-700 hover:border-gray-500 text-gray-400 rounded-xl text-sm transition">
                Edit
              </button>
              <button onClick={handlePay} className="flex-1 py-3 bg-yellow-400 hover:bg-yellow-300 text-gray-950 font-semibold rounded-xl text-sm transition">
                Pay {formatNaira(selectedAmount)}
              </button>
            </div>
          </div>
        )}

        {/* Step: Success */}
        {step === "success" && history[0] && (
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-green-400 mb-1">Payment Successful!</h2>
            <p className="text-gray-500 text-sm mb-6">Your token has been generated</p>

            <div className="bg-gray-800 rounded-xl p-4 mb-6">
              <p className="text-xs text-gray-500 mb-1">Electricity Token</p>
              <p className="text-2xl font-mono font-bold text-yellow-400 tracking-widest">{history[0].token}</p>
            </div>

            <div className="text-sm text-gray-500 space-y-1 mb-8">
              <p>Meter: <span className="text-white">{history[0].meter}</span></p>
              <p>Amount: <span className="text-white">{formatNaira(history[0].amount)}</span></p>
            </div>

            <button onClick={handleReset} className="w-full py-3 bg-yellow-400 hover:bg-yellow-300 text-gray-950 font-semibold rounded-xl transition">
              Make Another Payment
            </button>
          </div>
        )}

        {/* Transaction History */}
        {history.length > 0 && (
          <div className="mt-8 bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-5 text-white">Transaction History</h2>
            <div className="space-y-3">
              {history.map((tx) => (
                <div key={tx.id} className="flex items-center justify-between bg-gray-800 rounded-xl px-4 py-3">
                  <div>
                    <p className="text-sm text-white font-medium">{formatNaira(tx.amount)}</p>
                    <p className="text-xs text-gray-500">Meter: {tx.meter}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-yellow-400 font-mono">{tx.token}</p>
                    <p className="text-xs text-gray-600">{tx.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
