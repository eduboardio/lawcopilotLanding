import { Container, MUTED, NumberedPoint, PAINT, PaintImage } from "../primitives";

/* 05 Case tracking: the case page with its standing tasks, drawn in HTML. */

/** A case page shared with the team, beside the tasks running on it. Scaled down to fit the panel. */
function CaseMock() {
  return (
    <div role="img" aria-label="A case page for Arjun Reddy v. Kavitha Rao, shared with the team, showing the upcoming hearing and deadline, three pieces of work and twelve documents, beside three tasks running on the case: a daily cause list check, an hourly watch on the client’s email with a drafted reply waiting for approval, and a weekly request for pending documents" style={{ zoom: "0.58", flex: "none", width: "90%", boxSizing: "border-box", fontFamily: "var(--font-open-sans), var(--font-host-grotesk), sans-serif", fontWeight: "400", position: "relative", background: "#ffffff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 30px 56px -28px rgba(15,14,12,0.5), 0 0 0 1px rgba(15,14,12,0.07)" }}>
    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "14px 24px", padding: "22px 26px", borderBottom: "1px solid rgba(15,14,12,0.1)" }}>
    <div>
    <div style={{ fontSize: "11.5px", letterSpacing: "0.08em", color: "#66625b", marginBottom: "6px" }}>CASE</div>
    <div style={{ fontSize: "25px", fontWeight: "550", lineHeight: "1.15", letterSpacing: "-0.02em" }}>Arjun Reddy v. Kavitha Rao</div>
    <div style={{ fontSize: "13.5px", color: "#66625b", marginTop: "4px" }}>O.S. No. 214 of 2024 · III Additional Senior Civil Judge</div>
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
    <span style={{ display: "flex" }}><span style={{ width: "30px", height: "30px", borderRadius: "50%", background: "#f3f1ec", boxShadow: "0 0 0 2px #ffffff", fontSize: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>You</span><span style={{ width: "30px", height: "30px", marginLeft: "-6px", borderRadius: "50%", background: "#dcd7cc", boxShadow: "0 0 0 2px #ffffff", fontSize: "10px", fontWeight: "600", display: "flex", alignItems: "center", justifyContent: "center" }}>SA</span><span style={{ width: "30px", height: "30px", marginLeft: "-6px", borderRadius: "50%", background: "#f3f1ec", boxShadow: "0 0 0 2px #ffffff", fontSize: "10px", fontWeight: "600", display: "flex", alignItems: "center", justifyContent: "center" }}>JR</span></span>
    <span style={{ fontSize: "13.5px", color: "#3f3c37" }}>Shared with your team</span>
    <span style={{ background: "#0f0e0c", color: "#fdfcf8", padding: "9px 15px", borderRadius: "8px", fontSize: "13.5px", fontWeight: "500" }}>Start work</span>
    </div>
    </div>
    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "stretch", gap: "12px", padding: "20px", background: "#ffffff" }}>
    <div style={{ flex: "1 1 230px", minWidth: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
    <div style={{ background: "#ffffff", border: "1px solid rgba(15,14,12,0.16)", boxShadow: "0 6px 16px -8px rgba(15,14,12,0.18)", borderRadius: "10px", padding: "16px", display: "flex", flexDirection: "column", gap: "10px", fontSize: "14.5px" }}>
    <div style={{ fontWeight: "500" }}>Upcoming</div>
    <div><div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "5px" }}><span style={{ padding: "2px 8px", borderRadius: "999px", background: "#fbe9e7", color: "#a3261b", fontSize: "11.5px", fontWeight: "500" }}>Hearing</span><span style={{ fontSize: "12px", fontWeight: "600", color: "#a3261b" }}>14 Nov</span></div><div style={{ lineHeight: "1.4" }}>Arguments on the amendment petition</div></div>
    <div><div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "5px" }}><span style={{ padding: "2px 8px", borderRadius: "999px", background: "#fbe9e7", color: "#a3261b", fontSize: "11.5px", fontWeight: "500" }}>Deadline</span><span style={{ fontSize: "12px", color: "#66625b" }}>18 Nov</span></div><div style={{ lineHeight: "1.4" }}>File the rejoinder</div></div>
    </div>
    <div style={{ background: "#ffffff", border: "1px solid rgba(15,14,12,0.16)", boxShadow: "0 6px 16px -8px rgba(15,14,12,0.18)", borderRadius: "10px", padding: "16px", display: "flex", flexDirection: "column", gap: "11px", fontSize: "14.5px" }}>
    <div style={{ fontWeight: "500" }}>Work <span style={{ color: "#66625b", fontWeight: "400" }}>· 3</span></div>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px" }}><span>Document brief</span><span style={{ padding: "2px 8px", borderRadius: "999px", background: "#e3f3ea", color: "#1c6b45", fontSize: "11.5px", fontWeight: "500", whiteSpace: "nowrap" }}>Full brief</span></div>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px" }}><span>Tabular review · exhibits</span><span style={{ padding: "2px 8px", borderRadius: "999px", border: "1px solid rgba(15,14,12,0.18)", fontSize: "11.5px", fontWeight: "500", whiteSpace: "nowrap" }}>Running</span></div>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px" }}><span>Amendment petition</span><span style={{ padding: "2px 8px", borderRadius: "999px", background: "#fdf1cf", color: "#7a5200", fontSize: "11.5px", fontWeight: "500", whiteSpace: "nowrap" }}>To review</span></div>
    </div>
    <div style={{ background: "#ffffff", border: "1px solid rgba(15,14,12,0.16)", boxShadow: "0 6px 16px -8px rgba(15,14,12,0.18)", borderRadius: "10px", padding: "16px", display: "flex", flexDirection: "column", gap: "8px", fontSize: "14.5px" }}>
    <div style={{ fontWeight: "500" }}>Documents <span style={{ color: "#66625b", fontWeight: "400" }}>· 12</span></div>
    <div>Plaint.pdf</div><div>Written statement.pdf</div><div>Deposition of DW1.pdf</div>
    <div style={{ fontSize: "12px", color: "#66625b" }}>and 9 more</div>
    </div>
    </div>
    <div id="tasks" style={{ flex: "1.8 1 380px", minWidth: "0", background: "#ffffff", border: "1px solid rgba(15,14,12,0.16)", boxShadow: "0 6px 16px -8px rgba(15,14,12,0.18)", borderRadius: "10px", overflow: "hidden", fontSize: "14.5px" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", padding: "14px 16px", borderBottom: "1px solid rgba(15,14,12,0.1)" }}><span style={{ fontWeight: "500" }}>Tasks <span style={{ color: "#66625b", fontWeight: "400" }}>· 3</span></span><span style={{ fontSize: "12px", color: "#66625b" }}>Running on this case</span></div>
    <div style={{ padding: "14px 16px 16px", borderBottom: "1px solid rgba(15,14,12,0.1)" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px", marginBottom: "7px" }}><span style={{ fontSize: "12px", color: "#66625b" }}>Cause list</span><span style={{ padding: "2px 8px", borderRadius: "999px", background: "#e3f3ea", color: "#1c6b45", fontSize: "11.5px", fontWeight: "500", whiteSpace: "nowrap" }}>Active</span></div>
    <div style={{ fontSize: "14.5px", fontWeight: "500", lineHeight: "1.4" }}>Check the cause list for O.S. No. 214 of 2024</div>
    <div style={{ marginTop: "4px", fontSize: "12.5px", color: "#66625b" }}>Every morning at 8:00 · Next run tomorrow, 8:00</div>
    <div style={{ marginTop: "11px", padding: "10px 12px", border: "1px solid rgba(15,14,12,0.1)", borderRadius: "8px", background: "#fbfaf7", fontSize: "13px", lineHeight: "1.45" }}><span style={{ fontWeight: "600" }}>Today, 8:02</span> · Not on today’s list. Next hearing stands at 14 Nov.</div>
    </div>
    <div style={{ padding: "14px 16px 16px", borderBottom: "1px solid rgba(15,14,12,0.1)" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px", marginBottom: "7px" }}><span style={{ fontSize: "12px", color: "#66625b" }}>Inbox</span><span style={{ padding: "2px 8px", borderRadius: "999px", background: "#fdf1cf", color: "#7a5200", fontSize: "11.5px", fontWeight: "500", whiteSpace: "nowrap" }}>Waiting for approval</span></div>
    <div style={{ fontSize: "14.5px", fontWeight: "500", lineHeight: "1.4" }}>Watch the client’s email on this case and draft replies</div>
    <div style={{ marginTop: "4px", fontSize: "12.5px", color: "#66625b" }}>Every hour · Gmail</div>
    <div style={{ marginTop: "11px", border: "1px solid rgba(15,14,12,0.1)", borderRadius: "8px", overflow: "hidden" }}>
    <div style={{ padding: "10px 12px" }}><div style={{ fontSize: "12px", color: "#66625b", marginBottom: "5px" }}>Draft reply · Re: Documents for the rejoinder</div><div style={{ fontSize: "14.5px", lineHeight: "1.5" }}>Thank you for sending the sale deed. Before we file the rejoinder on the 18th, we need two more documents from you…</div></div>
    <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px", padding: "8px 10px", borderTop: "1px solid rgba(15,14,12,0.1)", background: "#fbfaf7" }}><span style={{ padding: "6px 12px", border: "1px solid rgba(15,14,12,0.2)", borderRadius: "7px", background: "#ffffff", fontSize: "12.5px", fontWeight: "500" }}>Discard</span><span style={{ padding: "6px 14px", borderRadius: "7px", background: "#0f0e0c", color: "#fdfcf8", fontSize: "12.5px", fontWeight: "500" }}>Send</span></div>
    </div>
    </div>
    <div style={{ padding: "14px 16px 16px" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px", marginBottom: "7px" }}><span style={{ fontSize: "12px", color: "#66625b" }}>Document collection</span><span style={{ padding: "2px 8px", borderRadius: "999px", background: "#e3f3ea", color: "#1c6b45", fontSize: "11.5px", fontWeight: "500", whiteSpace: "nowrap" }}>Active</span></div>
    <div style={{ fontSize: "14.5px", fontWeight: "500", lineHeight: "1.4" }}>Ask the client for the documents still pending</div>
    <div style={{ marginTop: "4px", fontSize: "12.5px", color: "#66625b" }}>Every Monday at 10:00 · Next run Monday, 10:00</div>
    </div>
    </div>
    </div>
    </div>
  );
}

export function HomeCases() {
  return (
    <Container id="cases" bottom={84} style={{ display: "flex", flexWrap: "wrap", gap: "36px 64px", alignItems: "center" }}>
      <div style={{ order: 2, flex: "2 1 520px", minWidth: 0 }}>
        <div style={{ position: "relative", aspectRatio: "3 / 2", borderRadius: "8px", overflow: "hidden", background: PAINT.charcoal.bg, display: "flex", alignItems: "safe center", justifyContent: "center" }}>
          <PaintImage paint="charcoal" />
          <CaseMock />
        </div>
      </div>
      <div style={{ order: 1, flex: "1 1 360px", minWidth: 0 }}>
        <div style={{ fontSize: "14px", color: MUTED, marginBottom: "16px" }}>
          <span style={{ color: "#0f0e0c", fontWeight: 500, marginRight: "10px" }}>05</span>
          Case tracking
        </div>
        <h3 className="serif" style={{ margin: "0 0 16px", fontSize: "clamp(30px, 3vw, 42px)", lineHeight: 1.08, letterSpacing: "-0.018em", textWrap: "balance" }}>
          It works inside the case, alongside your team
        </h3>
        <p style={{ margin: "0 0 26px", fontSize: "15.5px", lineHeight: 1.65, color: MUTED }}>
          Each case holds its documents, its dates, the work done on it and the tasks that keep running on it. Share it with your team and everyone works from the same file.
        </p>
        <NumberedPoint n={1} title="Tell it what to watch on the case">
          The cause list, the client’s email, the documents still pending. Say what and how often, in your own words.
        </NumberedPoint>
        <NumberedPoint n={2} title="It keeps watch while you’re in court">
          Each task runs on its schedule, without you opening the app.
        </NumberedPoint>
        <NumberedPoint n={3} title="It reports back to the case">
          Your team sees every run. Anything it would send waits for your approval.
        </NumberedPoint>
      </div>
    </Container>
  );
}
